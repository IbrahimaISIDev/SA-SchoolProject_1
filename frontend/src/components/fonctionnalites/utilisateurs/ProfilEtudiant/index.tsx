import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Download,
  UserCircle,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import ProgressionAcademique from './ProgressionAcademique';
import InfosPersonnelles from './InfosPersonnelles';
import MenuLateralEtudiant from '../../../common/Disposition/MenuEtudiant';
import { useLayout } from '../../../../contexts/LayoutContext';

const ProfilEtudiant = () => {
  const [activeTab, setActiveTab] = useState('infos');
  const { sidebarOpen } = useLayout();

  const etudiant = {
    id: 'ETU001',
    nom: 'Diallo',
    prenom: 'Fatou',
    dateNaissance: '2000-05-15',
    email: 'fatou.diallo@isi-suptech.sn',
    telephone: '+221 77 123 45 67',
    classe: 'Licence 3 - Génie Logiciel',
    photo: '/api/placeholder/150/150',
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuLateralEtudiant />

      {/* Contenu Principal */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden mt-16"
          >
            {/* En-tête du profil avec dégradé */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 p-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <img
                    src={etudiant.photo}
                    alt={`${etudiant.prenom} ${etudiant.nom}`}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-400 w-6 h-6 rounded-full border-4 border-white" />
                </motion.div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white">
                    {etudiant.prenom} {etudiant.nom}
                  </h1>
                  <p className="text-blue-100 font-medium mt-1">
                    {etudiant.classe}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                    <span className="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-full text-sm text-white">
                      #{etudiant.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation stylisée */}
            <div className="border-b bg-white px-6">
              <nav className="flex space-x-8">
                <TabButton
                  active={activeTab === 'infos'}
                  onClick={() => setActiveTab('infos')}
                  icon={<UserCircle className="w-5 h-5" />}
                  label="Informations Personnelles"
                />
                <TabButton
                  active={activeTab === 'progression'}
                  onClick={() => setActiveTab('progression')}
                  icon={<GraduationCap className="w-5 h-5" />}
                  label="Progression Académique"
                />
              </nav>
            </div>

            {/* Contenu avec animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white"
            >
              {activeTab === 'infos' ? (
                <InfosPersonnelles etudiant={etudiant} />
              ) : (
                <ProgressionAcademique etudiantId={etudiant.id} />
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }) => (
  <motion.button
    whileHover={{ y: -2 }}
    onClick={onClick}
    className={`flex items-center space-x-2 py-4 px-2 font-medium border-b-2 transition-colors ${
      active
        ? 'border-blue-500 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

export default ProfilEtudiant;
