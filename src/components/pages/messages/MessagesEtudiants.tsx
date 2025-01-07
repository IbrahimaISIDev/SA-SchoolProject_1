import React, { useState } from 'react';
import {
  Mail,
  Users,
  Send,
  Star,
  Trash2,
  AlertCircle,
  Reply,
  X,
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { useLayout } from '../../../contexts/LayoutContext';

export default function StudentMessaging() {
  const { sidebarOpen } = useLayout();
  const [activeTab, setActiveTab] = useState('inbox');
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      sender: 'Administration',
      subject: "Rappel - Justificatif d'absence",
      content: "Votre justificatif d'absence pour le cours...",
      date: '2024-01-02',
      isUrgent: true,
      isRead: false,
      type: 'administration',
    },
    {
      id: 2,
      sender: 'Coach Wane',
      subject: 'Devoir à rendre',
      content: "N'oubliez pas de rendre le devoir de...",
      date: '2024-01-01',
      isUrgent: false,
      isRead: true,
      type: 'professor',
    },
  ];

  const professors = [
    { id: 1, name: 'Coach Wane', subject: 'Laravel' },
    { id: 2, name: 'Coach Aly', subject: 'Python' },
    { id: 3, name: 'Coach Diallo', subject: 'Anglais' },
  ];

  const NewMessage = () => (
    <Card className="mt-6">
      <CardContent className="p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destinataire
            </label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Sélectionnez un destinataire</option>
              <option value="administration">Administration</option>
              <optgroup label="Professeurs">
                {professors.map((prof) => (
                  <option key={prof.id} value={prof.id}>
                    {prof.name} - {prof.subject}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sujet
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Sujet du message"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Écrivez votre message..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const ReplyForm = ({ message }) => (
    <Card className="mt-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">
            Répondre à : {message.subject}
          </h3>
          <button
            onClick={() => setShowReplyForm(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form className="space-y-4">
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Écrivez votre réponse..."
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Reply className="h-4 w-4" />
              Répondre
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const Inbox = () => (
    <div className="space-y-4 mt-6">
      {messages.map((message) => (
        <div key={message.id}>
          <Card
            className={`hover:shadow-lg transition-shadow ${
              !message.isRead ? 'bg-blue-50' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Mail
                    className={`h-5 w-5 ${
                      message.isRead ? 'text-gray-400' : 'text-blue-600'
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{message.sender}</span>
                      {message.isUrgent && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <h3 className="text-lg font-medium">{message.subject}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {message.content}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{message.date}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedMessage(message);
                        setShowReplyForm(true);
                      }}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Reply className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {showReplyForm && selectedMessage?.id === message.id && (
            <ReplyForm message={message} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main
      className={`
        fixed 
        top-[73px] 
        right-0 
        bottom-0 
        overflow-y-auto
        bg-gray-50
        transition-all
        duration-300
        ${sidebarOpen ? 'left-64' : 'left-20'}
      `}
    >
      <div className="h-full">
        <div className="p-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Messagerie</h1>
                <p className="text-blue-100">
                  Communiquez avec vos professeurs et l'administration
                </p>
              </div>
              <button
                onClick={() => setActiveTab('new')}
                className="bg-white text-blue-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition"
              >
                <Send className="h-5 w-5" />
                Nouveau message
              </button>
            </div>
          </div>

          <div className="flex space-x-4 border-b mb-6">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'inbox'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('inbox')}
            >
              Boîte de réception
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'new'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('new')}
            >
              Nouveau message
            </button>
          </div>

          {activeTab === 'inbox' ? <Inbox /> : <NewMessage />}
        </div>
      </div>
    </main>
  );
}
