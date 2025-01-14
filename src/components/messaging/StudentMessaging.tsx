import React, { useState } from 'react';
import { MessagingLayout } from './layout/MessagingLayout';
import { MessageCard } from './common/MessageCard';
import { MessageForm } from './common/MessageForm';
import { useLayout } from '../layouts/Layout';

interface Message {
  id: number;
  sender: string;
  subject: string;
  content: string;
  date: string;
  isUrgent: boolean;
  isRead: boolean;
  type: string;
}

interface FormData {
  subject: string;
  content: string;
  messageType: string;
  isUrgent: boolean;
  requiresReadConfirmation: boolean;
}

export default function StudentMessaging() {
  const [activeTab, setActiveTab] = useState<'inbox' | 'new'>('inbox');
  const [messageType, setMessageType] = useState<string>('individual');
  const { sidebarOpen } = useLayout();
  const [showReplyForm, setShowReplyForm] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const messageTypes = [
    { value: 'individual_professor', label: 'Professeur' },
    { value: 'administration', label: 'Administration' },
  ];

  const messages: Message[] = [
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
    { id: 3, name: 'Coach Diallo', subject: 'TypeScript' },
  ];

  const recipients = [
    { id: 1, name: 'Administration', role: 'administration' },
    ...professors,
  ];

  const handleReply = (message: Message) => {
    setSelectedMessage(message);
    setShowReplyForm(true);
    setActiveTab('new');
  };

  const handleSubmitMessage = (formData: FormData) => {
    // Logique de soumission du message
    console.log('Message soumis:', formData);

    // Exemple de traitement du message
    const newMessage = {
      id: messages.length + 1,
      sender: 'Vous',
      subject: formData.subject,
      content: formData.content,
      date: new Date().toISOString().split('T')[0],
      isUrgent: formData.isUrgent,
      isRead: true,
      type: formData.messageType,
    };

    // Ici vous pouvez ajouter la logique pour envoyer le message à votre API
    console.log('Nouveau message à envoyer:', newMessage);

    // Retourner à la boîte de réception après l'envoi
    setActiveTab('inbox');
    setShowReplyForm(false);
    setSelectedMessage(null);
  };

  const handleRecipientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMessageType(e.target.value);
  };

  return (
    <MessagingLayout
      title="Messagerie Étudiante"
      subtitle="Consultez vos messages et répondez à vos professeurs"
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
              onReply={handleReply}
            />
          ))}
        </div>
      ) : (
        <MessageForm
          messageTypes={messageTypes}
          showUrgentOption
          showReadConfirmation
          recipients={recipients}
          onSubmit={handleSubmitMessage}
        />
      )}
    </MessagingLayout>
  );
}
