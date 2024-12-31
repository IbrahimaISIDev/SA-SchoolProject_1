import React, { useState } from 'react';
import InfosPersonnelles from './InfosPersonnelles';
import ProgressionAcademique from './ProgressionAcademique';

const ProfilEtudiant = () => {
  const [activeTab, setActiveTab] = useState('infos');

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
    <div className="bg-white rounded-lg shadow">
      {/* En-tête du profil */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-4">
          <img
            src={etudiant.photo}
            alt={`${etudiant.prenom} ${etudiant.nom}`}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {etudiant.prenom} {etudiant.nom}
            </h1>
            <p className="text-gray-500">{etudiant.classe}</p>
          </div>
        </div>
      </div>

      {/* Navigation entre les onglets */}
      <div className="border-b px-6">
        <nav className="flex space-x-6">
          <button
            onClick={() => setActiveTab('infos')}
            className={`py-4 font-medium border-b-2 ${
              activeTab === 'infos'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Informations Personnelles
          </button>
          <button
            onClick={() => setActiveTab('progression')}
            className={`py-4 font-medium border-b-2 ${
              activeTab === 'progression'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Progression Académique
          </button>
        </nav>
      </div>

      {/* Contenu des onglets */}
      <div className="p-6">
        {activeTab === 'infos' ? (
          <InfosPersonnelles etudiant={etudiant} />
        ) : (
          <ProgressionAcademique etudiantId={etudiant.id} />
        )}
      </div>
    </div>
  );
};

export default ProfilEtudiant;
