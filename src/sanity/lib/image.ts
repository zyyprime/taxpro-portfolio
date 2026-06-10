import imageUrlBuilder from "@sanity/image-url";
import { client, isSanityConfigured } from "./client";

let builder: ReturnType<typeof imageUrlBuilder>;

if (isSanityConfigured() && client) {
  builder = imageUrlBuilder(client);
}

type SanityImageSource = string | { asset: { _ref: string } };

export function urlFor(source: SanityImageSource) {
  if (!isSanityConfigured() || !client || !builder) return null;
  return builder.image(source);
}
