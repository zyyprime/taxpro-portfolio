import { Hero } from "@/components/home/hero";
import { BentoGrid } from "@/components/home/bento-grid";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <BentoGrid />
      <FeaturedPosts posts={posts} />
    </>
  );
}
