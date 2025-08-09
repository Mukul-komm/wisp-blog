import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Business",
    tag: "business",
    description: "Detailed analysis of business strategies and its operations",
  },
  {
    label: "Geopolitics",
    tag: "geopolitics",
    description: "Updates and detailed analysis on the geopolitics.",
  },
  {
    label: "Startups",
    tag: "startup",
    description: "Spotlight on innovative AI startups transforming industries.",
  },
  
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://msarden.in";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "a36dcfa7-692f-4a0c-aa5d-1c60d49c770d",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Mukul Blogs",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Blogs",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Welcome to a space where we demystify the complex worlds of Business, VC, and Geopolitics",
  categories,
};
