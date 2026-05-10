"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const IMG_TYPES = "image/jpeg,image/jpg,image/png,image/gif,image/heic,image/heif";
const IMG_NO_GIF = "image/jpeg,image/jpg,image/png,image/heic,image/heif";

const schema = z.object({
  firstName:         z.string().min(1, "First name is required"),
  lastName:          z.string().min(1, "Last name is required"),
  cityState:         z.string().min(1, "City & state is required"),
  email:             z.string().email("Valid email is required"),
  phone:             z.string().min(7, "Phone number is required"),
  instagram:         z.string().optional(),
  language:          z.string().min(1, "Language is required"),
  eyeColor:          z.string().min(1, "Eye color is required"),
  hairColor:         z.string().min(1, "Hair color is required"),
  ethnicity:         z.string().min(1, "Ethnicity is required"),
  tattoos:           z.string().min(1, "Please select an option"),
  piercings:         z.string().min(1, "Please select an option"),
  bio:               z.string().min(10, "Bio is required (min 10 characters)"),
  languagesSpoken:   z.string().min(1, "Languages spoken is required"),
  eventsWorked:      z.string().optional(),
  brandsRepresented: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface UploadState {
  preview: string;
  url: string;
  uploading: boolean;
  error: string;
}

const defaultUpload = (): UploadState => ({ preview: "", url: "", uploading: false, error: "" });

type PhotoField = "headshot" | "fullLength" | "eventPhoto";

async function compressImage(file: File, maxPx = 2400, quality = 0.82): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxPx || height > maxPx) {
        if (width > height) { height = Math.round(height * maxPx / width); width = maxPx; }
        else { width = Math.round(width * maxPx / height); height = maxPx; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        resolve(blob ? new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }) : file);
      }, "image/jpeg", quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

async function uploadToCloudinary(file: File): Promise<string> {
  const sigRes = await fetch("/api/upload", { method: "POST" });
  if (!sigRes.ok) throw new Error("Could not get upload signature");
  const { signature, timestamp, cloudName, apiKey, folder } = await sigRes.json();

  const compressed = await compressImage(file);
  const fd = new FormData();
  fd.append("file", compressed);
  fd.append("signature", signature);
  fd.append("timestamp", String(timestamp));
  fd.append("api_key", apiKey);
  fd.append("folder", folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: fd,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message ?? "Upload to Cloudinary failed");
  return data.secure_url as string;
}

function FileUpload({
  label,
  required,
  accept,
  state,
  onChange,
}: {
  label: string;
  required?: boolean;
  accept: string;
  state: UploadState;
  onChange: (s: UploadState) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    onChange({ preview, url: "", uploading: true, error: "" });
    try {
      const url = await uploadToCloudinary(file);
      onChange({ preview, url, uploading: false, error: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      console.error("[upload error]", msg);
      onChange({ preview: "", url: "", uploading: false, error: msg });
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-[#1c1917] mb-1.5">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div
        onClick={() => !state.uploading && inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-5 transition-colors text-center
          ${state.error ? "border-red-400 bg-red-50" : state.url ? "border-[#b8972e]/40 bg-[#faf8f5]" : "border-[#e8ddd0] hover:border-[#b8972e] bg-[#faf8f5] cursor-pointer"}`}
      >
        {state.uploading ? (
          <div className="flex flex-col items-center gap-2 py-2">
            <div className="w-8 h-8 border-2 border-[#b8972e] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-[#78716c]">Uploading…</p>
          </div>
        ) : state.preview ? (
          <div className="flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={state.preview} alt="preview" className="h-24 w-auto rounded-lg object-cover" />
            {state.url && <p className="text-xs text-green-600 font-medium">✓ Uploaded</p>}
            <p className="text-xs text-[#b8972e] underline cursor-pointer">Change photo</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-2">
            <svg className="w-8 h-8 text-[#b8972e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-[#78716c]">Click to upload</p>
            <p className="text-xs text-[#a8a29e]">{accept.replace(/image\//g, "").toUpperCase()}</p>
          </div>
        )}
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleChange} />
      </div>
      {state.error && <p className="mt-1 text-xs text-red-500">{state.error}</p>}
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-[#1c1917] mb-1.5">
      {children}{required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

const inputCls = (error?: boolean) =>
  `w-full px-4 py-2.5 rounded-xl border text-sm text-[#1c1917] bg-white outline-none transition-colors focus:border-[#b8972e] focus:ring-1 focus:ring-[#b8972e]/30 ${error ? "border-red-400" : "border-[#e8ddd0]"}`;

function RadioGroup({ name, options, value, onChange, error }: {
  name: string; options: string[]; value: string; onChange: (v: string) => void; error?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${error ? "ring-1 ring-red-400 rounded-xl p-2" : ""}`}>
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name={name} value={opt} checked={value === opt}
            onChange={() => onChange(opt)} className="accent-[#b8972e] w-4 h-4" />
          <span className="text-sm text-[#1c1917]">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="w-8 h-8 rounded-full bg-[#b8972e] text-white text-sm font-bold flex items-center justify-center shrink-0">{number}</span>
      <h2 className="text-xl font-bold text-[#1c1917]">{title}</h2>
      <div className="flex-1 h-px bg-[#e8ddd0]" />
    </div>
  );
}

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const [photos, setPhotos] = useState<Record<PhotoField, UploadState>>({
    headshot:   defaultUpload(),
    fullLength: defaultUpload(),
    eventPhoto: defaultUpload(),
  });
  const [photoErrors, setPhotoErrors] = useState<Record<PhotoField, string>>({
    headshot: "", fullLength: "", eventPhoto: "",
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tattoos: "", piercings: "" },
  });

  const tattoos  = watch("tattoos");
  const piercings = watch("piercings");

  function setPhoto(field: PhotoField, state: UploadState) {
    setPhotos((prev) => ({ ...prev, [field]: state }));
  }

  const anyUploading = Object.values(photos).some((p) => p.uploading);

  async function onSubmit(data: FormValues) {
    const errs = { headshot: "", fullLength: "", eventPhoto: "" };
    if (!photos.headshot.url)   errs.headshot   = "Headshot photo is required";
    if (!photos.fullLength.url) errs.fullLength = "Full-length photo is required";
    setPhotoErrors(errs);
    if (!photos.headshot.url || !photos.fullLength.url) return;

    setSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          headshotUrl:   photos.headshot.url,
          fullLengthUrl: photos.fullLength.url,
          eventPhotoUrl: photos.eventPhoto.url || null,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-24 px-4">
        <div className="w-16 h-16 rounded-full bg-[#f5edd8] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#b8972e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#1c1917] mb-3">Application Received!</h2>
        <p className="text-[#78716c] text-lg max-w-md mx-auto">
          Thank you for applying! We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-16">

      {/* Section 1: Personal Information */}
      <div>
        <SectionHeading number="1" title="Personal Information" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label required>First Name</Label>
            <input {...register("firstName")} className={inputCls(!!errors.firstName)} placeholder="Jane" />
            <FieldError msg={errors.firstName?.message} />
          </div>
          <div>
            <Label required>Last Name</Label>
            <input {...register("lastName")} className={inputCls(!!errors.lastName)} placeholder="Smith" />
            <FieldError msg={errors.lastName?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label required>City, State of Residence</Label>
            <input {...register("cityState")} className={inputCls(!!errors.cityState)} placeholder="Las Vegas, NV" />
            <FieldError msg={errors.cityState?.message} />
          </div>
          <div>
            <Label required>Email</Label>
            <input {...register("email")} type="email" className={inputCls(!!errors.email)} placeholder="jane@example.com" />
            <FieldError msg={errors.email?.message} />
          </div>
          <div>
            <Label required>Phone</Label>
            <input {...register("phone")} type="tel" className={inputCls(!!errors.phone)} placeholder="(702) 555-0100" />
            <FieldError msg={errors.phone?.message} />
          </div>
          <div>
            <Label>Instagram Username</Label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a8a29e] text-sm">@</span>
              <input {...register("instagram")} className={inputCls() + " pl-8"} placeholder="username" />
            </div>
          </div>
          <div>
            <Label required>Primary Language</Label>
            <input {...register("language")} className={inputCls(!!errors.language)} placeholder="English" />
            <FieldError msg={errors.language?.message} />
          </div>
        </div>
      </div>

      {/* Section 2: Appearance */}
      <div>
        <SectionHeading number="2" title="Appearance" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label required>Eye Color</Label>
            <select {...register("eyeColor")} className={inputCls(!!errors.eyeColor) + " appearance-none"}>
              <option value="">Select…</option>
              {["Blue","Brown","Green","Hazel","Grey","Black","Other"].map(o => <option key={o}>{o}</option>)}
            </select>
            <FieldError msg={errors.eyeColor?.message} />
          </div>
          <div>
            <Label required>Hair Color</Label>
            <select {...register("hairColor")} className={inputCls(!!errors.hairColor) + " appearance-none"}>
              <option value="">Select…</option>
              {["Black","Blonde","Brown","Auburn","Grey","Other"].map(o => <option key={o}>{o}</option>)}
            </select>
            <FieldError msg={errors.hairColor?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label required>Ethnicity</Label>
            <select {...register("ethnicity")} className={inputCls(!!errors.ethnicity) + " appearance-none"}>
              <option value="">Select…</option>
              {["Asian","African-American","Caucasian","Eastern European","East Indian","Hispanic","Middle Eastern","Native American","Pacific Islander","Other"].map(o => <option key={o}>{o}</option>)}
            </select>
            <FieldError msg={errors.ethnicity?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label required>Tattoos</Label>
            <RadioGroup name="tattoos" options={["None","Some (Coverable)","Some (Non-Coverable)","Many"]}
              value={tattoos} onChange={(v) => setValue("tattoos", v, { shouldValidate: true })} error={!!errors.tattoos} />
            <FieldError msg={errors.tattoos?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label required>Piercings</Label>
            <RadioGroup name="piercings" options={["None","Some (Coverable)","Some (Non-Coverable)","Several"]}
              value={piercings} onChange={(v) => setValue("piercings", v, { shouldValidate: true })} error={!!errors.piercings} />
            <FieldError msg={errors.piercings?.message} />
          </div>
        </div>
      </div>

      {/* Section 3: Other */}
      <div>
        <SectionHeading number="3" title="Other" />
        <div className="space-y-5">
          <div>
            <Label required>Bio</Label>
            <textarea {...register("bio")} className={inputCls(!!errors.bio) + " resize-y min-h-[140px]"}
              placeholder="Tell us about your education, special skills, personality, and fun facts…" />
            <FieldError msg={errors.bio?.message} />
          </div>
          <div>
            <Label required>Languages Spoken Fluently</Label>
            <input {...register("languagesSpoken")} className={inputCls(!!errors.languagesSpoken)} placeholder="e.g. English, Spanish" />
            <FieldError msg={errors.languagesSpoken?.message} />
          </div>
          <div>
            <Label>Events / Trade Shows Worked <span className="text-[#a8a29e] font-normal">(optional, up to 20)</span></Label>
            <textarea {...register("eventsWorked")} className={inputCls() + " resize-y min-h-[100px]"}
              placeholder="List events or trade shows you have worked…" />
          </div>
          <div>
            <Label>Brands / Companies Represented <span className="text-[#a8a29e] font-normal">(optional, up to 20)</span></Label>
            <textarea {...register("brandsRepresented")} className={inputCls() + " resize-y min-h-[100px]"}
              placeholder="List brands or companies you have represented…" />
          </div>
        </div>
      </div>

      {/* Section 4: Photos */}
      <div>
        <SectionHeading number="4" title="Photos" />
        <p className="text-sm text-[#78716c] mb-6 -mt-4">Photos upload instantly when selected.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FileUpload label="Headshot" required accept={IMG_TYPES}
              state={photos.headshot} onChange={(s) => setPhoto("headshot", s)} />
            {photoErrors.headshot && <p className="mt-1 text-xs text-red-500">{photoErrors.headshot}</p>}
          </div>
          <div>
            <FileUpload label="Full-Length Photo" required accept={IMG_NO_GIF}
              state={photos.fullLength} onChange={(s) => setPhoto("fullLength", s)} />
            {photoErrors.fullLength && <p className="mt-1 text-xs text-red-500">{photoErrors.fullLength}</p>}
          </div>
          <div>
            <FileUpload label="Additional Photo (preferably event photo)" accept={IMG_NO_GIF}
              state={photos.eventPhoto} onChange={(s) => setPhoto("eventPhoto", s)} />
          </div>
        </div>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">{serverError}</div>
      )}

      <div className="pt-2 pb-8">
        <button type="submit" disabled={submitting || anyUploading}
          className="w-full sm:w-auto px-10 py-3.5 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#2a2a4e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm">
          {anyUploading ? "Uploading photos…" : submitting ? "Submitting…" : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
