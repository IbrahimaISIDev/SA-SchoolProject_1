// src/components/messaging/common/MessageTabs.jsx
import React from 'react';

export const MessageTabs = ({ activeTab, onTabChange }) => (
  <div className="flex space-x-4 border-b mb-6">
    <button
      className={`px-6 py-3 font-medium ${
        activeTab === 'inbox'
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => onTabChange('inbox')}
    >
      Boîte de réception
    </button>
    <button
      className={`px-6 py-3 font-medium ${
        activeTab === 'new'
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => onTabChange('new')}
    >
      Nouveau message
    </button>
  </div>
);
