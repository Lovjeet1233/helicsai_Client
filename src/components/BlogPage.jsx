import React from 'react';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Shield, Building, Cpu, Lock } from 'lucide-react';

const BlogPage = ({ onContactClick }) => {
  const featuredPost = {
    title: "How Small Expert Models Transform Risk Modelling",
    excerpt: "Explore how small AI models (0.1–8B parameters) align with SR 11-7, CECL, and IFRS 9 to deliver transparent, auditable, and regulator-ready risk modelling.",
    author: "Dr. Sarah Chen",
    date: "January 25, 2025",
    readTime: "8 min read",
    category: "Finance",
    image: "🏦"
  };

  const blogPosts = [
    {
      title: "Enterprise AI Buyer's Guide: Build vs. Buy Decision",
      excerpt: "Navigate the build vs. buy dilemma in enterprise AI. Learn how modular expert systems offer strategic value, compliance, and ROI for scalable, secure deployment.",
      author: "Michael Rodriguez",
      date: "January 22, 2025",
      readTime: "12 min read",
      category: "Strategy",
      image: "📊"
    },
    {
      title: "Deploying Expert AI in Air-Gapped Environments",
      excerpt: "Learn best practices for secure, modular AI deployment in air-gapped systems—enabling sovereign, auditable, and high-performance AI for critical enterprise missions.",
      author: "Dr. James Thompson",
      date: "January 18, 2025",
      readTime: "10 min read",
      category: "Technical",
      image: "🔒"
    },
    {
      title: "Why Small Expert Models Outperform General AI",
      excerpt: "Discover how small, specialized AI models cut costs, improve accuracy, and meet security and compliance needs—outperforming large models in enterprise settings.",
      author: "Lisa Park",
      date: "January 15, 2025",
      readTime: "6 min read",
      category: "Research",
      image: "🎯"
    },
    {
      title: "10 Key Factors Before Launching Internal AI",
      excerpt: "Avoid the 80% failure rate in enterprise AI. Learn the top 10 factors—from infrastructure to ROI—that determine success in building internal AI capabilities.",
      author: "David Kim",
      date: "January 12, 2025",
      readTime: "15 min read",
      category: "Implementation",
      image: "⚡"
    },
    {
      title: "AI Sovereignty: Why Data Control Matters",
      excerpt: "Understanding the critical importance of data sovereignty in AI deployments and how to maintain control in regulated environments.",
      author: "Dr. Rachel Martinez",
      date: "January 8, 2025",
      readTime: "9 min read",
      category: "Policy",
      image: "🌐"
    },
    {
      title: "The Future of Edge AI in Manufacturing",
      excerpt: "How edge-deployed AI models are revolutionizing manufacturing processes while maintaining security and reducing latency.",
      author: "Alex Zhang",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Manufacturing",
      image: "🏭"
    }
  ];

  const categories = ["All", "Strategy", "Technical", "Research", "Implementation", "Policy", "Finance", "Manufacturing"];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-black">Insights on Secure,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Scalable AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore expert perspectives on privacy-first AI systems, on-premise solutions, and enterprise innovation—powered by Helics.ai.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{featuredPost.image}</div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4">
                    <span className="text-white font-medium text-sm">{featuredPost.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-center">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            <span>Stay Ahead of</span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Enterprise AI
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Get the latest insights on secure AI deployment, industry trends, and best practices delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-purple-200 text-sm mt-6">
            No spam, unsubscribe anytime. Privacy-first, just like our AI.
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Related Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deeper into enterprise AI with our comprehensive resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Security Whitepaper</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guide to deploying AI in secure and regulated environments.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
                <span>Download</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ROI Calculator</h3>
              <p className="text-gray-600 mb-6">
                Calculate the potential cost savings and efficiency gains of Helics.ai deployment.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 mx-auto">
                <span>Calculate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-6">
                Real-world implementations and success stories from enterprise customers.
              </p>
              <button 
                onClick={onContactClick}
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2 mx-auto"
              >
                <span>View Cases</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-black">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Your AI Strategy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss how Helics.ai can address your specific enterprise AI challenges and requirements.
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

export default BlogPage;