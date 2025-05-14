import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Info, Users, Link as LinkIcon } from "lucide-react";
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

      {/* General Information Section */}
      <section className="container py-12">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Info className="mr-3 h-8 w-8 text-[#1d4ed8]" />
              Algemeen
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Zwemmen bij De Roersoppers: Plezier, Prestatie en Kameraadschap!
            </h3>
            <p>
              Bij De Roersoppers draait het om veel meer dan alleen snelheid.
              Het gaat om jezelf uitdagen, samen plezier maken en volop genieten
              van de zwemsport. Of je nu voor de competitie gaat of gewoon fit
              wilt blijven, bij ons vind je jouw plek in het water!
            </p>
            <p>
              Wij zijn een bruisende zwemvereniging waar zwemplezier en
              sportieve ambitie hand in hand gaan. We trekken onze banen in het
              LACO Feel Fit Centrum in Melick en vormen samen met Zwemvereniging
              Patrick uit Echt de Startgemeenschap Patrick – De Roersoppers.
              Tijdens wedstrijden staan we als één sterk team aan de start:
              samen sterk, samen sneller!
            </p>
            <p>
              Bij ons is zwemmen allesbehalve saai! De jeugd traint fanatiek aan
              techniek en conditie, maar tussendoor is er ook veel lol en ruimte
              om vrij te spelen. Zo vliegt de tijd voorbij!
            </p>
            <p>
              Voor de wedstrijdzwemmers ligt de nadruk meer op techniek en
              prestatie, maar altijd in een gezellige en motiverende sfeer. En
              wie niet aan wedstrijden meedoet, zwemt op zijn eigen tempo: flink
              door of juist rustig, even bijpraten of ontspannen – alles mag.
            </p>
          </div>
        </div>
      </section>

      {/* Startgemeenschap Section */}
      <section className="container py-12">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Users className="mr-3 h-8 w-8 text-[#1d4ed8]" />
              Startgemeenschap
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Startgemeenschap Patrick - De Roersoppers: Samen Sterker in het
              Water!
            </h3>
            <p>
              Sinds het seizoen 2016-2017 bundelen ZV De Roersoppers en ZV
              Patrick hun krachten in de Startgemeenschap Patrick - De
              Roersoppers. Dit betekent dat we tijdens wedstrijden als één team
              uitkomen, met een gedeelde passie voor de zwemsport en de ambitie
              om het beste uit onszelf te halen.
            </p>
            <p>
              Door samen te werken op het gebied van trainingen, trainers en
              accommodaties, creëren we een sterk Midden- Limburgs
              zwemcollectief.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">
              Wat betekent dit in de praktijk?
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-[#1d4ed8] font-bold">✅</span>
                <span>
                  <strong>Twee verenigingen, één krachtig wedstrijdteam</strong>{" "}
                  – ZV De Roersoppers en ZV Patrick blijven als zelfstandige
                  verenigingen bestaan, maar in wedstrijden staan we zij aan
                  zij.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#1d4ed8] font-bold">✅</span>
                <span>
                  <strong>Een gedeelde visie</strong> – We geloven in
                  verbinding, plezier in de sport, persoonlijke ontwikkeling en
                  het stimuleren van een gezonde leefstijl.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#1d4ed8] font-bold">✅</span>
                <span>
                  <strong>125 wedstrijdzwemmers</strong> – De startgemeenschap
                  telt ongeveer 125 fanatieke zwemmers uit beide verenigingen.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="container py-12">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-8 w-8 text-[#1d4ed8]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Lidmaatschap en startvergunning
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Om deel te nemen aan wedstrijden, heeft iedere wedstrijdzwemmer
              een startvergunning nodig. Deze wordt aangevraagd bij de KNZB
              onder de gezamenlijke vlag van de startgemeenschap. Leden met een
              doorlopende startvergunning maken automatisch deel uit van de
              startgemeenschap, maar blijven ook gewoon lid van hun eigen
              vereniging. Bij beëindiging van de startvergunning blijft het
              lidmaatschap van de oorspronkelijke vereniging behouden, tenzij
              anders aangegeven.
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="container py-12">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-8 w-8 text-[#1d4ed8]"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Trainingen
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              De Roersoppers traint in Melick
              <Button
                variant="link"
                className="text-[#1d4ed8] hover:text-[#3b82f6] px-1 font-bold"
                asChild
              >
                <a href="/training">(Trainingstijden)</a>
              </Button>
              . Patrick traint in Echt
              <Button
                variant="link"
                className="text-[#1d4ed8] hover:text-[#3b82f6] px-1 font-bold"
                asChild
              >
                <a
                  href="https://www.zvpatrick.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Website Patrick Echt)
                  <LinkIcon className="h-4 w-4 ml-1" />
                </a>
              </Button>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 mb-12">
        <div className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 p-8 shadow-lg text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Interesse in De Roersoppers?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Wil je meer weten over onze vereniging of lid worden? Neem contact
              met ons op of kom eens langs bij een training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#1d4ed8] hover:bg-blue-50 h-12 px-8"
                asChild
              >
                <a href="/contact">Contact Opnemen</a>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 h-12 px-8"
                asChild
              >
                <a href="/training">Trainingstijden Bekijken</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
