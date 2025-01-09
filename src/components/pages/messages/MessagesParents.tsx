import React, { useState } from 'react';
import {
  Mail,
  Search,
  Plus,
  Star,
  Clock,
  Send,
  Trash2,
  ChevronLeft,
  Users,
  Paperclip,
  ArrowRight,
  Archive,
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { useLayout } from '../../../contexts/LayoutContext';

export default function ParentMessagesView() {
  const { sidebarOpen } = useLayout();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);

  const messages = [
    {
      id: 1,
      sender: 'M. Samba Diallo',
      role: 'Professeur de Mathématiques',
      subject: 'Résultats du dernier devoir',
      preview: 'Bonjour, je vous contacte au sujet des résultats...',
      date: "Aujourd'hui, 14:30",
      unread: true,
      child: 'Fatou Diallo',
      content: `Cher parent,

Je vous contacte au sujet des résultats du dernier devoir de mathématiques de Fatou. Elle a obtenu une excellente note de 18/20.

Je tenais à souligner son travail remarquable et son implication en classe.

Cordialement,
M. Samba Diallo`,
    },
    {
      id: 2,
      sender: 'Mme Aïssatou Barry',
      role: 'Responsable Pédagogique',
      subject: 'Réunion parents-professeurs',
      preview: 'Une réunion parents-professeurs est prévue...',
      date: 'Hier, 09:15',
      unread: false,
      child: 'Amadou Diallo',
      content: `Chers parents,

Une réunion parents-professeurs est prévue le 15 février à 15h00.

Cette rencontre sera l'occasion de discuter des progrès de votre enfant et des objectifs pour le reste de l'année.

Merci de confirmer votre présence.

Cordialement,
Mme Aïssatou Barry`,
    },
  ];

  const MessagePreview = ({ message, onClick }) => (
    <div
      onClick={onClick}
      className={`
        p-4 border-b cursor-pointer
        hover:bg-gray-50 transition-colors
        ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3
            className={`font-medium ${message.unread ? 'text-blue-600' : 'text-gray-900'}`}
          >
            {message.sender}
          </h3>
          <p className="text-sm text-gray-500">{message.role}</p>
        </div>
        <span className="text-sm text-gray-500">{message.date}</span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{message.subject}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 truncate">{message.preview}</p>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
          {message.child}
        </span>
      </div>
    </div>
  );

  const NewMessageForm = () => (
    <div className="h-full flex flex-col">
      <div className="border-b p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Nouveau Message</h2>
          <button
            onClick={() => setShowNewMessage(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destinataire
            </label>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Sélectionner un destinataire</option>
              <option>M. Samba Diallo - Professeur de Mathématiques</option>
              <option>Mme Aïssatou Barry - Responsable Pédagogique</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Concerne l'élève
            </label>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Sélectionner un élève</option>
              <option>Fatou Diallo - L2 GL</option>
              <option>Amadou Diallo - L1 GL</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sujet
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez le sujet"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <textarea
          className="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
          placeholder="Rédigez votre message..."
        />
      </div>
      <div className="border-t p-4 flex justify-between items-center">
        <button className="text-gray-500 hover:text-gray-700">
          <Paperclip className="w-6 h-6" />
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Send className="w-4 h-4" />
          Envoyer
        </button>
      </div>
    </div>
  );

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-hidden
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full flex">
        {/* Liste des messages */}
        <div
          className={`
          ${selectedMessage || showNewMessage ? 'hidden md:block' : ''}
          w-full md:w-96 bg-white border-r
        `}
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Messages</h1>
              <button
                onClick={() => setShowNewMessage(true)}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un message..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div
            className="overflow-y-auto"
            style={{ height: 'calc(100vh - 170px)' }}
          >
            {messages.map((message) => (
              <MessagePreview
                key={message.id}
                message={message}
                onClick={() => setSelectedMessage(message)}
              />
            ))}
          </div>
        </div>

        {/* Vue détaillée du message ou nouveau message */}
        <div
          className={`
          ${!selectedMessage && !showNewMessage ? 'hidden md:block' : ''}
          flex-1 bg-white
        `}
        >
          {showNewMessage ? (
            <NewMessageForm />
          ) : selectedMessage ? (
            <div className="h-full flex flex-col">
              <div className="border-b p-4">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="md:hidden text-gray-500 hover:text-gray-700"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Archive className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedMessage.subject}
                </h2>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{selectedMessage.sender}</p>
                    <p className="text-sm text-gray-500">
                      {selectedMessage.role}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {selectedMessage.date}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 mt-2 inline-block">
                  Concernant : {selectedMessage.child}
                </span>
              </div>
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="prose max-w-none">
                  {selectedMessage.content
                    .split('\n')
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
              <div className="border-t p-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Répondre
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Mail className="w-16 h-16 mb-4 mx-auto text-gray-400" />
                <p>Sélectionnez un message pour le lire</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
