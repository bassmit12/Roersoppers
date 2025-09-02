import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock, ChevronDown, Send } from "lucide-react";
import { Footer } from "@/components/footer";

const faqs = [
  {
    question: "Hoe kan ik lid worden?",
    answer:
      "U kunt lid worden na 4 gratis proeflessen. Vul het aanmeldingsformulier in dat te vinden is op onze website en stuur het naar voorzitter@roersoppers.nl. Het lidmaatschap duurt minimaal 1 jaar en betaling gebeurt via incasso-machtiging.",
  },
  {
    question: "Wat zijn de kosten van het lidmaatschap?",
    answer:
      "De contributie is afhankelijk van de trainingsgroep. Voor recreatieve groepen varieert dit van €130 (Masters 2) tot €290 (Jongeren Recreatief) per jaar. Voor wedstrijdgroepen bedraagt het €254 (Jeugd) of €290 (Jongeren/Masters) per jaar. Familiekorting is beschikbaar.",
  },
  {
    question: "Kan ik eerst proeflessen volgen?",
    answer:
      "Ja, we bieden 4 gratis proeflessen zodat u kunt kennismaken met onze vereniging en bepalen welke groep het beste bij u past.",
  },
  {
    question: "Hoe kan ik mijn lidmaatschap opzeggen?",
    answer:
      "Senioren dienen op te zeggen vóór 1 november. Andere leden kunnen opzeggen vóór 1 juli of 1 november. Bij late opzegging worden KNZB-meldkosten en maandelijkse contributie in rekening gebracht.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900">
          <Image
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1800&h=400&fit=crop"
            alt="Contact us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 py-12 text-center text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Heeft u vragen? Neem contact met ons op. We helpen u graag verder.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Contact Content */}
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Form - Takes up 3 columns */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
                <div className="relative p-8 lg:p-12">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Stuur ons een bericht
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Vul het formulier in en we nemen zo snel mogelijk contact
                      met u op.
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-semibold text-gray-900"
                        >
                          Naam
                        </label>
                        <Input
                          id="name"
                          placeholder="Uw naam"
                          required
                          className="h-14 border-gray-200 bg-white px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-semibold text-gray-900"
                        >
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="uw@email.nl"
                          required
                          className="h-14 border-gray-200 bg-white px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-semibold text-gray-900"
                      >
                        Onderwerp
                      </label>
                      <Input
                        id="subject"
                        placeholder="Waar gaat uw bericht over?"
                        required
                        className="h-14 border-gray-200 bg-white px-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-semibold text-gray-900"
                      >
                        Bericht
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Schrijf uw bericht hier..."
                        required
                        className="min-h-[150px] resize-none border-gray-200 bg-white px-4 py-4 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <Button className="h-14 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center text-lg font-semibold">
                      <Send className="mr-3 h-5 w-5" />
                      Verstuur bericht
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info - Takes up 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-8">
                <h3 className="mb-8 text-2xl font-bold text-gray-900">
                  Contactgegevens
                </h3>
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#3b82f6]/10 p-3">
                        <MapPin className="h-6 w-6 text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg mb-1">
                          Locatie
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          LACO Feel Fit Centrum
                          <br />
                          Melick
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#3b82f6]/10 p-3">
                        <Mail className="h-6 w-6 text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg mb-2">
                          E-mail
                        </p>
                        <a
                          href="mailto:info@roersoppers.nl"
                          className="text-blue-600 hover:text-blue-700 font-medium block mb-1 transition-colors"
                        >
                          info@roersoppers.nl
                        </a>
                        <a
                          href="mailto:admin@roersoppers.nl"
                          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          Ledenadministratie: admin@roersoppers.nl
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#3b82f6]/10 p-3">
                        <div className="h-6 w-6 text-[#3b82f6] flex items-center justify-center font-bold text-lg">
                          €
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg mb-1">
                          Bankgegevens
                        </p>
                        <p className="text-gray-600 font-mono">
                          NL66RABO0121496120
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[#3b82f6]/10 p-3">
                        <Clock className="h-6 w-6 text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg mb-3">
                          Trainingstijden
                        </p>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between items-center py-1">
                            <span className="font-medium">Maandag:</span>
                            <span className="font-mono">18:30 - 20:00</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-medium">Dinsdag:</span>
                            <span className="font-mono">18:30 - 20:30</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-medium">Woensdag:</span>
                            <span className="font-mono">18:30 - 20:00</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-medium">Donderdag:</span>
                            <span className="font-mono">18:30 - 22:30</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-medium">Zaterdag:</span>
                            <span className="font-mono text-sm">
                              08:00 - 09:00, 12:00 - 13:15
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Locatie
                </h3>
                <p className="text-gray-600">Vind ons op de kaart</p>
              </div>
              <div className="relative aspect-[16/9] lg:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.0054355526755!2d6.024000826205162!3d51.16162654689474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b36d6256c4b5%3A0xda9dce6454d5ad0b!2sFeel%20Fit%20Center%20Roerdalen!5e0!3m2!1snl!2snl!4v1742898912886!5m2!1snl!2snl"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Ons Bestuur
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                name: "Charles Bos",
                role: "Voorzitter",
                email: "voorzitter@roersoppers.nl",
              },
              {
                name: "Koen Wijnands",
                role: "TC & Trainerszaken",
                email: "tc@roersoppers.nl, trainers@roersoppers.nl",
              },
              {
                name: "Joep Thewissen",
                role: "Penningmeester",
                email: "penningmeester@roersoppers.nl",
              },
              {
                name: "Jeroen Meuleners",
                role: "Algemeen lid & Basisinformatie",
                email: "info@roersoppers.nl",
              },
              {
                name: "Saskia Ramakers",
                role: "Algemeen lid & PR",
                email: "pr@roersoppers.nl",
              },
              {
                name: "Marleen Schmitz",
                role: "Ledenadministratie",
                email: "admin@roersoppers.nl",
              },
              {
                name: "Nicole Janssen",
                role: "Ledenadministratie",
                email: "admin@roersoppers.nl",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <a
                  href={`mailto:${member.email.split(",")[0].trim()}`}
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  <Mail className="mr-1 h-4 w-4" />
                  {member.email.split(",")[0].trim()}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-gray-200 bg-white [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-gray-900">
                  <h3 className="font-medium">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-gray-200 px-6 pb-6 pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
