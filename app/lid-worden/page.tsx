import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import {
  FileDown,
  ClipboardList,
  CheckCircle2,
  PenLine,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Zwemvereniging De Roersoppers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 container px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Lid worden
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-blue-100 text-base sm:text-lg">
            Probeer eerst 4 gratis proeftrainingen. Samen vinden we de groep die
            bij jou past.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              className="h-11 sm:h-12 px-5 sm:px-6 bg-[#3b82f6] hover:bg-[#1d4ed8]"
            >
              <a
                href="/aanmeldingsformulier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download aanmeldingsformulier (PDF)"
              >
                <FileDown className="mr-2" />
                Download aanmeldingsformulier
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 sm:h-12 px-5 sm:px-6 bg-white text-[#1d4ed8] border-2 border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
            >
              <Link href="/contact" aria-label="Ga naar contactpagina">
                <Mail className="mr-2" />
                Stel een vraag
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Zo werkt het
            </h2>
            <p className="mt-3 text-gray-600">
              Aanmelden is eenvoudig. Volg de stappen hieronder.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-5 shadow border border-gray-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#3b82f6]" />
                <p className="font-semibold text-gray-900">Proeftrainen</p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Train 4 keer gratis mee en ontdek welke groep bij je past.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow border border-gray-100">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-[#3b82f6]" />
                <p className="font-semibold text-gray-900">Formulier</p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Download en vul het aanmeldingsformulier volledig in.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow border border-gray-100">
              <div className="flex items-center gap-3">
                <PenLine className="text-[#3b82f6]" />
                <p className="font-semibold text-gray-900">Ondertekenen</p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Handtekening vereist. Voor -18 jaar: ondertekenen door ouder/verzorger.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 shadow border border-gray-100">
              <div className="flex items-center gap-3">
                <Mail className="text-[#3b82f6]" />
                <p className="font-semibold text-gray-900">Insturen</p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Mail naar
                {" "}
                <a className="text-blue-600 hover:underline" href="mailto:voorzitter@roersoppers.nl">
                  voorzitter@roersoppers.nl
                </a>
                {" "}
                of lever in bij je trainer.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button
              asChild
              className="h-11 px-5 bg-[#3b82f6] hover:bg-[#1d4ed8]"
            >
              <a
                href="/aanmeldingsformulier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download aanmeldingsformulier (PDF)"
              >
                <FileDown className="mr-2" /> Download aanmeldingsformulier
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Aanmeld- en opzegregels
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-6 shadow border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Aanmeldingsregels
              </h3>
              <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700">
                <p>
                  Aanmelden kan met het aanmeldingsformulier voor minimaal één jaar.
                </p>
                <p>
                  Betaling uitsluitend via incasso-machtiging. Contributiebedragen vind je hieronder.
                </p>
                <p>
                  Bij leden onder 18 jaar ondertekenen ouders/verzorgers het formulier.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 shadow border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Opzegregels
              </h3>
              <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700">
                <p>Opzeggen kan per e-mail of brief:</p>
                <p>
                  E-mail:{" "}
                  <a className="text-blue-600 hover:underline" href="mailto:voorzitter@roersoppers.nl">
                    voorzitter@roersoppers.nl
                  </a>
                  {" "}of lever een brief in tijdens de training.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Senioren: vóór 1 november</li>
                  <li>Overige leden: vóór 1 juli of 1 november</li>
                </ul>
                <p>Niet tijdig afgemeld? Dan berekenen we:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Kosten KNZB-lidmaatschapsmelding</li>
                  <li>Contributie per (gedeelte van de) maand</li>
                </ul>
                <p>
                  Bij ziekte wordt contributie alleen opgeschort als dit tijdig is gemeld en langer dan 3 maanden duurt.
                </p>
                <p>Bij te late afmelding worden startvergunningskosten doorberekend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Contributiestructuur 2025-2026
            </h2>
          </div>

          <div className="mt-8 mx-auto max-w-3xl rounded-xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              KNZB-bijdragen
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <span className="font-medium">Verplichte bijdrage voor iedere zwemmer:</span> €25,40 (in lidmaatschap)
              </li>
              <li>
                <span className="font-medium">Startvergunning &lt; 12 jaar:</span> €2,30 per zwemmer
              </li>
              <li>
                <span className="font-medium">Startvergunning &gt; 12 jaar:</span> €44,80 per zwemmer
              </li>
            </ul>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Niet-wedstrijdzwemmers
              </h3>
              <div className="mt-3 space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-gray-900">Masters 2 (1x per week)</p>
                  <p>€130 per jaar (excl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per jaar in maart</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-gray-900">Masters 1 (max 3x per week)</p>
                  <p>€217 per jaar (excl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-gray-900">Jeugd Recreatief (max 3x per week)</p>
                  <p>€254 per jaar (excl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-gray-900">Jongeren Recreatief (max 4x per week)</p>
                  <p>€290 per jaar (excl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-gray-900">Studenten uitwonend (max 1x per week)</p>
                  <p>€90 per jaar (excl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per jaar in maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-100 p-4 text-xs sm:text-sm">
                  <strong>Studentenregeling:</strong> Woon je op kamers op &gt; 30 km van Melick? Dan kun je lid blijven van de vereniging.
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Wedstrijdzwemmers
              </h3>
              <div className="mt-3 space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="rounded-lg bg-blue-100 p-4">
                  <p className="font-medium text-gray-900">Wedstrijdmasters (max 4x per week)</p>
                  <p>€290 per jaar (incl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-100 p-4">
                  <p className="font-medium text-gray-900">Jeugd Wedstrijd (max 3x per week)</p>
                  <p>€254 per jaar (incl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-100 p-4">
                  <p className="font-medium text-gray-900">Jongeren Wedstrijd (max 4x per week)</p>
                  <p>€290 per jaar (incl. startvergunning)</p>
                  <p className="text-xs text-gray-500">betaling per halfjaar: maart en september</p>
                </div>
                <div className="rounded-lg bg-blue-200 p-4">
                  <p className="font-medium text-gray-900">Gezinskortingen</p>
                  <ul className="mt-1 text-xs sm:text-sm text-gray-700 space-y-1">
                    <li>2e betalende gezinslid: €2,00</li>
                    <li>3e en volgende betalende gezinslid: €4,00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-auto max-w-3xl rounded-xl bg-white border border-gray-200 p-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Binnen de Startgemeenschap Patrick–De Roersoppers zijn de tarieven deels afgestemd met Z.V. Patrick (m.n. wedstrijdzwemmers). Verder kunnen verschillen voorkomen.
            </p>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">
              Vragen? Mail de ledenadministratie:{" "}
              <a href="mailto:admin@roersoppers.nl" className="text-blue-600 hover:underline">admin@roersoppers.nl</a>
            </p>
            <p className="mt-3 text-gray-800 font-medium text-sm sm:text-base">
              Bankrekening: IBAN NL66RABO012.14.96.120
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-blue-900 py-12 sm:py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950" />
        <div className="relative container px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Klaar om te starten?
            </h2>
            <p className="mt-3 text-blue-200 text-sm sm:text-base">
              Plan je eerste proeftraining of meld je direct aan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                className="h-11 sm:h-12 px-5 sm:px-6 bg-[#3b82f6] hover:bg-[#1d4ed8]"
              >
                <a
                  href="/aanmeldingsformulier.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download aanmeldingsformulier (PDF)"
                >
                  <FileDown className="mr-2" /> Aanmeldingsformulier
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 sm:h-12 px-5 sm:px-6 bg-white text-[#1d4ed8] border-2 border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
              >
                <Link href="/contact">
                  Contact opnemen <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
