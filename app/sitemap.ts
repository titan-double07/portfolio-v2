import { MetadataRoute } from "next";
import { links } from "./data";

const url = "https://chisomwebdev.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const sitePages: MetadataRoute.Sitemap = links.map((link) => ({
    url: `${url}${link.url}`,
  }));
  return [...sitePages];
}
