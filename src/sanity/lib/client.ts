import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

function getClient(token?: string) {
  if (!projectId) {
    return null;
  }
  return createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASULT || "production",
    apiVersion: "2024-01-01",
    useCdn: !token,
    perspective: token ? "previewDrafts" : "published",
    token,
  });
}

export const client = getClient();
export const writeClient = getClient(process.env.SANITY_WRITE_TOKEN);

// Helper to check if Sanity is configured
export function isSanityConfigured(): boolean {
  return !!projectId;
}
