import React from 'react';
import { ArrowRight, Database, Cpu, Target, CheckCircle, Network, Shield, Zap, Code, Brain, Settings, Lock, Server, Eye } from 'lucide-react';

// Color scheme
const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

const HowWeDoItPage = ({ onContactClick }) => {
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
              <span className="text-white">How We</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Do It
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: colors.silver }}>
              Our proven methodology for delivering enterprise-grade AI infrastructure that you can trust, own, and control completely.
            </p>
          </div>
        </section>

        {/* Expert Model Architecture Flow */}
        <section className="py-20 px-6" style={{ backgroundColor: colors.slate + '20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6 text-white">Expert Model Architecture</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Intelligent decision-making system for enterprise operations
              </p>
            </div>

            <div className="relative">
              {/* Architecture Flow */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="rounded-2xl p-8 shadow-2xl text-center transition-all duration-300 hover:scale-105"
                     style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Data Sources</h3>
                  <p className="mb-4" style={{ color: colors.silver }}>Enterprise information from various channels</p>
                  <div className="space-y-2 text-sm" style={{ color: colors.silver }}>
                    <div>• Legacy databases</div>
                    <div>• Document repositories</div>
                    <div>• Real-time feeds</div>
                    <div>• External APIs</div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 shadow-2xl text-center transition-all duration-300 hover:scale-105"
                     style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Processing</h3>
                  <p className="mb-4" style={{ color: colors.silver }}>Model Control Protocol, Expert Models & Agents</p>
                  <div className="space-y-2 text-sm" style={{ color: colors.silver }}>
                    <div>• Data preprocessing</div>
                    <div>• Model orchestration</div>
                    <div>• Quality validation</div>
                    <div>• Response synthesis</div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 shadow-2xl text-center transition-all duration-300 hover:scale-105"
                     style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Outcomes</h3>
                  <p className="mb-4" style={{ color: colors.silver }}>Business-critical decision making</p>
                  <div className="space-y-2 text-sm" style={{ color: colors.silver }}>
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
                <span className="text-white">Model Context Protocol</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  for Secure AI Operations
                </span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Our Model Context Protocol servers facilitate AI orchestration through advanced reasoning, planning, and tool integration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, ${colors.slate}40, ${colors.light}20)`, border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Advanced AI Reasoning & Planning</h3>
                <p className="mb-4" style={{ color: colors.silver }}>
                  Based on Anthropic's Model Context Protocol (MCP), our system enables sophisticated reasoning, planning, and complex problem-solving far beyond traditional AI capabilities.
                </p>
                <div className="space-y-2">
                  <div className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">ENHANCED REASONING</div>
                  <div className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium ml-2">MULTI-STEP PLANNING</div>
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, ${colors.slate}40, ${colors.light}20)`, border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Tool Integration Framework</h3>
                <p className="mb-4" style={{ color: colors.silver }}>
                  Seamlessly integrate external tools and APIs into your AI workflows. Our MCP servers enable models to intelligently use tools to solve complex problems.
                </p>
                <div className="space-y-2">
                  <div className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">TOOL INTEGRATION</div>
                  <div className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium ml-2">AGENT ARCHITECTURE</div>
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, ${colors.slate}40, ${colors.light}20)`, border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Structured JSON Outputs</h3>
                <p className="mb-4" style={{ color: colors.silver }}>
                  Receive highly structured, fully validated JSON responses from AI models for seamless integration with your applications and business logic.
                </p>
                <div className="space-y-2">
                  <div className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">VALIDATED OUTPUTS</div>
                  <div className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium ml-2">RELIABILITY SAFEGUARDS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Helics.ai Nexus Agents */}
        <section className="py-32 px-6" style={{ backgroundColor: colors.slate + '20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6 text-white">Helics.ai Nexus Agents</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Autonomous AI agents that combine our expert models with decision-making capabilities to solve complex tasks with minimal human intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Multi-modal Understanding</h3>
                <p className="mb-6" style={{ color: colors.silver }}>
                  Process and reason across text, images, and structured data for comprehensive analysis.
                </p>
                <div className="space-y-3">
                  {[
                    "Document + image analysis",
                    "Cross-modal reasoning",
                    "Unified data processing",
                    "Context preservation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm" style={{ color: colors.silver }}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Autonomous Operation</h3>
                <p className="mb-6" style={{ color: colors.silver }}>
                  Self-directed problem solving with the ability to create and execute multi-step plans.
                </p>
                <div className="space-y-3">
                  {[
                    "Independent task execution",
                    "Dynamic plan adjustment",
                    "Resource optimization",
                    "Exception handling"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm" style={{ color: colors.silver }}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Safety Guardrails</h3>
                <p className="mb-6" style={{ color: colors.silver }}>
                  Built-in safety protocols and continuous monitoring to ensure reliable and secure operation.
                </p>
                <div className="space-y-3">
                  {[
                    "Behavioral constraints",
                    "Continuous monitoring",
                    "Audit trail logging",
                    "Emergency stop protocols"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm" style={{ color: colors.silver }}>
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
              <h2 className="text-4xl font-black mb-6 text-white">Deployment Flexibility</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Deploy Helics.ai wherever your business requires it - on-premise, cloud, hybrid, or edge environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #3B82F6, #1E40AF)` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">On-Premise</h3>
                <p className="text-blue-100 text-sm">
                  Complete control within your own data centers with no external dependencies or cloud requirements.
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #7C3AED, #4C1D95)` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Cloud</h3>
                <p className="text-purple-100 text-sm">
                  Deploy on your preferred cloud provider while maintaining full model ownership and control.
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #059669, #047857)` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Hybrid</h3>
                <p className="text-green-100 text-sm">
                  Combine on-premise and cloud deployments for optimal performance and compliance balance.
                </p>
              </div>

              <div className="rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:scale-105"
                   style={{ background: `linear-gradient(135deg, #EA580C, #C2410C)` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Edge</h3>
                <p className="text-orange-100 text-sm">
                  Low-latency processing at the edge for real-time applications and IoT environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-32 px-6" style={{ backgroundColor: colors.slate + '20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6 text-white">Our Implementation Process</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
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
                <div key={index} className="rounded-2xl p-8 shadow-2xl relative transition-all duration-300 hover:scale-105"
                     style={{ backgroundColor: colors.charcoal + '80', border: `1px solid ${colors.light}` }}>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4 text-white">{phase.title}</h3>
                  <p className="mb-4" style={{ color: colors.silver }}>{phase.desc}</p>
                  <div className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Diagram */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-6 text-white">Technical Architecture</h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.silver }}>
                Complete enterprise AI infrastructure stack
              </p>
            </div>

            <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: colors.slate + '20', border: `1px solid ${colors.light}` }}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {/* Data Layer */}
                <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.charcoal + '60', border: `1px solid ${colors.light}` }}>
                  <Database className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                  <h4 className="font-bold text-white mb-2">Data Layer</h4>
                  <p className="text-sm" style={{ color: colors.silver }}>Sources & Storage</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                {/* Processing Layer */}
                <div className="text-center p-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-white" />
                  <h4 className="font-bold text-white mb-2">AI Processing</h4>
                  <p className="text-sm text-white opacity-80">Expert Models</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
                
                {/* Application Layer */}
                <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.charcoal + '60', border: `1px solid ${colors.light}` }}>
                  <Network className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <h4 className="font-bold text-white mb-2">Application Layer</h4>
                  <p className="text-sm" style={{ color: colors.silver }}>APIs & Integration</p>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.charcoal + '40' }}>
                  <Lock className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <h5 className="font-bold text-white">Security</h5>
                  <p className="text-sm" style={{ color: colors.silver }}>End-to-end encryption</p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.charcoal + '40' }}>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <h5 className="font-bold text-white">Compliance</h5>
                  <p className="text-sm" style={{ color: colors.silver }}>Audit & monitoring</p>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.charcoal + '40' }}>
                  <Zap className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <h5 className="font-bold text-white">Performance</h5>
                  <p className="text-sm" style={{ color: colors.silver }}>Real-time processing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">Ready to Start</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Your Journey?
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: colors.silver }}>
              Let's discuss your specific requirements and design the perfect AI infrastructure solution for your organization.
            </p>
            
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>Contact Our Experts</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowWeDoItPage;