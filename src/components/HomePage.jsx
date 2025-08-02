import React, { useState, useEffect } from 'react';
import { ArrowRight, Crown, Database, Brain, Target, Mic, Eye, Network, Zap, Code, CheckCircle } from 'lucide-react';

const HomePage = ({ onNavigate, onContactClick }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Deploy', 'Own', 'Control', 'Secure', 'Scale', 'Build'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-4 py-2 mb-8">
              <Crown className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">End-to-End AI Solutions for the Enterprise and Sovereign</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-black">{words[currentWordIndex]}</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Your AI</span> 
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Helics.ai delivers modular AI systems, fully deployed in your infrastructure— designed for organizations where <em className="text-purple-600">privacy, control, and performance</em> are essential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={onContactClick}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:scale-105">
                See in Action
              </button>
            </div>

            {/* Capability Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Database, label: "Data Structuring" },
                { icon: Brain, label: "Multi-Modal Intelligence" },
                { icon: Target, label: "Reasoning & Analysis" },
                { icon: Mic, label: "Voice AI" },
                { icon: Eye, label: "Vision AI" },
                { icon: Network, label: "Agentic Workflows" },
                { icon: Zap, label: "Tool Calling" },
                { icon: Code, label: "Code Generation" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:scale-105">
                  <item.icon className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Standard Section */}
        <section className="py-44 px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-3xl p-24 text-center text-white relative overflow-hidden min-h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <span className="text-white font-medium text-sm">The Gold Standard in</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  Enterprise Privacy &<br />
                  <span className="inline-block animate-pulse">Data Security</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Own Everything</h3>
                    <p className="text-gray-200">The model, logic, and stack are 100% yours forever.</p>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Built for Real Infrastructure</h3>
                    <p className="text-gray-200">Deploy on-prem, cloud, hybrid, or edge with no external calls.</p>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">Modular Expert Models</h3>
                    <p className="text-gray-200">Faster and more accurate than monolithic LLMs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Helics.ai Preview */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-black">Why</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Helics.ai
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern AI infrastructure designed to work under your terms—smaller, faster, and fully deployable within your enterprise systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Enterprise-Grade AI, On Your Terms</h3>
                <p className="text-lg text-gray-600 mb-8">Modern AI, without the SaaS tradeoffs.</p>
                
                <div className="space-y-4">
                  {[
                    "Hosted client-side, never in the cloud",
                    "Runs in air-gapped, hybrid, or sovereign environments",
                    "No API dependency, no third-party exposure",
                    "Full control over models, logic, and orchestration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6">Smaller Models. Greater Precision.</h4>
                <p className="text-gray-600 mb-6">We build compact expert models (0.1–8B parameters), tuned to your real-world workflows.</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Custom models for legal QA, radiology, robotics, and supply chain
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Faster, cheaper, and more accurate than monolithic LLMs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Delivered as a complete solution—ready to run on day one
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <button 
                onClick={() => onNavigate('why-us')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-black">Own Your AI.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Run It Anywhere.
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you're operating in sovereign, secure, or regulated environments—Helics.ai delivers expert-level AI, entirely under your control.
            </p>
            
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;