import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

export function NewsCard({ title, date, image, description }: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
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
        >
          <span>Lees meer</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
