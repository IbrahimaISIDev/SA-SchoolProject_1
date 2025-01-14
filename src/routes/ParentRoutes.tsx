// routes/ParentRoutes.tsx
import { Route } from 'react-router-dom';
import CalendrierParent from '../components/fonctionnalites/planification/Calendrier/CalendrierParent';
import ParentAbsencesView from '../components/fonctionnalites/absences/FeuillePresence/absencesEtudiantsViewParents';
import ParentChildrenView from '../components/fonctionnalites/utilisateurs/ProfilParent/ChildrenView';
import ParentPaymentsView from '../components/fonctionnalites/utilisateurs/ProfilParent/payment';
import ParentDocumentsView from '../components/fonctionnalites/utilisateurs/ProfilParent/DocumentsView';
import ParentDashboard from '../components/fonctionnalites/utilisateurs/ProfilParent/home';
import ParentGradesView from '../components/fonctionnalites/utilisateurs/ProfilParent/Notes&Bulletins';
import React from 'react';
import { ParentResources } from '../components/fonctionnalites/utilisateurs/ProfilParent/ParentResources';
import { ParentMessaging } from '../components/messaging/ParentMessaging';

export const ParentRoutes = [
  <Route
    key="parent-emplois-du-temps"
    path="/parent/emplois-du-temps"
    element={<CalendrierParent />}
  />,
  <Route
    key="parent-absences"
    path="/parent/absences"
    element={<ParentAbsencesView />}
  />,
  <Route
    key="parent-enfants"
    path="/parent/enfants"
    element={<ParentChildrenView />}
  />,
  <Route
    key="parent-messages"
    path="/parent/messages"
    element={<ParentMessaging />}
  />,
  <Route
    key="parent-login"
    path="/parent-login"
    element={<ParentDashboard />}
  />,
  <Route
    key="parent-notes"
    path="/parent/notes"
    element={<ParentGradesView />}
  />,
  <Route
    key="parent-documents"
    path="/parent/documents"
    element={<ParentDocumentsView />}
  />,
  <Route
    key="parent-ressources"
    path="/parent/ressources"
    element={<ParentResources />}
  />,
  <Route
    key="parent-paiements"
    path="/parent/paiements"
    element={<ParentPaymentsView />}
  />,
];
