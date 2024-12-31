import React from 'react';
import InfosPersonnelles from './InfosPersonnelles';
import GestionModules from './GestionModules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

export default function ProfilProfesseur() {
  return (
    <div className="container mx-auto p-6">
      {/* En-tête du profil */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-600">PR</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Dr. Amadou Diallo
            </h1>
            <p className="text-gray-600">Professeur en Informatique</p>
            <p className="text-sm text-gray-500">ID: PRF-2024-001</p>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <Tabs defaultValue="infos" className="w-full">
        <TabsList>
          <TabsTrigger value="infos">Informations Personnelles</TabsTrigger>
          <TabsTrigger value="modules">Gestion des Modules</TabsTrigger>
        </TabsList>

        <TabsContent value="infos">
          <InfosPersonnelles />
        </TabsContent>

        <TabsContent value="modules">
          <GestionModules />
        </TabsContent>
      </Tabs>
    </div>
  );
}
