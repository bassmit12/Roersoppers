import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Footer } from "@/components/footer";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=1800&h=400&fit=crop"
            alt="Swimming pool"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Lid Worden
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Train vier keer mee. Samen kiezen we de beste groep voor jou.
          </p>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Aanmeldingsprocedure
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Wil je lid worden van de Roersoppers? Volg dan deze eenvoudige stappen:
                </p>
                <ol className="ml-6 list-decimal space-y-4">
                  <li>
                    Train vier keer gratis mee om te kijken of het je bevalt. Onze trainers helpen je om de beste groep voor jou te kiezen.
                  </li>
                  <li>
                    Ben je overtuigd? Download het aanmeldingsformulier via de knop hieronder.
                  </li>
                  <li>
                    Vul het formulier volledig in en voorzie het van een handtekening. Bij leden onder 18 jaar dienen ouders of verzorgers te tekenen.
                  </li>
                  <li>
                    Mail het ingevulde formulier naar{" "}
                    <a
                      href="mailto:voorzitter@roersoppers.nl"
                      className="text-blue-600 hover:underline"
                    >
                      voorzitter@roersoppers.nl
                    </a>{" "}
                    of geef het uitgeprint aan je trainer.
                  </li>
                </ol>
              </div>
            </div>

            <Button className="flex w-full items-center justify-center gap-2 bg-[#3b82f6] text-white hover:bg-[#1d4ed8] sm:w-auto">
              <Download className="h-5 w-5" />
              Download Aanmeldingsformulier
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Rules Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 text-center">
              Aanmeld- en Afmeldregels
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Aanmeldingsregels
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Nieuwe leden dienen zich via een aanmeldingsformulier (voor de duur van minimaal één jaar) aan te melden. Aanmelding van nieuwe leden kan alleen plaatsvinden tegelijk met afgifte van een machtiging tot incasso voor de verschuldigde contributie.
              </p>
              <p>
                Betaling van de contributie kan alleen middels afgifte van een incasso-machtiging. De leden ontvangen geen voorafgaande melding van de contributie. De actuele contributiebedragen zijn hieronder te raadplegen.
              </p>
              <p>
                Bij de leden onder de 18 jaar dienen de ouders of verzorgers het aanmeldingsformulier te ondertekenen. Deze aanmeldingsformulieren zijn tijdens de trainingsdagen in het zwembad aanwezig of kunt u via de link downloaden.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Opzegregels
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Opzegging lidmaatschap kan via mail of brief:
              </p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:voorzitter@roersoppers.nl"
                  className="text-blue-600 hover:underline"
                >
                  voorzitter@roersoppers.nl
                </a>{" "}
                of een uitgeprinte brief afgeven tijdens een training.
              </p>
              <p>
                Opzegging is altijd mogelijk zonder verdere kosten als dit tijdig plaatsvindt d.w.z.:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>per 1 november voor wat betreft de senioren (zij betalen namelijk maar 1 maal per jaar)</li>
                <li>per 1 november of 1 juli voor wat betreft overige leden.</li>
              </ul>
              <p>
                Wordt er niet tijdig afgemeld, dan worden in rekening gebracht:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>de kosten van lidmaatschapsmelding aan de KNZB</li>
                <li>de contributie voor elke maand of deel van de maand dat het lidmaatschap heeft geduurd.</li>
              </ul>
              <p>
                Bij ziekte wordt de contributiebetaling alleen opgeschort als de ziekte tijdig is gemeld en langer dan 3 maanden duurt.
              </p>
              <p>
                Bij te late afmelding worden de kosten van de startvergunning alsnog doorberekend.
              </p>
              <p>
                Voor aanmeldingen gelden dezelfde uitgangspunten voor wat betreft de contributie die in rekening wordt gebracht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Structure Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 text-center">
              Contributiestructuur 2025-2026
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl bg-gray-50 p-8 shadow-lg mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              KNZB Bijdragen
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Verplichte bijdrage voor iedere zwemmer:</span> €25,40 (zit in de lidmaatschapsprijs)
              </li>
              <li>
                <span className="font-medium">Startvergunning &lt; 12 jaar:</span> €2,30 per zwemmer
              </li>
              <li>
                <span className="font-medium">Startvergunning &gt; 12 jaar:</span> €44,80 per zwemmer
              </li>
            </ul>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Tarieven Niet-wedstrijdzwemmers
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="font-medium text-gray-900">Masters 2 (zwemmen 1x per week)</h4>
                    <p className="mt-1 text-gray-600">€130,– per jaar (Exclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per jaar in maart</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="font-medium text-gray-900">Masters 1 (zwemmen max 3x per week)</h4>
                    <p className="mt-1 text-gray-600">€217,– per jaar (Exclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="font-medium text-gray-900">Jeugd Recreatief (zwemmen max 3x per week)</h4>
                    <p className="mt-1 text-gray-600">€254,– per jaar (Exclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="font-medium text-gray-900">Jongeren Recreatief (zwemmen max 4x per week)</h4>
                    <p className="mt-1 text-gray-600">€290,– per jaar (Exclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="font-medium text-gray-900">Studenten uitwonend (zwemmen max 1x per week)</h4>
                    <p className="mt-1 text-gray-600">€90,– per jaar (Exclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per jaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-100 p-4 text-sm">
                    <strong>Studentenregeling:</strong> Studerende leden die op kamers wonen, op meer dan 30 km vanaf Melick, kunnen gebruik maken van de studentenregeling. Dit houdt in dat zij lid kunnen blijven van de vereniging.
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-gray-50 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Tarieven Wedstrijdzwemmers
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-100 p-4">
                    <h4 className="font-medium text-gray-900">Wedstrijdmasters (zwemmen max 4x per week)</h4>
                    <p className="mt-1 text-gray-600">€290,– per jaar (Inclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-100 p-4">
                    <h4 className="font-medium text-gray-900">Jeugd Wedstrijd (zwemmen max 3x per week)</h4>
                    <p className="mt-1 text-gray-600">€254,– per jaar (Inclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="rounded-lg bg-blue-100 p-4">
                    <h4 className="font-medium text-gray-900">Jongeren Wedstrijd (zwemmen max 4x per week)</h4>
                    <p className="mt-1 text-gray-600">€290,– per jaar (Inclusief startvergunning)</p>
                    <p className="text-sm text-gray-500">betaling per halfjaar maart en september</p>
                  </div>
                  
                  <div className="mt-6 rounded-lg bg-blue-200 p-4">
                    <h4 className="font-medium text-gray-900">Gezinskortingen</h4>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>2e betalende gezinslid: €2,00</li>
                      <li>3e en volgende betalende gezinslid: €4,00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6">
              <p className="text-gray-600">
                In het kader van onze samenwerking met Z.V. Patrick binnen de Startgemeenschap Patrick-de Roersoppers zijn de tarieven van ZV de Roersoppers deels afgestemd met/op die van Z.V. Patrick (vnl. voor de wedstrijdzwemmers) Voor het overige blijven er verschillen in de tarieven van beide verenigingen.
              </p>
              <p className="mt-4 text-gray-600">
                Nadere inlichtingen kunnen worden ingewonnen bij de ledenadministratie e-mail{" "}
                <a
                  href="mailto:admin@roersoppers.nl"
                  className="text-blue-600 hover:underline"
                >
                  admin@roersoppers.nl
                </a>
              </p>
              <p className="mt-4 text-gray-800 font-medium">
                Het rekeningnummer van de zwemclub is IBAN NL66RABO012.14.96.120
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-blue-900 py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Klaar om te beginnen?
            </h2>
            <p className="mb-8 text-blue-200">
              Volg vier gratis proeflessen en ontdek of De Roersoppers bij jou past! Neem contact op om je eerste training in te plannen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="flex items-center justify-center h-12 px-6 text-base font-semibold bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-colors">
                Download Aanmeldingsformulier
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button className="flex items-center justify-center h-12 px-6 text-base font-semibold bg-white text-[#1d4ed8] border-2 border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white hover:border-transparent transition-all">
                <Mail className="mr-2 h-5 w-5" />
                Contact Opnemen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}