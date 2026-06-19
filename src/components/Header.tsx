/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HardHat, Menu, X, Calculator, Eye } from "lucide-react";
import { PageType } from "../types";

interface HeaderProps {
  activeTab: PageType;
  setActiveTab: (tab: PageType) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Bosh sahifa" },
    { id: "services", label: "Xizmatlar & F.A.Q." },
    { id: "projects", label: "Loyihalarimiz" },
    { id: "estimator", label: "AI Smeta Generator" },
  ];

  const handleNavClick = (tabId: PageType) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo and Brand */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex cursor-pointer items-center space-x-3 group"
          id="brand-logo"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-zinc-950 transition-transform duration-300 group-hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <HardHat className="h-6 w-6" strokeWidth={2.2} />
          </div>
          <div>
            <span className="font-sans text-xl font-bold tracking-wider text-white uppercase sm:text-2xl">
              Structura
            </span>
            <p className="font-mono text-[9px] tracking-[0.2em] text-amber-500 uppercase">
              Mukammallik Quruvchisi
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as PageType)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-lg ${
                activeTab === item.id
                  ? "text-amber-500 bg-zinc-900/60"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => handleNavClick("estimator")}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(245,158,11,0.15)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            id="header-cta-btn"
          >
            <Calculator className="h-4 w-4" />
            <span>Bepul Smeta Olish</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white md:hidden hover:border-zinc-700"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as PageType)}
                className={`flex items-center justify-between w-full p-3 rounded-xl text-left text-sm font-medium tracking-wide ${
                  activeTab === item.id
                    ? "bg-amber-500/10 text-amber-400 font-semibold"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="h-2 w-2 rounded-full bg-amber-500" />}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-900">
            <button
              onClick={() => handleNavClick("estimator")}
              className="flex w-full items-center justify-center space-x-2 bg-amber-500 text-zinc-950 font-bold py-3.5 rounded-xl text-center text-sm shadow-md"
            >
              <Calculator className="h-[18px] w-[18px]" />
              <span>AI Bepul Smeta Olish</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
