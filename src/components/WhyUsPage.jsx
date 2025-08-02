import React from 'react';
import { ArrowRight, CheckCircle, Shield, Server, Cpu, Lock, TrendingUp, DollarSign, Clock, Building, Globe, AlertTriangle } from 'lucide-react';

const WhyUsPage = ({ onContactClick }) => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-black">Why</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Helics.ai
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Helics.ai delivers modern AI infrastructure designed to work under your terms—smaller, faster, and fully deployable within your enterprise systems.
          </p>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Enterprise-Grade AI, On Your Terms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern AI, without the SaaS tradeoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hosted Client-Side</h3>
              <p className="text-gray-600">Never in the cloud. Your data stays within your infrastructure, always.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Air-Gapped Ready</h3>
              <p className="text-gray-600">Runs in air-gapped, hybrid, or sovereign environments without compromise.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Dependencies</h3>
              <p className="text-gray-600">No API dependency, no third-party exposure. Complete autonomy.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full Control</h3>
              <p className="text-gray-600">Complete control over models, logic, and orchestration. Your rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Control, Ownership, and Performance—No Compromises</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              General LLMs are big, expensive, and insecure. Helics.ai delivers domain-specific performance at a fraction of the size—with full control and zero data leakage.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Capability</th>
                    <th className="px-6 py-4 text-center font-bold text-purple-600">Helics.ai Expert Models</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-600">Traditional AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Specialized Knowledge</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>Domain-specific expertise</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">Generalized knowledge</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Accuracy</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-bold text-purple-600">99%+ in specialized domains</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">Varies widely by task</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Computational Resources</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-bold text-purple-600">Optimized & efficient</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">High resource requirements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Regulatory Compliance</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-bold text-purple-600">Built-in for each domain</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">Requires additional oversight</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Deployment Flexibility</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-bold text-purple-600">Edge, cloud, or on-premises</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">Primarily cloud-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Model Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              View model performance and system benchmarks
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Overall Average MMLU Scores</h3>
              <p className="text-purple-100">Benchmark comparison across leading AI models</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { model: "Helics.ai USF-1 Mini", score: 90, color: "bg-purple-600" },
                  { model: "Gemini 2.0 Flash", score: 87, color: "bg-blue-500" },
                  { model: "DeepSeek V3", score: 86, color: "bg-green-500" },
                  { model: "GPT 4o (Nov-24)", score: 86, color: "bg-orange-500" },
                  { model: "Helics.ai USF Alpha", score: 85, color: "bg-purple-500" },
                  { model: "LLAMA 3.1 405B", score: 85, color: "bg-gray-500" },
                  { model: "O1 Mini", score: 85, color: "bg-red-500" },
                  { model: "LLAMA 3.3 70B", score: 84, color: "bg-yellow-500" },
                  { model: "GPT 4o Mini", score: 82, color: "bg-indigo-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="font-medium">{item.model}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-lg">{item.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                * Data source: MMLU Benchmarks for AI model performance comparison
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Smaller Models. Greater Precision.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build compact expert models (0.1–8B parameters), tuned to your real-world workflows. No bloated models. No guesswork. Just high-performing systems that deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compute costs</span>
                  <span className="font-bold text-green-600">-70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Infrastructure overhead</span>
                  <span className="font-bold text-green-600">-60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Operational complexity</span>
                  <span className="font-bold text-green-600">-80%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Gains</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Inference speed</span>
                  <span className="font-bold text-blue-600">5x faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response accuracy</span>
                  <span className="font-bold text-blue-600">99%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time to deployment</span>
                  <span className="font-bold text-blue-600">Days not months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security & Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Data sovereignty</span>
                  <span className="font-bold text-purple-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance readiness</span>
                  <span className="font-bold text-purple-600">Built-in</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">External dependencies</span>
                  <span className="font-bold text-purple-600">Zero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Where Helics.ai Delivers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for critical workloads across regulated and sovereign environments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Healthcare", icon: "🏥", desc: "HIPAA-compliant clinical decision support" },
              { name: "Government", icon: "🏛️", desc: "Sovereign AI for national security" },
              { name: "Defense", icon: "🛡️", desc: "Mission-critical tactical intelligence" },
              { name: "Finance", icon: "💰", desc: "Regulatory-compliant risk modeling" },
              { name: "Energy", icon: "⚡", desc: "Grid optimization and asset management" },
              { name: "Manufacturing", icon: "🏭", desc: "Supply chain and quality control" },
              { name: "Telecom", icon: "📡", desc: "Network optimization and security" },
              { name: "Agriculture", icon: "🌾", desc: "Precision farming and yield optimization" },
              { name: "Transportation", icon: "🚛", desc: "Logistics and fleet management" },
              { name: "Pharmaceuticals", icon: "💊", desc: "Drug discovery and compliance" },
              { name: "Education", icon: "🎓", desc: "Personalized learning platforms" },
              { name: "Insurance", icon: "🛡️", desc: "Risk assessment and claims processing" }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organizations worldwide trust Helics.ai for their most critical AI workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Fortune 500 Healthcare</h3>
                  <p className="text-gray-600 text-sm">Global medical devices company</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Helics.ai enabled us to process sensitive patient data with 99.8% accuracy while maintaining complete HIPAA compliance in our air-gapped environment."
              </blockquote>
              <div className="flex space-x-4 text-sm">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full">+40% efficiency</div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Zero breaches</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Defense Contractor</h3>
                  <p className="text-gray-600 text-sm">Tier 1 defense systems integrator</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "The only AI solution that met our stringent security requirements. Deployed in classified environments with zero external dependencies."
              </blockquote>
              <div className="flex space-x-4 text-sm">
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Mission ready</div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full">100% sovereign</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Energy Utility</h3>
                  <p className="text-gray-600 text-sm">Regional power grid operator</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Helics.ai's energy models optimized our grid operations, reducing outages by 60% and saving $2M annually in operational costs."
              </blockquote>
              <div className="flex space-x-4 text-sm">
                <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">-60% outages</div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full">$2M saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            <span>Deploy AI You Own.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Keep It Yours.
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Zero third-party dependencies. Purpose-built AI, deployed where it matters.
          </p>
          
          <button 
            onClick={onContactClick}
            className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;