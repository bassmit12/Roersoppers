import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Users,
  Clock,
  MapPin,
  Mail,
  Trophy,
  Heart,
  Shield,
  Star,
} from "lucide-react";
import { Footer } from "@/components/footer";

export default function InformatiePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1560090995-01632a28895b?w=1800&h=400&fit=crop"
            alt="Zweminformatie"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Informatie
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Alles wat je moet weten over De Roersoppers
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welkom bij De Roersoppers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek alles wat onze zwemvereniging te bieden heeft - van
              recreatief zwemmen tot wedstrijdsport.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Onze Missie</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Bij De Roersoppers staat plezier in de zwemsport voorop. We
                bieden een warme, sportieve omgeving waar iedereen zich kan
                ontwikkelen, van beginnende zwemmers tot ervaren
                wedstrijdatleten.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Onze Prestaties
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Als onderdeel van Startgemeenschap Patrick - De Roersoppers
                vormen we een sterke eenheid met circa 125 wedstrijdzwemmers die
                samen streven naar topprestaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Facilities */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Training & Faciliteiten
              </h2>
              <p className="text-lg text-gray-600">
                Professionele begeleiding in moderne faciliteiten
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  Trainingstijden
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">
                      Jeugd (8-12 jaar)
                    </div>
                    <div className="text-gray-600">
                      Dinsdag & Donderdag 18:30-19:30
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">
                      Jongeren (13+ jaar)
                    </div>
                    <div className="text-gray-600">
                      Maandag, Woensdag & Donderdag
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold text-gray-900">Masters</div>
                    <div className="text-gray-600">
                      Dinsdag, Donderdag & Zaterdag
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="/training">Bekijk alle tijden</a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  Locatie & Contact
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      LACO Feel Fit Centrum
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <div>Industrieweg 30</div>
                      <div>6074 KV Melick</div>
                      <div className="flex items-center mt-3">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        <a
                          href="mailto:info@roersoppers.nl"
                          className="text-blue-600 hover:underline"
                        >
                          info@roersoppers.nl
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <a href="/contact">Volledig contact</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Onze Organisatie
              </h2>
              <p className="text-lg text-gray-600">
                Een gedreven team van vrijwilligers en professionals
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Bestuur */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Bestuur
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Charles Bos
                      </div>
                      <div className="text-sm text-gray-600">Voorzitter</div>
                    </div>
                    <a
                      href="mailto:voorzitter@roersoppers.nl"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Koen Wijnands
                      </div>
                      <div className="text-sm text-gray-600">
                        TC & Trainerszaken
                      </div>
                    </div>
                    <a
                      href="mailto:tc@roersoppers.nl"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Joep Thewissen
                      </div>
                      <div className="text-sm text-gray-600">
                        Penningmeester
                      </div>
                    </div>
                    <a
                      href="mailto:penningmeester@roersoppers.nl"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Jeroen Meuleners
                      </div>
                      <div className="text-sm text-gray-600">Algemeen lid</div>
                    </div>
                    <a
                      href="mailto:info@roersoppers.nl"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="flex justify-between items-center py-3">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Saskia Ramakers
                      </div>
                      <div className="text-sm text-gray-600">
                        PR & Algemeen lid
                      </div>
                    </div>
                    <a
                      href="mailto:pr@roersoppers.nl"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Trainers & Support */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-blue-600 mr-3" />
                    Onze Trainers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Een ervaren team van gekwalificeerde trainers begeleidt alle
                    zwemmers bij hun ontwikkeling, van eerste slagen tot
                    wedstrijdtechniek.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a
                      href="mailto:trainers@roersoppers.nl"
                      className="hover:underline"
                    >
                      trainers@roersoppers.nl
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Administratie
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Marleen Schmitz
                      </div>
                      <div className="text-sm text-gray-600">
                        Ledenadministratie
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Nicole Janssen
                      </div>
                      <div className="text-sm text-gray-600">Boekhouding</div>
                    </div>
                    <div className="flex items-center text-blue-600 mt-3">
                      <Mail className="h-4 w-4 mr-2" />
                      <a
                        href="mailto:admin@roersoppers.nl"
                        className="hover:underline"
                      >
                        admin@roersoppers.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Blauw */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Code Blauw
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                De Roersoppers is aangesloten bij Code Blauw van de KNZB. Dit
                staat voor respect, sportiviteit, veiligheid en plezier in de
                zwemsport. We zorgen samen voor een veilige en sportieve
                omgeving voor alle leden.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Wat betekent dit?
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Veilige sportomgeving voor iedereen
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Respect voor elkaar en de sport
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Sportiviteit staat voorop
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Vertrouwenspersoon
                  </h4>
                  <p className="text-gray-700">
                    Momenteel zijn wij op zoek naar een nieuwe
                    vertrouwenscontactpersoon. Interesse? Neem contact op met
                    onze voorzitter.
                  </p>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a
                  href="https://www.knzb.nl/vereniging__wedstrijdsport/bruisend_verenigingsleven/een_veilige_sportomgeving/code_blauw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Meer over Code Blauw
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Startgemeenschap */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Startgemeenschap Patrick - De Roersoppers
              </h2>
              <p className="text-lg text-gray-600">
                Samen sterker in Midden-Limburg
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sinds 2016-2017 vormen ZV De Roersoppers en ZV Patrick samen de
                Startgemeenschap Patrick - De Roersoppers. Deze samenwerking
                maakt ons sterker en biedt onze zwemmers meer kansen om te
                groeien in de sport.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    125
                  </div>
                  <div className="text-gray-600">Wedstrijdzwemmers</div>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                  <div className="text-gray-600">Verenigingen</div>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
                  <div className="text-gray-600">Sterk team</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Praktische info:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    De Roersoppers traint in Melick (LACO Feel Fit)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Patrick traint in Echt
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Bij wedstrijden zwemmen we samen als één team
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Je blijft lid van je eigen vereniging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Klaar om te beginnen?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Word lid van De Roersoppers en ontdek jouw mogelijkheden in het
              water!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-900 hover:bg-blue-50"
              >
                <a href="/lid-worden">Lid worden</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/contact">Contact opnemen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
