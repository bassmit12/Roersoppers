import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NewsCard } from "@/components/news-card";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
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
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-8 lg:hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Roersoppers-t4gekyM7SINMMpk9V8Uo3i0fPtNKxr.png"
                  alt="Roersoppers Logo"
                  width={300}
                  height={300}
                  className="w-48 sm:w-64"
                />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  De Roersoppers
                  <span className="mt-2 block text-2xl font-medium text-blue-400 sm:text-3xl">
                    Zwemmen met passie
                  </span>
                </h1>
                <p className="mb-8 mx-auto lg:mx-0 max-w-lg text-lg text-blue-100">
                  Join onze zwemfamilie en ontdek de vreugde van competitief
                  zwemmen in een ondersteunende omgeving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="h-12 sm:h-14 px-6 sm:px-8 text-lg sm:text-xl font-semibold bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-colors flex items-center justify-center">
                    Word Lid
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent h-12 sm:h-14 px-6 sm:px-8 text-lg sm:text-xl font-semibold border-2 border-white text-white hover:bg-white/20 hover:text-white transition-colors"
                  >
                    Training Schema
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:flex justify-end items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Roersoppers-t4gekyM7SINMMpk9V8Uo3i0fPtNKxr.png"
                alt="Roersoppers Logo"
                width={300}
                height={300}
                className="w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Groups Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Training voor elk niveau
            </h2>
            <p className="text-gray-600">
              Of je nu een beginner bent of een ervaren zwemmer, bij De
              Roersoppers is er een passende trainingsgroep voor jou.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Recreatief",
                description:
                  "Voor zwemmers die willen trainen voor plezier en fitness. Leer nieuwe technieken en verbeter je conditie in een ontspannen sfeer.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/swim-lessons-images.jpg-zcc3ffCWQxeQhgRkyEQhFqjx4wtuDl.jpeg",
                features: [
                  "Flexibele trainingstijden",
                  "Persoonlijke begeleiding",
                  "Focus op techniek",
                ],
              },
              {
                title: "Wedstrijd",
                description:
                  "Voor competitieve zwemmers die willen excelleren. Train intensief en bereid je voor op wedstrijden onder professionele begeleiding.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adult-swim_680x332px-h2NW62QwFmRA4zyGnVhL8Wtryq99ij.webp",
                features: [
                  "Wedstrijdvoorbereiding",
                  "Conditietraining",
                  "Technische analyse",
                ],
              },
              {
                title: "Masters",
                description:
                  "Voor ervaren zwemmers die willen blijven presteren. Train op je eigen niveau en doe mee aan masterswedstrijden.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20160403_110737%20(800x584).jpg-djbU5v7kufc7VGPUpwl3RGLV3Vo4VG.jpeg",
                features: [
                  "Aangepast programma",
                  "Ervaren trainers",
                  "Sociale activiteiten",
                ],
              },
            ].map((group, i) => (
              <div
                key={group.title}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={group.image || "/placeholder.svg"}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {group.title}
                    </h3>
                    <div className="h-px w-16 bg-[#3b82f6] mb-4" />
                    <p className="text-gray-100 line-clamp-2">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {group.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#3b82f6] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-[#3b82f6] border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-colors">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900 py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#3b82f6] opacity-20 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1d4ed8] opacity-20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 blur-2xl" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm">
              🏊‍♂️ Join onze zwemfamilie
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Klaar om te beginnen?
            </h2>
            <p className="mb-12 text-lg text-blue-200 sm:text-xl">
              Word lid van De Roersoppers en begin je zwemavontuur vandaag nog.
              Ontdek de vreugde van zwemmen in een ondersteunende omgeving.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button className="group h-14 w-full px-8 text-lg font-semibold bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-all sm:w-auto">
                Word Lid
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent h-14 w-full px-8 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm sm:w-auto"
              >
                Bekijk Trainingstijden
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-blue-200">Actieve Leden</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-blue-200">Trainingsuren</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-blue-200">Wedstrijden</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-200">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[1px] w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute left-1/2 bottom-0 h-[1px] w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
