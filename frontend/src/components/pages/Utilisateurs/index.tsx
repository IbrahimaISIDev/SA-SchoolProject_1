// // src/composants/pages/Utilisateurs/index.tsx
// import React, { useState } from 'react';
// import { Plus, Search, Filter } from 'lucide-react';

// export default function GestionUtilisateurs() {
//   const [filtreRole, setFiltreRole] = useState('tous');
//   const [recherche, setRecherche] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);

//   // Données simulées pour l'exemple
//   const utilisateurs = [
//     {
//       id: 1,
//       nom: 'Diop',
//       prenom: 'Amadou',
//       role: 'étudiant',
//       classe: '3ème année',
//       email: 'amadou.diop@isi.sn',
//       statut: 'actif',
//     },
//     {
//       id: 2,
//       nom: 'Ndiaye',
//       prenom: 'Fatou',
//       role: 'professeur',
//       specialite: 'Informatique',
//       email: 'fatou.ndiaye@isi.sn',
//       statut: 'actif',
//     },
//     {
//       id: 3,
//       nom: 'Sall',
//       prenom: 'Omar',
//       role: 'administrateur',
//       service: 'Pédagogie',
//       email: 'omar.sall@isi.sn',
//       statut: 'actif',
//     },
//   ];

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Gestion des Utilisateurs
//         </h1>
//         <button
//           onClick={() => {
//             setCurrentUser(null);
//           }}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
//         >
//           <Plus size={20} /> Ajouter un utilisateur
//         </button>
//       </div>

//       {/* Filtres et recherche */}
//       <div className="flex gap-4 mb-6">
//         <div className="flex-1 flex items-center gap-2 bg-white p-2 rounded-lg shadow">
//           <Search size={20} className="text-gray-400" />
//           <input
//             type="text"
//             placeholder="Rechercher un utilisateur..."
//             className="flex-1 outline-none"
//             value={recherche}
//             onChange={(e) => setRecherche(e.target.value)}
//           />
//         </div>
//         <select
//           className="bg-white p-2 rounded-lg shadow border outline-none"
//           value={filtreRole}
//           onChange={(e) => setFiltreRole(e.target.value)}
//         >
//           <option value="tous">Tous les rôles</option>
//           <option value="étudiant">Étudiants</option>
//           <option value="professeur">Professeurs</option>
//           <option value="administrateur">Administrateurs</option>
//         </select>
//       </div>

//       {/* Tableau des utilisateurs */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Nom complet
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Rôle
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Statut
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {utilisateurs.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="font-medium text-gray-900">
//                     {user.nom} {user.prenom}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
//                     ${
//                       user.role === 'étudiant'
//                         ? 'bg-green-100 text-green-800'
//                         : user.role === 'professeur'
//                           ? 'bg-blue-100 text-blue-800'
//                           : 'bg-purple-100 text-purple-800'
//                     }`}
//                   >
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                   {user.email}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                     {user.statut}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <button className="text-blue-600 hover:text-blue-900 mr-4">
//                     Modifier
//                   </button>
//                   <button className="text-red-600 hover:text-red-900">
//                     Supprimer
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="text-sm text-gray-500">
//           Affichage de 1 à {utilisateurs.length} sur {utilisateurs.length}{' '}
//           utilisateurs
//         </div>
//         <div className="flex gap-2">
//           <button className="px-3 py-1 border rounded hover:bg-gray-50">
//             Précédent
//           </button>
//           <button className="px-3 py-1 border rounded bg-blue-50 text-blue-600">
//             1
//           </button>
//           <button className="px-3 py-1 border rounded hover:bg-gray-50">
//             Suivant
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Administration = () => {
  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate('/utilisateurs/gestion-users');
  };
  // État pour la gestion des utilisateurs
  const [utilisateurs] = useState([
    {
      id: 1,
      nom: 'Diallo',
      prenom: 'Amadou',
      role: 'Professeur',
      specialite: 'Développement Web',
      statut: 'Actif',
    },
    {
      id: 2,
      nom: 'Ndiaye',
      prenom: 'Fatou',
      role: 'Étudiant',
      classe: 'L3 Info',
      statut: 'Actif',
    },
    {
      id: 3,
      nom: 'Sow',
      prenom: 'Mohamed',
      role: 'Attaché',
      departement: 'Pédagogie',
      statut: 'Actif',
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Gestion des Utilisateurs
        </h1>
        <button
          onClick={handleNewUser}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} className="mr-2" />
          Nouvel Utilisateur
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Tous les rôles</option>
          <option value="professeur">Professeur</option>
          <option value="etudiant">Étudiant</option>
          <option value="attache">Attaché</option>
        </select>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Tous les statuts</option>
          <option value="actif">Actif</option>
          <option value="inactif">Inactif</option>
        </select>
      </div>

      {/* Table des utilisateurs */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom & Prénom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rôle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spécialité/Classe
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {utilisateurs.map((utilisateur) => (
              <tr key={utilisateur.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {utilisateur.prenom[0]}
                        {utilisateur.nom[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {utilisateur.nom}
                      </div>
                      <div className="text-sm text-gray-500">
                        {utilisateur.prenom}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {utilisateur.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {utilisateur.specialite ||
                    utilisateur.classe ||
                    utilisateur.departement}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {utilisateur.statut}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Affichage de 1 à 3 sur 3 utilisateurs
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 border rounded hover:bg-gray-50"
            disabled
          >
            Précédent
          </button>
          <button
            className="px-4 py-2 border rounded hover:bg-gray-50"
            disabled
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Administration;
