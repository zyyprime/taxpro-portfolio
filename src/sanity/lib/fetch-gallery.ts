import { client, isSanityConfigured } from "./client";
import { galleryQuery } from "./queries";

export async function fetchGallery() {
  if (!isSanityConfigured() || !client) return [];
  try {
    return await client.fetch(galleryQuery);
  } catch {
    return [];
  }
}
