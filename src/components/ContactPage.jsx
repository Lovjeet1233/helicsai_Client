import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building, Users, Shield, Zap } from 'lucide-react';

// Color scheme
const colors = {
  charcoal: '#42474b',
  slate: '#686c6f', 
  light: '#8e9193',
  silver: '#b3b5b7',
  offWhite: '#d9dadb'
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    useCase: '',
    message: '',
    deploymentType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '134534ac-bcd0-4987-b2d3-4f1b7cd22284');
      
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      formDataToSend.append('subject', 'New Enterprise AI Infrastructure Inquiry');
      formDataToSend.append('from_name', 'Helics.ai Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            jobTitle: '',
            phone: '',
            useCase: '',
            message: '',
            deploymentType: ''
          });
          setIsSubmitted(false);
          setIsSubmitting(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

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
              <span className="text-white">Contact</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: colors.silver }}>
              Ready to deploy enterprise-grade AI infrastructure? Let's discuss your requirements and design the perfect solution for your organization.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: colors.slate + '20', border: `1px solid ${colors.light}` }}>
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4 text-white">Get Started Today</h2>
                      <p style={{ color: colors.silver }}>
                        Fill out the form below and our enterprise AI experts will contact you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            style={{ backgroundColor: colors.charcoal + '80' }}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            style={{ backgroundColor: colors.charcoal + '80' }}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          style={{ backgroundColor: colors.charcoal + '80' }}
                          placeholder="john.doe@company.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            style={{ backgroundColor: colors.charcoal + '80' }}
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                            style={{ backgroundColor: colors.charcoal + '80' }}
                            placeholder="CTO, CISO, etc."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          style={{ backgroundColor: colors.charcoal + '80' }}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Deployment Type *
                        </label>
                        <select
                          name="deploymentType"
                          value={formData.deploymentType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-0 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          style={{ backgroundColor: colors.charcoal + '80' }}
                        >
                          <option value="">Select deployment type</option>
                          <option value="on-premise">On-Premise</option>
                          <option value="cloud">Cloud</option>
                          <option value="hybrid">Hybrid</option>
                          <option value="edge">Edge</option>
                          <option value="air-gapped">Air-Gapped</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Primary Use Case *
                        </label>
                        <select
                          name="useCase"
                          value={formData.useCase}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-0 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          style={{ backgroundColor: colors.charcoal + '80' }}
                        >
                          <option value="">Select your primary use case</option>
                          <option value="healthcare">Healthcare & Medical</option>
                          <option value="defense">Defense & Security</option>
                          <option value="finance">Financial Services</option>
                          <option value="government">Government & Public Sector</option>
                          <option value="energy">Energy & Utilities</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="legal">Legal & Compliance</option>
                          <option value="research">Research & Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border-0 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                          style={{ backgroundColor: colors.charcoal + '80' }}
                          placeholder="Tell us about your AI infrastructure requirements, compliance needs, data sensitivity, and any specific challenges you're facing..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-sm" style={{ color: colors.silver }}>
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>{' '}
                        and{' '}
                        <a href="#" className="text-purple-400 hover:underline">Terms of Use</a>.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="mb-4" style={{ color: colors.silver }}>
                      Your message has been received. Our enterprise AI team will contact you within 24 hours to discuss your requirements.
                    </p>
                    <p className="text-sm" style={{ color: colors.silver }}>
                      Check your email for a confirmation and next steps.
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="rounded-2xl p-8 shadow-2xl" style={{ background: `linear-gradient(135deg, ${colors.slate}40, ${colors.light}20)`, border: `1px solid ${colors.light}` }}>
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Email</h4>
                        <p style={{ color: colors.silver }}>team@helicsai.co.in</p>
                        <p className="text-sm" style={{ color: colors.silver }}>For general inquiries and support</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Phone</h4>
                        <p style={{ color: colors.silver }}>+91 9911062767</p>
                        <p className="text-sm" style={{ color: colors.silver }}>Enterprise sales and technical support</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Headquarters</h4>
                        <p style={{ color: colors.silver }}>
                        UAE
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Business Hours</h4>
                        <p style={{ color: colors.silver }}>
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Emergency support: 24/7 for enterprise customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: colors.slate + '20', border: `1px solid ${colors.light}` }}>
                  <h3 className="text-xl font-bold mb-6 text-white">What to Expect</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span style={{ color: colors.silver }}>Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span style={{ color: colors.silver }}>Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span style={{ color: colors.silver }}>Custom solution proposal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span style={{ color: colors.silver }}>Technical architecture review</span>
                    </div>
                  </div>
                </div>

                {/* Enterprise Benefits */}
                <div className="rounded-2xl p-8 text-white shadow-2xl" style={{ background: `linear-gradient(135deg, ${colors.slate}, ${colors.charcoal})` }}>
                  <h3 className="text-xl font-bold mb-6">Enterprise Benefits</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-1">Enterprise Support</h4>
                      <p className="text-sm" style={{ color: colors.offWhite }}>Dedicated account management</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-1">Expert Team</h4>
                      <p className="text-sm" style={{ color: colors.offWhite }}>AI & security specialists</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-1">Security First</h4>
                      <p className="text-sm" style={{ color: colors.offWhite }}>SOC 2 Type II compliant</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-1">Rapid Deployment</h4>
                      <p className="text-sm" style={{ color: colors.offWhite }}>Weeks, not months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;