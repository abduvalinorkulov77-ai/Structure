/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageType = "home" | "services" | "projects" | "estimator";

export interface Project {
  id: string;
  name: string;
  category: "residential" | "commercial" | "industrial" | "design";
  location: string;
  description: string;
  longDescription?: string;
  image: string;
  status: "completed" | "ongoing" | "planned";
  statusText: string;
  stats?: { label: string; value: string }[];
  completionPercent: number; // e.g. 100 for completed, 75 for ongoing
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string; // lucide icon name
  numberCode: string; // e.g. "01 / Xizmatlar"
  description: string;
  longDescription: string;
  image: string;
}

export interface EstimateRequest {
  buildingType: string;
  sqm: number;
  materials: string;
  location: string;
  notes: string;
  name: string;
  phone: string;
}

export interface EstimateResult {
  projectName: string;
  recommendedMaterials: string[];
  costSomsMin: number;
  costSomsMax: number;
  breakdown: { item: string; costSoms: number; explanation: string }[];
  structuralDesignNotes: string;
  completionTimelineWeeks: number;
  energyEfficiencyRating: string;
  safetyIndex: string; // e.g. "9.8/10 Seismically reinforced"
}

export interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  notes: string;
  createdAt: string;
  status: "Yangi" | "Bog'lanildi" | "Rejalashtirildi";
}
