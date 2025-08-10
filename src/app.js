import React from 'react';
import { AuthProvider } from './components/AuthProvider';
import SecureAIPlatform from './components/SecureAIPlatform';

function App() {
  return (
    <AuthProvider>
      <SecureAIPlatform />
    </AuthProvider>
  );
}

export default App;