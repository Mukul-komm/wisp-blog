import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Business Strategies",
    tag: "business-strategies",
    description: "Detailed analysis of business strategies and its operations",
  },
  {
    label: "Geopolitics",
    tag: "geopolitics",
    description: "Updates and detailed analysis on the geopolitics.",
  },
  {
    label: "Jobs",
    tag: "jobs",
    description: "Explore AI job trends and opportunities shaping a brighter future.",
  },
  {
    label: "Startups",
    tag: "startup",
    description: "Spotlight on innovative AI startups transforming industries.",
  },
  
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
