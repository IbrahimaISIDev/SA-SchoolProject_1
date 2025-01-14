import React, { useState } from 'react';
import { Card, CardContent } from '../../ui/card';
import { Send } from 'lucide-react';

interface FormData {
  subject: string;
  content: string;
  messageType: string;
  isUrgent: boolean;
  requiresReadConfirmation: boolean;
}

interface MessageType {
  value: string;
  label: string;
}

interface MessageFormProps {
  recipients?: any[]; // Define proper type based on your needs
  messageTypes?: MessageType[];
  onSubmit: (data: FormData) => void;
  showUrgentOption?: boolean;
  showReadConfirmation?: boolean;
}

export const MessageForm: React.FC<MessageFormProps> = ({
  recipients,
  messageTypes,
  onSubmit,
  showUrgentOption = true,
  showReadConfirmation = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    content: '',
    messageType: '',
    isUrgent: false,
    requiresReadConfirmation: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;

    // Handle checkbox inputs
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.subject) newErrors.subject = 'Le sujet est obligatoire.';
    if (!formData.content) newErrors.content = 'Le message est obligatoire.';
    if (!formData.messageType)
      newErrors.messageType = 'Le type de message est obligatoire.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {messageTypes && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de message
              </label>
              <select
                name="messageType"
                value={formData.messageType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionnez un type</option>
                {messageTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.messageType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.messageType}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Sujet du message"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Écrivez votre message..."
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            {showUrgentOption && (
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isUrgent"
                  checked={formData.isUrgent}
                  onChange={handleChange}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">Message urgent</span>
              </label>
            )}

            {showReadConfirmation && (
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="requiresReadConfirmation"
                  checked={formData.requiresReadConfirmation}
                  onChange={handleChange}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  Nécessite une confirmation de lecture
                </span>
              </label>
            )}

            <button
              type="submit"
              className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
