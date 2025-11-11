import * as React from "react"
import { Twitter, Facebook, Instagram, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-slate-300 font-poppins">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 py-16">
        
        {/* Column 1: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us Through</h3>
          <div className="mt-4 space-y-3">
            <p>Dr Geetha Kiran A | CEO</p>
            <p>Email Us on : ceomeriise@mcehassan.ac.in</p>
            <p>Follow Us on Instagram</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Our Infrastructure</a></li>
            <li><a href="#" className="hover:text-white transition-colors">UBA Visit</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Start Ups</a></li>
          </ul>
        </div>

        {/* Column 3: Location */}
        <div>
          <h3 className="text-lg font-semibold text-white">Location:</h3>
          <div className="mt-4 space-y-3">
            <a href="#" className="hover:text-white transition-colors">About ME-RIISE Foundation</a>
            <p>
              <strong className="text-white">Address :</strong> 24F3+69J, Rangoli Halla, Malnad College of Engineering, Hassan, Karnataka 573201
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Socials & Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8">
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Twitter" className="transition-transform hover:scale-110">
              <Twitter className="h-6 w-6 text-sky-500" />
            </a>
            <a href="#" aria-label="Facebook" className="transition-transform hover:scale-110">
              <Facebook className="h-6 w-6 text-blue-600" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
              <Instagram className="h-6 w-6 text-pink-600" />
            </a>
            <a href="#" aria-label="Email" className="transition-transform hover:scale-110">
              <Mail className="h-6 w-6 text-red-600" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110">
              <Linkedin className="h-6 w-6 text-blue-500" />
            </a>
          </div>
          
          {/* Copyright Text */}
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} ME-RIISE FOUNDATION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}