// src/components/messaging/common/MessageHeader.jsx
import React from 'react';
import { Send } from 'lucide-react';

export const MessageHeader = ({ title, subtitle, onNewMessage }) => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-blue-100">{subtitle}</p>
      </div>
      <button
        onClick={onNewMessage}
        className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition"
      >
        <Send className="h-5 w-5" />
        Nouveau message
      </button>
    </div>
  </div>
);
