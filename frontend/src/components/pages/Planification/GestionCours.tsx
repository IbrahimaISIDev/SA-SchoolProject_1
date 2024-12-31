import React, { useState } from 'react';
import { Save, ArrowLeft } from 'lucide-react'; // Import de l'icône pour la flèche
import { useNavigate } from 'react-router-dom'; // Import de useNavigate

export default function GestionCours() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  const [formData, setFormData] = useState({
    module: '',
    professeur: '',
    classe: '',
    heuresTotal: '',
    dateDebut: '',
    dateFin: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Logique de soumission
  };

  const handleBack = () => {
    navigate(-1); // Retourne à la page précédente
  };

  return (
    <div className="p-6">
      {/* En-tête avec flèche pour retour */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Nouveau Cours</h1>
        </div>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Module
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              value={formData.module}
              onChange={(e) =>
                setFormData({ ...formData, module: e.target.value })
              }
            >
              <option value="">Sélectionner un module</option>
              <option value="1">Développement Web</option>
              <option value="2">Base de données</option>
            </select>
          </div>

          {/* Professeur */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professeur
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              value={formData.professeur}
              onChange={(e) =>
                setFormData({ ...formData, professeur: e.target.value })
              }
            >
              <option value="">Sélectionner un professeur</option>
              <option value="1">Dr. Diallo</option>
              <option value="2">Pr. Ndiaye</option>
            </select>
          </div>

          {/* Classe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Classe
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              value={formData.classe}
              onChange={(e) =>
                setFormData({ ...formData, classe: e.target.value })
              }
            >
              <option value="">Sélectionner une classe</option>
              <option value="1">L2 Informatique</option>
              <option value="2">L3 Réseaux</option>
            </select>
          </div>

          {/* Heures totales */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Heures totales
            </label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.heuresTotal}
              onChange={(e) =>
                setFormData({ ...formData, heuresTotal: e.target.value })
              }
            />
          </div>

          {/* Date de début */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de début
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.dateDebut}
              onChange={(e) =>
                setFormData({ ...formData, dateDebut: e.target.value })
              }
            />
          </div>

          {/* Date de fin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de fin
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.dateFin}
              onChange={(e) =>
                setFormData({ ...formData, dateFin: e.target.value })
              }
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full border rounded-lg px-4 py-2"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Boutons d'action */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="w-5 h-5 mr-2" />
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
