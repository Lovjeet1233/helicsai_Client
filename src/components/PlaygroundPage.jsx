
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Paperclip, Send, CheckCircle, Shuffle, Upload, Link, X, Plus, MessageSquare, User, Menu, Settings, LogOut, Maximize2, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { UserProfile } from './UserProfile.js'; // Create this simple component
import { useChatHistory } from './useChatHistory';
import logoimage from '../assets/helicslogo.png'; // Adjust the path as necessary
const logo = logoimage
const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN || 'your-auth-token-here';

// Enhanced Typing Effect Component
// Replace the existing TypewriterText component
const TypewriterText = ({ text, speed = 30, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Format the display text
  const formattedText = displayText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
};
// Enhanced Processing Layer Component
const ProcessingLayer = ({ currentLayer, totalLayers, fileName }) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="relative">
          <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div>
          <span className="text-white font-semibold text-lg">Analyzing Enterprise Data</span>
          <p className="text-purple-300 text-sm">{fileName}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-300">Processing Layer {currentLayer} of {totalLayers}</span>
          <span className="text-purple-400">{Math.round((currentLayer / totalLayers) * 100)}%</span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentLayer / totalLayers) * 100}%` }}
          >
            <div className="h-full bg-white/20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-purple-300 text-sm font-medium">
            Layer {currentLayer}: {getLayerDescription(currentLayer)}
          </p>
        </div>
      </div>
    </div>
  );
};

const getLayerDescription = (layer) => {
  const descriptions = [
    "Establishing secure connection",
    "layer hashed",
    "Loading domain-specific models", 
    "layer hashed",
    "Processing document structure",
    "layer hashed",
    "Extracting key information",
    "layer hashed",
    "Building knowledge vectors",
    "layer hashed",
    "Applying compliance filters",
    "layer hashed",
    "Optimizing response accuracy",
    "layer hashed",
    "Finalizing enterprise integration"
  ];
  return descriptions[layer - 1] || "Processing...";
};

// Enhanced Message Bubble Component
const MessageBubble = ({ message, type, onExpand, user,isWaitingForResponse }) => {
  const [showActions, setShowActions] = useState(false);
  
  if (type === 'user') {
    return (
      <div className="flex justify-end mb-6">
        <div className="max-w-4xl">
          <div className="flex items-end space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl px-6 py-4 shadow-lg">
              <p className="whitespace-pre-wrap leading-relaxed">{message}</p>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
              {user?.picture ? (
                <img src={user.picture} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6">
      <div className="max-w-4xl w-full">
        <div className="flex items-start space-x-4">
        
          
          <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
    <img 
      src={logo} 
      alt="Helics.ai" 
      className={`w-full h-full object-contain ${(isWaitingForResponse && type === 'typing') ? 'animate-spin' : ''}`}
      style={(isWaitingForResponse && type === 'typing') ? { animationDuration: '2s' } : {}}
    />
  </div>
  <div className={`w-2 h-2 rounded-full ${(isWaitingForResponse && type === 'typing') ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 animate-pulse'}`}></div>
</div>
            
            <div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setShowActions(true)}
              onMouseLeave={() => setShowActions(false)}
            >
              <div className="prose prose-invert max-w-none">
                {type === 'typing' ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-purple-300 text-sm italic">Analyzing your request...</span>
                  </div>
                ) : (
                  <div className="text-gray-100 leading-relaxed">
                  <TypewriterText text={message} speed={20} />
                </div>
                )}
              </div>
              
              {/* Message Actions */}
              {showActions && type !== 'typing' && (
                <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t border-gray-700/50">
                  <button 
                    onClick={() => navigator.clipboard.writeText(message)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                    <ThumbsUp className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                    <ThumbsDown className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
                  </button>
                  <button 
                    onClick={() => onExpand && onExpand(message)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
                  >
                    <Maximize2 className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Expanded Message Modal
const ExpandedMessageModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden border border-gray-600">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">Response Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-100 leading-relaxed whitespace-pre-wrap">
              {message}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-700">
          <button 
            onClick={() => navigator.clipboard.writeText(message)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
// Add this function before the PlaygroundPage component
const formatMessage = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
};
const PlaygroundPage = ({ onContactClick }) => {
  const { user, isAuthenticated, signInWithGoogle, logout } = useAuth();  
  const { chatHistory, setChatHistory, saveChat, createNewChat, loadChatHistory } = useChatHistory();
 
  const [selectedModel, setSelectedModel] = useState('pro');
  const [showAttachModal, setShowAttachModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingLayer, setProcessingLayer] = useState(0);
  const [isDataAttached, setIsDataAttached] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [availableProviders, setAvailableProviders] = useState([]);
  const messagesEndRef = useRef(null);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const models = [
    { 
      id: 'mini', 
      name: 'Mini', 
      description: 'Fast, efficient processing for quick tasks',
      params: '0.1-1B parameters',
      llm_provider: 'openai'
    },
    { 
      id: 'pro', 
      name: 'Pro', 
      description: 'Balanced performance for most enterprise needs',
      params: '1-3B parameters',
      llm_provider: 'openai'
    },
    { 
      id: 'expert', 
      name: 'Expert', 
      description: 'Maximum accuracy for complex analysis',
      params: '3-8B parameters',
      llm_provider: 'openai'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    setSessionId(generateSessionId());
    testApiConnection();
  }, []);

  // Auto-save chat when messages change
// Replace the existing auto-save useEffect
useEffect(() => {
  if (chatMessages.length > 0 && activeChat && isAuthenticated) {
    const chatData = {
      ...activeChat,
      messages: chatMessages,
      model: selectedModel,
      dataAttached: isDataAttached,
      uploadedFile: uploadedFile?.name,
      websiteUrl: websiteUrl,
      updatedAt: new Date().toISOString()
    };
    
    // Update active chat state
    setActiveChat(chatData);
    
    // Debounce saving
    const timeoutId = setTimeout(() => {
      saveChat(chatData);
    }, 1000);
    
    return () => clearTimeout(timeoutId);
  }
}, [chatMessages, selectedModel, isDataAttached, uploadedFile, websiteUrl, isAuthenticated]);

  const generateSessionId = () => {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem('helics_auth_token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  };

  const testApiConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/test/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        fetchAvailableProviders();
      }
    } catch (error) {
      console.error('API connection error:', error);
    }
  };

  const fetchAvailableProviders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/llm_providers/`, {
        method: 'GET',
        headers: getAuthHeaders(),
      });
      
      if (response.ok) {
        const data = await response.json();
        setAvailableProviders(data.available_providers || []);
      }
    } catch (error) {
      console.error('Failed to fetch LLM providers:', error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const uploadFileToBackend = async (file) => {
    const formData = new FormData();
    formData.append('files', file);
    
    try {
      const response = await fetch(`${API_BASE_URL}/data_ingestion/`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const processWebsiteUrl = async (url) => {
    try {
      const response = await fetch(`${API_BASE_URL}/data_ingestion/urls`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          urls: [url]
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Website processing failed: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const simulateProcessingLayers = async () => {
    const totalLayers = 8;
    for (let i = 1; i <= totalLayers; i++) {
      setProcessingLayer(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  };

  const handleAttachData = async () => {
    if (!uploadedFile && !websiteUrl) {
      alert('Please select a file or enter a URL');
      return;
    }
    
    setShowAttachModal(false);
    setIsProcessing(true);
    setProcessingLayer(0);
    
    // Start layer simulation
    simulateProcessingLayers();
    
    try {
      let result;
      
      if (uploadedFile) {
        result = await uploadFileToBackend(uploadedFile);
      } else if (websiteUrl) {
        result = await processWebsiteUrl(websiteUrl);
      }
      
      setIsProcessing(false);
      setIsDataAttached(true);
      
      if (result && result.status === 'success') {
        setChatMessages([
          {
            type: 'system',
            message: `Data successfully processed and analyzed through ${processingLayer} enterprise layers.
            
Processing Summary:
${uploadedFile ? 
  `• File: ${uploadedFile.name}
• Status: Successfully analyzed
• Layers processed: 8/8
• Layers hashed: 8/8
• Vector database: Optimized` : 
  `• URL: ${websiteUrl}
• Status: Successfully analyzed  
• Layers processed: 8/8

• Vector database: Optimized`}

Your enterprise assistant is now ready. Ask me anything about your data.`
          }
        ]);
      } else {
        throw new Error(result?.message || 'Processing failed');
      }
      
    } catch (error) {
      setIsProcessing(false);
      setChatMessages([
        {
          type: 'system',
          message: `Processing encountered an issue: ${error.message}

Please verify your data format and try again. Supported formats: PDF, DOCX, TXT, CSV`
        }
      ]);
    }
  };

  const sendMessageToBackend = async (message, model) => {
    try {
      const selectedModelData = models.find(m => m.id === model);
      const llmProvider = selectedModelData?.llm_provider || 'openai';
      
      const response = await fetch(`${API_BASE_URL}/chat/`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          query: message,
          llm_provider: llmProvider,
          session_id: sessionId
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Chat failed: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      return result.response || 'No response received';
    } catch (error) {
      return `I encountered an issue processing your request: ${error.message}

Please ensure your data is properly uploaded and try again.`;
    }
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) {
      alert('Please enter a message');
      return;
    }
  
    if (!isDataAttached) {
      alert('Please upload data first before chatting');
      return;
    }
    
    const userMessage = currentMessage;
    setChatMessages(prev => [...prev, 
      { type: 'user', message: userMessage }
    ]);
    
    setCurrentMessage('');
    setIsWaitingForResponse(true); // Start logo rotation
    
    // Add typing indicator
    setChatMessages(prev => [...prev, 
      { type: 'typing', message: '' }
    ]);
    
    try {
      const aiResponse = await sendMessageToBackend(userMessage, selectedModel);
      
      // Remove typing indicator and add real response
      setChatMessages(prev => [
        ...prev.slice(0, -1),
        { type: 'ai', message: aiResponse }
      ]);
    } catch (error) {
      setChatMessages(prev => [
        ...prev.slice(0, -1),
        { type: 'ai', message: `I apologize, but I encountered an error: ${error.message}` }
      ]);
    } finally {
      setIsWaitingForResponse(false); // Stop logo rotation
    }
  };

  const handleNewChat = () => {
    const newChat = createNewChat();
    setChatMessages([]);
    setIsDataAttached(false);
    setUploadedFile(null);
    setWebsiteUrl('');
    setActiveChat(newChat);
    setSessionId(generateSessionId());
  };

  const handleLoadChat = (chat) => {
    setActiveChat(chat);
    setChatMessages(chat.messages || []);
    setSelectedModel(chat.model || 'pro');
    setIsDataAttached(chat.dataAttached || false);
    setUploadedFile(chat.uploadedFile ? { name: chat.uploadedFile } : null);
    setWebsiteUrl(chat.websiteUrl || '');
    setSessionId(generateSessionId());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isDataAttached && currentMessage.trim()) {
        handleSendMessage();
      }
    }
  };

  const generateChatTitle = (messages) => {
    if (messages.length === 0) return "New Chat";
    const firstUserMessage = messages.find(msg => msg.type === 'user');
    if (firstUserMessage) {
      return firstUserMessage.message.length > 50 
        ? firstUserMessage.message.substring(0, 50) + "..."
        : firstUserMessage.message;
    }
    return "New Chat";
  };

  // Auto-generate chat title when first message is sent
  useEffect(() => {
    if (activeChat && chatMessages.length >= 2 && activeChat.title === "New Chat") {
      const newTitle = generateChatTitle(chatMessages);
      setActiveChat(prev => ({ ...prev, title: newTitle }));
    }
  }, [chatMessages, activeChat]);

  return (
    <div className="h-screen flex" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-16'} transition-all duration-300 bg-black/30 backdrop-blur-sm border-r border-white/10 flex flex-col`}>
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
            // Replace the existing logo section:
<div className="flex items-center space-x-3">
  <div className="w-8 h-8  rounded-lg flex items-center justify-center">
    {/* Replace this with your logo */}
    <img src={logo} alt="Helics.ai" className="w-full h-full object-contain" />
  </div>
  <button  className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
    Helics.ai
  </button>
</div>
            )}    
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={handleNewChat}
            className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 rounded-xl py-3 px-4 transition-colors"
          >
            <Plus className="w-5 h-5 text-white" />
            {sidebarOpen && <span className="text-white font-medium">New Chat</span>}
          </button>
        </div>

        {sidebarOpen && (
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 pb-4">
              <h3 className="text-gray-400 text-sm font-medium mb-3">Your Chats</h3>
              <div className="space-y-2">
                {chatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => handleLoadChat(chat)}
                    className={`w-full text-left p-3 rounded-xl hover:bg-white/10 transition-colors ${
                      activeChat?.id === chat.id ? 'bg-white/10' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{chat.title}</p>
                        <p className="text-gray-400 text-xs">{chat.timestamp}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {sidebarOpen && (
          <div className="p-4 border-t border-white/10">
            <UserProfile compact={false} />
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {chatMessages.length === 0 && !isProcessing ? (
          <div className="relative">
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src={logo} 
              alt="Helics.ai" 
              className="w-full h-full object-contain animate-spin" 
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
          ) : (
            <div className="p-6 space-y-6">
              {isProcessing && (
                <ProcessingLayer
                  currentLayer={processingLayer}
                  totalLayers={8}
                  fileName={uploadedFile?.name || websiteUrl}
                />
              )}

              {chatMessages.map((msg, index) => (
                <MessageBubble
                  key={index}
                  message={msg.message}
                  type={msg.type}
                  user={user}
                  onExpand={setExpandedMessage}
                  isWaitingForResponse={isWaitingForResponse}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            {(uploadedFile || websiteUrl) && (
              <div className="mb-3 p-3 bg-white/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {uploadedFile ? (
                      <>
                        <Upload className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">{uploadedFile.name}</span>
                      </>
                    ) : (
                      <>
                        <Link className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-white">{websiteUrl}</span>
                      </>
                    )}
                  </div>
                  {isDataAttached && <CheckCircle className="w-4 h-4 text-green-400" />}
                </div>
              </div>
            )}

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="flex items-end p-4">
                <button
                  onClick={() => setShowAttachModal(true)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors mr-3"
                  title="Attach file or URL"
                >
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                
                <div className="flex-1">
                  <textarea
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isDataAttached ? "Message Helics.ai..." : "Attach your enterprise data first, then start chatting..."}
                    className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none min-h-[24px] max-h-32"
                    rows={1}
                    style={{ height: 'auto' }}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                  />
                </div>
                
                <div className="relative mr-3">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="appearance-none bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer min-w-[120px]"
                  >
                    {models.map((model) => (
                      <option key={model.id} value={model.id} className="bg-gray-800 text-white">
                        {model.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || !isDataAttached}
                  className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Attach Modal */}
        {showAttachModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-gray-600">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Attach Enterprise Data</h3>
                <button
                  onClick={() => setShowAttachModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Document
                  </label>
                  <div 
                    className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('file-input').click()}
                  >
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-300 text-sm">
                      {uploadedFile ? uploadedFile.name : 'Click to upload PDF, DOCX, or TXT'}
                    </p>
                    <input
                      id="file-input"
                      type="file"
                      accept=".pdf,.docx,.txt,.csv"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://your-enterprise-website.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <button
                  onClick={handleAttachData}
                  disabled={!uploadedFile && !websiteUrl}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadedFile ? `Attach ${uploadedFile.name}` : websiteUrl ? `Attach ${websiteUrl}` : 'Attach Data'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Message Modal */}
        <ExpandedMessageModal 
          message={expandedMessage} 
          onClose={() => setExpandedMessage(null)} 
        />
      </div>
    </div>
  );
};

export default PlaygroundPage;