import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { InstagramFeed } from "@/components/instagram-feed";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero.jpg"
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
                  src="/images/logo.png"
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
                  Een bruisende zwemvereniging waar techniek, uitdaging en
                  plezier samenkomen. Met een enthousiast team en fijne sfeer
                  kan elke zwemmer groeien en genieten – recreatief of in
                  competitie.
                </p>
                <div className="flex flex-col sm:flex-row gap-10 justify-center lg:justify-start">
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
                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6">
                  <a
                    href="https://www.facebook.com/roersoppers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors flex items-center"
                    aria-label="Bezoek onze Facebook pagina"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                    <span className="ml-2">Volg ons op Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/roersoppers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors flex items-center"
                    aria-label="Bezoek onze Instagram pagina"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                    <span className="ml-2">Volg ons op Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:flex justify-end items-center">
              <Image
                src="/images/logo.png"
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
                title: "Jeugd",
                description:
                  "Voor zwemmers met A-diploma. We bieden zowel recreatieve training als wedstrijdtraining, met focus op techniek en conditie.",
                image: "/images/junioren.jpg",
                features: [
                  "3+ trainingen per week",
                  "Focus op zwemtechniek",
                  "Recreatief of wedstrijdgericht",
                ],
              },
              {
                title: "Jongeren",
                description:
                  "Voor oudere zwemmers met passie voor de sport. Intensieve techniek-, duur- en sprinttraining gericht op competitie of recreatief zwemmen.",
                image: "/images/wedstrijdploeg.jpg",
                features: [
                  "3-4 trainingen per week",
                  "Technische perfectionering",
                  "Motiverende sfeer",
                ],
              },
              {
                title: "Masters",
                description:
                  "Voor zwemmers vanaf 25+ jaar. Training op eigen niveau en tempo, van competitief tot ontspannen conditietraining in gezellige sfeer.",
                image: "/images/senioren.jpg",
                features: [
                  "Training op eigen niveau",
                  "1-4 trainingen per week",
                  "Wedstrijd of recreatief",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {/* Scaled image layer (always below overlays) */}
                  <Image
                    src={group.image || "/placeholder.svg"}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
                  />

                  {/* Overlay layers container (independent from scaling) */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* Global soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    {/* Strong bottom overlay that stays visible on hover */}
                    <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 md:h-36 bg-gradient-to-t from-black/90 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Text content above overlays */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
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
              Word lid van De Roersoppers en begin je zwemavontuur in LACO Feel
              Fit Centrum te Melick. Met 4 gratis proeflessen kun je zonder
              verplichting kennismaken!
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
                <div className="mb-2 text-3xl font-bold text-white">125+</div>
                <div className="text-sm text-blue-200">Wedstrijdzwemmers</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">12+</div>
                <div className="text-sm text-blue-200">Trainers</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">7</div>
                <div className="text-sm text-blue-200">Trainingsgroepen</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">2016</div>
                <div className="text-sm text-blue-200">Startgemeenschap</div>
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

      {/* Latest News Section */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Laatste Updates
              </h2>
              <p className="text-gray-600 mt-2">
                Via Instagram @patrickderoersopperssg
              </p>
            </div>
          </div>

          {/* Instagram Feed Component */}
          <InstagramFeed username="patrickderoersopperssg" count={3} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
