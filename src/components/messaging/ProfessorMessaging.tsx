import React, { useState } from 'react';
import { MessagingLayout } from './layout/MessagingLayout';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';

export default function ProfessorMessaging() {
  const [activeTab, setActiveTab] = useState<'inbox' | 'new' | 'view'>('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [messages] = useState([
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

  const [classes] = useState([
    { id: 1, name: 'L2 RI' },
    { id: 2, name: 'L3 GL' },
  ]);

  const [students] = useState([
    { id: 1, name: 'Ibrahima Diallo', classe: 'L2 RI' },
    { id: 2, name: 'Fatou Diallo', classe: 'L2 RI' },
    { id: 3, name: 'Lamine Goudiaby', classe: 'L3 GL' },
  ]);

  const handleReply = (messageId) => {
    console.log(`Répondre au message ID: ${messageId}`);
    setActiveTab('new');
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setActiveTab('view');
  };

  const handleSubmit = (formData) => {
    console.log('Formulaire envoyé avec les données :', formData);
    setActiveTab('inbox');
  };

  const getStudentsByClass = (className) =>
    students.filter((student) => student.classe === className);

  return (
    <MessagingLayout
      title="Messagerie Professeur"
      subtitle="Gérez vos messages avec vos élèves et l'administration"
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
              onView={() => handleViewMessage(message)}
              onReply={() => handleReply(message.id)}
              showReplyButton={message.role !== 'Administration'}
            />
          ))}
        </div>
      )}

      {activeTab === 'view' && selectedMessage && (
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold">{selectedMessage.subject}</h2>
          <p className="text-sm text-gray-500">
            De : {selectedMessage.from} | Classe :{' '}
            {selectedMessage.classe || 'N/A'}
          </p>
          <p className="mt-4">{selectedMessage.content}</p>
          <div className="mt-6">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setActiveTab('inbox')}
            >
              Retour à la liste
            </button>
            {selectedMessage.role !== 'Administration' && (
              <button
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handleReply(selectedMessage.id)}
              >
                Répondre
              </button>
            )}
          </div>
        </div>
      )}

      {activeTab === 'new' && (
        <MessageForm
          recipients={classes.map((classe) => ({
            value: classe.name,
            label: classe.name,
            students: getStudentsByClass(classe.name),
          }))}
          messageTypes={[
            { value: 'demande', label: 'Demande' },
            { value: 'question', label: 'Question' },
            { value: 'réunion', label: 'Réunion' },
          ]}
          onSubmit={handleSubmit}
          showUrgentOption
          showReadConfirmation
        />
      )}
    </MessagingLayout>
  );
}
