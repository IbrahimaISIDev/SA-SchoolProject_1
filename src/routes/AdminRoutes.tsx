// routes/AdminRoutes.tsx
import { Route } from 'react-router-dom';
import TableauBord from '../components/pages/TableauBord';
import AbsencesWidget from '../components/pages/TableauBord/Widgets/AbsencesWidget';
import CoursWidget from '../components/pages/TableauBord/Widgets/CoursWidget';
import PerformanceWidget from '../components/pages/TableauBord/Widgets/PerformanceWidget';
import Planification from '../components/pages/Planification';
import GestionPresences from '../components/pages/Presences';
import GestionNotes from '../components/fonctionnalites/absences/FeuillePresence/Notes';
import Administration from '../components/pages/Utilisateurs/Administration';
import Parametres from '../components/pages/settings/Parametres';
import ProfilePage from '../components/pages/Profile';
import ProchainsCoursPage from '../components/pages/Planification/ProchainsCoursPage';
import StatistiquesAbsences from '../components/fonctionnalites/absences/StatistiquesAbsences';
import GestionCours from '../components/pages/Planification/GestionCours';
import AjouterUtilisateur from '../components/pages/Utilisateurs/Administration';
import GestionUtilisateurs from '../components/fonctionnalites/utilisateurs/GestionUtilisateurs';
import ProfilAdministrateur from '../components/fonctionnalites/utilisateurs/ProfilAdministrateur';
import React from 'react';
import AdminMessaging from '../components/messaging/AdminMessaging';
// import GradeReport from '../components/fonctionnalites/notes/Bulletin/indexPremium1';

export const AdminRoutes = [
  <Route key="dashboard" path="/dashboard" element={<TableauBord />} />,
  <Route key="absences" path="/absences" element={<AbsencesWidget />} />,
  <Route key="cours" path="/cours" element={<CoursWidget />} />,
  <Route
    key="performance"
    path="/performance"
    element={<PerformanceWidget />}
  />,
  <Route key="planning" path="/planning" element={<Planification />} />,
  <Route key="presences" path="/presences" element={<GestionPresences />} />,
  <Route key="notes" path="/notes" element={<GestionNotes />} />,
  //<Route path="/notes" element={<GradeReport />} />,
  <Route
    key="utilisateurs"
    path="/utilisateurs"
    element={<Administration />}
  />,
  <Route key="parametres" path="/parametres" element={<Parametres />} />,
  <Route key="profile" path="/profile" element={<ProfilePage />} />,
  <Route
    key="prochains-cours"
    path="/prochains-cours"
    element={<ProchainsCoursPage />}
  />,
  <Route
    key="stat-absences"
    path="/stat-absences"
    element={<StatistiquesAbsences />}
  />,
  <Route
    key="admins-messages"
    path="/admins/messages"
    element={<AdminMessaging />}
  />,
  <Route
    key="gestion-cours"
    path="/planification/gestion-cours"
    element={<GestionCours />}
  />,
  <Route
    key="gestion-users"
    path="/utilisateurs/gestion-users"
    element={<AjouterUtilisateur />}
  />,
  <Route
    key="ajouter-utilisateur"
    path="/ajouter-utilisateur"
    element={<AjouterUtilisateur />}
  />,
  <Route
    key="admin-utilisateurs"
    path="/admin/utilisateurs"
    element={<GestionUtilisateurs />}
  />,
  <Route
    key="admin-profil"
    path="/admin/profil"
    element={<ProfilAdministrateur />}
  />,
];
