import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aiverse.pk"; 
  const lastModified = new Date().toISOString();

  // ✅ List of all static paths
  const staticPaths = [
    "", "projects", "pos", "privacy-policy", "blogs", "contact-us",
    "projects/3d-animation"
  ];

  // ✅ Convert static paths to sitemap format
  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified,
  }));

  // ✅ Return sitemap array
  return staticRoutes;
}
