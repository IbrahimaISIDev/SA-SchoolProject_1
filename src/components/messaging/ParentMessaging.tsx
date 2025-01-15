// src/components/messaging/ParentMessaging.jsx
import React, { useState } from 'react';
import { MessagingLayout } from './layout/MessagingLayout';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';

export default function ParentMessaging() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [messages] = useState([
    {
      id: 1,
      from: 'Professeur Diallo',
      subject: 'Prochain rendez-vous',
      content: 'N’oubliez pas la réunion des parents ce vendredi.',
      date: '14/01/2025',
      isRead: false,
      isUrgent: true,
      role: 'Professeur',
      classe: 'Classe de CM2',
    },
    {
      id: 2,
      from: 'Administration',
      subject: 'Paiement des frais',
      content: 'Veuillez régler les frais de scolarité avant la fin du mois.',
      date: '10/01/2025',
      isRead: true,
      isUrgent: false,
      role: 'Administration',
      classe: null,
    },
  ]);

  const handleReply = (messageId) => {
    console.log(`Répondre au message ID: ${messageId}`);
    setActiveTab('new');
  };

  const handleSubmit = (formData) => {
    console.log('Formulaire envoyé avec les données :', formData);
    setActiveTab('inbox');
  };
  const handleViewMessage = (message) => {
    console.log('View message:', message);
  };

  return (
    <MessagingLayout
      title="Messagerie des Parents"
      subtitle="Gérez vos communications avec l'école"
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onNewMessage={() => setActiveTab('new')}
    >
      {activeTab === 'inbox' && (
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              onReply={() => handleReply(message.id)}
              onView={() => handleViewMessage(message)} // <-- Add this line
              showReplyButton={message.role === 'Professeur'}
            />
          ))}
        </div>
      )}

      {activeTab === 'new' && (
        <MessageForm
          messageTypes={[
            { value: 'rendez-vous', label: 'Demande de rendez-vous' },
            { value: 'paiement', label: 'Question sur les frais' },
          ]}
          showUrgentOption
          onSubmit={handleSubmit}
        />
      )}
    </MessagingLayout>
  );
}
