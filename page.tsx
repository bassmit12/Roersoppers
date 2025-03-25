import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Medal, Timer, Users } from "lucide-react";
import { NewsCard } from "@/components/news-card";
import { StatsCard } from "@/components/stats-card";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/premium_photo-1664475361436-e37f6f2ba407.jpg-5GWvuO9rMDuDmkqzji71uEqFoE6PAT.jpeg"
            alt="Swimming background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
        <div className="container relative z-10 py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                De Roersoppers
                <span className="mt-2 block text-2xl font-medium text-blue-400 sm:text-3xl">
                  Zwemmen met passie
                </span>
              </h1>
              <p className="mb-8 max-w-lg text-lg text-blue-100">
                Join onze zwemfamilie en ontdek de vreugde van competitief
                zwemmen in een ondersteunende omgeving.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button className="h-16 px-12 text-2xl font-semibold bg-[#1d4ed8] text-white hover:bg-[#1d4ed8] transition-colors flex items-center">
                  Word Lid
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  className="h-16 px-12 text-2xl font-semibold border-2 border-white text-white hover:bg-white/20 transition-colors"
                >
                  Training Schema
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roersoppers-logo-menubalk-29mVywuBeVxMaovqkJrVBRRQrn6rSa.png"
                alt="Roersoppers Logo"
                width={500}
                height={500}
                className="absolute right-0 top-1/2 -translate-y-1/2 transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 container z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Actieve Leden" value="200+" icon={Users} />
          <StatsCard
            title="Trainingsuren"
            value="20+"
            subtitle="per week"
            icon={Timer}
          />
          <StatsCard
            title="Wedstrijden"
            value="30+"
            subtitle="per jaar"
            icon={Calendar}
          />
          <StatsCard
            title="Medailles"
            value="500+"
            subtitle="gewonnen"
            icon={Medal}
          />
        </div>
      </section>

      {/* Training Groups Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Training voor elk niveau
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Recreatief",
                description:
                  "Voor zwemmers die willen trainen voor plezier en fitness",
                image:
                  "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=800&h=600&fit=crop",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Wedstrijd",
                description: "Voor competitieve zwemmers die willen excelleren",
                image:
                  "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop",
                color: "from-blue-600 to-blue-800",
              },
              {
                title: "Masters",
                description:
                  "Voor ervaren zwemmers die willen blijven presteren",
                image:
                  "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
                color: "from-blue-800 to-blue-950",
              },
            ].map((group, i) => (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg"
                style={{ backgroundColor: "#000" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={group.image || "/placeholder.svg"}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${group.color} mix-blend-multiply opacity-90`}
                  />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{group.title}</h3>
                  <p className="mb-4 text-blue-100">{group.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white backdrop-blur hover:bg-white/20"
                  >
                    Meer Info
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Laatste Nieuws
            </h2>
            <Button variant="outline">Alle Nieuws</Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              title="Nationale Kampioenschappen Success"
              date="22 Feb 2024"
              image="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=800&h=500&fit=crop"
              description="Onze zwemmers hebben uitstekend gepresteerd tijdens de laatste kampioenschappen..."
            />
            <NewsCard
              title="Nieuwe Trainingstijden"
              date="20 Feb 2024"
              image="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800&h=500&fit=crop"
              description="Bekijk de nieuwe trainingstijden voor het komende seizoen..."
            />
            <NewsCard
              title="Zwemclinic met Olympisch Kampioen"
              date="18 Feb 2024"
              image="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop"
              description="Een unieke kans om te trainen met een Olympisch kampioen..."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-blue-900 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Klaar om te beginnen?
            </h2>
            <p className="mb-8 text-blue-200">
              Word lid van De Roersoppers en begin je zwemavontuur vandaag nog.
            </p>
            <div className="flex justify-center">
              <Button className="h-16 px-12 text-2xl font-semibold bg-[#1d4ed8] text-white hover:bg-[#1d4ed8] transition-colors flex items-center">
                Word Lid
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roersoppers-logo-menubalk-29mVywuBeVxMaovqkJrVBRRQrn6rSa.png"
                alt="Roersoppers Logo"
                width={120}
                height={120}
                className="mb-4"
              />
              <p className="text-sm">
                De zwemvereniging voor iedereen in Roermond en omgeving.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Wedstrijden
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Nieuws
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2">
                <li>Zwembad De Roerdomp</li>
                <li>Achilleslaan 2a</li>
                <li>6042 JV Roermond</li>
                <li>
                  <a
                    href="mailto:info@roersoppers.nl"
                    className="hover:text-blue-400"
                  >
                    info@roersoppers.nl
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Social Media
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} De Roersoppers. Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
