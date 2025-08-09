import type { MetadataRoute } from "next";
import { config } from "../config";

// Define your robots.txt policy. Returning this object from a file named
// `robots.ts` in the app directory instructs Next.js to generate a
// robots.txt file at the root of your site. See
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
// for more details.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${config.baseUrl}/sitemap.xml`,
  };
}