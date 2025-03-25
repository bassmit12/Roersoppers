import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-12">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3 max-w-7xl mx-auto w-full">
          <div className="text-center md:text-right md:pr-16">
            <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-blue-400 transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/wedstrijden" className="hover:text-blue-400 transition-colors">
                  Wedstrijden
                </Link>
              </li>
              <li>
                <Link href="/nieuws" className="hover:text-blue-400 transition-colors">
                  Nieuws
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="mb-6 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li>Zwembad De Roerdomp</li>
              <li>Achilleslaan 2a</li>
              <li>6042 JV Roermond</li>
              <li>
                <a href="mailto:info@roersoppers.nl" className="hover:text-blue-400 transition-colors">
                  info@roersoppers.nl
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left md:pl-16">
            <h4 className="mb-6 text-lg font-semibold text-white">Social Media</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} De Roersoppers. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}

