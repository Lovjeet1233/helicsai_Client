import React from 'react';
import { Database, Brain, Target, Mic, Eye, Network, Zap, Code, ArrowRight, CheckCircle, Server, Lock, Cpu } from 'lucide-react';

const WhatWeDoPage = ({ onContactClick }) => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-black">What We</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Build
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Purpose-built AI models and infrastructure for enterprise-scale deployment, designed for organizations that require complete control and sovereignty over their AI systems.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">8 Core Specialities</h2>
            <p className="text-xl text-gray-600">Solve critical problems at enterprise scale</p>
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{capability.desc}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
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
              <span className="text-black">Expert Model</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Catalog
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized decision-making systems designed for enterprise and sovereign use-cases
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Model</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Description</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Advantage Over General-Purpose Models</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
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
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-purple-600">{model.model}</td>
                      <td className="px-6 py-4 text-gray-700">{model.desc}</td>
                      <td className="px-6 py-4 text-gray-600">{model.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>See More Models</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Built Differently. Delivered Securely.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver highly optimized, modular models that live entirely within your infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">On-Premise Deployment</h3>
              <p className="text-gray-600 mb-6">Deploy entirely within your infrastructure with no external dependencies or cloud requirements.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Air-gapped environments
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Sovereign cloud support
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Edge computing ready
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Data Control</h3>
              <p className="text-gray-600 mb-6">Your data never leaves your environment. Full ownership of models, logic, and processing.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Zero data leakage
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Compliance ready
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Audit trail capabilities
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Optimized Performance</h3>
              <p className="text-gray-600 mb-6">Compact expert models (0.1-8B parameters) that outperform larger general-purpose models.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Lower compute costs
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Faster inference
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Domain-specific accuracy
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
            <span className="text-black">Ready to Deploy</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Your AI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss how Helics.ai can be customized for your specific enterprise requirements and infrastructure.
          </p>
          
          <button 
            onClick={onContactClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;