import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { Footer } from "@/components/footer";

const newsArticles = [
  {
    id: 1,
    title: "Nationale Kampioenschappen Success",
    date: "22 Feb 2024",
    category: "Wedstrijden",
    image:
      "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=800&h=500&fit=crop",
    excerpt:
      "Onze zwemmers hebben uitstekend gepresteerd tijdens de laatste kampioenschappen met meerdere medailles en persoonlijke records.",
  },
  {
    id: 2,
    title: "Nieuwe Trainingstijden Aangekondigd",
    date: "20 Feb 2024",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800&h=500&fit=crop",
    excerpt:
      "Bekijk de nieuwe trainingstijden voor het komende seizoen. Aangepaste tijden voor alle groepen.",
  },
  {
    id: 3,
    title: "Zwemclinic met Olympisch Kampioen",
    date: "18 Feb 2024",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop",
    excerpt:
      "Een unieke kans om te trainen met een Olympisch kampioen. Schrijf je nu in voor deze exclusieve clinic.",
  },
  {
    id: 4,
    title: "Clubkampioenschappen 2024",
    date: "15 Feb 2024",
    category: "Wedstrijden",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=500&fit=crop",
    excerpt:
      "De voorbereidingen voor de clubkampioenschappen zijn in volle gang. Bekijk het programma.",
  },
];

const categories = ["Alle", "Wedstrijden", "Training", "Events", "Nieuws"];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=1800&h=400&fit=crop"
            alt="Swimming news"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Nieuws
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Blijf op de hoogte van het laatste nieuws, evenementen en prestaties
            van De Roersoppers.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container -mt-16 relative z-10">
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=800&h=500&fit=crop"
                alt="Featured news"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Uitgelicht
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  22 Feb 2024
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Nationale Kampioenschappen Success
              </h2>
              <p className="mb-6 text-gray-600">
                Onze zwemmers hebben uitstekend gepresteerd tijdens de laatste
                kampioenschappen. Met meerdere medailles en persoonlijke records
                hebben ze laten zien dat hard werken loont. Een bijzondere
                prestatie waar we als club trots op kunnen zijn.
              </p>
              <Button className="group w-fit bg-[#3b82f6] text-white hover:bg-[#1d4ed8]">
                Lees meer
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container py-24">
        {/* Search and Filter */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar />
          <div className="flex flex-wrap gap-2">
            {["Alle", "Wedstrijden", "Training", "Events", "Nieuws"].map(
              (category) => (
                <Button
                  key={category}
                  variant={category === "Alle" ? "default" : "outline"}
                  className={
                    category === "Alle" ? "bg-[#3b82f6] hover:bg-[#1d4ed8]" : ""
                  }
                  size="sm"
                >
                  {category}
                </Button>
              ),
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {article.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    {article.date}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {article.title}
                </h3>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <Button
                  variant="link"
                  className="group p-0 text-[#1d4ed8] hover:text-[#3b82f6]"
                >
                  Lees meer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8">
            Meer artikelen laden
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Blijf op de hoogte</h2>
            <p className="mb-8 text-blue-100">
              Schrijf je in voor onze nieuwsbrief en ontvang het laatste nieuws
              direct in je inbox.
            </p>
            <div className="flex gap-4">
              <Input
                className="bg-white"
                placeholder="Je e-mailadres"
                type="email"
              />
              <Button className="bg-[#3b82f6] text-white hover:bg-[#1d4ed8]">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
