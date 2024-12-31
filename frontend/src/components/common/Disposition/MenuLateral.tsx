// src/components/common/Disposition/MenuLateral.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Home,
  Calendar,
  UserCheck,
  GraduationCap,
  Settings,
  LogOut,
  Bell,
  User,
  Users,
} from 'lucide-react';
import { useLayout } from '../../../contexts/LayoutContext';
import DropdownMenu from '../../ui/DropdownMenu';

const MenuLateral = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={25} />, label: 'Tableau de bord', path: '/' },
    { icon: <Calendar size={25} />, label: 'Planification', path: '/planning' },
    { icon: <UserCheck size={25} />, label: 'Présences', path: '/presences' },
    { icon: <GraduationCap size={25} />, label: 'Notes', path: '/notes' },
    { icon: <Users size={25} />, label: 'Utilisateurs', path: '/utilisateurs' },
    { icon: <Settings size={25} />, label: 'Paramètres', path: '/parametres' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    navigate('/login');
  };

  const userMenuItems = [
    {
      icon: <User className="w-4 h-4" />,
      label: 'Profile',
      onClick: () => navigate('/profile'),
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: 'Paramètres',
      onClick: () => navigate('/parametres'),
    },
    {
      icon: <LogOut className="w-4 h-4" />,
      label: 'Déconnexion',
      onClick: handleLogout,
      className: 'text-red-600 border-t',
    },
  ];

  return (
    <>
      {/* Menu Latéral */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white shadow-lg fixed left-0 top-0 h-screen z-50 transition-all duration-300`}
      >
        <div className="px-6 py-5 flex justify-between items-center border-b">
          <h1
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } text-xl font-bold text-gray-900 transition-all duration-300`}
          >
            ISI Suptech
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Menu size={24} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            >
              {item.icon}
              <span
                className={`ml-3 ${sidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}
              >
                {item.label}
              </span>
            </div>
          ))}

          <div className="absolute bottom-4 w-full px-4">
            <div
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 text-red-600 transition-colors duration-200"
              onClick={handleLogout} // Ajoutez cette ligne
            >
              <LogOut size={30} />
              <span
                className={`ml-3 ${sidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}
              >
                Déconnexion
              </span>
            </div>
          </div>
        </nav>
      </div>

      {/* En-tête */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-40">
        <div
          className={`px-6 py-4 flex justify-end items-center ${
            sidebarOpen ? 'ml-64' : 'ml-20'
          } transition-all duration-300`}
        >
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  7
                </span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">
                  Ibrahima Diallo
                </p>
                <p className="text-xs text-gray-500">Administrateur</p>
              </div>
              <DropdownMenu
                trigger={
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <User size={30} />
                  </button>
                }
                items={userMenuItems}
                title="Mon Compte"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuLateral;
