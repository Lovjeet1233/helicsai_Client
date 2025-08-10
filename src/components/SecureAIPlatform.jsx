import React, { useRef, useState, useEffect } from 'react';
import { X, Mail, ArrowRight, Shield, Menu, CheckCircle, Rocket } from 'lucide-react';

// Import all page components
import HomePage from './HomePage';
import WhatWeDoPage from './WhatWeDoPage';
import HowWeDoItPage from './HowWeDoItPage';
import ContactPage from './ContactPage';

// Import authentication components
import { useAuth } from './AuthProvider';
import { UserProfile } from './UserProfile';
import logoimage from '../assets/helicslogo.png';
const logo = logoimage;

// Color scheme
const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

// Playground Access Modal Component
const PlaygroundEmailModal = ({ isOpen, onClose }) => {
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

// Legal pages components
const TermsPage = () => (
  <div className="min-h-screen pt-20 px-6 py-32" style={{ backgroundColor: colors.charcoal }}>
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8 text-white">Terms of Use</h1>
      <div className="prose prose-lg space-y-6" style={{ color: colors.silver }}>
        <p className="text-sm mb-8" style={{ color: colors.light }}>Last Modified: July 3, 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Acceptance of the Terms of Use</h2>
          <p>These terms of use are entered into by and between You and Helics.ai Inc., a Delaware corporation ("Company," "we," or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, "Terms of Use"), govern your access to and use of https://www.Helics.ai.com/, including any content, functionality, and services offered on or through https://www.Helics.ai.com/ (the "Website"), whether as a guest or a registered user.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Changes to the Terms of Use</h2>
          <p>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Accessing the Website and Account Security</h2>
          <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. You are responsible for making all arrangements necessary for you to have access to the Website and ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property Rights</h2>
          <p>The Website and its entire contents, features, and functionality are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
          <p>This website is operated by Helics.ai Inc., a Delaware corporation. All feedback, comments, requests for technical support, and other communications relating to the Website should be directed to our contact page.</p>
        </section>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="min-h-screen pt-20 px-6 py-32" style={{ backgroundColor: colors.charcoal }}>
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8 text-white">Privacy Policy</h1>
      <div className="prose prose-lg space-y-6" style={{ color: colors.silver }}>
        <p className="text-sm mb-8" style={{ color: colors.light }}>Effective Date: January 29, 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Company Information</h2>
          <p><strong>Business Name:</strong> Helics.ai<br/>
          <strong>Address:</strong> 10161 W Park Run Drive, STE 150, Las Vegas, NV 89145<br/>
          <strong>Email:</strong> contact@Helics.ai.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
          <p>We may collect the following types of personal and non-personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Information you provide directly: such as your name, email, phone number, or messages sent via our forms.</li>
            <li>Automatically collected information: including IP address, browser type, device ID, pages visited, session duration, referring URL, and interactions on the website.</li>
            <li>Information from partners and service providers: including email associations and inferred interests or demographic information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
          <p>We use your information for a variety of business and operational purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate and improve our website and services</li>
            <li>Analyze user behavior to improve UX and features</li>
            <li>Respond to inquiries or customer support requests</li>
            <li>Deliver tailored communications</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Protect against fraud, unauthorized activity, or misuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
          <p>We maintain technical and organizational safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. No system can be 100% secure, and we encourage you to use caution when sharing information online.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@Helics.ai.com</p>
        </section>
      </div>
    </div>
  </div>
);

const SecureAIPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPlaygroundModal, setShowPlaygroundModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Click sound failed:', e));
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('access_key', '134534ac-bcd0-4987-b2d3-4f1b7cd22284');
      formData.append('email', email);
      formData.append('subject', 'New Enterprise AI Infrastructure Inquiry');
      formData.append('message', `New enterprise inquiry: ${email}`);
      formData.append('from_name', 'Enterprise AI Infrastructure Platform');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setShowEmailForm(false);
          setEmail('');
          setIsSubmitted(false);
          setIsSubmitting(false);
        }, 3000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Navigation component
  const Navigation = () => {
    const { isAuthenticated, user } = useAuth();

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" 
           style={{ backgroundColor: colors.charcoal + 'CC', borderColor: colors.light }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center">
              <div className="w-18 h-18 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Helics.ai" className="w-full h-full object-contain" />
              </div>
            </div>
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
              Helics.ai
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`font-medium transition-colors ${currentPage === 'home' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>Home</button>
            <button onClick={() => setCurrentPage('what-we-do')} className={`font-medium transition-colors ${currentPage === 'what-we-do' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>What We Do</button>
            <button onClick={() => setCurrentPage('how-we-do-it')} className={`font-medium transition-colors ${currentPage === 'how-we-do-it' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>How We Do It</button>
            <button onClick={() => setShowPlaygroundModal(true)} className="font-medium transition-colors text-white hover:text-purple-400">Playground</button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Show user profile if authenticated, otherwise show contact button */}
            {isAuthenticated ? (
              <UserProfile compact={true} />
            ) : (
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm"
              >
                Contact Us
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4" style={{ backgroundColor: colors.charcoal, borderColor: colors.light }}>
            <div className="px-6 space-y-4">
              <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-purple-400">Home</button>
              <button onClick={() => { setCurrentPage('what-we-do'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-purple-400">What We Do</button>
              <button onClick={() => { setCurrentPage('how-we-do-it'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-purple-400">How We Do It</button>
              <button onClick={() => { setShowPlaygroundModal(true); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-purple-400">Playground</button>
              <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white hover:text-purple-400">Contact Us</button>
              
              {/* Mobile user profile */}
              {isAuthenticated && (
                <div className="pt-4 border-t border-gray-600">
                  <UserProfile compact={false} />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    );
  };

  const Footer = () => (
    <footer className="border-t py-16 px-6" style={{ backgroundColor: colors.charcoal, borderColor: colors.light }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
             
              <span className="text-xl font-bold text-white">Helics.ai</span>
            </div>
            <p className="mb-4" style={{ color: colors.silver }}>
              Precision AI for Real Infrastructure
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2" style={{ color: colors.silver }}>
              <li><button onClick={() => setCurrentPage('what-we-do')} className="hover:text-purple-400 transition-colors">What We Do</button></li>
              <li><button onClick={() => setCurrentPage('how-we-do-it')} className="hover:text-purple-400 transition-colors">How We Do It</button></li>
              <li><button onClick={() => setShowPlaygroundModal(true)} className="hover:text-purple-400 transition-colors">Playground</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-purple-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2" style={{ color: colors.silver }}>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-purple-400 transition-colors">Terms of Use</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-purple-400 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2" style={{ color: colors.silver }}>
              <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center" style={{ borderColor: colors.light }}>
          <p className="text-sm" style={{ color: colors.silver }}>© 2025 Helics.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    const onContactClick = () => setCurrentPage('contact');
    const onNavigate = (page) => setCurrentPage(page);

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={onNavigate} onContactClick={onContactClick} />;
      case 'what-we-do':
        return <WhatWeDoPage onContactClick={onContactClick} />;
      case 'how-we-do-it':
        return <HowWeDoItPage onContactClick={onContactClick} />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      default:
        return <HomePage onNavigate={onNavigate} onContactClick={onContactClick} />;
    }
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ backgroundColor: colors.charcoal }}>
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/3 to-green-600/3 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Audio elements */}
      <audio ref={audioRef} preload="auto">
        <source src="/click.wav" type="audio/wav" />
      </audio>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        {renderPage()}
        <Footer />
      </div>

      {/* Playground Access Modal */}
      <PlaygroundEmailModal
        isOpen={showPlaygroundModal}
        onClose={() => setShowPlaygroundModal(false)}
      />

      {/* Original Email Collection Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[100] p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="rounded-3xl p-8 max-w-md w-full mx-4 relative shadow-2xl" style={{ backgroundColor: colors.slate, border: `1px solid ${colors.light}` }}>
            <button
              onClick={() => setShowEmailForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Contact Our Team</h2>
                  <p style={{ color: colors.silver }}>Let's discuss your enterprise AI infrastructure needs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                      className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                      style={{ backgroundColor: colors.charcoal + '80' }}
                    />
                  </div>

                  <button
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Contact Us</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center mt-6">
                  <p className="text-xs" style={{ color: colors.silver }}>
                    We'll get back to you within 24 hours
                  </p>
                  <p className="text-xs mt-1" style={{ color: colors.silver }}>
                    Enterprise inquiries only.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                <p className="mb-4" style={{ color: colors.silver }}>
                  Our enterprise team will contact you shortly to discuss your AI infrastructure needs.
                </p>
                <div className="text-sm" style={{ color: colors.silver }}>
                  Submitted: <strong>{email}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureAIPlatform;