import React, { useRef, useState, useEffect } from 'react';
import { X, Mail, ArrowRight, Sparkles, Target, TrendingUp, Users, Shield, CheckCircle, Crown } from 'lucide-react';
import macImage from '../assets/1.png'
import logoo from '../assets/logoo.png';
const HelicsLanding = () => {
  const audioRef = useRef(null);
  const scrollAudioRef = useRef(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Scale', 'Create', 'Optimize', 'Automate', 'Generate', 'Boost'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  // Placeholder for your dashboard image
  const mainImage = macImage

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Click sound failed:', e));
    }
  };

//   const playHoverSound = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       audioRef.current.play().catch(e => console.log('Audio play failed:', e));
//     }
//   };

  useEffect(() => {
    if (scrollAudioRef.current) {
      scrollAudioRef.current.volume = 0.3;
    }
  }, []);

  useEffect(() => {
    const enableAudio = () => {
      setCanPlayAudio(true);
      document.removeEventListener('click', enableAudio);
    };

    document.addEventListener('click', enableAudio);

    return () => {
      document.removeEventListener('click', enableAudio);
    };
  }, []);

//   const playScrollSound = () => {
//     if (!canPlayAudio) return;

//     const now = Date.now();

//     if (now - lastScrollTime > 200 && scrollAudioRef.current) {
//       scrollAudioRef.current.currentTime = 0;
//       scrollAudioRef.current.play().catch(e => console.log('Scroll audio play failed:', e));
//       setLastScrollTime(now);
//     }
//   };

//   useEffect(() => {
//     let ticking = false;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           playScrollSound();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTime]);

  const redirectToDashboard = () => {
    setShowEmailForm(true);
    // playHoverSound();
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('access_key', '134534ac-bcd0-4987-b2d3-4f1b7cd22284');
      formData.append('email', email);
      formData.append('subject', 'New Helics.ai Waitlist Signup');
      formData.append('message', `New user joined the waitlist: ${email}`);
      formData.append('from_name', 'Helics.ai Landing Page');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('Email submitted successfully:', email);
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

      <audio ref={scrollAudioRef} preload="auto">
        <source src="/sound.wav" type="audio/wav" />
      </audio>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
  <img 
    src={logoo} 
    alt="Helics.ai Logo" 
    className="h-60 w-auto object-contain"
  />
  <span className="text-2xl font-bold"></span>
</div>
            
            <button 
              onClick={() => {
                playClickSound();
                redirectToDashboard();
              }}
            //   onMouseEnter={playHoverSound}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-4 py-2 mb-8">
              <Crown className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Built for Content Marketers</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-black">Create</span>
              <br />
              <span className="inline-block animate-pulse">{words[currentWordIndex]}Winning Content</span> 
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              AI-powered insights to streamline content research, creation, optimization and drive better engagement, <em className="text-purple-600">faster</em>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => {
                  playClickSound();
                  redirectToDashboard();
                }}
                // onMouseEnter={playHoverSound}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:scale-105">
                Watch Video
              </button>
            </div>
            
            <div className="animate-bounce">
              <p className="text-gray-400 text-sm font-medium">
                ↓ Scroll to explore the platform
              </p>
            </div>
          </div>
        </section>

        {/* Hero Card Section */}
        <section className="py-44 px-10">
          <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-3xl p-24 text-center text-white relative overflow-hidden min-h-[600px] flex items-center justify-center">              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <span className="text-white font-medium text-sm">Built for Content Marketers</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  <span className="inline-block animate-pulse">Scale</span> Winning Content
                </h2>
                
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Turn a single prompt into months of on-brand, viral content.
                </p>
                
                <button 
                  onClick={() => {
                    playClickSound();
                    redirectToDashboard();
                  }}
                //   onMouseEnter={playHoverSound}
                  className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mac Screen Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-black">Automate your</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Content Marketing
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how our AI transforms your content strategy in real-time
              </p>
            </div>

            {/* Large Mac Screen */}
            <div 
              className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 relative hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]"
            //   onMouseEnter={playHoverSound}
              style={{ aspectRatio: '16/10' }}
            >
              {/* Mac Browser Chrome */}
              <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center space-x-6">
                  {/* Window Controls */}
                  <div className="flex space-x-3">
                    <div 
                      className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    ></div>
                    <div 
                      className="w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    ></div>
                    <div 
                      className="w-4 h-4 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    ></div>
                  </div>
                  
                  {/* Browser Tabs */}
                  <div className="flex space-x-3">
                    <div 
                      className="bg-purple-500 px-6 py-3 rounded-t-xl text-sm text-white border-b-2 border-purple-400 hover:bg-purple-400 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    >
                      <span className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                        <span className="font-medium">Helics.ai</span>
                      </span>
                    </div>
                    <div 
                      className="bg-gray-100 px-6 py-3 rounded-t-xl text-sm text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    >
                      Dashboard
                    </div>
                    <div 
                      className="bg-gray-100 px-6 py-3 rounded-t-xl text-sm text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                    //   onMouseEnter={playHoverSound}
                    >
                      Analytics
                    </div>
                  </div>
                </div>
                
                {/* Address Bar */}
                <div 
                  className="bg-gray-100 px-6 py-3 rounded-xl text-sm text-gray-600 flex items-center space-x-3 border border-gray-200 hover:border-purple-300 transition-colors cursor-pointer min-w-[280px]"
                //   onMouseEnter={playHoverSound}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">https://helics.ai/dashboard</span>
                </div>
              </div>
              
              {/* Dashboard Image */}
              <div className="relative w-full bg-white overflow-hidden" style={{ height: 'calc(100% - 73px)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={mainImage}
                    alt="Helics AI Dashboard"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', mainImage);
                      e.target.src = '/api/placeholder/1400/900';
                    }}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-black">Why choose</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Helics.ai
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform delivers measurable results that transform your marketing performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Eliminate Content Waste</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your content budget by identifying and eliminating underperforming posts before they go live with AI-powered performance prediction.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Real-time Performance Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor content performance across all platforms with AI-powered insights and automated optimization recommendations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Scale Winning Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus on the content elements that drive results and automatically scale your best-performing campaigns across all platforms.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Decode Platform Algorithms</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand how social media algorithms work and optimize your content to align with platform-specific ranking factors.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Cross-Platform Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare performance across multiple platforms to identify the best channels for your audience and content type.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Automated Brand Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure all your content meets brand guidelines, legal requirements, and platform policies automatically before publishing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-black">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join our waitlist and be among the first to experience the future of content marketing
            </p>
            
            {/* Early Bird Banner */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-16">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700">Early Bird Special</h3>
              </div>
              <p className="text-green-700 text-lg">
                Be the early ones - <span className="font-bold">50% OFF</span> for the first 100 members!
              </p>
              <p className="text-green-600 text-sm mt-2">
                Regular price: $59/month • Limited time offer
              </p>
            </div>
            
            {/* Pricing Card */}
            <div className="max-w-md mx-auto">
              <div 
                className="bg-white border-2 border-purple-200 rounded-3xl p-8 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105 relative cursor-pointer"
                // onMouseEnter={playHoverSound}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold">
                    POPULAR
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">Pro Plan</h3>
                <p className="text-gray-600 mb-6">Perfect for growing businesses and marketing teams</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl text-gray-400 line-through">$59</span>
                    <span className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">$29</span>
                  </div>
                  <span className="text-gray-600 block mt-1">/ month</span>
                  <span className="text-green-600 text-sm font-bold">50% OFF Early Bird</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited AI Content Generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Multi-Platform Publishing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Advanced Analytics Dashboard
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Brand Voice Training
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Priority Support
                  </li>
                </ul>
                
                <button 
                  onClick={() => {
                    playClickSound();
                    redirectToDashboard();
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-bold text-lg"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mt-8">
              No credit card required • Be the first to experience the future
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center space-x-3">
  <img 
    src={logoo} 
    alt="Helics.ai Logo" 
    className="h-28 w-auto object-contain"
  />
  <span className="text-2xl font-bold"> Helics.ai</span>
</div>
              
               
              
            </div>
            <p className="text-gray-600 mb-8 max-w-md mx-auto font-medium">
              Your entire marketing calendar, built while you sip coffee.
            </p>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-500 text-sm">© 2025 Helics.ai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Email Collection Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 border border-gray-200 relative shadow-2xl">
            <button
              onClick={() => setShowEmailForm(false)}
            //   onMouseEnter={playHoverSound}
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
                  <h2 className="text-2xl font-bold text-black mb-2">Join the Waitlist</h2>
                  <p className="text-gray-600">Be the first to experience AI-powered content creation</p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    // onMouseEnter={playHoverSound}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    onClick={playClickSound}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-6">
                  <p className="text-xs text-gray-500">
                    We'll send updates directly to your inbox
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    No spam, unsubscribe anytime.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-2">Welcome to the Future!</h2>
                <p className="text-gray-600 mb-4">
                  Thanks for joining our waitlist. We'll notify you when Helics.ai launches.
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

export default HelicsLanding;