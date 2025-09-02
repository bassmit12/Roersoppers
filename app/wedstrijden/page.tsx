import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  ArrowRight,
  Users,
} from "lucide-react";

const upcomingCompetitions = [
  {
    date: "23 Maart 2024",
    title: "Limburgs Kampioenschap",
    location: "Zwembad De Roerdomp, Roermond",
    time: "10:00 - 17:00",
    categories: ["Junioren", "Jeugd", "Senioren"],
    registrationDeadline: "16 Maart 2024",
  },
  {
    date: "6 April 2024",
    title: "Internationale Zwemwedstrijd",
    location: "Sportcentrum De Scheg, Deventer",
    time: "09:00 - 18:00",
    categories: ["Alle Categorieën"],
    registrationDeadline: "30 Maart 2024",
  },
  {
    date: "20 April 2024",
    title: "Masters Competitie",
    location: "Pieter van den Hoogenband Zwemstadion, Eindhoven",
    time: "11:00 - 16:00",
    categories: ["Masters 20+", "Masters 30+", "Masters 40+"],
    registrationDeadline: "13 April 2024",
  },
];

const pastResults = [
  {
    date: "10 Februari 2024",
    title: "Regionale Kampioenschappen",
    medals: {
      gold: 5,
      silver: 3,
      bronze: 4,
    },
    highlights: "3 nieuwe clubrecords",
  },
  {
    date: "27 Januari 2024",
    title: "Nationale Junioren Cup",
    medals: {
      gold: 2,
      silver: 4,
      bronze: 3,
    },
    highlights: "Beste clubprestatie",
  },
];

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1800&h=400&fit=crop"
            alt="Swimming competition"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Wedstrijden
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Overzicht van aankomende wedstrijden en recente uitslagen.
          </p>
        </div>
      </section>

      {/* Upcoming - Timeline */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Komende wedstrijden
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Schrijf je in en blijf op de hoogte
            </p>
          </div>
        </div>

        <ol className="relative border-l-2 border-blue-100">
          {upcomingCompetitions.map((c) => (
            <li
              key={c.title}
              className="group ml-4 border-b border-gray-100 py-8 last:border-0"
            >
              <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                    <Calendar className="h-3.5 w-3.5" /> {c.date}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {c.title}
                  </h3>

                  <div className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                      <span>{c.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 text-gray-400" />
                      <span>{c.time}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 inline-flex rounded-md bg-orange-50 px-3 py-1 text-xs text-orange-800">
                    Inschrijven voor:{" "}
                    <span className="ml-1 font-semibold">
                      {c.registrationDeadline}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <Button className="w-full md:w-auto">Inschrijven</Button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Results */}
      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Laatste resultaten
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Prestaties van onze zwemmers
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pastResults.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:bg-gray-100"
              >
                <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
                  <span>{r.date}</span>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {r.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <strong className="font-semibold">
                      {r.medals.gold}x
                    </strong>{" "}
                    Goud
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <strong className="font-semibold">
                      {r.medals.silver}x
                    </strong>{" "}
                    Zilver
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-600" />
                    <strong className="font-semibold">
                      {r.medals.bronze}x
                    </strong>{" "}
                    Brons
                  </span>
                </div>

                <p className="mt-4 text-sm font-medium text-blue-700">
                  {r.highlights}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="group">
              Bekijk alle resultaten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow">
            <Calendar className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Wedstrijdkalender
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Download de kalender voor het huidige seizoen.
            </p>
            <div className="mt-4">
              <Button className="w-full">Download kalender</Button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow">
            <Users className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Officials gezocht
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Help mee tijdens wedstrijden. Meld je aan als official.
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Meer info
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow">
            <Trophy className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Clubrecords</h3>
            <p className="mt-1 text-sm text-gray-600">
              Bekijk alle clubrecords en topprestaties.
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Bekijk records
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
