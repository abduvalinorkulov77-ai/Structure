/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HardHat, MapPin, Phone, Mail, Clock, Hammer, ShieldCheck, Award } from "lucide-react";
import { PageType } from "../types";

interface FooterProps {
  setActiveTab: (tab: PageType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950 text-zinc-400" id="footer-main">
      {/* Structural Accent Top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700" />

      {/* Primary Footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Info block */}
          <div className="space-y-6" id="footer-brand-sec">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-zinc-950">
                <HardHat className="h-5 w-5" />
              </div>
              <span className="font-sans text-xl font-bold tracking-wider text-white uppercase">
                Structura
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              O'zbekistonda 10 yildan ortiq vaqt davomida yuqori sifatli va xavfsiz turar-joy, tijorat va sanoat binolarini muhandislik me'yorlariga (ShNQ) muvofiq ravishda barpo etib kelayotgan yetakchi qurilish kompaniyasi.
            </p>
            {/* Accreditation indicators */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-1 hover:text-amber-500 transition-colors cursor-help group">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                <span className="text-xs font-mono">ISO 9001</span>
              </div>
              <span className="text-zinc-800">|</span>
              <div className="flex items-center space-x-1 hover:text-amber-500 transition-colors cursor-help group">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="text-xs font-mono">Litsenziyalangan (ShNQ)</span>
              </div>
            </div>
          </div>

          {/* Quick Nav links */}
          <div className="space-y-5" id="footer-links-sec">
            <h3 className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
              Tezkor Bo'limlar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab("home")}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  &rarr; &nbsp; Bosh sahifa
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("services")}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  &rarr; &nbsp; Xizmatlarimiz va F.A.Q.
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("projects")}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  &rarr; &nbsp; Ko'rgazmali Loyihalar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("estimator")}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  &rarr; &nbsp; AI Avtomatik Smeta
                </button>
              </li>
            </ul>
          </div>

          {/* Key services list */}
          <div className="space-y-5" id="footer-services-sec">
            <h3 className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
              Xizmatlarimiz
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>• Sifatli Turar-joy Binolari</li>
              <li>• Premium Tijorat Ofislari</li>
              <li>• Og'ir Sanoat Zavod & Omborlar</li>
              <li>• Zamonaviy Me'moriy Loyihalash</li>
              <li>• Konstruktiv Muhandislik & Seysmik mustahkamlash</li>
            </ul>
          </div>

          {/* Local contact details */}
          <div className="space-y-5" id="footer-contact-sec">
            <h3 className="font-sans text-sm font-semibold tracking-wider text-white uppercase">
              Bog'lanish Koordinatalari
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span className="text-zinc-300">
                  O'zbekiston, Toshkent sh., Amir Temur shox ko'chasi, 108A uy (Tashkent City yaqinida)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="tel:+998712000210" className="text-zinc-300 hover:text-amber-400 transition-colors">
                  +998-71-200-02-10
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@structura.uz" className="text-zinc-300 hover:text-amber-400 transition-colors">
                  info@structura.uz
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-500" />
                <span className="text-zinc-300 font-mono text-xs">
                  Dush - Shan: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower bar */}
        <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
          <p>&copy; {currentYear} STRUCTURA Qurilish MCHJ. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-4">
            <span className="hover:text-zinc-400 cursor-pointer">Maxfiylik Siyosati</span>
            <span>•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Xizmat Ko'rsatish Shartlari</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
