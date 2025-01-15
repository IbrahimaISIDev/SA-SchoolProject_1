// src/components/messaging/common/MessageCard.jsx
import React from 'react';
import { Mail, Star, Trash2, AlertCircle, Reply, Eye } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export const MessageCard = ({
  message,
  onReply,
  onView, // Ajout de la fonction onView
  showReplyButton = false,
  showActions = true,
}) => (
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
              <span className="font-semibold">
                {message.from || message.sender}
              </span>
              {message.role && (
                <span className="text-sm text-gray-500">({message.role})</span>
              )}
              {message.isUrgent && (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
            </div>
            <h3 className="text-lg font-medium">{message.subject}</h3>
            <p className="text-gray-600 text-sm mt-1">{message.content}</p>
            {message.classe && (
              <span className="text-sm text-blue-600">{message.classe}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{message.date}</span>
          {showActions && (
            <div className="flex gap-2">
              <button
                onClick={() => onView(message)} // Bouton pour afficher le message
                className="text-gray-400 hover:text-blue-500"
              >
                <Eye className="h-5 w-5" />
              </button>
              {showReplyButton && (
                <button
                  onClick={() => onReply(message)}
                  className="text-gray-400 hover:text-blue-500"
                >
                  <Reply className="h-5 w-5" />
                </button>
              )}
              <button className="text-gray-400 hover:text-yellow-500">
                <Star className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);
