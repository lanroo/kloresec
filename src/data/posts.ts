import { Post } from "./types";
import { getAllPosts } from "../utils/posts";

export const posts: Post[] = await getAllPosts();

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
