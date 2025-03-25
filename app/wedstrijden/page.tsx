import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Footer } from "@/components/footer";

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

      {/* Hero Section */}
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
            Bekijk het wedstrijdschema, schrijf je in voor komende wedstrijden
            en volg de prestaties van onze zwemmers.
          </p>
        </div>
      </section>

      {/* Upcoming Competitions */}
      <section className="container py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Komende Wedstrijden
          </h2>
          <p className="mt-2 text-gray-600">
            Schrijf je in voor aankomende wedstrijden
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingCompetitions.map((competition) => (
            <div
              key={competition.title}
              className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl h-[400px] flex flex-col"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
                      {competition.date}
                    </span>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {competition.title}
                  </h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                      <span>{competition.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{competition.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600">
                      <Users className="mt-1 h-4 w-4 flex-shrink-0" />
                      <span>{competition.categories.join(", ")}</span>
                    </div>
                  </div>
                  <div className="mb-4 rounded-lg bg-orange-50 p-3">
                    <p className="text-sm text-orange-800">
                      <span className="font-medium">Inschrijven voor:</span>{" "}
                      {competition.registrationDeadline}
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
                  Inschrijven
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competition Results */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Laatste Resultaten
            </h2>
            <p className="mt-2 text-gray-600">Prestaties van onze zwemmers</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pastResults.map((result) => (
              <div
                key={result.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    {result.date}
                  </span>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {result.title}
                </h3>
                <div className="mb-4 flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-400" />
                    <span className="text-sm font-medium">
                      {result.medals.gold}x Goud
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                    <span className="text-sm font-medium">
                      {result.medals.silver}x Zilver
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-amber-600" />
                    <span className="text-sm font-medium">
                      {result.medals.bronze}x Brons
                    </span>
                  </div>
                </div>
                <p className="text-sm text-blue-600">{result.highlights}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="group px-6">
              <span className="flex items-center">
                Bekijk alle resultaten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Competition Information */}
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <Calendar className="mb-4 h-8 w-8 text-[#1d4ed8]" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Wedstrijdkalender
            </h3>
            <p className="mb-4 text-gray-600">
              Download de complete wedstrijdkalender voor het huidige seizoen.
            </p>
            <Button className="w-full bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
              Download Kalender
            </Button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <Users className="mb-4 h-8 w-8 text-[#1d4ed8]" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Officials Gezocht
            </h3>
            <p className="mb-4 text-gray-600">
              We zijn altijd op zoek naar nieuwe officials. Interesse? Meld je
              aan!
            </p>
            <Button className="w-full bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
              Word Official
            </Button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <Trophy className="mb-4 h-8 w-8 text-[#1d4ed8]" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Clubrecords
            </h3>
            <p className="mb-4 text-gray-600">
              Bekijk alle clubrecords en prestaties van onze zwemmers.
            </p>
            <Button className="w-full bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
              Bekijk Records
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
