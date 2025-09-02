import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/footer";

const schedule = {
  Maandag: [
    {
      time: "18:30 - 20:00",
      group: "Jongeren Recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
      level: "Gevorderd",
    },
  ],
  Dinsdag: [
    {
      time: "18:30 - 19:30",
      group: "Jeugd Recreatief/Jeugd Wedstrijd",
      level: "Beginners/Gevorderd",
    },
    { time: "19:30 - 20:30", group: "Masters 1", level: "Gevorderd" },
  ],
  Woensdag: [
    {
      time: "18:30 - 20:00",
      group: "Jongeren Recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
      level: "Gevorderd",
    },
  ],
  Donderdag: [
    {
      time: "18:30 - 19:30",
      group: "Jeugd Recreatief/Jeugd Wedstrijd",
      level: "Beginners/Gevorderd",
    },
    {
      time: "19:30 - 20:30",
      group: "Jongeren Recreatief/Jongeren Wedstrijd/Wedstrijdmasters",
      level: "Gevorderd",
    },
    { time: "20:30 - 21:30", group: "Masters 1", level: "Gevorderd" },
    { time: "21:30 - 22:30", group: "Masters 2", level: "Recreatief" },
  ],
  Zaterdag: [
    {
      time: "08:00 - 09:00",
      group:
        "Jongeren Recreatief/Jongeren Wedstrijd/Wedstrijdmasters/Masters 1",
      level: "Gevorderd",
    },
    {
      time: "12:00 - 13:15",
      group: "Jeugd Recreatief/Jeugd Wedstrijd",
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
            Training & Groepen
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Ontdek welke trainingsgroep bij jou past! Van jeugd tot masters,
            recreatief of wedstrijdgericht - er is voor iedereen een plek in het
            water.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container py-24">
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Trainingstijden
              </h2>
              <p className="text-gray-600">Weekschema voor alle groepen</p>
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
          <p className="text-gray-600 text-lg leading-relaxed">
            Zwemmen bij De Roersoppers is voor iedereen: jong en oud, fanatiek
            of recreatief. Of je nu snelheid en techniek wilt verbeteren of
            gewoon lekker wilt bewegen, er is altijd een plek voor jou. Twijfel
            je nog? Je mag vier keer gratis meetrainen!
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Jeugd Group */}
          <div className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="relative p-8">
              <div className="mb-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <span className="text-2xl">🏊‍♀️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jeugd</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                  Voor jonge zwemmers
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-blue-50 p-4 border-l-4 border-[#1d4ed8]">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🏆</span>
                    Wedstrijdploeg
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Voor zwemmers met A-diploma die verder willen! We leren je
                    nieuwe technieken en helpen je steeds beter te worden.
                    Serieuze trainingen worden afgewisseld met plezier, en je
                    zwemt zo&apos;n 10-12 wedstrijden per seizoen.
                  </p>
                  <div className="mt-3 text-xs text-blue-800 font-medium">
                    • Minimaal 3 trainingen per week • Wedstrijden •
                    Techniektraining
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border-l-4 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    Recreatief
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Voor zwemmers met A-diploma die vooral plezier zoeken in het
                    water. Je leert nieuwe technieken zonder de druk van
                    wedstrijden. Je traint op je eigen tempo, en deelname aan
                    wedstrijden is optioneel.
                  </p>
                  <div className="mt-3 text-xs text-gray-700 font-medium">
                    • Eigen tempo • Optionele wedstrijden • Plezier voorop
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jongeren Group */}
          <div className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="relative p-8">
              <div className="mb-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <span className="text-2xl">🏊‍♂️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Jongeren
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                  Voor tieners & jongvolwassenen
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-blue-50 p-4 border-l-4 border-[#1d4ed8]">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    Wedstrijdploeg
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Voor fanatieke zwemmers met passie voor het water. Je traint
                    op techniek, snelheid en conditie, gericht op wedstrijden in
                    districtscompetities en kampioenschappen. Samen gaan we voor
                    de beste prestaties!
                  </p>
                  <div className="mt-3 text-xs text-blue-800 font-medium">
                    • Minimaal 3 trainingen per week • Districtscompetities •
                    Prestatiegericht
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border-l-4 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">💪</span>
                    Recreatief
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Voor fanatieke jongeren die serieus willen trainen, zonder
                    wedstrijddruk. Je werkt aan techniek, snelheid en conditie
                    in een gezellige en motiverende sfeer. Perfect voor
                    conditieverbetering!
                  </p>
                  <div className="mt-3 text-xs text-gray-700 font-medium">
                    • Geen wedstrijddruk • Conditietraining • Gezellige sfeer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Masters Group */}
          <div className="group relative rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="relative p-8">
              <div className="mb-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <span className="text-2xl">🏊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Masters
                </h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                  Voor 25+ zwemmers
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-blue-50 p-4 border-l-4 border-[#1d4ed8]">
                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">🏅</span>
                    Wedstrijdmasters
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Voor 25-plussers die fanatiek willen blijven zwemmen. Je
                    doet mee aan speciale wedstrijden met leeftijdscategorieën
                    per vijf jaar. Je traint samen met de jeugd om je techniek
                    en snelheid te blijven ontwikkelen.
                  </p>
                  <div className="mt-3 text-xs text-blue-800 font-medium">
                    • Leeftijdscategorieën • Masters wedstrijden • Techniekfocus
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border-l-4 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">😊</span>
                    Recreatief
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Een gezonde sport voor elke leeftijd! Conditietraining
                    zonder wedstrijden, in banen op jouw niveau. Perfect voor
                    oud-wedstrijdzwemmers of voor wie technieken wil verbeteren.
                    Plezier en beweging staan centraal.
                  </p>
                  <div className="mt-3 text-xs text-gray-700 font-medium">
                    • Eigen niveau • Geen wedstrijden • Veel plezier & beweging
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
