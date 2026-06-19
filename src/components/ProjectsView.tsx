/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  X, 
  Briefcase, 
  ShieldCheck, 
  Compass, 
  HardHat, 
  CheckCircle2, 
  Eye,
  Calendar,
  Layers
} from "lucide-react";
import { Project } from "../types";

export default function ProjectsView() {
  const allProjects: Project[] = [
    {
      id: "p-sky",
      name: "Toshkent City Skygardens",
      category: "commercial",
      location: "Toshkent shahri, Amir Temur ko'chasi",
      description: "34 qavatli ko'p tarmoqli osmono'par bino, seysmik barqaror monolit-karkas poydevori bilan cheklangan.",
      longDescription: "Skygardens loyihasi Toshkent markazida yirik muhandislik yutug'i hisoblanadi. Unda har bir qavat orasiga maxsus seysmik amortizator kranlar hamda devorlar uchun elastik dilatatsion choklar o'rnatilgan. Eng yuqori M450 markali portlend beton to'rlaridan foydalanib quyilgan bo'lib, inshoot davlat ekspertizasi tomonidan 9.5 ballzilzilaga to'liq bardoshli deb topilgan. Fasad qismidan quyosh nurining 60% qismini qaytaruvchi uch qavatli germetik oynalar joy olgan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB327I7r8aOBpu0qf3iiYtYZvwpQUUu3Zwc1l2bLE0_44YmLO09X_FpfwHT5D68uXhR8RQAoJpsKb5y-FxM9dVrWx_VhJDtaRcupEPyDPG4I3azOuzemaNpwwuR7dSH0hzfzzDvuHxlae8mbJ5dWLCcO5rf_SftuXD9h1XCfZYC2DaOHWcki81T-2tSbYL-MKghwfM1KAr5gfacAqdVn4dfUaV-Wsg-yuXN_QA98aOk59Qt3PEfedIAOQoLoB-qFmgiVhHyYH_aIDN6",
      status: "completed",
      statusText: "Metraj tugallangan",
      stats: [
        { label: "Balandligi", value: "142 metr" },
        { label: "Beton hajmi", value: "48,500 m³" },
        { label: "Armatura markasi", value: "A500C (Rossiya)" },
        { label: "Loyihalash", value: "BIM 3D Model" }
      ],
      completionPercent: 100
    },
    {
      id: "p-villa",
      name: "Buxoro Zamonaviy Milliy Kottej",
      category: "residential",
      location: "Buxoro viloyati, tarixiy zona atrofi",
      description: "Milliy g'isht va naqshinkor uslubda qurilgan barcha qulayliklarga ega premium dacha-residence majmuasi.",
      longDescription: "Buxoroning iqlim sharoitlarini (yozda haddan tashqari issiq, qishda qattiq sovuq) inobatga olgan holda loyihalashtirilgan. Devorlar an'anaviy pishgan g'ishtdan ikki qatlamli qilib qilingan va o'rtasida mineral paxta izolyatsiyasi mavjud. Poydevor namlik va grunt suvlari ko'tarilishining oldini olish uchun ilg'or bitumli gidro-membranalar bilan qoplangan. Hovli va ichki qismida o'zbek milliy me'morchilik san'ati zamonaviy bionik dizayn bilan singdirilgan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtSXbEUDiJYBwCb4ej6Uk-5yISP_mQ7NiminDhCojHSBvMUncckhTAU6zQW0sl90UoSqnJiUeG1QVp_rgyqs83q8k26LCkIm0EUno8s-HUczqGmObWwVkOxbekpTee-rBT7qAT89ZDlKeR8a5O2FB3REyJWWDQzRb2NjWQ3hXpxU1DP-5IelUEKJd8j-UgeSXc9rdgREmYIAQnla5dGHiFzK3V4fJGuPUB9lt4q-ScU68Dt8MC25US4ni0HN9KoofoNS2DQ5C8uQ8t",
      status: "ongoing",
      statusText: "Nishonlash arafasida",
      stats: [
        { label: "Yer maydoni", value: "450 m²" },
        { label: "Qavatlar soni", value: "2 qavat" },
        { label: "Isitish tizimi", value: "Kombinatsiyalangan" },
        { label: "Sifat kafolati", value: "25 yil" }
      ],
      completionPercent: 88
    },
    {
      id: "p-indus",
      name: "Sergeli Industrial Ombor Majmuasi",
      category: "industrial",
      location: "Toshkent sh., Sergeli tumani",
      description: "Biznes yuritish va yirik zaxiralar uchun og'ir sanoat pol tizimiga ega bo'lgan zamonaviy sendvich ombor.",
      longDescription: "Ushbu sanoat inshooti yirik xalqaro yuk tashish kompaniyasi buyurtmasi asosida yig'ilgan. Inshoot barcha yuk ko'taruvchi qismlari yuqori markali po'lat metall profillardan (fermalardan) tashkil topgan. Zaminga beton quyishda og'ir yuklar kuchi hisoblanib, kvarts va polimer qorishmali 'toping' pol tizimi toshdek mustahkam qorilgan bo'lib, uning yuzasida chang to'planmaydi (antistatik). Devorlar yong'inga 120 daqiqagacha chidamli tosh paxtali sendvich panellardan qilingan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoPOUvqYuWwC2RMq8g5Hz2uuVjHxd5FFJZOiUFVsbBGS191Uwc_PnlVDvuY6x2WvcEIAvZsTf8BTLDVcr-t6n9rnjzGv4Dquc0Zn8wrQ9JHQ9MbQTs2Lb0s6si6AG5r2LSY0MNz2yFWGcCq4g1xcBX3Mcm1hjZqFj6bCfrIoJeXZCk8EM6GSNiYne1db5AOj2bdjkMHuxc6tpZ4ZE0yX7u4rDF-PmcXLB0ObUE3PLC1o6KTabN8tfk-pERt3EqqeNJ2kWoWmh5272y",
      status: "completed",
      statusText: "Tugallangan",
      stats: [
        { label: "Kengligi", value: "1,200 m²" },
        { label: "Hajm balandligi", value: "11.2 metr" },
        { label: "Konstruksiya turi", value: "Yengil Po'lat" },
        { label: "Ish burchagi", value: "0.00 darajada tekis" }
      ],
      completionPercent: 100
    },
    {
      id: "p-lobby",
      name: "Tashkent City Lobby Muhandisligi",
      category: "design",
      location: "Toshkent, Shayxontohur tumani",
      description: "Hashamatli biznes qabulxonasi (lobby) va atrium qismining konstruktiv dizayn montaj ishlari.",
      longDescription: "Ushbu loyihada ulkan shaffof atrium gumbazi ostida barpo qilingan osma metall yo'lakchalar va lift ballonlari qurilgan. Ichki muhandislik xavfsizligini ta'minlash uchun xalqaro seysmik standartlar va oyna tebranish darajalari hisoblangan. Har bir o'rnatilgan metall tizim yashirin anker murvatlari yordamida monolitga mahkamlangan bo'lib, bino tebranganda unga mutlaqo zarar berish imkonini bermaydi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR9cSKmM5FQr_ATRxmDeBbgpUUMDzkGC-L_bkNSPGoyWc17cF--rCgf2gVI2e36DIS9cj5W-sgnTotT9oBBLhMLMBcVBt9SIHD4UFqhH_69IVL2rQzh6CKoxR3ms9En3pWcrLxxQrcm17bBH1FfcTs4vGmsxOsITQISH4H8DJmLo-vk1W0kb1J-NZ1p58q7v7IuKG4SQnm8fI3FWQNsNS8jkDymNw-oJ5hBhxfYWyB-RRInpxIPrDqzSO067krsd3dlp3REf7quzWD",
      status: "completed",
      statusText: "Jarayon tugallangan",
      stats: [
        { label: "Balandligi", value: "18.5 metr" },
        { label: "Oyna qalinligi", value: "12 mm (Tempered)" },
        { label: "Uslub ko'rinishi", value: "High-Tech Bionik" },
        { label: "Yoritgich quvvati", value: "Eko LED aqlli tizim" }
      ],
      completionPercent: 100
    },
    {
      id: "p-office",
      name: "Yunusobod Premium Ofis Markazi",
      category: "commercial",
      location: "Toshkent, Yunusobod metro yaqinida",
      description: "Aerodinamik va energiya tejamkor shamollatish texnologiyalariga ega barcha qulayliklarga ega 12 qavatli biznes bino.",
      longDescription: "Biznes egalari uchun eng qulay va qishin-yozin havo almashinuvchi maxsus rekuperativ havo tizimiga ega ofis inshooti. Binoning yuk ko'taruvchi karkasi maxsus tayyorlangan M400 markali quyma temir-betondan iborat. Tashqi qavati vent-fasad texnologiyasi bilan qoplangan bo'lib, tashqi iqlim shovqinini deyarli 95% gacha yutib yuboradi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0GWQTT9MrAazK-hoOnnrbZQHVFUddnjo3P9DJNXw2tRm6eB5ypNAb9taB9r2JlyyBdNSrbTejETlQYoFoI6CFFfIDY83wjN_0_I9YQukzrr8SZsjP_YwbPMGSzYEFSQr-MyeD5Y6HBFYpQowsjUdFMINV4u6nzx63Ataxl61pa9U1jBgIpnPd3wlZWtfzPelpgPVmUXdAEb5pzfNugCNCsEM57CP7smAZIFQzrMqJsgU8QIBzRg1IdSWSEArAFQ5zfvHKBnUersxX",
      status: "ongoing",
      statusText: "Fasad ishlari zaminida",
      stats: [
        { label: "Qavatlar soni", value: "12 qavat" },
        { label: "Avtoturargoh", value: "150 o'rin (Yerarsti)" },
        { label: "Seysmik quvvat", value: "9 ball barqaror" },
        { label: "Energo tejam", value: "A+ daraja" }
      ],
      completionPercent: 78
    },
    {
      id: "p-green",
      name: "Samarqand Green Valley Rezidentsiya",
      category: "residential",
      location: "Samarqand shahri, Ko'ksaroy maydoni atrofi",
      description: "Ekologik barqaror, o'zining quyosh fotoelektr panellari bilan jihozlangan ko'p qavatli yashil premium kvartiralar.",
      longDescription: "Samarqandda barpo qilinayotgan bu ko'p korpusli turar-joy majmuasi to'liq yashil maydon ekotizimida ishlab chiqilgan. Tom qismlarida jami 250 kVt quvvatga ega quyosh batareyalari joylashtirilib, uylarning umumiy yo'laklari va hovlisini bepul elektr bilan uzoq muddat ta'minlaydi. Har bir xonadonning oynasida avtomatik quyosh to'suvchi jalyuzilar kiritilgan bo'lib, xonaning ichki mikromuhiti maxsus monitoring qilinadi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzVfa0Bq6A8M68B10CVL3V5S7Miuo0GkPR8QLak6pVWYCMqGDH5ZCFJhnoqnbKIFkBCmZVEYY7gNlzBFAGu7EtKekxefqd-x60liP6kNOhWz1hm9C8CjYV2owx7aBcXriNXT_M_Lsdd20o213xGjkfECHKYABTJ0_x2aNBeVCm-CmRF1fOD3B_2HYh1eLWCutEO6CAwCO7MNKr_PcQgwDG-w59ctgwgJh0Tc-JxeVIB9dTAWl9p3ds2ue6FJ_FuoQAOHKFxi0rnhm7",
      status: "ongoing",
      statusText: "G'isht quyish jarayonida",
      stats: [
        { label: "Korpuslar soni", value: "4 ta mustaqil" },
        { label: "Kvartiralar", value: "180 oila uchun" },
        { label: "Quyosh maydoni", value: "650 m² panellar" },
        { label: "Kafolat", value: "50 yillik bino" }
      ],
      completionPercent: 55
    }
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter & Search Logic
  const filteredProjects = allProjects.filter((proj) => {
    const matchesCategory = activeFilter === "all" || proj.category === activeFilter;
    const matchesSearch = proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-zinc-950 font-sans text-white min-h-screen" id="projects-view-container">
      
      {/* Search Header and Banner */}
      <section className="relative pt-16 pb-12 border-b border-zinc-900" id="projects-hero">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-6">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase">
            Haqiqiy narsalar so'zlaydi — Bizning portfoliomiz
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            Xavfsiz va Kuchli Konstruktiv Loyihalarimiz
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Mamlakatimiz bo'ylab muvaffaqiyatli topshirilgan yoki hozirda qurilishi jadallik bilan davom etayotgan yirik muhandislik binolari ro'yxati.
          </p>

          {/* Filter Toolbar / Search */}
          <div className="mx-auto max-w-3xl pt-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Loyihalar nomi, shahar yoki kalit so'z bo'yicha qidirish..."
                className="w-full bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-zinc-550 outline-none transition-all shadow-md"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center" id="filter-buttons">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === "all"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850"
                }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => setActiveFilter("residential")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === "residential"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850"
                }`}
              >
                Turar-joy
              </button>
              <button
                onClick={() => setActiveFilter("commercial")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === "commercial"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850"
                }`}
              >
                Tijorat
              </button>
              <button
                onClick={() => setActiveFilter("industrial")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === "industrial"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850"
                }`}
              >
                Sanoat
              </button>
              <button
                onClick={() => setActiveFilter("design")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === "design"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850"
                }`}
              >
                Dizayn / Atrium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Results */}
      <section className="py-16 mx-auto max-w-7xl px-6 sm:px-8" id="projects-grid">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 space-y-4 border border-zinc-900 rounded-2xl bg-zinc-900/10">
            <Layers className="h-12 w-12 text-zinc-700 mx-auto" />
            <p className="text-zinc-400 font-semibold text-lg">Hech qanday mos loyiha topilmadi.</p>
            <p className="text-zinc-650 text-xs">Qidiruv kalit so'zini yoki filtr toifalarini o'zgartirib ko'ring.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 hover:border-zinc-800 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
                id={`card-${project.id}`}
              >
                {/* Image panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-102"
                  />
                  {/* Status */}
                  <span className={`absolute top-4 right-4 rounded px-2.5 py-1 text-[10px] font-bold font-mono tracking-widest uppercase ${
                    project.status === "completed" 
                      ? "bg-zinc-950/80 text-amber-400 border border-amber-500/20" 
                      : "bg-amber-500 text-zinc-950"
                  }`}>
                    {project.statusText}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-amber-500">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {project.location.split(",")[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-1.5 uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-zinc-900 flex justify-between items-center text-xs">
                    <span className="font-mono text-zinc-500">Tayyorlik: {project.completionPercent}%</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold hover:text-amber-400">
                      <span>Batafsil ma'lumot</span>
                      <Eye className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Exquisite Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950/95 shadow-2xl p-6 sm:p-10 text-left space-y-6"
            id="project-detail-modal"
          >
            {/* Close Button top-right */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-850 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700"
              aria-label="Close detail modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header section in modal */}
            <div className="space-y-2 pr-12">
              <div className="inline-flex items-center space-x-2 rounded-lg bg-amber-500/10 px-3 py-1 border border-amber-500/20 text-xs font-mono text-yellow-500">
                Loyiha guvohnomasi • {selectedProject.category.toUpperCase()}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                {selectedProject.name}
              </h2>
              <p className="text-zinc-500 text-sm flex items-center gap-1.5 font-normal">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0" /> {selectedProject.location}
              </p>
            </div>

            {/* Large Picture Showcase */}
            <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover grayscale opacity-90"
              />
              <div className="absolute top-4 left-4 rounded-xl bg-zinc-950/90 border border-zinc-800 px-4 py-2 text-xs font-mono">
                <span className="text-zinc-500 uppercase">QURILISH STATUSI:</span>{" "}
                <span className="text-amber-400 font-bold">{selectedProject.statusText}</span>
              </div>
            </div>

            {/* In-depth descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
              
              {/* Detailed engineering info (8 cols) */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="font-sans text-sm font-bold tracking-wider text-white uppercase border-b border-zinc-900 pb-2">
                  Muhandislik va Konstruktiv Tafsilotlar
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {selectedProject.longDescription}
                </p>

                {/* Additional high specs bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 pt-2">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    <span>Seysmik chidamlilik: 9.0 - 9.5 ball ballistik kafolat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    <span>O'zbekiston ShNQ va qurilish standart sertifikati</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    <span>100% monolit-ramali yuk ko'tarish tayanmoqlari</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-amber-500 shrink-0" />
                    <span>Iqlimga mos rekuperatsiyalangan shamollatish tizimi</span>
                  </div>
                </div>
              </div>

              {/* Technical key metrics box (4 cols) */}
              <div className="md:col-span-4 bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 h-fit space-y-4">
                <h4 className="text-xs font-bold tracking-wider text-zinc-400 uppercase font-mono">
                  LOYIHA PARAMETRLARI
                </h4>

                {selectedProject.stats && (
                  <div className="space-y-4">
                    {selectedProject.stats.map((st, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{st.label}</p>
                        <p className="text-sm font-bold text-white">{st.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Progress bar info inside box */}
                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">TAYYORLIK HOLATI</p>
                  <p className="text-lg font-mono font-bold text-amber-400">{selectedProject.completionPercent}%</p>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                      style={{ width: `${selectedProject.completionPercent}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom action bar */}
            <div className="pt-6 border-t border-zinc-900 flex justify-end gap-3 font-medium text-sm">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-white transition-all cursor-pointer"
              >
                Yopish
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
