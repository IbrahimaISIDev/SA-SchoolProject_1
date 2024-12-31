import React from 'react';

interface InfosPersonnellesProps {
  etudiant: {
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;
    telephone: string;
    classe: string;
  };
}

const InfosPersonnelles = ({ etudiant }: InfosPersonnellesProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoField label="Nom" value={etudiant.nom} />
        <InfoField label="Prénom" value={etudiant.prenom} />
        <InfoField
          label="Date de Naissance"
          value={new Date(etudiant.dateNaissance).toLocaleDateString('fr-FR')}
        />
        <InfoField label="Email" value={etudiant.email} />
        <InfoField label="Téléphone" value={etudiant.telephone} />
        <InfoField label="Classe" value={etudiant.classe} />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Documents</h3>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
            Carte étudiant
          </button>
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
            Certificat de scolarité
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoField = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
  </div>
);

export default InfosPersonnelles;
