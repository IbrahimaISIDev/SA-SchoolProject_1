// src/components/messaging/ProfessorMessaging.tsx
import React, { useState } from 'react';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';
import { MessageHeader } from './common/MessageHeader';
import { MessageTabs } from './common/MessageTabs';

const ProfessorMessaging = () => {
  const classes = [
    { id: 1, name: 'L2 RI' },
    { id: 2, name: 'L3 GL' },
  ];

  const students = [
    { id: 1, name: 'Ibrahima Diallo', classe: 'L2 RI' },
    { id: 2, name: 'Fatou Diallo', classe: 'L2 RI' },
    { id: 3, name: 'Lamine Goudiaby', classe: 'L3 GL' },
  ];

  const [activeTab, setActiveTab] = useState<'inbox' | 'new'>('inbox');
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'Élève 1',
      subject: 'Demande de rendez-vous',
      content:
        'Bonjour Professeur, je voudrais prendre un rendez-vous pour discuter de mon projet...',
      date: '12 Jan 2025',
      isRead: false,
      isUrgent: false,
      role: 'Élève',
      classe: 'L2 RI',
    },
    {
      id: 2,
      from: 'Élève 2',
      subject: 'Questions sur le cours',
      content:
        'Bonjour Professeur, j’ai quelques questions concernant le dernier cours...',
      date: '10 Jan 2025',
      isRead: true,
      isUrgent: true,
      role: 'Élève',
      classe: 'L2 RI',
    },
    {
      id: 3,
      from: 'Administration',
      subject: 'Réunion de coordination',
      content:
        'Bonjour Professeur, une réunion de coordination est prévue pour la semaine prochaine. Merci de confirmer votre présence.',
      date: '08 Jan 2025',
      isRead: false,
      isUrgent: true,
      role: 'Administration',
      classe: '',
    },
  ]);

  const handleReply = (message) => {
    console.log('Répondre au message', message);
    // Logique pour répondre au message
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    // Logique pour envoyer un nouveau message
  };

  // Fonction pour récupérer les étudiants d'une classe spécifique
  const getStudentsByClass = (className) => {
    return students.filter((student) => student.classe === className);
  };

  return (
    <div className="container mx-auto p-6">
      <MessageHeader
        title="Messagerie Professeur"
        subtitle="Gérez vos messages avec vos élèves et l'administration"
        onNewMessage={() => setActiveTab('new')}
      />
      <MessageTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'inbox' && (
        <div>
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              onReply={handleReply}
              showReplyButton={message.role !== 'Administration'} // Ne pas permettre la réponse aux messages de l'administration
            />
          ))}
        </div>
      )}

      {activeTab === 'new' && (
        <MessageForm
          recipients={classes.map((classe) => ({
            value: classe.name,
            label: classe.name,
            students: getStudentsByClass(classe.name), // Récupérer les étudiants pour chaque classe
          }))}
          messageTypes={[
            { value: 'demande', label: 'Demande' },
            { value: 'question', label: 'Question' },
            { value: 'réunion', label: 'Réunion' },
          ]}
          onSubmit={handleSubmitMessage}
          showUrgentOption={true}
          showReadConfirmation={true}
        />
      )}
    </div>
  );
};

export default ProfessorMessaging;
