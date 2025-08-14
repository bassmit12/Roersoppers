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

      {/* Over Ons Section (moved from homepage) */}
      <section className="py-8 sm:py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-16">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl mb-2 sm:mb-4">
              Over Ons
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mx-auto max-w-xl">
              Een geweldige zwemvereniging die al sinds 1970 actief is.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-xl bg-gray-50/50 p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="prose prose-lg max-w-none text-sm sm:text-base">
                <p>
                  Wij zetten ons vol enthousiasme in voor De Roersoppers, een
                  geweldige zwemvereniging die al sinds 1970 actief is. Doe je
                  ook mee? We kunnen altijd vrijwilligers gebruiken,
                  bijvoorbeeld bij het organiseren van extra activiteiten of om
                  als official bij wedstrijden te jureren. Misschien spreken we
                  je in de wandelgangen aan – we kunnen jouw hulp goed
                  gebruiken!
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                  Bestuur
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex flex-col p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <span className="font-semibold text-base sm:text-lg">
                          Charles Bos
                        </span>
                        <span className="text-gray-600 text-sm">
                          Voorzitter
                        </span>
                        <a
                          href="mailto:voorzitter@roersoppers.nl"
                          className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                          </svg>
                          voorzitter@roersoppers.nl
                        </a>
                      </li>
                      <li className="flex flex-col p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <span className="font-semibold text-base sm:text-lg">
                          Koen Wijnands
                        </span>
                        <span className="text-gray-600 text-sm">
                          TCzaken en Trainerszaken
                        </span>
                        <div className="flex flex-col mt-1">
                          <a
                            href="mailto:tc@roersoppers.nl"
                            className="text-[#3b82f6] hover:underline text-sm inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 mr-1"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                            tc@roersoppers.nl
                          </a>
                          <a
                            href="mailto:trainers@roersoppers.nl"
                            className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 mr-1"
                            >
                              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                            trainers@roersoppers.nl
                          </a>
                        </div>
                      </li>
                      <li className="flex flex-col p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <span className="font-semibold text-base sm:text-lg">
                          Joep Thewissen
                        </span>
                        <span className="text-gray-600 text-sm">
                          Penningmeester
                        </span>
                        <a
                          href="mailto:penningmeester@roersoppers.nl"
                          className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                          </svg>
                          penningmeester@roersoppers.nl
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex flex-col p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <span className="font-semibold text-base sm:text-lg">
                          Jeroen Meuleners
                        </span>
                        <span className="text-gray-600 text-sm">
                          Algemeen lid en basisinformatie
                        </span>
                        <a
                          href="mailto:info@roersoppers.nl"
                          className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                          </svg>
                          info@roersoppers.nl
                        </a>
                      </li>
                      <li className="flex flex-col p-2 hover:bg-blue-50 rounded-md transition-colors">
                        <span className="font-semibold text-base sm:text-lg">
                          Saskia Ramakers
                        </span>
                        <span className="text-gray-600 text-sm">
                          Algemeen lid en pr zaken
                        </span>
                        <a
                          href="mailto:pr@roersoppers.nl"
                          className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                          </svg>
                          pr@roersoppers.nl
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                  Boekhouding en Ledenadministratie
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="p-2 hover:bg-blue-50 rounded-md transition-colors">
                    <span className="font-semibold text-base sm:text-lg block">
                      Marleen Schmitz
                    </span>
                    <a
                      href="mailto:admin@roersoppers.nl"
                      className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                      admin@roersoppers.nl
                    </a>
                  </div>
                  <div className="p-2 hover:bg-blue-50 rounded-md transition-colors">
                    <span className="font-semibold text-base sm:text-lg block">
                      Nicole Janssen
                    </span>
                    <a
                      href="mailto:admin@roersoppers.nl"
                      className="text-[#3b82f6] hover:underline text-sm mt-1 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                      admin@roersoppers.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="rounded-xl bg-gray-50/50 p-4 sm:p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                    Trainers
                  </h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                    Bij De Roersoppers zetten onze trainers zich in om elke
                    zwemmer uit te dagen en te motiveren. Beginnende zwemmers
                    krijgen een solide basis, terwijl ervaren zwemmers worden
                    geholpen om hun techniek en prestaties te verfijnen.
                    Iedereen traint op zijn eigen niveau, met de juiste balans
                    tussen plezier en uitdaging.
                  </p>

                  <div className="mb-3 sm:mb-4 text-base font-semibold">
                    Dit zijn onze trainers:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {/*
                      "Charles Bos",
                      "Arno Schrauwen",
                      "Ernest Smit",
                      "Koen Wijnands",
                      "Senna Bongartz",
                      "Mike Jansen",
                      "Marco Moers",
                      "René Zenden",
                      "Loes Slebe",
                      "Eva Wassenberg",
                      "Jules Gripling",
                      "Max Martens",
                    */}
                    {Array.from({ length: 12 }, (_, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 px-2 py-1 rounded-md text-sm inline-block"
                      >
                        Trainer {i + 1}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <p className="text-gray-700 text-sm">
                      Heb je een vraag aan een van onze trainers, mail dan naar:
                    </p>
                    <a
                      href="mailto:trainers@roersoppers.nl"
                      className="text-[#3b82f6] font-semibold hover:underline text-sm mt-1 inline-flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                      trainers@roersoppers.nl
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-blue-50 rounded-xl shadow-sm">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 text-[#1d4ed8]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    CODE BLAUW
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Code Blauw staat voor respect, sportiviteit, veiligheid
                        en plezier in de zwemsport. Het is een initiatief van de
                        KNZB waarbij zwemverenigingen en zwembaden samen zorgen
                        voor een sportief en veilig zwemklimaat.
                      </p>
                      <div className="mt-3 sm:mt-4">
                        <Button
                          className="bg-[#3b82f6] text-white hover:bg-[#1d4ed8] text-sm py-2 h-auto w-full sm:w-auto"
                          asChild
                        >
                          <a
                            href="https://www.knzb.nl/vereniging__wedstrijdsport/bruisend_verenigingsleven/een_veilige_sportomgeving/code_blauw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Bezoek de KNZB Code Blauw pagina
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="ml-2 h-3 w-3 sm:h-4 sm:w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5z"
                                clipRule="evenodd"
                              />
                              <path
                                fillRule="evenodd"
                                d="M10.5 6a.75.75 0 01.75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 010 1.5H12a2.25 2.25 0 01-2.25-2.25V6.75A.75.75 0 0110.5 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 mt-2 text-sm sm:text-base">
                        In het kader van Code Blauw heeft onze vereniging tevens
                        een vertrouwenspersoon aangesteld. De vertrouwenspersoon
                        is er voor de eerste opvang van vragen, vermoedens,
                        meldingen, klachten en aangifte van seksuele intimidatie
                        en ander ongewenst gedrag voor leden, ouders van leden,
                        trainers, vrijwilligers en bestuur.
                      </p>
                      <p className="text-gray-700 mt-2 font-semibold text-sm sm:text-base">
                        Momenteel zijn wij op zoek naar een nieuwe
                        vertrouwenscontactpersoon. Mensen die hiervoor
                        belangstelling hebben kunnen zich melden bij onze
                        voorzitter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
