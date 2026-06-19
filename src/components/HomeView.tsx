/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Building2, 
  ArrowRight, 
  Compass, 
  Factory, 
  Award, 
  ShieldAlert, 
  Users, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  SquareCheck, 
  Hammer,
  HelpCircle
} from "lucide-react";
import { PageType, Project } from "../types";

interface HomeViewProps {
  setActiveTab: (tab: PageType) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  // 3 high-quality highlight projects
  const highlightedProjects: Project[] = [
    {
      id: "proj-1",
      name: "Toshkent City Skygardens",
      category: "commercial",
      location: "Toshkent shahri, O'zbekiston",
      description: "34 qavatli ko'p tarmoqli osmono'par bino, seysmik bardoshli monolit-ramali poydevor bilan jihozlangan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB327I7r8aOBpu0qf3iiYtYZvwpQUUu3Zwc1l2bLE0_44YmLO09X_FpfwHT5D68uXhR8RQAoJpsKb5y-FxM9dVrWx_VhJDtaRcupEPyDPG4I3azOuzemaNpwwuR7dSH0hzfzzDvuHxlae8mbJ5dWLCcO5rf_SftuXD9h1XCfZYC2DaOHWcki81T-2tSbYL-MKghwfM1KAr5gfacAqdVn4dfUaV-Wsg-yuXN_QA98aOk59Qt3PEfedIAOQoLoB-qFmgiVhHyYH_aIDN6",
      status: "completed",
      statusText: "Tugatilgan",
      stats: [
        { label: "Balandligi", value: "142 m" },
        { label: "Seysmik chidamlilik", value: "9 ball+" }
      ],
      completionPercent: 100
    },
    {
      id: "proj-2",
      name: "Buxoro Zamonaviy Milliy Kottej",
      category: "residential",
      location: "Buxoro, O'zbekiston",
      description: "Milliy g'isht uslubi va zamonaviy eko-texnologiyalarga ega bo'lgan 2 qavatli hashamatli villa konstruksiyasi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtSXbEUDiJYBwCb4ej6Uk-5yISP_mQ7NiminDhCojHSBvMUncckhTAU6zQW0sl90UoSqnJiUeG1QVp_rgyqs83q8k26LCkIm0EUno8s-HUczqGmObWwVkOxbekpTee-rBT7qAT89ZDlKeR8a5O2FB3REyJWWDQzRb2NjWQ3hXpxU1DP-5IelUEKJd8j-UgeSXc9rdgREmYIAQnla5dGHiFzK3V4fJGuPUB9lt4q-ScU68Dt8MC25US4ni0HN9KoofoNS2DQ5C8uQ8t",
      status: "ongoing",
      statusText: "Qurilish Davom Etmoqda",
      stats: [
        { label: "Yer maydoni", value: "450 m²" },
        { label: "Tayyorlik darajasi", value: "85%" }
      ],
      completionPercent: 85
    },
    {
      id: "proj-3",
      name: "Sergeli Industrial Ombor Majmuasi",
      category: "industrial",
      location: "Toshkent (Sergeli tumani)",
      description: "Og'ir va o'ta yuk ko'taruvchi zamin dizayni, sendvich panelli qoplamalar va prefabrik metall elementlar.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoPOUvqYuWwC2RMq8g5Hz2uuVjHxd5FFJZOiUFVsbBGS191Uwc_PnlVDvuY6x2WvcEIAvZsTf8BTLDVcr-t6n9rnjzGv4Dquc0Zn8wrQ9JHQ9MbQTs2Lb0s6si6AG5r2LSY0MNz2yFWGcCq4g1xcBX3Mcm1hjZqFj6bCfrIoJeXZCk8EM6GSNiYne1db5AOj2bdjkMHuxc6tpZ4ZE0yX7u4rDF-PmcXLB0ObUE3PLC1o6KTabN8tfk-pERt3EqqeNJ2kWoWmh5272y",
      status: "completed",
      statusText: "Tugatilgan",
      stats: [
        { label: "Ombor maydoni", value: "1,200 m²" },
        { label: "Yuk sig'imi", value: "15 t/m²" }
      ],
      completionPercent: 100
    }
  ];

  return (
    <div className="bg-zinc-950 font-sans text-white min-h-screen" id="home-view-container">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32" id="hero-section">
        {/* Background Grid Pattern of construction feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Yellow-Orange ambient glow circle */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Left intro text info */}
            <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-block">
              {/* Top luxury badge */}
              <div className="inline-flex items-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 hover:border-amber-500/30 transition-all duration-300">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-widest text-zinc-300 uppercase">
                  Biz mukammallikni loyihalashtiramiz va kelajakni quramiz
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase leading-none font-sans">
                Seysmik Xavfsiz <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Zamonaviy Qurilish
                </span> <br />
                Va Premium Loyihalash
              </h1>

              {/* Pitch */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-sans font-normal leading-relaxed">
                STRUCTURA - O'zbekistondagi eng talabchan arxitektura va muhandislik masalalariga professional yechim. Bizning binolarimiz kamida 9 ballik zilzilalarga bardoshli qilib, zamonaviy texnologiyalar va tajribali quruvchilar yordamida yaratiladi.
              </p>

              {/* Buttons/CTAs */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <button
                  onClick={() => setActiveTab("estimator")}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-500 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold px-7 py-4 rounded-xl text-base tracking-wide transition-all shadow-[0_4px_25px_rgba(242,152,19,0.25)] hover:shadow-[0_4px_30px_rgba(242,152,19,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>AI-Estimator Smetasini Hisoblash</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() => setActiveTab("services")}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 px-7 py-4 rounded-xl text-base tracking-wide font-medium text-zinc-200 transition-all hover:text-white"
                >
                  Xizmatlar & Narxlar
                </button>
              </div>

              {/* Small trust features list */}
              <div className="grid grid-cols-2 gap-4 pt-6 text-sm font-sans border-t border-zinc-900 text-zinc-400">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span>ISO 9001 Sifat Sertifikati</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span>Kafolatlangan qurilish muddatlari</span>
                </div>
              </div>
            </div>

            {/* Right Photo Illustration */}
            <div className="lg:col-span-5 relative" id="hero-image-block">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                {/* Visual Glow Under the Image Frame */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 opacity-25 blur-lg transition duration-1000 group-hover:opacity-100" />
                
                {/* Structural Image Frame */}
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-2">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXu3_RyJxi7JfaZ8i0BH6KNx-AgDkm_raWawDFD8pb2bUFcbt8tsi4sw511q7a1uGHi1mf-1V1TNrbBlFduoti3B9SA3ms-ugyIvfHYkbDQDcCsEciac1j-n9FH9DW5JHx3eqBCRQRUgdyea9BcAKzwfwhZE2SiFdUed7O4Gd2vBZcnaBin0gEWc4FM19nQDfrHrFND-I1XICSQNadoLkbKrlpqNbVoIoKM8OjRpyTnQK-90lqFnviBCJey64QNijOMaRl2trEFDCnsh"
                    alt="Structura Construction Site"
                    referrerPolicy="no-referrer"
                    className="aspect-square w-full rounded-xl object-cover grayscale opacity-90 brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Floating badge inside picture */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-md p-4 text-left">
                    <p className="font-mono text-[10px] tracking-widest text-amber-500">HAQIQIY SINOVDAN O'TGAN</p>
                    <h3 className="font-sans text-sm font-bold text-white mt-0.5">Seysmik Mustahkamlik Normasi (ShNQ)</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Structured Bento Grid Statistics Panel */}
      <section className="border-t border-b border-zinc-900 bg-zinc-950 px-6 py-16 sm:px-8" id="stats-bento">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Stat Item 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Clock className="h-6 w-6" />
              </div>
              <p className="text-4xl font-extrabold tracking-tight text-white mt-6 font-mono">10+</p>
              <h4 className="text-sm font-semibold text-zinc-300 mt-2">Yillik mukammal tajriba</h4>
              <p className="text-xs text-zinc-500 mt-2 font-normal">Sohadagi xavfsiz va ishonchli xizmat.</p>
            </div>

            {/* Stat Item 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Building2 className="h-6 w-6" />
              </div>
              <p className="text-4xl font-extrabold tracking-tight text-white mt-6 font-mono">142+</p>
              <h4 className="text-sm font-semibold text-zinc-300 mt-2">Muvaffaqiyatli loyihalar</h4>
              <p className="text-xs text-zinc-500 mt-2 font-normal">Turar-joy va yirik sanoat inshootlari.</p>
            </div>

            {/* Stat Item 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-4xl font-extrabold tracking-tight text-white mt-6 font-mono">98%</p>
              <h4 className="text-sm font-semibold text-zinc-300 mt-2">Mijoz mamnuniyati darajasi</h4>
              <p className="text-xs text-zinc-500 mt-2 font-normal">Mutaxassis muhandislar va zamonaviy xizmat.</p>
            </div>

            {/* Stat Item 4 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-4xl font-extrabold tracking-tight text-white mt-6 font-mono">100%</p>
              <h4 className="text-sm font-semibold text-zinc-300 mt-2">ShNQ muvofiqligi va litsenziya</h4>
              <p className="text-xs text-zinc-500 mt-2 font-normal">Davlat qurilish me'yorlariga 100% muvofiqlik.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Structural Workflow Steps */}
      <section className="py-20 md:py-24 bg-zinc-950 text-left px-6 sm:px-8" id="workflow">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase">
              PROFESSIONAL ISH USLUBIMIZ
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl uppercase text-white">
              G'oyadan To Kalit Topshirishgacha Bo'lgan Bosqichlar
            </h3>
            <p className="text-zinc-400">
              Biz loyihaning har bitta qadamida muhandislik aniqligini, xarajatlar shaffofligini va eng yuqori sifat nazoratini ta'minlaymiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 relative">
              <div className="absolute top-6 right-6 text-3xl font-bold font-mono text-zinc-800">01</div>
              <Compass className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-2 uppercase">Loyiha & Arxitektura</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Ehtiyoj va istaklaringiz asosida 3D arxitektura dizaynini ishlab chiqamiz. O'zbekiston ShNQ qonun-qoidalariga muvofiq, poydevordan boshlab barcha hisob-kitoblar va ruxsatnomalarga hisob burchaklari belgilab olinadi.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 relative">
              <div className="absolute top-6 right-6 text-3xl font-bold font-mono text-zinc-800">02</div>
              <TrendingUp className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-2 uppercase">Smeta & Materiallar muhandisligi</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Kerakli barcha xom-ashyo (sement, tog' jinslari, metall armaturalar, fasad oynalari) hisoblanib, aniq shaffof smeta tuziladi. Hech qanday yashirin xarajatlarsiz materiallar zaxirasi kiritiladi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 relative">
              <div className="absolute top-6 right-6 text-3xl font-bold font-mono text-zinc-800">03</div>
              <Hammer className="h-10 w-10 text-amber-500 mb-6" />
              <h4 className="text-lg font-bold text-white mb-2 uppercase">Qurilish & Texnik Nazorat</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Tajribali muhandis-prorablar boshchiligida qurilish montaj ishlari olib boriladi. Beton markasi, mustahkamligi va armatura to'rlarining qatlamlari har bir bosqichida laboratoriya nazoratidan o'tadi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Display Core Projects Section */}
      <section className="py-20 md:py-24 bg-zinc-950 border-t border-zinc-900 text-left px-6 sm:px-8" id="highlighted-projects-gallery">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase">
                GALEREYANING DOIMIY MAG'ZI
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl uppercase text-white">
                Tanlangan Loyihalar Arxivi
              </h3>
            </div>
            <button
              onClick={() => setActiveTab("projects")}
              className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-amber-500 hover:text-amber-400 group transition-all"
            >
              <span>Barcha loyihalar va portfolio</span>
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-zinc-850 transition-all duration-300 flex flex-col h-full"
                id={`highlight-proj-${project.id}`}
              >
                {/* Visual Image container with dark scale and transitions */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-all duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Status label top-right */}
                  <span className={`absolute top-4 right-4 rounded px-2.5 py-1 text-[10px] font-bold font-mono uppercase tracking-widest ${
                    project.status === "completed" 
                      ? "bg-zinc-950/80 text-amber-400 border border-amber-500/20" 
                      : "bg-amber-500 text-zinc-950"
                  }`}>
                    {project.statusText}
                  </span>
                </div>

                {/* Info Box */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-500">
                    {project.category === "commercial" ? "Tijorat / Ofis" : project.category === "residential" ? "Turar-joy / Villa" : "Sanoat / Logistika"}
                  </span>
                  
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-amber-400 transition-colors uppercase">
                    {project.name}
                  </h4>

                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Micro stats lists */}
                  {project.stats && (
                    <div className="mt-4 pt-4 border-t border-zinc-900 grid grid-cols-2 gap-2 text-xs font-mono">
                      {project.stats.map((st, sidx) => (
                        <div key={sidx} className="space-y-0.5">
                          <p className="text-zinc-650 text-[10px] uppercase">{st.label}</p>
                          <p className="text-zinc-200 font-bold">{st.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Completion bar indicator */}
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                      <span>Metraj / Tayyorlik</span>
                      <span>{project.completionPercent}%</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 transition-all duration-1000" 
                        style={{ width: `${project.completionPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom Promising CTA featuring Estimate launch */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 relative border-t border-zinc-900" id="smart-advisor-cta">
        <div className="absolute inset-0 bg-grid-white opacity-5" />
        <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 animate-bounce">
            <Hammer className="h-6 w-6" />
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white uppercase max-w-2xl mx-auto leading-tight">
            Smetangizni Sun'iy Intellekt Yordamida Hisoblang
          </h3>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Hech qanday qo'ng'iroqlarsiz va kutisiz – aqlli "AI Smeta Generator" moduli orqali bir necha soniya ichida milliy me'yorlarga (ShNQ) asoslangan modullarni, narxlarni va materiallar tavsifini oling.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab("estimator")}
              className="bg-amber-500 text-zinc-950 hover:bg-amber-400 font-bold px-8 py-4 rounded-xl text-base tracking-wide transition-all shadow-[0_4px_25px_rgba(245,158,11,0.25)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.4)]"
            >
              Uskunani ishga tushirish (Bepul)
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className="border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              ShNQ standartlari va FAQ
            </button>
          </div>

          <p className="text-[11px] font-mono text-zinc-500">
            *Hisob-Smeta O'zbekistonning barcha viloyatlaridagi o'rtacha m3 beton, metall armatura va g'isht narxlaridan kelib chiqib aniqlanadi.
          </p>
        </div>
      </section>
    </div>
  );
}
