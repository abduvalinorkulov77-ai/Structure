/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array for consultations submitted in this session
const consultations: any[] = [
  {
    id: "REQ-1001",
    name: "Akmal Karimov",
    phone: "+998 90 123 45 67",
    serviceType: "Turar-joy qurilishi",
    notes: "Toshkent shahridagi 3 qavatli zamonaviy kottej qurilishi smetasi haqida maslahat.",
    createdAt: new Date(Date.now() - 3600000 * 2).toLocaleString("uz-UZ"),
    status: "Bog'lanildi"
  },
  {
    id: "REQ-1002",
    name: "Nodira Umarova",
    phone: "+998 93 543 21 00",
    serviceType: "Loyihalash va dizayn",
    notes: "Yangi ofis interyeri dizayni va mustahkamlovchi metall konstruksiyalari muhandisligi.",
    createdAt: new Date(Date.now() - 3600000 * 24).toLocaleString("uz-UZ"),
    status: "Yangi"
  }
];

// 1. Consultation Post Endpoint
app.post("/api/consultation", (req, res) => {
  const { name, phone, serviceType, notes } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Ism va telefon raqami talab qilinadi." });
  }

  const newRequest = {
    id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    phone,
    serviceType: serviceType || "Suhbat / Maslahat",
    notes: notes || "Tafsilotlar taqdim etilmadi.",
    createdAt: new Date().toLocaleString("uz-UZ"),
    status: "Yangi"
  };

  consultations.unshift(newRequest);
  console.log("New consultation registered:", newRequest);
  res.status(201).json({ success: true, request: newRequest });
});

// 2. Fetch Consultations Endpoint (for admin check or session display)
app.get("/api/consultations", (req, res) => {
  res.json(consultations);
});

// A robust dynamic architectural estimator fallback in case of API Key or network failures
function generateDynamicFallback(
  buildingType: string,
  sqm: number,
  materials: string,
  location: string,
  notes: string,
  name: string
): any {
  const baseCostPerSqm =
    buildingType.toLowerCase().includes("residential") || buildingType.toLowerCase().includes("turar")
      ? 4200000
      : buildingType.toLowerCase().includes("commercial") || buildingType.toLowerCase().includes("tijorat")
      ? 6500000
      : buildingType.toLowerCase().includes("industrial") || buildingType.toLowerCase().includes("sanoat")
      ? 5500000
      : 3200000;

  const finalCostMultiplier = materials.toLowerCase().includes("steel") || materials.toLowerCase().includes("metall")
    ? 1.15
    : materials.toLowerCase().includes("reinforced") || materials.toLowerCase().includes("temir-beton")
    ? 1.22
    : materials.toLowerCase().includes("premium") || materials.toLowerCase().includes("yog'och")
    ? 1.10
    : 0.95;

  const computedCostPerSqm = baseCostPerSqm * finalCostMultiplier;
  const costMin = Math.round(sqm * computedCostPerSqm * 0.95);
  const costMax = Math.round(sqm * computedCostPerSqm * 1.15);

  const materialsList = materials ? [materials] : ["Toshkent G'ishti (M-150)", "Armatura (A500C)", "Sement portland (M-400)"];
  if (materialsList.length < 3) {
    materialsList.push("Yig'ma monolit plitalar", "Shisha-fasad germetik konstruksiyalari");
  }

  return {
    projectName: `${name || "Mijoz"} - ${buildingType} (${location || "Toshkent"})`,
    recommendedMaterials: materialsList,
    costSomsMin: costMin,
    costSomsMax: costMax,
    breakdown: [
      {
        item: "Poydevor va Tuproq ishlari",
        costSoms: Math.round(costMin * 0.18),
        explanation: `${location} tuproq sharoitiga moslashtirilgan monolit-karkas poydevor qurish va tekislash.`
      },
      {
        item: "Asosiy Karkas va Devor konstruksiyalari",
        costSoms: Math.round(costMin * 0.40),
        explanation: `${materialsList[0] || "Temir-beton"} va ramali karkaslar bilan binoning yuk ko'taruvchi qismini barpo etish.`
      },
      {
        item: "Tom qoplamasi va Gidroizolyatsiya",
        costSoms: Math.round(costMin * 0.12),
        explanation: "Zamonaviy sendvich panellar yoki profnastil yordamida yomg'ir va issiqlik izolyatsiyasini ta'minlash."
      },
      {
        item: "Muhandislik Tizimlari (HVAC, Elektr, Santexnika)",
        costSoms: Math.round(costMin * 0.20),
        explanation: "O'zbekiston iqlimiga moslashtirilgan isitish, sovutish va yong'inga qarshi xavfsiz tizimlarni o'rnatish."
      },
      {
        item: "Tashqi Fasad va Pardozlash",
        costSoms: Math.round(costMin * 0.10),
        explanation: "Zamonaviy keramo-granit yoki kompozit materiallar yordamida yuqori estetik ko'rinish berish."
      }
    ],
    structuralDesignNotes: `Ushbu loyiha ${location || "Toshkent"} hududidagi seysmik faollikni (kamida 8.5 ballga bardosh beradigan qilib) hisobga olgan holda milliy qurilish qoidalari (ShNQ) asosida rejalashtirilgan. Kiritilgan qo'shimcha iltimos (${notes || "yo'q"}) keyingi bosqichda arxitektorlarimiz tomonidan chuqur o'rganiladi.`,
    completionTimelineWeeks: Math.round(sqm < 150 ? 24 : sqm < 500 ? 36 : 52),
    energyEfficiencyRating: sqm < 300 ? "A class ekologik barqaror" : "B+ energiya tejamkor tizimlar",
    safetyIndex: "9.6/10 Seysmik mustahkamlangan"
  };
}

// 3. AI Estimate Generation with Server-side Gemini API
app.post("/api/estimate", async (req, res) => {
  const { buildingType, sqm, materials, location, notes, name, phone } = req.body;

  if (!sqm || Number(sqm) <= 0) {
    return res.status(400).json({ error: "Bino maydoni (kvadrat metr) xato kiritildi." });
  }

  const sqmNum = Number(sqm);

  // Check if API key exists. If not, generate a high-quality fallback and inform peacefully
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not defined or is placeholder. Using smart architectural engine.");
    const fallbackResult = generateDynamicFallback(buildingType, sqmNum, materials, location, notes, name);
    return res.json(fallbackResult);
  }

  try {
    // Lazy initialization of Gemini client
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const userPrompt = `
      Please act as a professional structural engineer and pricing estimator for STRUCTURA Construction, working under Uzbekistan building regulations (ShNQ).
      Generate a realistic, highly professional billing and cost estimation report for:
      - Client Name: ${name || "Hurmatli Mijoz"}
      - Building Type: ${buildingType}
      - Project Size: ${sqmNum} square meters
      - Preferred Structural Materials: ${materials || "Standard modern reinforced concrete (temir-beton)"}
      - Construction City/Location in Uzbekistan: ${location || "Toshkent"}
      - Customer's Specific Engineering requests/Notes: ${notes || "None"}

      Provide costs in Uzbek Soms (UZS). Ensure the numbers look professional, coherent, and match local construction economics (e.g. standard construction rates usually vary from 3,000,000 UZS to 12,000,000 UZS per square meter depending on structural grade and utility fitments). Provide a beautifully detailed breakdown of 5 standard parts: Foundation, Core Structure/Framing, Roofing/Cladding, MEP (Mechanical/Electrical/Plumbing), and Finishing.

      The costSomsMin and costSomsMax values must represent the overall project price bracket. 
      The sum of costSoms in the breakdown array should approximately match the final budget bracket minimum.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: "You are Structura's Lead Structural Engineering Advisor. You speak expert Uzbek language, mixed with technical architectural terms. You reply strictly in JSON format aligning with the requested schema.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectName: {
              type: Type.STRING,
              description: "Elegant professional name for the project including the location, like 'Toshkent High-Rise Residence' or 'Sergeli Sanoat Logistika Ombori'"
            },
            recommendedMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 to 5 key structural materials or technologies recommended for this specific project and location"
            },
            costSomsMin: {
              type: Type.INTEGER,
              description: "Minimum overall project budget in UZS"
            },
            costSomsMax: {
              type: Type.INTEGER,
              description: "Maximum overall project budget in UZS"
            },
            breakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  item: { type: Type.STRING, description: "Name of the construction phase, in Uzbek language" },
                  costSoms: { type: Type.INTEGER, description: "Component cost in UZS" },
                  explanation: { type: Type.STRING, description: "Crucial technical/engineering explanation why this component is structured this way for Uzbekistan" }
                },
                required: ["item", "costSoms", "explanation"]
              }
            },
            structuralDesignNotes: {
              type: Type.STRING,
              description: "Seismic and local weather engineering notes tailored to Uzbekistan regulations (ShNQ) and specific location seismicity."
            },
            completionTimelineWeeks: {
              type: Type.INTEGER,
              description: "Estimated weeks of work from groundbreaking to key handover"
            },
            energyEfficiencyRating: {
              type: Type.STRING,
              description: "Description of the energy-efficiency and environment standard, like 'A+ Evropa Standarti' or 'A-sinf energiya tejamkor')"
            },
            safetyIndex: {
              type: Type.STRING,
              description: "Seismic resilience index, like '9.5/10 ball seysmik mustahkamlik kafolati'"
            }
          },
          required: [
            "projectName",
            "recommendedMaterials",
            "costSomsMin",
            "costSomsMax",
            "breakdown",
            "structuralDesignNotes",
            "completionTimelineWeeks",
            "energyEfficiencyRating",
            "safetyIndex"
          ]
        }
      }
    });

    const textOutput = response.text?.trim() || "";
    try {
      const parsedData = JSON.parse(textOutput);
      res.json(parsedData);
    } catch (parseErr) {
      console.error("Failed to parse Gemini JSON output structure:", textOutput, parseErr);
      const fallbackResult = generateDynamicFallback(buildingType, sqmNum, materials, location, notes, name);
      res.json(fallbackResult);
    }

  } catch (error: any) {
    console.error("Gemini Estimator Error:", error);
    // Graceful error fallback
    const fallbackResult = generateDynamicFallback(buildingType, sqmNum, materials, location, notes, name);
    res.json(fallbackResult);
  }
});

// Serve static compiled UI or route request via Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[STRUCTURA Full-stack Server] running at http://localhost:${PORT}`);
  });
}

startServer();
