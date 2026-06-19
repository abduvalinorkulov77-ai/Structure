/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ServicesView from "./components/ServicesView";
import ProjectsView from "./components/ProjectsView";
import EstimatorView from "./components/EstimatorView";
import { PageType } from "./types";

export default function App() {
  const [activeTab, setActiveTab2] = useState<PageType>("home");

  // Track page changes and scroll safely to top
  const handleSetActiveTab = (tab: PageType) => {
    setActiveTab2(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView setActiveTab={handleSetActiveTab} />;
      case "services":
        return <ServicesView />;
      case "projects":
        return <ProjectsView />;
      case "estimator":
        return <EstimatorView />;
      default:
        return <HomeView setActiveTab={handleSetActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-white selection:bg-amber-500 selection:text-zinc-950">
      {/* Dynamic Header */}
      <Header activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      {/* Primary Workspace Stage */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Central Footer */}
      <Footer setActiveTab={handleSetActiveTab} />
    </div>
  );
}

