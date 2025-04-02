import Link from "next/link";
import { Cog } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Cog className="h-6 w-6 text-teal-400" />
              <span className="text-lg font-bold text-white">
                Hooman Mohammadi
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Mechanical Engineer, EIT with Professional Engineers of Ontario
              (PEO), specializing in construction management, estimation, and
              coordination.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-teal-300">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-teal-300">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Mechanical Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Thermal Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Prototyping
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-teal-300 transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hooman Mohammadi. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 sm:mt-0">
            Designed and built by{" "}
            <a
              href="https://amirmousavi.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Amir Mousavi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
