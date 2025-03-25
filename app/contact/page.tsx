import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";
import { Footer } from "@/components/footer";

const faqs = [
  {
    question: "Hoe kan ik lid worden?",
    answer:
      "U kunt lid worden door het online inschrijfformulier in te vullen of door contact op te nemen met onze ledenadministratie. Na ontvangst van uw aanmelding nemen wij contact met u op voor een proefles.",
  },
  {
    question: "Wat zijn de kosten van het lidmaatschap?",
    answer:
      "De contributie is afhankelijk van het type lidmaatschap en het aantal trainingen per week. Neem contact met ons op voor de actuele tarieven.",
  },
  {
    question: "Kan ik eerst een proefles volgen?",
    answer:
      "Ja, we bieden de mogelijkheid om eerst een proefles te volgen. Zo kunt u kennismaken met onze vereniging en bepalen welke groep het beste bij u past.",
  },
  {
    question: "Welke zwemkleding is verplicht?",
    answer:
      "Voor wedstrijdzwemmers is een wedstrijdbadpak of zwembroek verplicht. Voor recreatieve zwemmers volstaat gewone zwemkleding.",
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
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg w-full">
              <div className="p-6 sm:p-8 w-full">
                <div className="mb-8 w-full">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Stuur ons een bericht
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Vul het formulier in en we nemen zo snel mogelijk contact
                    met u op.
                  </p>
                </div>
                <form className="space-y-5 w-full">
                  <div className="grid gap-6 sm:grid-cols-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Naam
                      </label>
                      <Input
                        id="name"
                        placeholder="Uw naam"
                        required
                        className="h-12 w-full border-gray-200 bg-gray-50/50 px-4 placeholder:text-gray-500"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="uw@email.nl"
                        required
                        className="h-12 w-full border-gray-200 bg-gray-50/50 px-4 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Onderwerp
                    </label>
                    <Input
                      id="subject"
                      placeholder="Waar gaat uw bericht over?"
                      required
                      className="h-12 w-full border-gray-200 bg-gray-50/50 px-4 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Bericht
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Schrijf uw bericht hier..."
                      required
                      className="min-h-[180px] resize-none border-gray-200 bg-gray-50/50 w-full px-4 py-3 placeholder:text-gray-500"
                    />
                  </div>
                  <Button className="h-12 w-full bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-colors flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Verstuur bericht
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 w-full">
              <div className="rounded-xl bg-white p-6 sm:p-8 shadow-lg w-full">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Contactgegevens
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#3b82f6]/10 p-3">
                      <MapPin className="h-6 w-6 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adres</p>
                      <p className="mt-1 text-gray-600">
                        Zwembad De Roerdomp
                        <br />
                        Achilleslaan 2a
                        <br />
                        6042 JV Roermond
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#3b82f6]/10 p-3">
                      <Phone className="h-6 w-6 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefoon</p>
                      <p className="mt-1 text-gray-600">+31 (0)6 12345678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#3b82f6]/10 p-3">
                      <Mail className="h-6 w-6 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-mail</p>
                      <p className="mt-1 text-gray-600">info@roersoppers.nl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#3b82f6]/10 p-3">
                      <Clock className="h-6 w-6 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Openingstijden
                      </p>
                      <p className="mt-1 text-gray-600">
                        Maandag t/m vrijdag: 17:00 - 21:00
                        <br />
                        Zaterdag: 09:00 - 12:00
                        <br />
                        Zondag: Gesloten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl bg-white p-6 sm:p-8 shadow-lg w-full">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Locatie
                </h3>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg w-full">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Veelgestelde vragen
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
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
