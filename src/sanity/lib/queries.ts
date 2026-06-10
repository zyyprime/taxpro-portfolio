export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  tags,
  publishedAt,
  "coverImage": coverImage.asset->url,
  readingTime
}`;

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  tags,
  publishedAt,
  "coverImage": coverImage.asset->url,
  readingTime,
  author
}`;

export const blogTagsQuery = `*[_type == "blogPost" && defined(tags)].tags[]`;

export const galleryQuery = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  "image": image.asset->url,
  category,
  description
}`;

export const contactMessagesQuery = `*[_type == "contactMessage"] | order(_createdAt desc) {
  _id,
  name,
  email,
  message,
  replied,
  replyContent,
  _createdAt
}`;

export const pageContentQuery = `*[_type == "pageContent" && pageId == $pageId][0] {
  _id,
  pageId,
  title,
  content
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  _id,
  siteTitle,
  siteDescription,
  seoKeywords,
  socialLinks
}`;
