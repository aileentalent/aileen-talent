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
  "Actor",
  "Model",
  "Voice Artist",
  "Brand Ambassador",
  "Presenter",
  "Influencer",
];

export const talents: Talent[] = [
  {
    id: "1",
    name: "Sophia Reeves",
    category: "Actor",
    location: "Los Angeles, CA",
    bio: "Award-winning actor with 10+ years in film and television. Specializes in drama and thriller genres.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
    tags: ["Film", "TV", "Drama"],
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Chen",
    category: "Model",
    location: "New York, NY",
    bio: "Editorial and commercial model featured in Vogue, GQ, and major ad campaigns worldwide.",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    tags: ["Editorial", "Commercial", "Runway"],
    featured: true,
  },
  {
    id: "3",
    name: "Elena Vasquez",
    category: "Voice Artist",
    location: "Miami, FL",
    bio: "Versatile voice artist with credits in animation, audiobooks, and national advertising campaigns.",
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=face",
    tags: ["Animation", "Commercials", "Narration"],
    featured: true,
  },
  {
    id: "4",
    name: "James Okafor",
    category: "Presenter",
    location: "Chicago, IL",
    bio: "Dynamic TV presenter and live event host with over 500 shows across major networks.",
    photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=500&fit=crop&crop=face",
    tags: ["TV", "Live Events", "Corporate"],
    featured: false,
  },
  {
    id: "5",
    name: "Isabelle Fontaine",
    category: "Brand Ambassador",
    location: "Los Angeles, CA",
    bio: "Lifestyle brand ambassador with a proven track record in luxury fashion and wellness verticals.",
    photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face",
    tags: ["Luxury", "Fashion", "Wellness"],
    featured: false,
  },
  {
    id: "6",
    name: "Ryan Nakamura",
    category: "Actor",
    location: "Los Angeles, CA",
    bio: "Rising star known for action roles in streaming originals. Trained in stunt coordination.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    tags: ["Streaming", "Action", "Comedy"],
    featured: false,
  },
  {
    id: "7",
    name: "Amara Diallo",
    category: "Influencer",
    location: "Atlanta, GA",
    bio: "Fashion and lifestyle influencer with 2M+ followers. Partner brands include Nike, Sephora, and Zara.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    tags: ["Fashion", "Lifestyle", "Social Media"],
    featured: false,
  },
  {
    id: "8",
    name: "Derek Stone",
    category: "Model",
    location: "New York, NY",
    bio: "Fitness and athletic model represented in 30+ countries. Former competitive swimmer.",
    photoUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop&crop=face",
    tags: ["Fitness", "Athletic", "Commercial"],
    featured: false,
  },
];
