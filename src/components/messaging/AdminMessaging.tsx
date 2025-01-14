// src/components/messaging/AdminMessaging.jsx
import React, { useState } from 'react';
import { MessagingLayout } from './layout/MessagingLayout';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';

export default function AdminMessaging() {
  const [activeTab, setActiveTab] = useState('inbox'); // Onglet actif
  const [messageType, setMessageType] = useState('individual'); // Type de message sélectionné

  // Types de messages disponibles
  const messageTypes = [
    { value: 'all', label: 'Tous les utilisateurs' },
    { value: 'all_students', label: 'Tous les étudiants' },
    { value: 'all_professors', label: 'Tous les professeurs' },
    { value: 'individual_student', label: 'Étudiant' },
    { value: 'individual_professor', label: 'Professeur' },
    { value: 'student_group', label: "Groupe d'étudiants" },
    { value: 'professor_group', label: 'Groupe de professeurs' },
  ];

  // Liste des messages (exemple statique)
  const messages = [
    {
      id: 1,
      from: 'Ibrahima Diallo',
      role: 'Étudiant',
      subject: "Demande de justification d'absence",
      content: 'Je sollicite une justification pour mon absence...',
      date: '2024-01-02',
      isUrgent: true,
      isRead: false,
      classe: '2ème année',
    },
    {
      id: 2,
      from: 'Marie Diouf',
      role: 'Professeur',
      subject: 'Problème avec le planning',
      content: 'Le planning des cours a un conflit...',
      date: '2024-01-03',
      isUrgent: false,
      isRead: true,
      classe: null,
    },
  ];

  // Gestion de la réponse à un message
  const handleReply = (messageId) => {
    console.log(`Répondre au message ID: ${messageId}`);
    setActiveTab('new'); // Passe à l'onglet "nouveau message"
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (formData) => {
    console.log('Formulaire envoyé avec les données :', formData);
    // Ajoutez ici votre logique d'envoi (API, stockage, etc.)
    setActiveTab('inbox'); // Retourne à la boîte de réception après l'envoi
  };

  return (
    <MessagingLayout
      title="Messages Administratifs"
      subtitle="Gestion des demandes et communications"
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onNewMessage={() => setActiveTab('new')}
    >
      {activeTab === 'inbox' ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              onReply={() => handleReply(message.id)} // Gestion de la réponse
            />
          ))}
        </div>
      ) : (
        <MessageForm
          messageTypes={messageTypes}
          showUrgentOption // Affiche l'option pour marquer comme urgent
          showReadConfirmation // Affiche l'option de confirmation de lecture
          recipients={[]} // Liste des destinataires
          onSubmit={handleSubmit} // Gestion de l'envoi
        />
      )}
    </MessagingLayout>
  );
}
