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
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { useLayout } from '../../../contexts/LayoutContext';
import { useTheme } from '../../../contexts/ThemeContext';
import DropdownMenu from '../../ui/DropdownMenu';

const MenuLateral = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = React.useState('/');

  const menuItems = [
    {
      icon: <Home className="w-6 h-6" />,
      label: 'Tableau de bord',
      path: '/dashboard',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Planification',
      path: '/planning',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      label: 'Présences',
      path: '/presences',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: 'Notes',
      path: '/notes',
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Utilisateurs',
      path: '/utilisateurs',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Messages',
      path: '/admins/messages',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      label: 'Paramètres',
      path: '/parametres',
    },
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
      className: 'text-red-600 dark:text-red-400 border-t dark:border-gray-600',
    },
  ];

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <>
      {/* Menu Latéral avec support du thème sombre */}
      <div
        className={`
          ${sidebarOpen ? 'w-64' : 'w-20'} 
          fixed left-0 top-0 h-screen z-50 
          bg-gradient-to-b from-blue-50 to-white
          dark:from-gray-800 dark:to-gray-900
          border-r border-gray-200 dark:border-gray-700
          transition-all duration-300 ease-in-out
        `}
      >
        {/* En-tête du menu */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div
            className={`flex items-center space-x-2 ${!sidebarOpen ? 'scale-0 w-0' : 'scale-100'} transition-transform duration-300`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
              <span className="text-white text-lg font-bold">SA</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Sonatel Academy
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation principale */}
        <nav className="mt-6 px-4">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`
                flex items-center px-4 py-3 my-1
                rounded-lg cursor-pointer
                transition-all duration-200
                ${
                  activeItem === item.path
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                }
                ${!sidebarOpen && 'justify-center'}
              `}
            >
              {React.cloneElement(item.icon, {
                className: `${activeItem === item.path ? 'text-white' : 'text-gray-600 dark:text-gray-300'} flex-shrink-0`,
              })}
              {sidebarOpen && (
                <span className="ml-3 font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Bouton de déconnexion */}
        <div className="absolute bottom-4 w-full px-4">
          <div
            className={`
              flex items-center px-4 py-3 mx-4
              rounded-lg cursor-pointer
              text-red-600 dark:text-red-400
              hover:bg-red-50 dark:hover:bg-red-900/20
              transition-all duration-200
              ${!sidebarOpen && 'justify-center'}
            `}
            onClick={handleLogout}
          >
            <LogOut className="w-6 h-6 flex-shrink-0" />
            {sidebarOpen && (
              <span className="ml-3 font-medium whitespace-nowrap">
                Déconnexion
              </span>
            )}
          </div>
        </div>
      </div>

      {/* En-tête avec support du thème sombre */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-40">
        <div
          className={`
            px-6 py-4 flex justify-end items-center
            ${sidebarOpen ? 'ml-64' : 'ml-20'}
            transition-all duration-300
          `}
        >
          <div className="flex items-center space-x-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                <span
                  className="
                    absolute -top-1 -right-1
                    h-5 w-5 bg-red-500
                    rounded-full text-xs text-white
                    flex items-center justify-center
                    border-2 border-white dark:border-gray-800
                  "
                >
                  7
                </span>
              </button>
            </div>

            {/* Profil utilisateur */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ibrahima Diallo
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  Administrateur
                </p>
              </div>
              <DropdownMenu
                trigger={
                  <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
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
