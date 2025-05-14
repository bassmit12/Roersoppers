import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  url?: string;
}

// Helper function to get the correct local image path
const getImagePath = (imagePath: string) => {
  // If it's already a path starting with "/images/", use it directly
  if (imagePath.startsWith("/images/")) {
    return imagePath;
  }

  // Map common titles to specific image files
  if (imagePath.includes("Clubkampioenschappen")) {
    return "/images/clubkampioenschappen.jpg";
  } else if (imagePath.includes("200m KST")) {
    return "/images/200m-kst.jpg";
  } else if (imagePath.includes("Competitie Deel 5")) {
    return "/images/competitie-deel-5.jpg";
  }

  // Return the original path or a fallback
  return imagePath || "/placeholder.svg";
};

export function NewsCard({
  title,
  date,
  image,
  description,
  url,
}: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getImagePath(image)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-blue-600">{date}</time>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button
          variant="link"
          className="group w-fit p-0 text-[#1d4ed8] hover:text-[#1d4ed8] transition-colors flex items-center"
          asChild={!!url}
        >
          {url ? (
            <a href={url}>
              <span>Lees meer</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <>
              <span>Lees meer</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
