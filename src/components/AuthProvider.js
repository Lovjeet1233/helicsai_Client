// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle, logout, saveChatToFirestore, getUserChats } from '../firebase';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      return { success: true };
    } catch (error) {
      console.error('Google sign-in error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  };

  const saveChatHistory = async (chatData) => {
    if (user) {
      return await saveChatToFirestore(user.uid, chatData);
    }
    return false;
  };

  const getChatHistory = async () => {
    if (user) {
      return await getUserChats(user.uid);
    }
    return [];
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    signInWithGoogle: handleGoogleSignIn,
    logout: handleLogout,
    saveChatHistory,
    getChatHistory,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};