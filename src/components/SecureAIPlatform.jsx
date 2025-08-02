import React, { useRef, useState, useEffect } from 'react';
import { X, Mail, ArrowRight, Shield, Menu } from 'lucide-react';

// Import all page components (these would be separate files in a real project)
import HomePage from './HomePage';
import WhatWeDoPage from './WhatWeDoPage';
import HowWeDoItPage from './HowWeDoItPage';
import WhyUsPage from './WhyUsPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';

// Legal pages components
const TermsPage = () => (
  <div className="min-h-screen bg-white pt-20 px-6 py-32">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Terms of Use</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p className="text-sm text-gray-500 mb-8">Last Modified: July 3, 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Acceptance of the Terms of Use</h2>
          <p>These terms of use are entered into by and between You and Helics.ai Inc., a Delaware corporation ("Company," "we," or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, "Terms of Use"), govern your access to and use of https://www.Helics.ai.com/, including any content, functionality, and services offered on or through https://www.Helics.ai.com/ (the "Website"), whether as a guest or a registered user.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to the Terms of Use</h2>
          <p>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Accessing the Website and Account Security</h2>
          <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. You are responsible for making all arrangements necessary for you to have access to the Website and ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
          <p>The Website and its entire contents, features, and functionality are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>This website is operated by Helics.ai Inc., a Delaware corporation. All feedback, comments, requests for technical support, and other communications relating to the Website should be directed to our contact page.</p>
        </section>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="min-h-screen bg-white pt-20 px-6 py-32">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p className="text-sm text-gray-500 mb-8">Effective Date: January 29, 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Company Information</h2>
          <p><strong>Business Name:</strong> Helics.ai<br/>
          <strong>Address:</strong> 10161 W Park Run Drive, STE 150, Las Vegas, NV 89145<br/>
          <strong>Email:</strong> contact@Helics.ai.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>We may collect the following types of personal and non-personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Information you provide directly: such as your name, email, phone number, or messages sent via our forms.</li>
            <li>Automatically collected information: including IP address, browser type, device ID, pages visited, session duration, referring URL, and interactions on the website.</li>
            <li>Information from partners and service providers: including email associations and inferred interests or demographic information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
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
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p>We maintain technical and organizational safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. No system can be 100% secure, and we encourage you to use caution when sharing information online.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@Helics.ai.com</p>
        </section>
      </div>
    </div>
  </div>
);

const DPAPage = () => (
  <div className="min-h-screen bg-white pt-20 px-6 py-32">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Data Processing Agreement</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Preamble</h2>
          <p>This data processing agreement (the "Data Processing Agreement" or the "DPA") is established in accordance with applicable U.S. and Nevada data protection laws and forms part of this Agreement between Helics.ai and the Customer.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Definitions</h2>
          <div className="space-y-3">
            <p><strong>"Customer":</strong> means any legal person who subscribes to the Services and, where applicable, its affiliates.</p>
            <p><strong>"Data Controller":</strong> means the person who determines the purposes and the means of the Processing.</p>
            <p><strong>"Data Processor":</strong> means the person who carries-out the Processing on behalf of the Data Controller and under its documented instructions.</p>
            <p><strong>"Personal Data":</strong> means any data relating to an identified or identifiable Data Subject.</p>
            <p><strong>"Processing":</strong> means the processing of Personal Data described in Exhibit 1.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Role of the Parties</h2>
          <p>With respect to the Processing described in Exhibit 1, the Customer shall act as the Data Controller and Helics.ai shall act as the Data Processor. Helics.ai processes the Personal Data on behalf of the Customer in order to provide the Customer with the Services it ordered under the Agreement.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Security and Personal Data Breach</h2>
          <p>Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of Processing, Helics.ai shall implement and maintain appropriate technical and organizational measures to protect Personal Data from any Personal Data Breach and to preserve the security and confidentiality of the Personal Data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>Helics.ai privacy contact: contact@Helics.ai.com</p>
        </section>
      </div>
    </div>
  </div>
);

const AUPPage = () => (
  <div className="min-h-screen bg-white pt-20 px-6 py-32">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Acceptable Use Policy</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p className="text-sm text-gray-500 mb-8">Last Modified: July 3, 2025</p>
        
        <section>
          <p>Helics.ai Inc., a Delaware corporation welcomes you to our website and services. By accessing or using our website or cloud services, you agree to this Acceptable Use Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
          <p>The Services and the Website may not be used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable law, including U.S. federal, state, or local laws or regulations</li>
            <li>Infringe, misappropriate, or otherwise violate our rights or the rights of any third party</li>
            <li>Exploit or harm minors or any person</li>
            <li>Interfere, inhibit, compromise, or otherwise harm the Services or the Website</li>
            <li>Act in an indecent, offensive, threatening, harassing, defamatory, libelous, fraudulent, malicious, disruptive, tortious, or other objectionable manner</li>
            <li>Harvest or collect information about third parties</li>
            <li>Use any device, system, network, account, plan, or the Services in an unauthorized manner</li>
            <li>Take advantage of, bypass, exploit, defeat, disable, or otherwise circumvent limitations of the Services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">High-Risk Activities</h2>
          <p className="font-bold text-red-600">THE SERVICES AND THE WEBSITE ARE NOT DESIGNED, MANUFACTURED, INTENDED, OR RECOMMENDED FOR USE FOR ANY HIGH-RISK OR FAIL-SAFE PURPOSE OR ACTIVITY OR IN ANY ENVIRONMENT WHERE FAILURE, INTERRUPTION, MALFUNCTION, ERROR, OR UNAVAILABILITY COULD RESULT IN SUBSTANTIAL LIABILITY OR DAMAGES, PHYSICAL HARM OR PERSONAL INJURY, DEATH OR DISMEMBERMENT, OR PROPERTY OR ENVIRONMENTAL DAMAGE.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
          <p>We may act immediately and without notice to suspend or terminate access to the Services or the Website if, in our sole discretion, Customer's use violates the terms of this AUP.</p>
        </section>
      </div>
    </div>
  </div>
);

const CopyrightPage = () => (
  <div className="min-h-screen bg-white pt-20 px-6 py-32">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8">Copyright Policy</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p className="text-sm text-gray-500 mb-8">Last Modified: July 3, 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Reporting Claims of Copyright Infringement</h2>
          <p>Helics.ai Inc., a Delaware corporation takes claims of copyright infringement seriously. We will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from this website infringe your copyright, you may request removal of those materials from the Website by submitting written notification to our copyright agent.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">DMCA Notice Requirements</h2>
          <p>In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512), the written notice must include substantially the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your physical or electronic signature</li>
            <li>Identification of the copyrighted work you believe to have been infringed</li>
            <li>Identification of the material you believe to be infringing in a sufficiently precise manner</li>
            <li>Adequate information by which we can contact you</li>
            <li>A statement that you have a good faith belief that use of the copyrighted material is not authorized</li>
            <li>A statement that the information in the written notice is accurate</li>
            <li>A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Counter Notification Procedures</h2>
          <p>If you believe that material you posted on the Website was removed or access to it was disabled by mistake or misidentification, you may file a counter notification with us by submitting written notification to our copyright agent.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Repeat Infringers</h2>
          <p>It is our policy in appropriate circumstances to disable and/or terminate the accounts of users who are repeat infringers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Copyright notices should be sent using our contact page available on our website.</p>
        </section>
      </div>
    </div>
  </div>
);

const SecureAIPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showEmailForm, setShowEmailForm] = useState(false);
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

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-16">
      <div className="flex items-center space-x-3">
  <img 
    href="./logo.png" 
    alt="SecureAI Logo" 
    className="h-8 w-8 object-contain"
  />
  <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold hover:text-purple-600 transition-colors">
    Helics.ai
  </button>
</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => setCurrentPage('home')} className={`font-medium transition-colors ${currentPage === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>Home</button>
          <button onClick={() => setCurrentPage('what-we-do')} className={`font-medium transition-colors ${currentPage === 'what-we-do' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>What We Do</button>
          <button onClick={() => setCurrentPage('how-we-do-it')} className={`font-medium transition-colors ${currentPage === 'how-we-do-it' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>How We Do It</button>
          <button onClick={() => setCurrentPage('why-us')} className={`font-medium transition-colors ${currentPage === 'why-us' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>Why Helics.ai</button>
          <button onClick={() => setCurrentPage('blog')} className={`font-medium transition-colors ${currentPage === 'blog' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>Blog</button>
        </div>
        
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm"
        >
          Contact Us
        </button>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="px-6 space-y-4">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">Home</button>
            <button onClick={() => { setCurrentPage('what-we-do'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">What We Do</button>
            <button onClick={() => { setCurrentPage('how-we-do-it'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">How We Do It</button>
            <button onClick={() => { setCurrentPage('why-us'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">Why Helics.ai</button>
            <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">Blog</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-600 hover:text-purple-600">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="border-t border-gray-200 py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Helics.ai</span>
            </div>
            <p className="text-gray-600 mb-4">
              Precision AI for Real Infrastructure
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-purple-600 transition-colors">Blog</button></li>
              <li><button onClick={() => setCurrentPage('what-we-do')} className="hover:text-purple-600 transition-colors">What We Do</button></li>
              <li><button onClick={() => setCurrentPage('how-we-do-it')} className="hover:text-purple-600 transition-colors">How We Do It</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-purple-600 transition-colors">Contact Us</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-purple-600 transition-colors">Terms of Use</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-purple-600 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage('dpa')} className="hover:text-purple-600 transition-colors">Data Processing Agreement</button></li>
              <li><button onClick={() => setCurrentPage('aup')} className="hover:text-purple-600 transition-colors">Acceptable Use Policy</button></li>
              <li><button onClick={() => setCurrentPage('copyright')} className="hover:text-purple-600 transition-colors">Copyright Policy</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Helics.ai. All rights reserved.</p>
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
      case 'why-us':
        return <WhyUsPage onContactClick={onContactClick} />;
      case 'blog':
        return <BlogPage onContactClick={onContactClick} />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'dpa':
        return <DPAPage />;
      case 'aup':
        return <AUPPage />;
      case 'copyright':
        return <CopyrightPage />;
      default:
        return <HomePage onNavigate={onNavigate} onContactClick={onContactClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden relative">
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
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

      {/* Email Collection Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 border border-gray-200 relative shadow-2xl">
            <button
              onClick={() => setShowEmailForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-2">Contact Our Team</h2>
                  <p className="text-gray-600">Let's discuss your enterprise AI infrastructure needs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <button
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
                  <p className="text-xs text-gray-500">
                    We'll get back to you within 24 hours
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Enterprise inquiries only.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-4">
                  Our enterprise team will contact you shortly to discuss your AI infrastructure needs.
                </p>
                <div className="text-sm text-gray-500">
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