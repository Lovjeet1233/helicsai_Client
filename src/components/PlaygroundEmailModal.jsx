import React, { useState } from 'react';
import { Mail, ArrowRight, X, Sparkles, CheckCircle, Rocket } from 'lucide-react';

const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

const PlaygroundEmailModal = ({ isOpen, onClose, onAccessGranted }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async () => {
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('access_key', '134534ac-bcd0-4987-b2d3-4f1b7cd22284');
      formData.append('email', email);
      formData.append('subject', 'Playground Access Request - Helics.ai');
      formData.append('message', `New playground access request from: ${email}`);
      formData.append('from_name', 'Helics.ai Playground');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setEmail('');
          setIsSubmitted(false);
          setIsSubmitting(false);
        }, 4000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full mx-4 relative shadow-2xl border border-gray-600 overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Access Playground</h2>
              <p style={{ color: colors.silver }}>
                Request access to our enterprise AI playground
              </p>
            </div>

            {/* Email input */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Enterprise Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 pl-12 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    style={{ backgroundColor: colors.charcoal + '80' }}
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button
                onClick={handleEmailSubmit}
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Request Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-blue-400 text-sm font-medium">✅ Enterprise Grade</div>
              </div>
              <div>
                <div className="text-blue-400 text-sm font-medium">✅ Secure Access</div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-xs" style={{ color: colors.silver }}>
                Our team will contact you within 24 hours with access details
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="mb-4" style={{ color: colors.silver }}>
              Your request has been submitted successfully.
            </p>
            <p className="text-white font-medium mb-4">
              Our team will reach out to you shortly.
            </p>
            <p className="text-sm" style={{ color: colors.silver }}>
              Check your email for confirmation and next steps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaygroundEmailModal;