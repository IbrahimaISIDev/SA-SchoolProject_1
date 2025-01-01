// src/components/parametres/Parametres.tsx
import React, { useState } from 'react';
import {
  School,
  Users,
  BookOpen,
  Calendar,
  Building2,
  Settings,
} from 'lucide-react';
import { TabButton } from './navigation/TabButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../ui/card';
import AnneScolaireForm from './forms/AnneScolaireForm';
import ClassesForm from './forms/ClassesForm';
import ProfesseursForm from './forms/ProfesseursForm';
import ModulesForm from './forms/ModulesForm';
import SallesForm from './forms/SallesForm';

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        {/* En-tête */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
            <p className="text-gray-500 mt-1">
              Gestion des ressources pédagogiques
            </p>
          </div>
        </div>

        {/* Navigation */}
        <Card className="overflow-hidden">
          <div className="flex border-b">
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
        </Card>

        {/* Contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'annee' && <AnneScolaireForm />}
            {activeTab === 'classes' && <ClassesForm />}
            {activeTab === 'professeurs' && <ProfesseursForm />}
            {activeTab === 'modules' && <ModulesForm />}
            {activeTab === 'salles' && <SallesForm />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Parametres;
