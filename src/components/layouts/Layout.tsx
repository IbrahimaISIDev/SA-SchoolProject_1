// layouts/Layouts.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLayout } from '../../contexts/LayoutContext';
import MenuLateral from '../common/Disposition/MenuLateral';
import MenuEtudiant from '../common/Disposition/MenuEtudiant';
import MenuProfesseur from '../common/Disposition/MenuProfesseur';
import MenuLateralParent from '../common/Disposition/MenuLateralParent';
import PiedDePage from '../common/Disposition/PiedDePage';

export const MainLayout = () => {
  const { sidebarOpen } = useLayout();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <MenuLateral />
      <div className="flex-1 pt-16">
        <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all`}>
          <Outlet />
        </div>
      </div>
      <PiedDePage />
    </div>
  );
};

export const StudentLayout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <MenuEtudiant />
    <div className="flex-1 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <Outlet />
      </div>
    </div>
    <PiedDePage />
  </div>
);

export const TeacherLayout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <MenuProfesseur />
    <div className="flex-1 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <Outlet />
      </div>
    </div>
    <PiedDePage />
  </div>
);

export const ParentLayout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <MenuLateralParent />
    <div className="flex-1 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        <Outlet />
      </div>
    </div>
    <PiedDePage />
  </div>
);
