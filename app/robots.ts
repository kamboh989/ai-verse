import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.aiverse.pk";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api",
        "/create-blog"
        
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
