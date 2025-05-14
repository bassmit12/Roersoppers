import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Instagram } from "lucide-react";
import { Footer } from "@/components/footer";
import { InstagramFeed } from "@/components/instagram-feed";
import { NewsCard } from "@/components/news-card";

// Updated news articles with local images
const newsArticles = [
  {
    id: 1,
    title: "Clubkampioenschappen",
    date: "30 Mar 2024",
    category: "Wedstrijden",
    image: "/images/clubkampioenschappen.jpg",
    excerpt:
      "Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag.",
    url: "/nieuws/clubkampioenschappen",
  },
  {
    id: 2,
    title: "200m KST Wedstrijd",
    date: "1 Apr 2024",
    category: "Wedstrijden",
    image: "/images/200m-kst.jpg",
    excerpt:
      "Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland.",
    url: "/nieuws/200m-kst",
  },
  {
    id: 3,
    title: "Competitie Deel 5",
    date: "6 Apr 2024",
    category: "Competitie",
    image: "/images/competitie-deel-5.jpg",
    excerpt:
      "De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het tijd voor de laatste ronde.",
    url: "/nieuws/competitie-deel-5",
  },
  {
    id: 4,
    title: "Aankomende Trainingen",
    date: "15 Apr 2024",
    category: "Training",
    image: "/images/clubkampioenschappen.jpg",
    excerpt:
      "Bekijk het schema voor de aankomende trainingen en bereid je voor op de volgende competitieronde.",
    url: "/nieuws/trainingen-april",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="/images/competitie-deel-5.jpg"
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

      {/* Featured Instagram Post */}
      <section className="container -mt-16 relative z-10">
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/clubkampioenschappen.jpg"
                alt="Featured Instagram post"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex items-center rounded-full bg-[#E1306C]/10 px-3 py-1 text-sm font-medium text-[#E1306C]">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  30 maart 2024
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Clubkampioenschappen
              </h2>
              <p className="mb-6 text-gray-600">
                Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick
                – de Roersoppers plaats in Melick. Het was een super gezellige
                en sportieve middag. Naast het zwemmen werd ook het traditionele
                munten duiken georganiseerd.
              </p>
              <Button
                className="group w-fit bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:opacity-90"
                asChild
              >
                <a
                  href="https://www.instagram.com/patrickderoersopperssg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Volg ons op Instagram
                  <Instagram className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Laatste Nieuws</h2>
          <p className="text-gray-600">
            Bekijk de laatste updates van De Roersoppers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              date={article.date}
              image={article.image}
              description={article.excerpt}
              url={article.url}
            />
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="container py-24">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Instagram Feed</h2>
            <p className="text-gray-600">
              Bekijk de laatste updates van @patrickderoersopperssg
            </p>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <a
              href="https://www.instagram.com/patrickderoersopperssg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              <span>Volg ons</span>
            </a>
          </Button>
        </div>

        {/* Instagram Feed */}
        <InstagramFeed username="patrickderoersopperssg" count={3} />

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8" asChild>
            <a
              href="https://www.instagram.com/patrickderoersopperssg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meer posts bekijken
            </a>
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
