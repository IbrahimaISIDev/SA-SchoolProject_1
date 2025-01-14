// src/components/messaging/ParentMessaging.tsx
import React, { useState } from 'react';
import { MessageHeader } from './common/MessageHeader';
import { MessageTabs } from './common/MessageTabs';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';

const initialMessages = [
  {
    id: 1,
    from: 'Professeur Diallo',
    sender: 'Professeur Diallo',
    role: 'Professeur',
    subject: 'Prochain rendez-vous',
    content: 'N’oubliez pas la réunion des parents prévue ce vendredi.',
    date: '14/01/2025',
    isRead: false,
    isUrgent: true,
    classe: 'Classe de CM2',
  },
  {
    id: 2,
    from: 'Administration',
    sender: 'Administration',
    role: 'Administration',
    subject: 'Paiement des frais',
    content: 'Veuillez régler les frais de scolarité avant la fin du mois.',
    date: '10/01/2025',
    isRead: true,
    isUrgent: false,
    classe: null,
  },
];

export const ParentMessaging = () => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'new'>('inbox');
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleTabChange = (tab: 'inbox' | 'new') => {
    setActiveTab(tab);
    setSelectedMessage(null);
  };

  const handleReply = (message) => {
    setActiveTab('new');
    setSelectedMessage(message);
  };

  const handleNewMessage = () => {
    setActiveTab('new');
    setSelectedMessage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour envoyer un message
    alert('Message envoyé avec succès !');
    setActiveTab('inbox');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <MessageHeader
        title="Messagerie des Parents"
        subtitle="Gérez vos communications avec l'école"
        onNewMessage={handleNewMessage}
      />

      <MessageTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'inbox' && (
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              onReply={handleReply}
              showReplyButton
              showActions
            />
          ))}
        </div>
      )}

      {activeTab === 'new' && (
        <MessageForm
          recipients={selectedMessage ? [selectedMessage.sender] : []}
          messageTypes={[
            { value: 'general', label: 'Général' },
            { value: 'urgent', label: 'Urgent' },
          ]}
          onSubmit={handleSubmit}
          showUrgentOption
          showReadConfirmation
        />
      )}
    </div>
  );
};
