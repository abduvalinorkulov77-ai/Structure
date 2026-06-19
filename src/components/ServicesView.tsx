/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Plus, 
  Minus, 
  Briefcase, 
  Phone, 
  User, 
  Layers, 
  Send, 
  CheckCircle2, 
  Loader2, 
  HelpCircle,
  ShieldCheck,
  Building,
  Wrench,
  Compass
} from "lucide-react";
import { FaqItem, ServiceDetail, ConsultationRequest } from "../types";

export default function ServicesView() {
  // Service array with detailed properties matching images
  const services: ServiceDetail[] = [
    {
      id: "srv-1",
      title: "Turar-Joy Binolari Qurilishi",
      iconName: "Building",
      numberCode: "01 / XIZMATLAR",
      description: "Zamonaviy ko'p qavatli turar-joy majmualari, shinam kottej va shahar tashqarisidagi kottej elita villalarini poydevordan boshlab kalitiga qadar topshirish bosqichlari.",
      longDescription: "Biz arxitektura va qurilishning eng yangi texnologiyalaridan foydalangan holda uzoq muddatga xizmat qiladigan uylar yaratamiz. Bizning uylarimiz ekologik toza materiallardan barpo qilinadi va optimal issiqlik izolatsiyasi (bino qishda issiq, yozda salqin bo'lishi) bilan ta'minlanadi. Biz binoning muhandislik tarmoqlarini (elektr, suv, kanalizatsiya va aqlli uy tizimlari) to'liq sozlab topshiramiz.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAljQfStnGCZi1AVdAmCy7jj2ylwcK4Oi_G19sUn9cgUh1k68y12pxgMw25jNWzrYdw4DyEhzqH1HKCMhNHEhY46po4kyfbG-sTk4-ZKOxtU-5flv5XL1Qio5b6KU-MeSpQAHcbUNaapqPoSKZilF7J23nS_nOS93VvXSkixhyCQmUn1yLAUMECgo5AbftmnHY-gpUwG2Bgfo2O4_3ey9_meTach89HsUx2PdCSeXsw2HMw-wOE4GotobcaiQA2OkJ7yTJF8gRqeUBh"
    },
    {
      id: "srv-2",
      title: "Tijorat Binolari Qurilishi",
      iconName: "Briefcase",
      numberCode: "02 / XIZMATLAR",
      description: "Biznes markazlari, A-klass ofis majmualari, do'konlar va ko'rgazma zallari (showroom). Brendingiz imidjiga javob beradigan zamonaviy yechimlar.",
      longDescription: "Tijorat qurilishi yuqori tezlik, mustahkamlik va funksionallikni talab etadi. Structura muhandislari keng va ustunlarsiz keng zallarni tashkil etuvchi mustahkam metall karkaslar va shisha fasad konstruksiyalarini loyihalashtiradi. Binoning yong'inga qarshi avtomatik tizimlari va yuqori tezlikdagi ventilyatsiyasi jahon talablariga mos keladi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWUGzrvQtUersXMR9rD1t9G00j8AAyAUNQ6rD1hm4iYWpv8R__9u9q-d_wbdqiYg9mUhQ_uYSWbzWBqW-SAxBRVBg57jwddnB3Q2sKDFlB9oGvC080D6dhWqK3H4K0PGqReZ1P3_JP97qw1E94zxylI5LK0Ka9A4vwjtMiFgM0n80GtqV_iVUGP03OawChZGsXwJ4oZclGq0VD06DmJZwtxCFUKaxZMfSE0-D1_NkZzcGwIsal5Gi_SdqPAWn6s7U_1oMXj3QgMDw"
    },
    {
      id: "srv-3",
      title: "Sanoat Inshootlari & Omborlar",
      iconName: "Layers",
      numberCode: "03 / XIZMATLAR",
      description: "Katalitik tayyorgarlikka ega sanoat zavodlari, logistik yuk saqlash omborlari, ishlab chiqarish sexlari va muzlatkich kameralarini metall konstruksiyalardan barpo qilish.",
      longDescription: "Sanoat obyektlarining zaminiga og'ir yuklar tushishini hisobga olib, mikrotolali yoki temirli kukunli yuqori chidamli sanoat pol to'shamalari o'rnatiladi. Biz barcha yuk ko'taruvchi metall fermalarni, sendvich panellarni tezkorlik va yuqori aniqlik bilan yig'amiz hamda ruxsat etilgan og'irlik yuklamalarini ilmiy hisoblab chiqamiz.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB47AzRG2gJexxY5DwZn2eb8fy-JHQCUKTmSVJ2qL6uXwkRPjwfzzzepkpze3igPo3yjUitUWIkc4jHe-HQePW4uQZj8pNfQDqo6Ydww351belnuYShku7vUPJSbfuOjU94pngvH8jhitbSvm_i2iVaUD1_QAJiz0yOQkwOkD0GZX_ogfhPbQVdAv1mB4ShhOyBqXhzE7nucgjQpGT0m7iigOH4L4sNZlbULKid5uZKg7xOfkrMcjKQuXDTB8vyg_-Gve2pdBJD3xs5"
    },
    {
      id: "srv-4",
      title: "Loyiha & Arxitektura Loyihalash",
      iconName: "Compass",
      numberCode: "04 / XIZMATLAR",
      description: "Eng ilg'or muhandislik yo'nalishlarida 3D arxitektura, ishchi hisob-kitob loyihalari (AP, KR) hamda seysmik mustahkamlik chizmalarini chizish.",
      longDescription: "Muvaffaqiyatli qurilish mustahkam loyihaga tayanadi. Bizning mualliflik loyihalash xizmatimiz binoni barcha seysmik tebranishlar, ruxsat etilgan tuproq cho'kishlari va qor-yomg'ir yuklamalarini dasturiy modellashtirish (BIM) orqali shakllantiradi. Bu materiallarni ortiqcha sarflashning oldini oladi va smetaning 25% gacha tejalishiga yordam beradi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClQSjrRwseuvkxJKej2nXDFHaOF1PSxZK2poemP1A5OqOlniynhkezRmUed0USSbKZS9TnLUvf86Kv-YPbMllwZuuTKyxHpnEP1FYJEgEa-gnQHNvkav7p0zKGDm5Lr-CK3J_byYv-h2CVtsgq5AJIX73ETkOHJ1RZIXywDCUBemr_GAgpE9qWc234cPzaQLfinmiZQJPiQC_PsJ82vYVzBdkO01wijrnGXCFBM7QpPb_79c4ekbiYerAXeIZu3hL02m-mCHltk6um"
    },
    {
      id: "srv-5",
      title: "Rekonstruksiya & Modernizatsiya",
      iconName: "Wrench",
      numberCode: "05 / XIZMATLAR",
      description: "Eskirgan va shikastlangan binolarni qayta tiklash, yuk ko'taruvchi temir-beton karkaslarni kompozit materiallar bilan mustahkamlash.",
      longDescription: "Biz mavjud inshootlarni to'liq audit qilib, uning yangicha dizayn hamda me'yoriy talablarga javob berishini ta'minlaymiz. Poydevorlarni sementatsiya usuli bilan quyuqlashtirish, xonalarni kengaytirish hamda zamonaviy energo-tejamkor ventilyatsiya qilinadigan fasadlarni o'rnatish orqali bino umrini yana 50 yilga uzaytiramiz.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqEPNNbTXmycjVoA3lmXKqDqqkKEYORxUFx-CAqbQKpV_pvOt3Sk2pofRIgkEcMJERNdJ2OamLU748dfjj60m4WafJF6d1GjbW8jCSet5QlbNmjoNqGcQ4iDp2EBD2cIYxYyiWBR95hx8wICKNWtIIk2peMx_AqxMDH-REuB-qdasXqO1CScuBxzxzpaD8_cqZJ8Id_m6fAyZWEexBNfi7oJTdV-uKD46mNIMYSMfFR6zJUAk1V0enUeDOC_Dao4e54PqKToysWedn"
    }
  ];

  // Accordion FAQs state
  const faqs: FaqItem[] = [
    {
      question: "Biznes yoki uy qurilishining yakuniy narxi qanday aniqlanadi?",
      answer: "Loyiha narxi tuproq turi (geodeziya), qavatlar soni, seysmik kuchaytirish parametrlari va kiritiladigan pardozlash materiallarining sifat segmentiga qarab belgilanadi. Siz o'zingizning ideal bino parametrlaringizni bizning 'AI Smeta Generator' bo'limimizga kiritib, kutilayotgan xarajatlar va texnik xulosalarni bir necha soniyada bepul olishingiz mumkin."
    },
    {
      question: "O'zbekistondagi seysmik xavfsizlik va ShNQ me'yorlariga qanchalik mos?",
      answer: "Structura tomonidan amalga oshiriladigan barcha bino loyihalari ShNQ (Shaharsozlik normallari va qoidalari) va KMK darsliklarining eng so'nggi talablariga mos keladi. Biz Toshkent, Farg'ona vodiysi, Samarkand kabi aktiv seysmik zonalar uchun poydevor metall to'rlarining qalinligini va betondagi seysmik choklarni kamida 9 ball zilzilaga javob bera oladigan darajada tayyorlaymiz."
    },
    {
      question: "Qurilish materiallarining laboratoriya tekshiruvi bormi?",
      answer: "Albatta. Biz har bir obyektimizga faqat sertifikatlangan M350 va undan yuqori markali beton mahsulotlarini qabul qilamiz. Quyishdan oldin namuna olinadi va maxsus laboratoriyada 28 kunlik bosim kuchi sinovidan o'tkazilib, protokollari mijozga topshiriladi. Armaturalar esa faqat issiqlik mustahkamligiga ega xalqaro markalar asosida tanlanadi."
    },
    {
      question: "Dizayndan tortib ruxsatnomalar olishgacha to'liq yordam berasizmi?",
      answer: "Ha, biz barcha turdagi qurilish loyihalari uchun (04 / Xizmatlar) loyihalashtirish ishini bajaribgina qolmay, davlat ekspertizasi xulosalarini taqdim etamiz. Shaharsozlik boshqarmasi va kadstr idoralari bilan bog'liq bo'lgan rasmiylashtirish jarayonlarini mutaxassislarimiz mijoz ishtirokisiz hal qila oladilar."
    },
    {
      question: "Loyiha muddatlari kechikishi sodir bo'lishi mumkinmi?",
      answer: "Biz har bitta shartnomada aniq muddatlarni hamda kechikkan har bir kun uchun moliyaviy javobgarlik shartlarini kiritamiz. Ish tartibimiz optimizatsiyalangan bo'lib, zaxira materiallar hamda maxsus texnikalarimiz mavjudligi tufayli obyektlar odatda belgilangan muddatdan bir necha hafta oldin bitkaziladi."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Consultation form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Turar-joy binolari qurilishi",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setSubmitError("Iltimos, ismingizni va telefon raqamingizni kiriting.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(data.request);
        setFormData({
          name: "",
          phone: "",
          serviceType: "Turar-joy binolari qurilishi",
          notes: ""
        });
      } else {
        setSubmitError(data.error || "Tizimda xatolik yuz berdi.");
      }
    } catch (err) {
      setSubmitError("Xizmatga ulanishda xatolik yuz berdi. Internet aloqasini tekshiring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getServiceIcon = (name: string) => {
    switch(name) {
      case "Building": return <Building className="h-6 w-6 text-amber-500" />;
      case "Briefcase": return <Briefcase className="h-6 w-6 text-amber-500" />;
      case "Layers": return <Layers className="h-6 w-6 text-amber-500" />;
      case "Compass": return <Compass className="h-6 w-6 text-amber-500" />;
      case "Wrench": return <Wrench className="h-6 w-6 text-amber-500" />;
      default: return <Building className="h-6 w-6 text-amber-500" />;
    }
  };

  return (
    <div className="bg-zinc-950 font-sans text-white min-h-screen" id="services-view-container">
      
      {/* Page Title & Intro */}
      <section className="relative pt-16 pb-12 border-b border-zinc-900" id="services-hero">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase">
            MUKAMMAL LOYIHALASHTIRAMIZ, MUSTAHKAM QURAMIZ
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            Professional Muhandislik Xizmatlari
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-base sm:text-lg">
            Sanoat standartlariga to'laqonli muvofiq, seysmik jihatdan himoyalangan va jahon miqyosidagi arxitekturaga ega bo'lgan barcha qurilish xizmatlarini taqdim etamiz.
          </p>
        </div>
      </section>

      {/* Services Grid (01 to 05) */}
      <section className="py-20 mx-auto max-w-7xl px-6 sm:px-8" id="services-grid-list">
        <div className="space-y-20">
          {services.map((srv, idx) => (
            <div 
              key={srv.id} 
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* Left Column (Details and text) */}
              <div className={`md:col-span-6 space-y-5 text-left ${
                idx % 2 === 1 ? "md:order-2" : "md:order-1"
              }`} id={`srv-left-${srv.id}`}>
                <div className="flex items-center space-x-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-amber-500 uppercase">
                    {srv.numberCode}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
                  {srv.title}
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  {srv.description}
                </p>

                <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed pl-4 border-l border-amber-500/50">
                  {srv.longDescription}
                </p>
              </div>

              {/* Right Column (High contrast image showcase) */}
              <div className={`md:col-span-6 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/40 p-2 ${
                idx % 2 === 1 ? "md:order-1" : "md:order-2"
              }`} id={`srv-right-${srv.id}`}>
                <div className="overflow-hidden rounded-xl aspect-video relative bg-zinc-950">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-all grayscale opacity-75 hover:grayscale-0 hover:scale-102 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-90" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Accordion FAQs Section */}
      <section className="bg-zinc-900/30 border-t border-b border-zinc-900 py-20 px-6 sm:px-8 text-left" id="faq-section">
        <div className="mx-auto max-w-4xl">
          
          <div className="text-center space-y-4 mb-16">
            <HelpCircle className="h-8 w-8 text-amber-500 mx-auto" />
            <h2 className="text-3xl font-extrabold tracking-tight uppercase text-white">
              Ko'p beriladigan savollar (F.A.Q.)
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              STRUCTURA bilan hamkorlik qilish, seysmik barqarorlik va muhandislik maslahatlari haqida eng asosiy javoblar.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fidx) => {
              const isOpen = openFaqIndex === fidx;
              return (
                <div 
                  key={fidx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-all"
                  id={`faq-accordion-item-${fidx}`}
                >
                  <button
                    onClick={() => toggleFaq(fidx)}
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-amber-500" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-zinc-500" />
                    )}
                  </button>

                  {/* Transition body */}
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal pt-2 border-t border-zinc-900/80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Consultation Form */}
      <section className="py-20 px-6 sm:px-8" id="consultation-form-section">
        <div className="mx-auto max-w-5xl bg-gradient-to-b from-zinc-900/50 to-zinc-950 border border-zinc-900 rounded-3xl p-8 sm:p-12 md:p-16 relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 rounded-full bg-amber-500/10 px-4 py-1.5 border border-amber-500/20 text-xs font-mono text-amber-400">
            Offline Maslahat bepul
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form pitch side */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight sm:text-3xl">
                Loyihangiz Bo'yicha Bepul Konsultatsiya
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Kiyingi bino loyihangiz bo'yicha masalalarni tahlil qilish, ShNQ standartlari, ruxsatnomalar, kutilayotgan xarajatlar va poydevor geologiyasini professional darajada tekshirish uchun bizning yetakchi prorab va muhandislarimiz bilan suhbat rejalashtiring.
              </p>
              
              <ul className="space-y-3.5 text-xs font-medium text-zinc-350 pt-2 text-zinc-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Qayta aloqa telefon orqali 2 soat ichida</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>3D me'moriy tahlilga kirish huquqi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Laboratoriya sinovlari bo'yicha hujjatlar</span>
                </li>
              </ul>
            </div>

            {/* Actual Form side */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5 text-left" id="contact-consult-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400 font-semibold" htmlFor="consult-name">F.I.SH. (Ismingiz) *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-650 text-zinc-500" />
                      <input
                        type="text"
                        name="name"
                        id="consult-name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masalan, Alisher Umarov"
                        className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 bg-zinc-900/60 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400 font-semibold" htmlFor="consult-phone">Telefon raqamingiz *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-650 text-zinc-500" />
                      <input
                        type="tel"
                        name="phone"
                        id="consult-phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Masalan, +998 (90) 123-45-67"
                        className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 bg-zinc-900/60 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400 font-semibold" htmlFor="consult-service">Sizni qiziqtirayotgan xizmat turi</label>
                  <select
                    name="serviceType"
                    id="consult-service"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 bg-zinc-900 rounded-xl py-3 px-4 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Turar-joy binolari qurilishi">Turar-joy qurilishi — Elite villalar & Majmualar</option>
                    <option value="Tijorat binolari qurilishi">Tijorat qurilishi — Business markazlar & Showroomlar</option>
                    <option value="Sanoat inshootlari va omborlar">Sanoat inshootlari qurilishi — Zavod & Omborlar</option>
                    <option value="Loyiha va Arxitektura dizayni">Loyiha & Arxitektura loyihalash xizmati</option>
                    <option value="Rekonstruksiya va modernizatsiya">Mavjud binolarni seysmik mustahkamlash</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400 font-semibold" htmlFor="consult-notes">Qisqacha loyiha talablari / Iltimoslar</label>
                  <textarea
                    name="notes"
                    id="consult-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Masalan, Toshkent tumanida 2 qavatli metall-sinchli karkasli bino qurish istagidaman."
                    className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 bg-zinc-900/60 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-650 outline-none transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-4">
                    {submitError}
                  </div>
                )}

                {/* Success Banner */}
                {submitSuccess && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl p-4 space-y-1">
                    <p className="font-semibold text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> So'rovingiz muvaffaqiyatli qabul qilindi!
                    </p>
                    <p className="font-mono">
                      ID: {submitSuccess.id} | Loyiha: {submitSuccess.serviceType}. Operatorimiz yaqin soatda bog'lanishadi. Rahmat!
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3.5 rounded-xl text-center text-sm tracking-wide transition-all disabled:opacity-50"
                  id="consult-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>So'rov yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Murojaat yuborish (Smeta maslahati)</span>
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
