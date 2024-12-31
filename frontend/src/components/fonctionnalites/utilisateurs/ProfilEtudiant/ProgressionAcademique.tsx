import React from 'react';

interface ProgressionAcademiqueProps {
  etudiantId: string;
}

const ProgressionAcademique = ({ etudiantId }: ProgressionAcademiqueProps) => {
  // Données simulées
  const modules = [
    {
      nom: 'Développement Web',
      moyenne: 16.5,
      credits: 6,
      status: 'validé',
    },
    {
      nom: 'Base de données',
      moyenne: 15.0,
      credits: 4,
      status: 'validé',
    },
    {
      nom: 'Algorithmique',
      moyenne: 14.5,
      credits: 5,
      status: 'validé',
    },
  ];

  const moyenneGenerale = 15.33;
  const creditsValides = 15;
  const creditsTotaux = 30;

  return (
    <div className="space-y-6">
      {/* Résumé */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Moyenne Générale"
          value={`${moyenneGenerale.toFixed(2)}/20`}
        />
        <StatCard
          title="Crédits Validés"
          value={`${creditsValides}/${creditsTotaux}`}
        />
        <StatCard
          title="Progression"
          value={`${((creditsValides / creditsTotaux) * 100).toFixed(0)}%`}
        />
      </div>

      {/* Liste des modules */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Modules</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Moyenne
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Crédits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {modules.map((module, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {module.nom}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {module.moyenne.toFixed(2)}/20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {module.credits}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {module.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white p-6 rounded-lg border">
    <dt className="text-sm font-medium text-gray-500">{title}</dt>
    <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
  </div>
);

export default ProgressionAcademique;
