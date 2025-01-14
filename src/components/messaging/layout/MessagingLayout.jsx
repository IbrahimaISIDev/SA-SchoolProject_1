// src/components/messaging/layout/MessagingLayout.jsx
import React from 'react';
import { useLayout } from '../../../contexts/LayoutContext';
import { MessageHeader } from '../common/MessageHeader';
import { MessageTabs } from '../common/MessageTabs';

export const MessagingLayout = ({
  title,
  subtitle,
  children,
  activeTab,
  onTabChange,
  onNewMessage,
}) => {
  const { sidebarOpen } = useLayout();

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
          <MessageHeader
            title={title}
            subtitle={subtitle}
            onNewMessage={onNewMessage}
          />

          <MessageTabs activeTab={activeTab} onTabChange={onTabChange} />

          {children}
        </div>
      </div>
    </main>
  );
};
