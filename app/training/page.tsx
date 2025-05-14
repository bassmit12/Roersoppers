import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/footer";

const schedule = {
  Maandag: [
    { time: "18:30 - 20:00", group: "Jongeren Recreatief", level: "Gevorderd" },
    { time: "18:30 - 20:00", group: "Jongeren Wedstrijd", level: "Gevorderd" },
    { time: "18:30 - 20:00", group: "Wedstrijdmasters", level: "Gevorderd" },
  ],
  Dinsdag: [
    { time: "18:30 - 19:30", group: "Jeugd Recreatief", level: "Beginners" },
    {
      time: "18:30 - 19:30",
      group: "Jeugd Wedstrijd",
      level: "Beginners/Gevorderd",
    },
    { time: "19:30 - 20:30", group: "Masters 1", level: "Gevorderd" },
  ],
  Woensdag: [
    { time: "18:30 - 20:00", group: "Jongeren Recreatief", level: "Gevorderd" },
    { time: "18:30 - 20:00", group: "Jongeren Wedstrijd", level: "Gevorderd" },
    { time: "18:30 - 20:00", group: "Wedstrijdmasters", level: "Gevorderd" },
  ],
  Donderdag: [
    { time: "18:30 - 19:30", group: "Jeugd Recreatief", level: "Beginners" },
    {
      time: "18:30 - 19:30",
      group: "Jeugd Wedstrijd",
      level: "Beginners/Gevorderd",
    },
    { time: "19:30 - 20:30", group: "Masters 1", level: "Gevorderd" },
    { time: "20:30 - 21:30", group: "Jongeren Recreatief", level: "Gevorderd" },
    { time: "20:30 - 21:30", group: "Jongeren Wedstrijd", level: "Gevorderd" },
    { time: "20:30 - 21:30", group: "Wedstrijdmasters", level: "Gevorderd" },
    { time: "21:30 - 22:30", group: "Masters 2", level: "Recreatief" },
  ],
  Zaterdag: [
    { time: "08:00 - 09:00", group: "Jongeren Recreatief", level: "Gevorderd" },
    { time: "08:00 - 09:00", group: "Jongeren Wedstrijd", level: "Gevorderd" },
    { time: "08:00 - 09:00", group: "Wedstrijdmasters", level: "Gevorderd" },
    { time: "08:00 - 09:00", group: "Masters 1", level: "Gevorderd" },
    { time: "12:00 - 13:15", group: "Jeugd Recreatief", level: "Beginners" },
    {
      time: "12:00 - 13:15",
      group: "Jeugd Wedstrijd",
      level: "Beginners/Gevorderd",
    },
  ],
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=1800&h=400&fit=crop"
            alt="Swimming pool lanes"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 py-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Trainingstijden
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Bekijk hier het complete trainingsschema voor alle groepen. We
            bieden trainingen aan voor zowel beginners als gevorderden, van jong
            tot oud.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container py-24">
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Weekschema</h2>
              <p className="text-gray-600">Trainingstijden per groep</p>
            </div>
            <Button className="bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
              Download Schema
            </Button>
          </div>

          {/* Legend */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-blue-200" />
              <span className="text-sm">Recreatief</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-blue-400" />
              <span className="text-sm">Wedstrijd</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-blue-600" />
              <span className="text-sm">Masters</span>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(schedule).map(([day, sessions]) => (
              <div
                key={day}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4"
              >
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
                  <Calendar className="h-5 w-5 text-[#1d4ed8]" />
                  {day}
                </h3>
                <div className="space-y-3">
                  {sessions.map((session, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-3 ${
                        session.group.includes("Recreatief")
                          ? "bg-blue-200"
                          : session.group.includes("Wedstrijd")
                          ? "bg-blue-400 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {session.time}
                        </span>
                      </div>
                      <div className="mt-1 text-sm">
                        <div className="font-medium">{session.group}</div>
                        <div className="text-xs opacity-90">
                          {session.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Groups Section */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Onze Trainingsgroepen
          </h2>
          <p className="text-gray-600">
            Bij De Roersoppers bieden we verschillende trainingsgroepen aan,
            aangepast aan je leeftijd, niveau en ambities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Jeugd Wedstrijd",
              description:
                "Voor zwemmers met A-diploma, focus op techniek, conditie en wedstrijden (10–12 per seizoen). Minimaal 3 trainingen per week.",
              colorClass: "bg-blue-400",
              textClass: "text-white",
            },
            {
              title: "Jeugd Recreatief",
              description:
                "Voor zwemmers met A-diploma die vooral plezier willen, zonder wedstrijddruk; deelnemen aan wedstrijden optioneel.",
              colorClass: "bg-blue-200",
              textClass: "text-gray-800",
            },
            {
              title: "Jongeren Wedstrijd",
              description:
                "Passie voor zwemmen; techniek-, duur- en sprinttraining gericht op competitie (district, kampioenschappen). Minimaal 3 trainingen per week.",
              colorClass: "bg-blue-400",
              textClass: "text-white",
            },
            {
              title: "Jongeren Recreatief",
              description:
                "Serieuze training zonder wedstrijddruk; focus op techniek, snelheid en conditie in motiverende sfeer.",
              colorClass: "bg-blue-200",
              textClass: "text-gray-800",
            },
            {
              title: "Wedstrijdmasters",
              description:
                "Masters vanaf 25+ met leeftijdscategorieën per 5 jaar; training met jeugd, focus op prestaties.",
              colorClass: "bg-blue-600",
              textClass: "text-white",
            },
            {
              title: "Masters 1",
              description:
                "Conditietraining zonder wedstrijden in banen op niveau; voor oud-wedstrijdzwemmers en nieuwe techniek-leerders.",
              colorClass: "bg-blue-600",
              textClass: "text-white",
            },
            {
              title: "Masters 2",
              description:
                "Gezellige conditietraining in eigen tempo; focus op samen lachen en zwemmen op iets lager tempo dan Masters 1.",
              colorClass: "bg-blue-600",
              textClass: "text-white",
            },
          ].map((group) => (
            <div
              key={group.title}
              className={`rounded-lg p-6 shadow-lg ${group.colorClass} ${group.textClass}`}
            >
              <h3 className="text-xl font-bold mb-2">{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Locatie</h3>
            <p className="text-gray-600">
              Alle trainingen vinden plaats in:
              <br />
              LACO Feel Fit Centrum
              <br />
              Melick
              <br />
              <span className="mt-2 block text-sm">
                Samenwerking met partnerclub ZV Patrick (Echt) sinds 2016-2017
              </span>
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Vakanties</h3>
            <p className="text-gray-600">
              Tijdens schoolvakanties kunnen trainingstijden afwijken. Houd de
              nieuwsberichten in de gaten voor actuele informatie.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Vragen?</h3>
            <p className="mb-4 text-gray-600">
              Neem contact op met onze trainingscoördinator voor vragen over het
              trainingsschema.
            </p>
            <Button className="w-full bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
              Contact Opnemen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
