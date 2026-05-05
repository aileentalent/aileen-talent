export type Talent = {
  id: string;
  name: string;
  category: string;
  location: string;
  bio: string;
  photoUrl: string;
  tags: string[];
  featured: boolean;
};

export const CATEGORIES = [
  "All",
  "Brand Ambassador",
  "Hostess",
  "Model",
];

export const talents: Talent[] = [
  {
    id: "1",
    name: "Sophia Reeves",
    category: "Brand Ambassador",
    location: "Las Vegas, NV",
    bio: "Luxury brand specialist with expertise in fashion, beauty, and lifestyle campaigns. A trusted face at major Las Vegas trade shows and product launches.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
    tags: ["Luxury", "Fashion", "Trade Shows"],
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Chen",
    category: "Model",
    location: "Las Vegas, NV",
    bio: "Editorial and commercial model with credits in international advertising campaigns. Experienced in print, digital, and runway work.",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    tags: ["Editorial", "Commercial", "Runway"],
    featured: true,
  },
  {
    id: "3",
    name: "Elena Vasquez",
    category: "Hostess",
    location: "Las Vegas, NV",
    bio: "Bilingual VIP hostess fluent in English and Spanish. Specializes in luxury hospitality, corporate events, and high-profile conventions.",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
    tags: ["VIP", "Bilingual", "Corporate"],
    featured: true,
  },
  {
    id: "4",
    name: "James Okafor",
    category: "Hostess",
    location: "Las Vegas, NV",
    bio: "Professional event host with extensive experience at premier Las Vegas venues, corporate conferences, and brand activations.",
    photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=500&fit=crop&crop=face",
    tags: ["Corporate", "Events", "Las Vegas"],
    featured: false,
  },
  {
    id: "5",
    name: "Isabelle Fontaine",
    category: "Brand Ambassador",
    location: "Las Vegas, NV",
    bio: "Lifestyle brand ambassador with a proven track record in luxury fashion and wellness. Connects brands with their ideal audience authentically.",
    photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face",
    tags: ["Luxury", "Wellness", "Fashion"],
    featured: false,
  },
  {
    id: "6",
    name: "Ryan Nakamura",
    category: "Model",
    location: "Las Vegas, NV",
    bio: "Versatile commercial and fitness model with experience in athletic, lifestyle, and editorial shoots across major markets.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    tags: ["Commercial", "Fitness", "Lifestyle"],
    featured: false,
  },
  {
    id: "7",
    name: "Amara Diallo",
    category: "Brand Ambassador",
    location: "Las Vegas, NV",
    bio: "Dynamic brand ambassador representing fashion and beauty clients at major events. Known for high engagement and a commanding professional presence.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    tags: ["Fashion", "Beauty", "Events"],
    featured: false,
  },
  {
    id: "8",
    name: "Derek Stone",
    category: "Model",
    location: "Las Vegas, NV",
    bio: "Athletic and fitness model with international representation. Known for striking commercial appeal and consistent professionalism on set.",
    photoUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop&crop=face",
    tags: ["Athletic", "Fitness", "Commercial"],
    featured: false,
  },
];
