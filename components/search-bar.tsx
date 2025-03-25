import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          className="h-12 w-full rounded-full border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-500 focus-visible:border-[#1d4ed8] focus-visible:ring-1 focus-visible:ring-[#1d4ed8]"
          placeholder="Zoek artikelen..."
        />
      </div>
    </div>
  );
}
