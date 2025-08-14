"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface InstagramPostProps {
  username: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  postUrl: string;
}

// Helper function to ensure we're using local images when available
const getLocalImagePath = (path: string) => {
  // If the path already points to our local images folder, use it directly
  if (path.startsWith("/images/")) {
    return path;
  }

  // Map specific strings to our local images
  if (path.includes("Clubkampioenschappen")) {
    return "/images/clubkampioenschappen.jpg";
  } else if (path.includes("200m KST")) {
    return "/images/200m-kst.jpg";
  } else if (path.includes("Competitie Deel 5")) {
    return "/images/competitie-deel-5.jpg";
  }

  // Return the original path as fallback
  return path;
};

export function InstagramPost({
  username,
  imageUrl,
  caption,
  // timestamp, // no longer shown
  postUrl,
}: InstagramPostProps) {
  // Format the caption to be shorter if needed
  const shortCaption =
    caption.length > 120 ? caption.substring(0, 120) + "..." : caption;

  const srcToUse = getLocalImagePath(imageUrl);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Instagram post image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={srcToUse}
          alt={`Instagram post by ${username}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      <div className="p-6">
        {/* Caption only */}
        <p className="mb-4 text-gray-600">{shortCaption}</p>

        {/* View on Instagram button */}
        <Button
          variant="link"
          className="group p-0 text-[#1d4ed8] hover:text-[#3b82f6]"
          asChild
        >
          <a href={postUrl} target="_blank" rel="noopener noreferrer">
            Bekijk op Instagram
            <Instagram className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}

// Client component to fetch and display instagram posts
export function InstagramFeed({
  username = "patrickderoersopperssg",
  count = 3,
}: {
  username?: string;
  count?: number;
}) {
  const [posts, setPosts] = useState<InstagramPostProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Placeholder posts for fallback
  const placeholderPosts: InstagramPostProps[] = [
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/clubkampioenschappen.jpg",
      caption:
        "Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag. Naast het zwemmen werd ook het traditionele munten duiken georganiseerd.",
      timestamp: "30 maart 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/200m-kst.jpg",
      caption:
        "200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland. Deze twee reisden af naar het Optimum Energy Race in Eindhoven.",
      timestamp: "1 april 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/competitie-deel-5.jpg",
      caption:
        "Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het tijd voor de laatste ronde.",
      timestamp: "6 april 2024",
      postUrl: `https://www.instagram.com/${username}/`,
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `/api/instagram-posts?username=${encodeURIComponent(
            username
          )}&limit=${count}`
        );
        if (!res.ok) throw new Error("Failed to load Instagram posts");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data as InstagramPostProps[]);
        } else {
          setPosts(placeholderPosts.slice(0, count));
        }
      } catch (e) {
        console.error(e);
        setError("Kon Instagram berichten niet laden. We tonen voorbeelden.");
        setPosts(placeholderPosts.slice(0, count));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, count]);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gray-100 shadow-lg h-64 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error && !posts) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const toRender = posts ?? placeholderPosts.slice(0, count);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {toRender.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </div>
  );
}
