// src/components/parametres/Parametres.tsx
import React, { useState } from 'react';
import { School, Users, BookOpen, Calendar, Building2 } from 'lucide-react';
import { TabButton } from './navigation/TabButton';
import ClassesForm from './forms/ClassesForm';
import ProfesseursForm from './forms/ProfesseursForm';
import ModulesForm from './forms/ModulesForm';
import { AnneScolaireForm, SallesForm } from '.';

const tabs = [
  { id: 'annee', label: 'Année Scolaire', icon: Calendar },
  { id: 'classes', label: 'Classes', icon: School },
  { id: 'professeurs', label: 'Professeurs', icon: Users },
  { id: 'modules', label: 'Modules', icon: BookOpen },
  { id: 'salles', label: 'Salles', icon: Building2 },
] as const;

type TabId = (typeof tabs)[number]['id'];

const Parametres = () => {
  const [activeTab, setActiveTab] = useState<TabId>('annee');

  return (
    <div className="p-4">
      {/* En-tête */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Paramètres</h1>
        <p className="text-gray-500">Gestion des ressources pédagogiques</p>
      </div>

      {/* Navigation */}
      <div className="flex space-x-1 border-b">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            icon={tab.icon}
            label={tab.label}
          />
        ))}
      </div>

      {/* Contenu */}
      <div className="mt-6">
        {activeTab === 'annee' && <AnneScolaireForm />}
        {activeTab === 'classes' && <ClassesForm />}
        {activeTab === 'professeurs' && <ProfesseursForm />}
        {activeTab === 'modules' && <ModulesForm />}
        {activeTab === 'salles' && <SallesForm />}
      </div>
    </div>
  );
};

export default Parametres;
