"use client";

import { useTheme } from "@/components/theme-provider";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const { colors } = useTheme();

  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "API", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Community", "Help Center", "Status", "Terms", "Privacy"],
    Connect: ["Twitter", "GitHub", "LinkedIn", "Email", "Discord"],
  };

  return (
    <footer className="border-t border-gray-800/50 py-16 px-4 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundColor: colors.background }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Landing</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Building the future, one line at a time. Create stunning,
              customizable experiences with our modern platform designed for
              developers who demand excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  style={{ backgroundColor: `${colors.primary}20` }}
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: colors.primary }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-6">{category}</h4>
              <nav className="space-y-4">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800/50 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                style={{ focusRingColor: colors.primary }}
              />
              <button
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: colors.primary, color: "white" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
            © {new Date().getFullYear()} Landing. Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by
            Hamoudi Brh.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
