import React, { useState } from 'react';
import { Calendar, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import TelechargementJustificatif from './TelechargementJustificatif';

export default function FormulaireJustification() {
  const [formData, setFormData] = useState({
    dateDebut: '',
    dateFin: '',
    motif: '',
    description: '',
  });
  const [fichier, setFichier] = useState(null);
  const [statut, setStatut] = useState('en_attente'); // en_attente, accepte, refuse

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission
    console.log('Données soumises:', { ...formData, fichier });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Justification d'absence
        </h2>
        <p className="text-gray-600">
          Remplissez le formulaire pour justifier votre absence
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Période d'absence */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de début
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.dateDebut}
                onChange={(e) =>
                  setFormData({ ...formData, dateDebut: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de fin
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={formData.dateFin}
                onChange={(e) =>
                  setFormData({ ...formData, dateFin: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>

        {/* Motif */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Motif de l'absence
          </label>
          <select
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={formData.motif}
            onChange={(e) =>
              setFormData({ ...formData, motif: e.target.value })
            }
            required
          >
            <option value="">Sélectionnez un motif</option>
            <option value="medical">Raison médicale</option>
            <option value="familial">Raison familiale</option>
            <option value="professionnel">Raison professionnelle</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Décrivez la raison de votre absence..."
            required
          />
        </div>

        {/* Téléchargement de justificatif */}
        <TelechargementJustificatif
          onFileSelect={setFichier}
          fichierActuel={fichier}
        />

        {/* Statut de la justification */}
        {statut !== 'en_attente' && (
          <div
            className={`p-4 rounded-lg ${
              statut === 'accepte' ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
            {statut === 'accepte' ? (
              <div className="flex items-center text-green-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                Justification acceptée
              </div>
            ) : (
              <div className="flex items-center text-red-700">
                <AlertCircle className="h-5 w-5 mr-2" />
                Justification refusée
              </div>
            )}
          </div>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Soumettre la justification
        </button>
      </form>
    </div>
  );
}
