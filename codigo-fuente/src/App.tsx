/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Header, ActiveTab, ReferenceTool } from './components/Header';
import { CentralHumanBodyAtlas } from './components/CentralHumanBodyAtlas';
import { TimelineCurveView } from './components/TimelineCurveView';
import { ClinicalQuiz } from './components/ClinicalQuiz';
import { BiochemistryGlossaryDrawer } from './components/BiochemistryGlossaryDrawer';
import { ReferenceTablesModal } from './components/ReferenceTablesModal';
import { MetabolicStateId, OrganId } from './types/metabolism';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('atlas');
  const [selectedStateId, setSelectedStateId] = useState<MetabolicStateId>('postprandial');
  const [selectedOrganId, setSelectedOrganId] = useState<OrganId>('liver');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [activeGlossaryTermId, setActiveGlossaryTermId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<ReferenceTool | null>(null);
  // Primero se elige la situación; después se entra en ella
  const [situationChosen, setSituationChosen] = useState(false);

  const handleSelectState = (id: MetabolicStateId) => {
    setSelectedStateId(id);
    setSituationChosen(true);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveTool(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleOpenTool = (tool: ReferenceTool) => setActiveTool(tool);

  const handleSelectTab = (tab: ActiveTab) => {
    // Volver a pulsar «Situaciones» estando dentro de una lleva de nuevo a la elección
    if (tab === 'atlas' && activeTab === 'atlas') setSituationChosen(false);
    setActiveTab(tab);
  };

  const handleOpenGlossaryWithTerm = (termId?: string) => {
    if (termId) {
      setActiveGlossaryTermId(termId);
    }
    setIsGlossaryOpen(true);
  };

  const handleNavigateToStateFromQuiz = (stateId: MetabolicStateId) => {
    setSelectedStateId(stateId);
    setSituationChosen(true);
    setActiveTab('atlas');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 relative">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenGlossary={() => handleOpenGlossaryWithTerm()}
        onOpenTool={handleOpenTool}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full flex flex-col">
        {/* Tab 1: Central Human Body Atlas (Surrounded by states with clean ordered organ cards) */}
        {activeTab === 'atlas' && (
          <CentralHumanBodyAtlas
            selectedStateId={selectedStateId}
            onSelectState={handleSelectState}
            situationChosen={situationChosen}
            onChangeSituation={() => setSituationChosen(false)}
            onOpenTool={handleOpenTool}
            selectedOrganId={selectedOrganId}
            onSelectOrgan={setSelectedOrganId}
            onOpenGlossary={handleOpenGlossaryWithTerm}
            activeTool={activeTool}
            onCloseTool={() => setActiveTool(null)}
          />
        )}


        {/* Tab 5: Cahill Sequential Fasting Timeline Curves */}
        {activeTab === 'timeline' && <TimelineCurveView />}

        {/* Tab 6: Clinical Cases & Self-Assessment Quiz */}
        {activeTab === 'quiz' && (
          <ClinicalQuiz onNavigateToState={handleNavigateToStateFromQuiz} />
        )}
      </main>

      {/* Scientific Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-700">Integra</span>
            <span className="mx-2">·</span>
            <span>Simulador de Integración y Bioquímica Metabólica Humana</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Bioquímica & Fisiología Integrada</span>
          </div>
        </div>
      </footer>

      {/* Tablas de consulta (regulación hormonal y perfil de órganos) */}
      {(activeTool === 'hormonal_regulation' || activeTool === 'organ_matrix') && (
        <ReferenceTablesModal tool={activeTool} onClose={() => setActiveTool(null)} />
      )}

      {/* Slide-out Biochemistry Glossary Drawer */}
      <BiochemistryGlossaryDrawer
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        initialTermId={activeGlossaryTermId}
      />
    </div>
  );
}
