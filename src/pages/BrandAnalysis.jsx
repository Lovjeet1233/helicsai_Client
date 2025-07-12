import React from 'react';
import { Palette, Type, MessageSquare, TrendingUp, Upload, RefreshCw } from 'lucide-react';

const BrandAnalysis = () => {

  const brandData = {
    colors: [
      { hex: '#8B5CF6', name: 'Primary Purple' },
      { hex: '#1F2937', name: 'Dark Gray' },
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#F3F4F6', name: 'Light Gray' },
      { hex: '#059669', name: 'Accent Green' }
    ],
    fonts: [
      { name: 'Inter', usage: 'Primary', weight: 'Regular, Medium, Bold' },
      { name: 'Poppins', usage: 'Headings', weight: 'Medium, SemiBold, Bold' }
    ],
    voice: {
      style: 'Modern, Tech-forward',
      messaging: 'Innovation through AI',
      tone: 'Professional yet approachable',
      personality: 'Confident, Innovative, Trustworthy'
    },
    scores: {
      consistency: 94,
      recognition: 87,
      engagement: 91,
      uniqueness: 89
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Brand DNA Analysis</h1>
          <p className="text-gray-600 mt-1">AI-powered analysis of your brand identity and voice</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Re-analyze</span>
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload Assets</span>
          </button>
        </div>
      </div>
      
      {/* Brand Score Overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Brand Score Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(brandData.scores).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeDasharray={`${value}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{value}%</span>
                </div>
              </div>
              <p className="font-medium text-gray-900 capitalize">{key}</p>
              <p className="text-sm text-gray-500">
                {value >= 90 ? 'Excellent' : value >= 80 ? 'Good' : value >= 70 ? 'Fair' : 'Needs Work'}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brand Colors */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Palette className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Brand Colors</h3>
          </div>
          <div className="space-y-4">
            {brandData.colors.map((color, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-lg border border-gray-200 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{color.name}</p>
                  <p className="text-sm text-gray-500 font-mono">{color.hex}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2V5h-2v6z"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Typography */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Type className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Typography</h3>
          </div>
          <div className="space-y-6">
            {brandData.fonts.map((font, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900" style={{ fontFamily: font.name }}>{font.name}</h4>
                  <span className="text-sm text-gray-500">{font.usage}</span>
                </div>
                <p className="text-lg text-gray-700 mb-2" style={{ fontFamily: font.name }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-sm text-gray-500">{font.weight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Brand Voice */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Brand Voice</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(brandData.voice).map(([key, value]) => (
              <div key={key} className="border border-gray-200 rounded-lg p-4">
                <p className="font-medium text-gray-900 capitalize mb-2">{key}</p>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Brand Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Brand Guidelines</h3>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Logo Usage</h4>
              <p className="text-sm text-gray-600">Maintain clear space equal to the height of the logo mark</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Color Combinations</h4>
              <p className="text-sm text-gray-600">Primary purple with white text, dark gray for body text</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Typography Scale</h4>
              <p className="text-sm text-gray-600">H1: 32px, H2: 24px, H3: 20px, Body: 16px</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Voice Guidelines</h4>
              <p className="text-sm text-gray-600">Use active voice, avoid jargon, be conversational yet professional</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">✓ Strengths</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Strong color consistency across platforms</li>
              <li>• Clear typography hierarchy</li>
              <li>• Distinctive brand voice</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">⚠ Opportunities</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Expand secondary color palette</li>
              <li>• Develop icon system</li>
              <li>• Create brand photography style</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAnalysis;