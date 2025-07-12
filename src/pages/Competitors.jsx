import React from 'react';
import { Target, TrendingUp, Users, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

const Competitors = () => {
  const competitorData = [
    { 
      name: 'Canva', 
      strength: 85, 
      weakness: 'Limited AI capabilities',
      traffic: '500M',
      opportunity: 'Advanced AI capabilities',
      marketShare: 35,
      category: 'Design Tools'
    },
    { 
      name: 'Adobe Creative', 
      strength: 92, 
      weakness: 'Complex interface',
      traffic: '300M',
      opportunity: 'Simplified user experience',
      marketShare: 28,
      category: 'Creative Suite'
    },
    { 
      name: 'Figma', 
      strength: 78, 
      weakness: 'Design-focused only',
      traffic: '100M',
      opportunity: 'Full marketing suite integration',
      marketShare: 15,
      category: 'Design Tools'
    },
    { 
      name: 'Hootsuite', 
      strength: 72, 
      weakness: 'Limited content creation',
      traffic: '50M',
      opportunity: 'AI-powered content generation',
      marketShare: 12,
      category: 'Social Media'
    },
    { 
      name: 'Buffer', 
      strength: 68, 
      weakness: 'Basic analytics',
      traffic: '30M',
      opportunity: 'Advanced AI insights',
      marketShare: 8,
      category: 'Social Media'
    }
  ];

  const marketInsights = [
    { metric: 'Market Size', value: '$8.2B', trend: 'up', description: 'Growing at 15% annually' },
    { metric: 'AI Adoption', value: '34%', trend: 'up', description: 'Companies using AI for marketing' },
    { metric: 'Content Volume', value: '2.5M', trend: 'up', description: 'Posts created daily' },
    { metric: 'Time Saved', value: '40%', trend: 'up', description: 'Average productivity gain' }
  ];

  const advantages = [
    'Advanced AI brand understanding',
    'Multi-platform content generation',
    'Real-time strategy optimization',
    'Team collaboration features',
    'Automated competitive analysis',
    'Performance prediction accuracy'
  ];

  const marketGaps = [
    'AI-powered brand consistency',
    'Automated competitive monitoring',
    'Integrated marketing calendar',
    'Cross-platform optimization',
    'Real-time performance insights',
    'Voice-based content generation'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Competitive Analysis</h1>
          <p className="text-gray-600 mt-1">AI-powered insights into your competitive landscape</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            Export Report
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
            Refresh Analysis
          </button>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketInsights.map((insight, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">{insight.metric}</h3>
              <div className={`p-1 rounded-full ${
                insight.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <TrendingUp className={`w-3 h-3 ${
                  insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</p>
            <p className="text-xs text-gray-500">{insight.description}</p>
          </div>
        ))}
      </div>

      {/* Competitor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {competitorData.map((competitor, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{competitor.name}</h3>
                <p className="text-sm text-gray-500">{competitor.category}</p>
              </div>
              <div className="text-right">
                <div className="bg-gray-100 px-3 py-1 rounded-full mb-1">
                  <span className="text-sm font-medium text-gray-700">{competitor.traffic}</span>
                </div>
                <p className="text-xs text-gray-500">Monthly visits</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Market Strength */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Market Strength</span>
                  <span className="text-sm font-bold text-gray-900">{competitor.strength}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" 
                    style={{ width: `${competitor.strength}%` }}
                  ></div>
                </div>
              </div>

              {/* Market Share */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Market Share</span>
                  <span className="text-sm font-bold text-gray-900">{competitor.marketShare}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" 
                    style={{ width: `${competitor.marketShare}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Key Weakness */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <p className="text-sm font-medium text-gray-700">Key Weakness</p>
                </div>
                <p className="text-sm text-gray-600">{competitor.weakness}</p>
              </div>
              
              {/* Opportunity */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-green-500" />
                  <p className="text-sm font-medium text-gray-700">Our Opportunity</p>
                </div>
                <p className="text-sm text-gray-600">{competitor.opportunity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Competitive Positioning */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Market Position Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Advantages */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">Our Competitive Advantages</h4>
            </div>
            <ul className="space-y-3">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Market Gaps */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900">Market Gaps We Address</h4>
            </div>
            <ul className="space-y-3">
              {marketGaps.map((gap, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Competitive Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pricing Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Pricing Landscape</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Canva Pro</span>
              <span className="text-gray-600">$14.99/month</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Adobe Creative</span>
              <span className="text-gray-600">$52.99/month</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Figma Pro</span>
              <span className="text-gray-600">$12/month</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="font-medium text-purple-900">Helics.ai Pro</span>
              <span className="text-purple-600 font-semibold">$29/month</span>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Feature Comparison</h3>
          <div className="space-y-3">
            {[
              { feature: 'AI Content Generation', us: true, canva: false, adobe: false, figma: false },
              { feature: 'Brand DNA Analysis', us: true, canva: false, adobe: false, figma: false },
              { feature: 'Multi-platform Publishing', us: true, canva: true, adobe: false, figma: false },
              { feature: 'Team Collaboration', us: true, canva: true, adobe: true, figma: true },
              { feature: 'Advanced Analytics', us: true, canva: false, adobe: false, figma: false },
              { feature: 'Custom Templates', us: true, canva: true, adobe: true, figma: true }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-5 gap-2 items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-sm font-medium text-gray-900 col-span-1">{item.feature}</span>
                <div className="flex justify-center">
                  {item.us ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.canva ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.adobe ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.figma ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2 mt-4 text-xs text-gray-500">
            <span></span>
            <span className="text-center font-medium">Helics.ai</span>
            <span className="text-center font-medium">Canva</span>
            <span className="text-center font-medium">Adobe</span>
            <span className="text-center font-medium">Figma</span>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Strategic Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-3">📈 Growth Opportunities</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Target Canva users seeking AI capabilities</li>
              <li>• Position as Adobe alternative for SMBs</li>
              <li>• Expand into enterprise market</li>
              <li>• Develop mobile app to compete with Canva</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-green-700 mb-3">🎯 Competitive Strategies</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Emphasize AI-first approach</li>
              <li>• Highlight time-saving benefits</li>
              <li>• Showcase brand consistency features</li>
              <li>• Demonstrate ROI through analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitors;