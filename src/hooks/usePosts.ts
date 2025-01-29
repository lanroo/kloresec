import { useState, useEffect, useMemo } from "react";
import { Post } from "../data/types";
import { getAllPosts } from "../utils/posts";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setError(null);
    } catch {
      setError("Erro ao carregar os posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Ordenar posts por data usando useMemo para melhorar performance
  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [posts]);

  return {
    posts: sortedPosts,
    loading,
    error,
    refresh: fetchPosts,
  };
}
