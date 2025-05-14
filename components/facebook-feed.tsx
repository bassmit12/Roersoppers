"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
};

type FacebookFeedProps = {
  pageId: string;
  limit?: number;
};

export function FacebookFeed({ pageId, limit = 3 }: FacebookFeedProps) {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // We'll use a server-side API route to fetch posts to keep our access token secure
        const response = await axios.get(
          `/api/facebook-posts?pageId=${pageId}&limit=${limit}`
        );
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching Facebook posts:", err);
        setError("Er is een fout opgetreden bij het laden van Facebook posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [pageId, limit]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Format relative time (like "2 days ago")
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffInDays === 0) return "Vandaag";
    if (diffInDays === 1) return "Gisteren";
    if (diffInDays < 7) return `${diffInDays} dagen geleden`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weken geleden`;
    return `${Math.floor(diffInDays / 30)} maanden geleden`;
  };

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(limit)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-100 shadow-lg h-64 animate-pulse"
          >
            <div className="h-full w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Geen Facebook posts gevonden.
      </div>
    );
  }

  // Helper function to get the correct local image path
  const getLocalImagePath = (imagePath: string) => {
    // If the path already points to our local images folder, use it directly
    if (imagePath.startsWith("/images/")) {
      return imagePath;
    }
    // Map specific strings to our local images (same logic as Instagram)
    if (imagePath.includes("Clubkampioenschappen")) {
      return "/images/clubkampioenschappen.jpg";
    } else if (imagePath.includes("200m KST")) {
      return "/images/200m-kst.jpg";
    } else if (imagePath.includes("Competitie Deel 5")) {
      return "/images/competitie-deel-5.jpg";
    }
    // Return the original path as fallback
    return imagePath;
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          {post.full_picture && (
            <div className="relative h-64 overflow-hidden">
              <Image
                src={getLocalImagePath(post.full_picture)}
                alt="Facebook post"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
                <span className="font-medium">Facebook</span>
              </div>
              <time className="text-sm text-gray-500">
                {formatDate(post.created_time)}
              </time>
            </div>
            {post.message && (
              <p className="mb-4 text-gray-600">
                {post.message.length > 150
                  ? `${post.message.substring(0, 150)}...`
                  : post.message}
              </p>
            )}
            <Button
              variant="link"
              className="group w-fit p-0 text-[#1d4ed8] hover:text-[#1d4ed8] transition-colors flex items-center"
              asChild
            >
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Bekijk op Facebook</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
