// useChatHistory.js
import { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

export const useChatHistory = () => {
  const { user, saveChatHistory, getChatHistory } = useAuth();
  const [chatHistory, setChatHistory] = useState([]);
  
  useEffect(() => {
    if (user) {
      loadChatHistory();
    }
  }, [user]);

  const loadChatHistory = async () => {
    try {
      const history = await getChatHistory();
      setChatHistory(history);
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  };

  const saveChat = async (chatData) => {
    try {
      const success = await saveChatHistory(chatData);
      if (success) {
        await loadChatHistory(); // Refresh history
      }
      return success;
    } catch (error) {
      console.error('Failed to save chat:', error);
      return false;
    }
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      timestamp: new Date().toISOString(),
      messages: [],
      createdAt: new Date().toISOString()
    };
    
    setChatHistory(prev => [newChat, ...prev]);
    return newChat;
  };

  return {
    chatHistory,
    setChatHistory,
    saveChat,
    createNewChat,
    loadChatHistory
  };
};