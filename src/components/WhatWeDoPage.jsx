import React from 'react';
import { Database, Brain, Target, Mic, Eye, Network, Zap, Code, ArrowRight, CheckCircle, Server, Lock, Cpu } from 'lucide-react';

// Color scheme
const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

const WhatWeDoPage = ({ onContactClick }) => {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: colors.charcoal }}>
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">What We</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Build
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: colors.silver }}>
              Purpose-built AI models and infrastructure for enterprise-scale deployment, designed for organizations that require complete control and sovereignty over their AI systems.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-6" style={{ backgroundColor: colors.slate + '20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6 text-white">8 Core Specialities</h2>
              <p className="text-xl" style={{ color: colors.silver }}>Solve critical problems at enterprise scale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Database, 
                  title: "Data Structuring", 
                  desc: "Turn messy, unstructured enterprise data into usable insights. Extract, transform, and organize information from documents, databases, and legacy systems with precision.",
                  features: ["Document parsing", "Schema extraction", "Data normalization", "Legacy system integration"]
                },
                { 
                  icon: Brain, 
                  title: "Multi-Modal Intelligence", 
                  desc: "Understand and process text, images, audio, and structured data together. Create comprehensive analysis across multiple data types simultaneously.",
                  features: ["Cross-modal reasoning", "Document + image analysis", "Audio transcription", "Unified data processing"]
                },
                { 
                  icon: Target, 
                  title: "Reasoning & Analysis", 
                  desc: "Perform complex multi-step thinking and logical reasoning. Analyze scenarios, evaluate options, and provide detailed explanations for decision-making.",
                  features: ["Chain-of-thought reasoning", "Scenario analysis", "Risk assessment", "Decision trees"]
                },
                { 
                  icon: Mic, 
                  title: "Voice AI", 
                  desc: "Enterprise-grade speech recognition, synthesis, and conversation. Handle multiple languages, accents, and technical terminology with high accuracy.",
                  features: ["Real-time transcription", "Voice synthesis", "Multilingual support", "Technical vocabulary"]
                },
                { 
                  icon: Eye, 
                  title: "Vision AI", 
                  desc: "Analyze images, documents, and visual data for automation and insights. Extract information from scanned documents, charts, and visual content.",
                  features: ["OCR processing", "Chart analysis", "Image classification", "Visual search"]
                },
                { 
                  icon: Network, 
                  title: "Agentic Workflows", 
                  desc: "Automate complex business processes with intelligent agents. Coordinate multiple systems and make autonomous decisions within defined parameters.",
                  features: ["Process automation", "Multi-system coordination", "Decision workflows", "Exception handling"]
                },
                { 
                  icon: Zap, 
                  title: "Tool Calling", 
                  desc: "Intelligently select and execute the right tools for each task. Integrate with enterprise APIs, databases, and external systems seamlessly.",
                  features: ["API integration", "Tool selection", "Parameter optimization", "Error handling"]
                },
                { 
                  icon: Code, 
                  title: "Code Generation", 
                  desc: "Generate, review, and modify code based on requirements. Support multiple programming languages and enterprise coding standards.",
                  features: ["Multi-language support", "Code review", "Documentation generation", "Standards compliance"]
                }
              ].map((capability, index) => (
                <div key={index} className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                     style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="leading-relaxed mb-6" style={{ color: colors.silver }}>{capability.desc}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm" style={{ color: colors.silver }}>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Model Catalog */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">Expert Model</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Catalog
                </span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Specialized decision-making systems designed for enterprise and sovereign use-cases
              </p>
            </div>

            <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ backgroundColor: colors.slate + '20', border: `1px solid ${colors.light}` }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead style={{ backgroundColor: colors.charcoal + '80' }}>
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-white">Model</th>
                      <th className="px-6 py-4 text-left font-bold text-white">Description</th>
                      <th className="px-6 py-4 text-left font-bold text-white">Advantage Over General-Purpose Models</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: colors.light }}>
                    {[
                      {
                        model: "Helics.ai-Defense",
                        desc: "Focuses on strategic analysis, mission planning, and threat assessment for defense operations.",
                        advantage: "Embeds military doctrine, classified acronyms, and operational tactics, yielding accurate, secure assessments."
                      },
                      {
                        model: "Helics.ai-Cybersecurity",
                        desc: "Detects vulnerabilities, analyzes malware, automates incident response, recommending robust security controls.",
                        advantage: "Understands exploit patterns, CVE lexicon, and kill‑chain logic to pinpoint threats swiftly."
                      },
                      {
                        model: "Helics.ai-SpaceTech",
                        desc: "Supports spacecraft design, trajectory optimization, and anomaly resolution for space missions.",
                        advantage: "Captures orbital mechanics and aerospace standards, reducing mission‑critical calculation errors."
                      },
                      {
                        model: "Helics.ai-Energy",
                        desc: "Optimizes grid operations, trading, and asset maintenance across power generation and distribution.",
                        advantage: "Understands grid physics, market tariffs, and reliability standards, boosting stability and profitability."
                      },
                      {
                        model: "Helics.ai-Health",
                        desc: "Provides clinical decision support, summarizing guidelines and patient context for safer care.",
                        advantage: "Aligns with medical nomenclature and guidelines, reducing clinical hallucinations and diagnostic risk."
                      },
                      {
                        model: "Helics.ai-Legal",
                        desc: "Analyzes contracts, regulations, and case law for legal research and compliance.",
                        advantage: "Trained on legal precedents and terminology, providing precise regulatory guidance."
                      },
                      {
                        model: "Helics.ai-Finance",
                        desc: "Risk modeling, fraud detection, and regulatory compliance for financial institutions.",
                        advantage: "Incorporates financial regulations and market dynamics for accurate risk assessment."
                      },
                      {
                        model: "Helics.ai-Manufacturing",
                        desc: "Supply chain optimization, quality control, and predictive maintenance.",
                        advantage: "Understands industrial processes and quality standards for operational excellence."
                      }
                    ].map((model, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-semibold text-purple-400">{model.model}</td>
                        <td className="px-6 py-4 text-white">{model.desc}</td>
                        <td className="px-6 py-4" style={{ color: colors.silver }}>{model.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={onContactClick}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>See More Models</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-32 px-6" style={{ backgroundColor: colors.slate + '20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6 text-white">Built Differently. Delivered Securely.</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                We deliver highly optimized, modular models that live entirely within your infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #3B82F6, #1E40AF)` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">On-Premise Deployment</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Complete control within your own data centers. Perfect for regulated industries and sensitive data.
                </p>
                <div className="space-y-2 text-sm text-blue-200">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Air-gapped environments
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Sovereign cloud support
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Edge computing ready
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #7C3AED, #4C1D95)` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Complete Data Control</h3>
                <p className="text-purple-100 text-sm mb-6">
                  Your data never leaves your environment. Full ownership of models, logic, and processing.
                </p>
                <div className="space-y-2 text-sm text-purple-200">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Zero data leakage
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance ready
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Audit trail capabilities
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #059669, #047857)` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Optimized Performance</h3>
                <p className="text-green-100 text-sm mb-6">
                  Compact expert models (0.1-8B parameters) that outperform larger general-purpose models.
                </p>
                <div className="space-y-2 text-sm text-green-200">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Lower compute costs
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Faster inference
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Domain-specific accuracy
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #DC2626, #B91C1C)` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Seamless Integration</h3>
                <p className="text-red-100 text-sm mb-6">
                  Integrates with your existing enterprise systems, APIs, and workflows without disruption.
                </p>
                <div className="space-y-2 text-sm text-red-200">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Enterprise APIs
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Legacy systems
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom workflows
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">Ready to Deploy</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Your AI?
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: colors.silver }}>
              Let's discuss how Helics.ai can be customized for your specific enterprise requirements and infrastructure.
            </p>
            
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDoPage;