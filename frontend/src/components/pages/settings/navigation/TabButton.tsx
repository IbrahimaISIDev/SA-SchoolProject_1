// src/components/parametres/navigation/TabButton.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export const TabButton = ({
  active,
  onClick,
  icon: Icon,
  label,
}: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 ${
      active
        ? 'border-b-2 border-blue-500 text-blue-600'
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    <Icon className="w-4 h-4" />
    <span className="ml-2">{label}</span>
  </button>
);
