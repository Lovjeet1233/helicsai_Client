import React from 'react';
import { ArrowRight, Database, Cpu, Target, CheckCircle, Network, Shield, Zap, Code, Brain, Settings, Lock, Server,Eye } from 'lucide-react';

const HowWeDoItPage = ({ onContactClick }) => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-black">How We</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Do It
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology for delivering enterprise-grade AI infrastructure that you can trust, own, and control completely.
          </p>
        </div>
      </section>

      {/* Expert Model Architecture Flow */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Expert Model Architecture</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intelligent decision-making system for enterprise operations
            </p>
          </div>

          <div className="relative">
            {/* Architecture Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Sources</h3>
                <p className="text-gray-600 mb-4">Enterprise information from various channels</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Legacy databases</div>
                  <div>• Document repositories</div>
                  <div>• Real-time feeds</div>
                  <div>• External APIs</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Processing</h3>
                <p className="text-gray-600 mb-4">Model Control Protocol, Expert Models & Agents</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Data preprocessing</div>
                  <div>• Model orchestration</div>
                  <div>• Quality validation</div>
                  <div>• Response synthesis</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Outcomes</h3>
                <p className="text-gray-600 mb-4">Business-critical decision making</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Actionable insights</div>
                  <div>• Automated workflows</div>
                  <div>• Compliance reports</div>
                  <div>• Risk assessments</div>
                </div>
              </div>
            </div>

            {/* Connecting Arrows */}
            <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>
            <div className="hidden md:block absolute top-1/2 right-1/3 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Model Context Protocol */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-black">Model Context Protocol</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                for Secure AI Operations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our Model Context Protocol servers facilitate AI orchestration through advanced reasoning, planning, and tool integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced AI Reasoning & Planning</h3>
              <p className="text-gray-600 mb-4">
                Based on Anthropic's Model Context Protocol (MCP), our system enables sophisticated reasoning, planning, and complex problem-solving far beyond traditional AI capabilities.
              </p>
              <div className="space-y-2">
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">ENHANCED REASONING</div>
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium ml-2">MULTI-STEP PLANNING</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tool Integration Framework</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate external tools and APIs into your AI workflows. Our MCP servers enable models to intelligently use tools to solve complex problems.
              </p>
              <div className="space-y-2">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">TOOL INTEGRATION</div>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium ml-2">AGENT ARCHITECTURE</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Structured JSON Outputs</h3>
              <p className="text-gray-600 mb-4">
                Receive highly structured, fully validated JSON responses from AI models for seamless integration with your applications and business logic.
              </p>
              <div className="space-y-2">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">VALIDATED OUTPUTS</div>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">RELIABILITY SAFEGUARDS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helics.ai Nexus Agents */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Helics.ai Nexus Agents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Autonomous AI agents that combine our expert models with decision-making capabilities to solve complex tasks with minimal human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-modal Understanding</h3>
              <p className="text-gray-600 mb-6">
                Process and reason across text, images, and structured data for comprehensive analysis.
              </p>
              <div className="space-y-3">
                {[
                  "Document + image analysis",
                  "Cross-modal reasoning",
                  "Unified data processing",
                  "Context preservation"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Autonomous Operation</h3>
              <p className="text-gray-600 mb-6">
                Self-directed problem solving with the ability to create and execute multi-step plans.
              </p>
              <div className="space-y-3">
                {[
                  "Independent task execution",
                  "Dynamic plan adjustment",
                  "Resource optimization",
                  "Exception handling"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Safety Guardrails</h3>
              <p className="text-gray-600 mb-6">
                Built-in safety protocols and continuous monitoring to ensure reliable and secure operation.
              </p>
              <div className="space-y-3">
                {[
                  "Behavioral constraints",
                  "Continuous monitoring",
                  "Audit trail logging",
                  "Emergency stop protocols"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Deployment Flexibility</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deploy Helics.ai wherever your business requires it - on-premise, cloud, hybrid, or edge environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">On-Premise</h3>
              <p className="text-gray-600 text-sm">
                Complete control within your own data centers. Perfect for regulated industries and sensitive data.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud</h3>
              <p className="text-gray-600 text-sm">
                Deploy on your preferred cloud provider while maintaining full model ownership and control.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border border-green-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hybrid</h3>
              <p className="text-gray-600 text-sm">
                Combine on-premise and cloud deployments for optimal performance and compliance balance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Edge</h3>
              <p className="text-gray-600 text-sm">
                Low-latency processing at the edge for real-time applications and IoT environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to get your enterprise AI infrastructure deployed quickly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                desc: "Analyze your infrastructure, compliance requirements, and use cases to design the optimal deployment architecture.",
                duration: "2-4 weeks"
              },
              {
                step: "02", 
                title: "Model Customization",
                desc: "Train and fine-tune expert models specific to your domain, data, and business requirements.",
                duration: "4-8 weeks"
              },
              {
                step: "03",
                title: "Infrastructure Setup",
                desc: "Deploy the Helics.ai platform in your environment with full security hardening and integration.",
                duration: "2-6 weeks"
              },
              {
                step: "04",
                title: "Training & Handover",
                desc: "Comprehensive training for your team and full knowledge transfer for ongoing operations.",
                duration: "1-2 weeks"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.desc}</p>
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-black">Ready to Start</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Your Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your specific requirements and design the perfect AI infrastructure solution for your organization.
          </p>
          
          <button 
            onClick={onContactClick}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Contact Our Experts</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowWeDoItPage;