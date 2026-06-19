/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Calculator, 
  Loader2, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Building, 
  Layers, 
  FileText, 
  Coins, 
  ShieldCheck, 
  Hourglass, 
  Zap, 
  RefreshCw, 
  Printer, 
  PhoneCall 
} from "lucide-react";
import { EstimateRequest, EstimateResult } from "../types";

export default function EstimatorView() {
  
  // State for request form
  const [formData, setFormData] = useState<EstimateRequest>({
    buildingType: "Turar-joy ko'p qavatli uy",
    sqm: 120,
    materials: "Reinforced monolithic concrete (Premium temir-beton-monolit)",
    location: "Toshkent shahri (Seysmik yuklama: 8-9 ball)",
    notes: "",
    name: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [loadingPhraseIndex, setLoadingPhraseIndex] = useState(0);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [error, setError] = useState("");

  const loadingPhrases = [
    "Muhandislik arxitektura chizmalari o'rganilmoqda...",
    "ShNQ va qurilish me'yorlari bo'yicha seysmik modullar yuklanmoqda...",
    "Toshkent tovar birjasi armatura va sement portland narxlari tahlil qilinmoqda...",
    "Poydevor va monolit karkas xarajatlar tushumi taxmin qilinmoqda...",
    "Yakuniy muhandislik xulosasi va muddatlari shakllantirilmoqda..."
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const runPhraseCarousel = () => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loadingPhrases.length;
      setLoadingPhraseIndex(index);
    }, 1800);
    return interval;
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError("Iltimos, so'rovni hisoblash uchun Ismingiz va Telefon raqamingizni kiriting.");
      return;
    }
    if (formData.sqm <= 0) {
      setError("Iltimos, bino kvadrat maydonini butun musbat son ko'rinishida kiriting.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const intervalId = runPhraseCarousel();

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Smeta hisoblashda muammo yuz berdi.");
      }
    } catch (err) {
      setError("Sun'iy intellekt xizmatiga ulanib bo'lmadi. Internet aloqangiz va server holatini tekshiring.");
    } finally {
      clearInterval(intervalId);
      setLoading(false);
    }
  };

  const formatUzSoms = (amount: number) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "currency",
      currency: "UZS",
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setResult(null);
    setFormData({
      buildingType: "Turar-joy ko'p qavatli uy",
      sqm: 120,
      materials: "Reinforced monolithic concrete (Premium temir-beton-monolit)",
      location: "Toshkent shahri (Seysmik yuklama: 8-9 ball)",
      notes: "",
      name: "",
      phone: ""
    });
  };

  return (
    <div className="bg-zinc-950 font-sans text-white min-h-screen" id="estimator-view-container">
      
      {/* Header Banner */}
      <section className="relative pt-16 pb-12 border-b border-zinc-900" id="estimator-hero">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase flex items-center justify-center gap-1.5 animate-pulse">
            <Layers className="h-4 w-4" /> Gemini Intelligent Quantity Surveyor
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            Sun'iy Intellektli Smeta Sistemi
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-base">
            Bino parametrlari, yer geodezik joylashuvi va material tarkibini kiriting. O'zbekiston ShNQ qoidalari asosida yig'ilgan real vaqtli xarajatlar brifingi va konstruktiv tavsiyalarga ega bo'ling.
          </p>
        </div>
      </section>

      <section className="py-16 mx-auto max-w-7xl px-6 sm:px-8" id="calculator-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Intake (Runs over 5 columns if results shown, or full 12 if no results) */}
          <div className={`${result ? "lg:col-span-5" : "lg:col-span-8 lg:col-start-2"} bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 sm:p-10 text-left space-y-6 transition-all duration-300`}>
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">Loyiha Buyurtma Brifi</h3>
              <p className="text-xs text-zinc-500 font-normal">Smeta va xavfsizlik mustahkamligi uchun parametrlar</p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-5" id="ai-estimate-form">
              
              {/* Client Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-name">Ismingiz *</label>
                  <input
                    type="text"
                    name="name"
                    id="est-name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masalan, Abdulla Toirov"
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-phone">Telefon raqamingiz *</label>
                  <input
                    type="tel"
                    name="phone"
                    id="est-phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 (90) 001-02-03"
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Building details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-type">Bino Turi</label>
                  <select
                    name="buildingType"
                    id="est-type"
                    value={formData.buildingType}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Turar-joy ko'p qavatli bino">Ko'p qavatli bino (Kvartira)</option>
                    <option value="Hashamatli premium kottej/villa">Kottej / Elita hovli</option>
                    <option value="Tijorat biznes markazi/ofis">Biznes Ofis markazi</option>
                    <option value="Sanoat logistika va ombor majmuasi">Sanoat Ombori & Zavod</option>
                    <option value="Seysmik rekonstruksiya va mustahkamlash">Mavjud binoni mustahkamlash</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-sqm">Loyihaviy maydoni (Kvadrat metr / m²) *</label>
                  <input
                    type="number"
                    name="sqm"
                    id="est-sqm"
                    min="10"
                    max="100000"
                    value={formData.sqm}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Materials and Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-materials">Konstruktiv material turlari</label>
                  <select
                    name="materials"
                    id="est-materials"
                    value={formData.materials}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Reinforced monolithic concrete (Premium temir-beton-monolit)">Temir-Beton ramali monolit karkas</option>
                    <option value="Prefabricated lightweight steel structure">Yengil po'lat metall-sinchli ramalar</option>
                    <option value="Eco-friendly timber wood framing structure">Premium yog'ochli muhandislik karkas</option>
                    <option value="Standard brickwork and foam block masonry">G'ishtli tayanma devorlar (M-150)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-location">Viloyat va Qurilish Geodezik Zonasi</label>
                  <select
                    name="location"
                    id="est-location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Toshkent shahri (Seysmik bosim: 8-9 ball)">Toshkent (Aktiv seysmik - ShNQ muvofiq)</option>
                    <option value="Samarqand viloyati (Tog'oldi loy gruntli zamin)">Samarqand (Qum / tog'oldi cho'kuvchan tuproq)</option>
                    <option value="Buxoro / Navoiy viloyatlari (Sho'r qumlik hudud)">Buxoro (Sho'r tuproqli grunt mustahkamlash)</option>
                    <option value="Farg'ona / Andijon (Juda yuqori seysmik 9.5 ball)">Farg'ona vodiysi (Yuqori seysmik ball)</option>
                    <option value="Qoraqalpog'iston respublikasi / Xorazm (Sanalgan kalsiyli sho'rxok)">Xorazm / Orolbo'yi (Sho'r va agressiv suvlar)</option>
                  </select>
                </div>

              </div>

              {/* Extra details textbox */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold text-zinc-400 uppercase" htmlFor="est-notes">Maxsus muhandislik so'rovlari va qo'shimchalar (ixtiyoriy)</label>
                <textarea
                  name="notes"
                  id="est-notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Masalan: 'Ko'p mashinali yer osti avtoturargohi rejalansin, tom qismida hovuz bo'lishi ixtiyoriy, seysmik barqarorlikni 9.5 ballda kafolatlash kerak.'"
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-amber-500 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-4">
                  {error}
                </div>
              )}

              {/* Action buttons */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-xl text-center text-sm tracking-wide transition-all uppercase disabled:opacity-50"
                id="calculate-smeta-btn"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Smeta hisoblanmoqda...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="h-[18px] w-[18px]" />
                    <span>Real-Vaqt AI Hisob-Smetasini Boshlash</span>
                  </>
                )}
              </button>

            </form>

            {/* Spinner subphrase overlay when calculating */}
            {loading && (
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-850 flex items-center space-x-3.5 animate-pulse text-left">
                <RefreshCw className="h-5 w-5 text-amber-500 animate-spin shrink-0" />
                <p className="font-mono text-xs text-amber-400 font-semibold">{loadingPhrases[loadingPhraseIndex]}</p>
              </div>
            )}

          </div>

          {/* Right Column: PDF-style Estimate Results Output (5 columns, appears once ready) */}
          {result && (
            <div className="lg:col-span-7 space-y-6 bg-zinc-900/10 border border-zinc-800 rounded-3xl p-6 sm:p-10 text-left relative animate-in fade-in duration-300" id="results-display-panel">
              
              {/* Badge top-right */}
              <div className="absolute top-6 right-6 flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white"
                  title="Smetani Chop etish"
                >
                  <Printer className="h-4 w-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white"
                  title="Yangidan Hisoblash"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>

              {/* Invoice/Receipt Header */}
              <div className="space-y-1.5 border-b border-zinc-900 pb-5 pr-16">
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
                  <FileText className="h-4 w-4" />
                  <span>TEXNIK QUZATUV SMETA HUJJATI</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                  {result.projectName}
                </h4>
                <p className="text-[10px] font-mono text-zinc-500">
                  SANA: {new Date().toLocaleDateString("uz-UZ")} | LOYIHALASHTIRUVCHI: STRUCTURA AI ENGINE
                </p>
              </div>

              {/* Price Bracket Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-950 border border-zinc-900 rounded-2xl p-5" id="budget-range">
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">MINIMAL SMETA</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white mt-1 block">
                    {formatUzSoms(result.costSomsMin)}
                  </span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-zinc-900 pt-3 sm:pt-0 sm:pl-5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">MAKSIMAL KUTILMA</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-amber-500 mt-1 block">
                    {formatUzSoms(result.costSomsMax)}
                  </span>
                </div>
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-3 text-center space-y-1">
                  <Hourglass className="h-4 w-4 text-amber-500 mx-auto" />
                  <p className="text-[9px] font-mono text-zinc-500">MUDDAT</p>
                  <p className="text-xs font-bold text-white uppercase">{Math.round(result.completionTimelineWeeks / 4.3)} Oy ({result.completionTimelineWeeks} hafta)</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-3 text-center space-y-1">
                  <Zap className="h-4 w-4 text-amber-500 mx-auto" />
                  <p className="text-[9px] font-mono text-zinc-500">EKOLOGIYA</p>
                  <p className="text-xs font-bold text-white truncate px-1" title={result.energyEfficiencyRating}>{result.energyEfficiencyRating.split(" ")[0] || "A klass"}</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-3 text-center space-y-1">
                  <ShieldCheck className="h-4 w-4 text-amber-500 mx-auto" />
                  <p className="text-[9px] font-mono text-zinc-500">SEYSMIK BAHO</p>
                  <p className="text-xs font-bold text-white truncate px-1" title={result.safetyIndex}>{result.safetyIndex.split(" ")[0] || "9.5/10 ball"}</p>
                </div>
              </div>

              {/* Recommended Materials Chips */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">TAVSIYA ETILGAN CONSTRUKTIV TIPI</span>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedMaterials.map((mat, mId) => (
                    <span 
                      key={mId} 
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-300"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structural Notes Box */}
              <div className="bg-zinc-900/30 border-l-2 border-amber-500 p-4 text-sm font-normal text-zinc-300 leading-relaxed rounded-r-xl">
                <strong className="text-white">Seymologiya va Muhandis-konstruktor Eslatmasi:</strong> <br />
                {result.structuralDesignNotes}
              </div>

              {/* Itemized Table Breakdown */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">BOSQICHMA-BOSQICH ME'YORIY BREAKDOWN (SMETA TAXMINI)</span>
                
                <div className="overflow-x-auto rounded-xl border border-zinc-900">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-zinc-950 border-b border-zinc-900 text-zinc-500 font-mono">
                        <th className="p-3">Ish Bosqichi</th>
                        <th className="p-3 text-right">Muvofiq Xarajat</th>
                        <th className="p-3 hidden sm:table-cell">Muhandislik Tahlili (Uzbekistan ShNQ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 font-medium">
                      {result.breakdown.map((row, rId) => (
                        <tr key={rId} className="hover:bg-zinc-900/30">
                          <td className="p-3 font-semibold text-white uppercase">{row.item}</td>
                          <td className="p-3 text-right text-amber-500 font-mono">{formatUzSoms(row.costSoms)}</td>
                          <td className="p-3 hidden sm:table-cell text-zinc-400 font-normal">{row.explanation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Outro Call and Disclaimer */}
              <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4 text-zinc-500">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <PhoneCall className="h-4 w-4 text-amber-500 animate-pulse" />
                  <span>Ushbu loyihani muhokama qilish uchun operatorimiz bilan bog'laning</span>
                </div>
                <a 
                  href="tel:+998712000210" 
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-sans rounded-lg flex items-center space-x-1"
                >
                  <span>Muloqot qilish</span>
                </a>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
