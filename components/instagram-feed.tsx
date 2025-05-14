import Image from "next/image";
import { Calendar, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstagramPostProps {
  username: string;
  profilePic?: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  postUrl: string;
}

// Helper function to ensure we're using local images
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
  profilePic,
  imageUrl,
  caption,
  timestamp,
  postUrl,
}: InstagramPostProps) {
  // Format the caption to be shorter if needed
  const shortCaption =
    caption.length > 120 ? caption.substring(0, 120) + "..." : caption;

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Instagram post image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={getLocalImagePath(imageUrl)}
          alt={`Instagram post by ${username}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>

      <div className="p-6">
        {/* Instagram user info */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Instagram className="h-5 w-5 text-[#E1306C]" />
            <span className="font-medium text-gray-900">@{username}</span>
          </div>
          <span className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4" />
            {timestamp}
          </span>
        </div>

        {/* Caption */}
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

// Component to fetch and display instagram posts
export function InstagramFeed({
  username,
  count = 3,
}: {
  username: string;
  count?: number;
}) {
  // Using local images from the public folder
  const placeholderPosts: InstagramPostProps[] = [
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/clubkampioenschappen.jpg",
      caption:
        "Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag. Naast het zwemmen werd ook het traditionele munten duiken georganiseerd.",
      timestamp: "30 maart 2024",
      postUrl: `https://www.instagram.com/patrickderoersopperssg/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/200m-kst.jpg",
      caption:
        "200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland. Deze twee reisden af naar het Optimum Energy Race in Eindhoven.",
      timestamp: "1 april 2024",
      postUrl: `https://www.instagram.com/patrickderoersopperssg/`,
    },
    {
      username: "patrickderoersopperssg",
      imageUrl: "/images/competitie-deel-5.jpg",
      caption:
        "Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het tijd voor de laatste ronde.",
      timestamp: "6 april 2024",
      postUrl: `https://www.instagram.com/patrickderoersopperssg/`,
    },
  ];

  // Return a subset of posts based on the requested count
  const postsToShow = placeholderPosts.slice(0, count);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {postsToShow.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </div>
  );
}
