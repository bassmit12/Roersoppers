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
            Zwemmen bij De Roersoppers is voor iedereen: jong en oud, fanatiek
            of recreatief. Of je nu snelheid en techniek wilt verbeteren of
            gewoon lekker wilt bewegen, er is altijd een plek voor jou. Twijfel
            je nog? Je mag vier keer gratis meetrainen!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Jeugd Wedstrijd",
              description:
                "Voor zwemmers met A-diploma die verder willen! We leren je nieuwe technieken en helpen je steeds beter te worden. Serieuze trainingen worden afgewisseld met plezier, en je zwemt zo'n 10-12 wedstrijden per seizoen. We verwachten minimaal 3 trainingen per week.",
              colorClass: "bg-blue-400",
              textClass: "text-white",
            },
            {
              title: "Jeugd Recreatief",
              description:
                "Voor zwemmers met A-diploma die vooral plezier zoeken in het water. Je leert nieuwe technieken zonder de druk van wedstrijden. Je traint op je eigen tempo, en deelname aan wedstrijden is optioneel. Plezier en samenspel met leeftijdsgenoten staan voorop!",
              colorClass: "bg-blue-200",
              textClass: "text-gray-800",
            },
            {
              title: "Jongeren Wedstrijd",
              description:
                "Voor fanatieke zwemmers met passie voor het water. Je traint op techniek, snelheid en conditie, gericht op wedstrijden in districtscompetities en kampioenschappen. Minimaal drie trainingen per week om echt beter te worden. Samen gaan we voor de beste prestaties!",
              colorClass: "bg-blue-400",
              textClass: "text-white",
            },
            {
              title: "Jongeren Recreatief",
              description:
                "Voor fanatieke jongeren die serieus willen trainen, zonder wedstrijddruk. Je werkt aan techniek, snelheid en conditie in een gezellige en motiverende sfeer. Perfect als je je conditie wilt verbeteren of gewoon plezier beleeft aan intensief zwemmen.",
              colorClass: "bg-blue-200",
              textClass: "text-gray-800",
            },
            {
              title: "Wedstrijdmasters",
              description:
                "Voor 25-plussers die fanatiek willen blijven zwemmen. Je doet mee aan speciale wedstrijden met leeftijdscategorieën per vijf jaar. Je traint samen met de jeugd om je techniek en snelheid te blijven ontwikkelen. Iedereen die fit genoeg is kan meedoen!",
              colorClass: "bg-blue-600",
              textClass: "text-white",
            },
            {
              title: "Masters 1",
              description:
                "Conditietraining zonder wedstrijden, in banen op jouw niveau. Perfect voor oud-wedstrijdzwemmers of voor wie technieken wil verbeteren, zoals de borstcrawl. Een baantje overslaan mag, maar er wordt hier wel serieus getraind. Plezier en beweging staan centraal.",
              colorClass: "bg-blue-600",
              textClass: "text-white",
            },
            {
              title: "Masters 2",
              description:
                "Een gezonde sport, ook als je een jaartje ouder bent! Hier wordt niet alleen flink gezwommen, maar ook veel gelachen. De banen zijn verdeeld op niveau, zodat iedereen in eigen tempo kan trainen. Het zwemtempo ligt iets lager dan bij Masters 1.",
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
