import { Hero } from "@/components/home/hero";
import { BentoGrid } from "@/components/home/bento-grid";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { fetchAllPosts } from "@/sanity/lib/fetch";

export default async function HomePage() {
  const posts = await fetchAllPosts();

  return (
    <>
      <Hero />
      <BentoGrid />
      <FeaturedPosts posts={posts} />
    </>
  );
}
