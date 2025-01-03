import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import MenuLateralProfesseur from '../../../common/Disposition/MenuProfesseur';
import InfosPersonnelles from './InfosPersonnelles';
import GestionModules from './GestionModules';
import { useLayout } from '../../../../contexts/LayoutContext';
import { Professeur } from '../../../../types/types';

const ProfilProfesseur = () => {
  const { sidebarOpen } = useLayout();

  const professeur = {
    id: 'PRF-2024-001',
    nom: 'Diallo',
    prenom: 'Amadou',
    titre: 'Dr.',
    specialite: 'Professeur en Informatique',
    photo: '/api/placeholder/150/150',
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuLateralProfesseur />

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
                    src={professeur.photo}
                    alt={`${professeur.titre} ${professeur.prenom} ${professeur.nom}`}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-400 w-6 h-6 rounded-full border-4 border-white" />
                </motion.div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white">
                    {professeur.titre} {professeur.prenom} {professeur.nom}
                  </h1>
                  <p className="text-blue-100 font-medium mt-1">
                    {professeur.specialite}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                    <span className="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-full text-sm text-white">
                      #{professeur.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation avec Tabs */}
            <div className="bg-white px-6">
              <Tabs defaultValue="infos" className="w-full">
                <TabsList className="border-b">
                  <TabsTrigger
                    value="infos"
                    className="flex items-center gap-2"
                  >
                    <UserCircle className="w-5 h-5" />
                    Informations Personnelles
                  </TabsTrigger>
                  <TabsTrigger
                    value="modules"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Gestion des Modules
                  </TabsTrigger>
                </TabsList>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <TabsContent value="infos" className="mt-6">
                    <InfosPersonnelles professeur={professeur} />
                  </TabsContent>

                  <TabsContent value="modules" className="mt-6">
                    <GestionModules professeurId={professeur.id} />
                  </TabsContent> */}
                  {/* Onglets */}
                  <Tabs defaultValue="infos" className="w-full">
                    {/* <TabsList>
                      <TabsTrigger value="infos">
                        Informations Personnelles
                      </TabsTrigger>
                      <TabsTrigger value="modules">
                        Gestion des Modules
                      </TabsTrigger>
                    </TabsList> */}

                    <TabsContent value="infos">
                      <InfosPersonnelles />
                    </TabsContent>

                    <TabsContent value="modules">
                      <GestionModules />
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProfilProfesseur;
