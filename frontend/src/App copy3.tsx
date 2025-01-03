// src/App.tsx
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

import { LayoutProvider } from './contexts/LayoutContext';
import TableauBord from './components/pages/TableauBord';
import AbsencesWidget from './components/pages/TableauBord/Widgets/AbsencesWidget';
import CoursWidget from './components/pages/TableauBord/Widgets/CoursWidget';
import PerformanceWidget from './components/pages/TableauBord/Widgets/PerformanceWidget';
import StatWidget from './components/pages/TableauBord/Widgets/StatWidget';
import GestionUtilisateurs from './components/fonctionnalites/utilisateurs/GestionUtilisateurs';
import ProfilAdministrateur from './components/fonctionnalites/utilisateurs/ProfilAdministrateur';
import MenuLateral from './components/common/Disposition/MenuLateral';
import PiedDePage from './components/common/Disposition/PiedDePage';
import { useLayout } from './contexts/LayoutContext';
import Planification from './components/pages/Planification';
import GestionPresences from './components/pages/Presences';
import GestionNotes from './components/pages/Notes';
import { Parametres } from './components/pages/settings/index';
import AjouterUtilisateur from './components/pages/Utilisateurs/Administration';
import Administration from './components/pages/Utilisateurs';
import GestionCours from './components/pages/Planification/GestionCours';
import LoginPage from './components/pages/Auth/LoginPage';
import ProfilePage from './components/pages/Profile';
import ProchainsCoursPage from './components/pages/Planification/ProchainsCoursPage';
import ProfilProfesseur from './components/fonctionnalites/utilisateurs/ProfilProfesseur';
import ProfilEtudiant from './components/fonctionnalites/utilisateurs/ProfilEtudiant';
import DocumentsAdministratifs from './components/fonctionnalites/utilisateurs/ProfilEtudiant/DocumentsAdministratifs';

function AppContent() {
  const { sidebarOpen } = useLayout();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Vérifie si l'utilisateur est connecté
  //   const token = localStorage.getItem('token'); // Remplacez par votre logique de token
  //   if (!token) {
  //     navigate('/login'); // Redirige vers la page de connexion si non connecté
  //   }
  // }, []);

  const pagesWithoutLayout = [
    '/login',
    '/etudiant-login',
    '/professeur-login',
    '/',
    '/documents/certificat-scolarite',
    '/documents/carte-etudiant',
    '/documents/releve-notes',
  ];

  const location = useLocation();
  const shouldShowLayout = !pagesWithoutLayout.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {shouldShowLayout && <MenuLateral />}
      <div className={`flex-1 ${shouldShowLayout ? 'pt-16' : ''}`}>
        <div
          className={`${shouldShowLayout ? (sidebarOpen ? 'ml-64' : 'ml-20') : ''} transition-all`}
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<TableauBord />} />
            <Route path="/absences" element={<AbsencesWidget />} />
            <Route path="/cours" element={<CoursWidget />} />
            <Route path="/performance" element={<PerformanceWidget />} />
            <Route path="/planning" element={<Planification />} />
            <Route path="/presences" element={<GestionPresences />} />
            <Route path="/notes" element={<GestionNotes />} />
            <Route path="/utilisateurs" element={<Administration />} />
            <Route path="/parametres" element={<Parametres />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/prochains-cours" element={<ProchainsCoursPage />} />
            <Route
              path="/planification/gestion-cours"
              element={<GestionCours />}
            />
            <Route
              path="/utilisateurs/gestion-users"
              element={<AjouterUtilisateur />}
            />
            <Route
              path="/ajouter-utilisateur"
              element={<AjouterUtilisateur />}
            />
            <Route
              path="/stats"
              element={
                <StatWidget
                  icon="chart"
                  title="Statistiques"
                  value="100"
                  evolution="+10%"
                />
              }
            />
            <Route
              path="/admin/utilisateurs"
              element={<GestionUtilisateurs />}
            />
            <Route path="/admin/profil" element={<ProfilAdministrateur />} />
            <Route path="/etudiant-login" element={<ProfilEtudiant />} />
            <Route path="/professeur-login" element={<ProfilProfesseur />} />
            <Route
              path="/documents/carte-etudiant"
              element={<DocumentsAdministratifs />}
            />
            <Route
              path="/documents/certificat-scolarite"
              element={<DocumentsAdministratifs />}
            />
            <Route
              path="/documents/releve-notes"
              element={<DocumentsAdministratifs />}
            />
          </Routes>
        </div>
      </div>
      {shouldShowLayout && <PiedDePage />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutProvider>
        <AppContent />
      </LayoutProvider>
    </Router>
  );
}

export default App;
