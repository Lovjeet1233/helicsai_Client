import React, { useState } from 'react';
import { 
  Sword, 
  Target, 
  Zap, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Share,
  Heart,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Play,
  Send
} from 'lucide-react';
import { callGeminiAPI } from '../services/geminiService';

const WarMode = () => {
  const [competitorAction, setCompetitorAction] = useState('');
  const [selectedCompetitor, setSelectedCompetitor] = useState('');
  const [actionType, setActionType] = useState('');
  const [battlePlan, setBattlePlan] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recentBattles, setRecentBattles] = useState([
    {
      competitor: 'Adobe',
      action: 'Announced Creative Cloud AI updates',
      response: 'Launched "Beyond Creative Cloud" campaign',
      result: '+34% sign-ups',
      date: '2 days ago',
      status: 'victory'
    },
    {
      competitor: 'Figma',
      action: 'Released collaborative design features',
      response: 'Highlighted superior team workflow tools',
      result: '+28% engagement',
      date: '1 week ago',
      status: 'victory'
    },
    {
      competitor: 'Hootsuite',
      action: 'Reduced pricing by 30%',
      response: 'Emphasized AI value proposition',
      result: '+12% retention',
      date: '2 weeks ago',
      status: 'partial'
    }
  ]);

  const competitors = [
    'Canva', 'Adobe Creative', 'Figma', 'Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Mailchimp'
  ];

  const actionTypes = [
    'Product Launch', 'Pricing Strategy', 'Marketing Campaign', 'Feature Update', 
    'Social Media Push', 'Influencer Partnership', 'Content Strategy', 'Acquisition'
  ];

  const generateBattlePlan = async () => {
    setIsAnalyzing(true);
    
    const detailedPrompt = `
You are a strategic marketing warfare expert analyzing competitor actions. Generate a comprehensive battle plan for Helics.ai (an AI-powered marketing platform) to respond to a competitor action.

COMPETITOR INTELLIGENCE:
- Competitor: ${selectedCompetitor}
- Action Type: ${actionType}
- Detailed Action: ${competitorAction}

CONTEXT ABOUT HELICS.AI:
- AI-powered marketing platform
- Focuses on brand DNA analysis, content generation, competitive analysis
- Target market: Marketing teams, agencies, content creators
- Key differentiators: Advanced AI, brand consistency, multi-platform optimization
- Positioning: Premium AI-first solution vs traditional design tools

GENERATE A DETAILED BATTLE PLAN WITH:

1. THREAT ASSESSMENT:
   - Threat level: Critical/High/Medium/Low
   - Timeline for response: 24-48 hours/1-7 days/1-4 weeks
   - Competitive impact analysis

2. FOUR-PHASE RESPONSE STRATEGY:
   
   Phase 1 - Immediate Response (0-6 hours):
   - 4-5 specific tactical actions
   - Focus on social media, PR, customer communication
   - Urgency level: critical/high/medium/low
   
   Phase 2 - Short-term Counter (6-24 hours):
   - 4-5 strategic marketing moves
   - Content creation, comparison campaigns, influencer outreach
   - Urgency level assessment
   
   Phase 3 - Strategic Response (1-7 days):
   - 4-5 medium-term strategic initiatives
   - Product positioning, feature announcements, partnerships
   - Urgency level assessment
   
   Phase 4 - Long-term Domination (1-4 weeks):
   - 4-5 long-term competitive advantages
   - Market leadership moves, innovation announcements
   - Urgency level assessment

3. EXPECTED METRICS:
   - Projected reach (e.g., "2.5M+")
   - Estimated leads (e.g., "3,500+")
   - Competitive lift percentage (e.g., "+45%")
   - Time to execute (e.g., "48 hours")

4. REQUIRED RESOURCES:
   - Team requirements (marketing, product, design)
   - Budget estimate
   - External partnerships needed
   - Technology requirements

5. SUCCESS INDICATORS:
   - KPIs to track
   - Competitive monitoring metrics
   - Timeline checkpoints

Format the response as a valid JSON object with this exact structure:
{
  "competitor": "${selectedCompetitor}",
  "action": "Description of what they did",
  "threat": "High/Medium/Low",
  "timeline": "48 hours",
  "steps": [
    {
      "step": 1,
      "title": "Immediate Response (0-6 hours)",
      "actions": ["action1", "action2", "action3", "action4"],
      "urgency": "critical"
    },
    {
      "step": 2,
      "title": "Short-term Counter (6-24 hours)",
      "actions": ["action1", "action2", "action3", "action4"],
      "urgency": "high"
    },
    {
      "step": 3,
      "title": "Strategic Response (1-7 days)",
      "actions": ["action1", "action2", "action3", "action4"],
      "urgency": "medium"
    },
    {
      "step": 4,
      "title": "Long-term Domination (1-4 weeks)",
      "actions": ["action1", "action2", "action3", "action4"],
      "urgency": "low"
    }
  ],
  "metrics": {
    "expectedReach": "2.5M+",
    "estimatedLeads": "3,500+",
    "competitiveLift": "+45%",
    "timeToExecute": "48 hours"
  },
  "resources": [
    "Marketing team (4 people)",
    "Product team (2 people)",
    "Design team (2 people)",
    "Budget: $25,000"
  ],
  "successIndicators": [
    "Social media engagement increase",
    "Lead generation improvement",
    "Brand mention sentiment",
    "Competitive search rankings"
  ]
}

Make the response highly specific, actionable, and aggressive in competitive positioning. Focus on leveraging AI capabilities as the key differentiator.
`;
    
    try {
      const response = await callGeminiAPI(detailedPrompt);
      // Clean the response to ensure it's valid JSON
      const cleanedResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsedBattlePlan = JSON.parse(cleanedResponse);
      setBattlePlan(parsedBattlePlan);
    } catch (error) {
      console.error('Error generating battle plan:', error);
      // Fallback battle plan
      setBattlePlan({
        competitor: selectedCompetitor,
        action: `${actionType}: ${competitorAction}`,
        threat: 'High',
        timeline: '48 hours',
        steps: [
          {
            step: 1,
            title: 'Immediate Response (0-6 hours)',
            actions: [
              'Tweet congratulating competitor while highlighting our superior AI capabilities',
              'Create LinkedIn post showcasing our existing advanced features',
              'Send email to existing customers about our competitive advantages',
              'Update website hero section to emphasize AI leadership'
            ],
            urgency: 'critical'
          },
          {
            step: 2,
            title: 'Short-term Counter (6-24 hours)',
            actions: [
              'Launch competitive challenge campaign on social media',
              'Create comparison blog post highlighting our advantages',
              'Reach out to tech journalists with exclusive insights',
              'Partner with industry influencers for testimonials'
            ],
            urgency: 'high'
          },
          {
            step: 3,
            title: 'Strategic Response (1-7 days)',
            actions: [
              'Announce next-generation AI features roadmap',
              'Launch limited-time competitive upgrade offer',
              'Create content series showing advanced capabilities',
              'Submit to industry publications for thought leadership'
            ],
            urgency: 'medium'
          },
          {
            step: 4,
            title: 'Long-term Domination (1-4 weeks)',
            actions: [
              'Release beta of revolutionary AI technology',
              'Host industry webinar on AI marketing future',
              'Partner with major brands for case studies',
              'Apply for industry awards in AI innovation'
            ],
            urgency: 'low'
          }
        ],
        metrics: {
          expectedReach: '2.5M+',
          estimatedLeads: '3,500+',
          competitiveLift: '+45%',
          timeToExecute: '48 hours'
        },
        resources: [
          'Marketing team (4 people)',
          'Product team (2 people)',
          'Design team (2 people)',
          'Budget: $25,000'
        ]
      });
    }
    
    setIsAnalyzing(false);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'victory': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'partial': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'defeat': return <Target className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl">
            <Sword className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 font-poppins">⚔️ WAR MODE ⚔️</h1>
        </div>
        <p className="text-lg text-gray-600">Your competitor made a move? We'll show you how to dominate the battlefield.</p>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 mt-4">
          <p className="text-red-700 font-medium">🔥 AI-Powered Competitive Response System</p>
          <p className="text-red-600 text-sm">Get strategic battle plans in under 60 seconds</p>
        </div>
      </div>

      {/* Intelligence Input */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
          <Target className="w-6 h-6 mr-3 text-red-600" />
          Enemy Intelligence Report
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Competitor</label>
            <select 
              value={selectedCompetitor}
              onChange={(e) => setSelectedCompetitor(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Choose your enemy...</option>
              {competitors.map((comp) => (
                <option key={comp} value={comp.toLowerCase()}>{comp}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Action Type</label>
            <select 
              value={actionType}
              onChange={(e) => setActionType(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">What did they do?</option>
              {actionTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Detailed Intelligence</label>
          <textarea
            value={competitorAction}
            onChange={(e) => setCompetitorAction(e.target.value)}
            placeholder="Describe what your competitor did... Be specific about their strategy, features, pricing, marketing tactics, etc."
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={generateBattlePlan}
          disabled={!selectedCompetitor || !actionType || !competitorAction || isAnalyzing}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-3 font-semibold text-lg"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
              <span>AI Analyzing Enemy Strategy...</span>
            </>
          ) : (
            <>
              <Zap className="w-6 h-6" />
              <span>🚀 GENERATE BATTLE PLAN</span>
            </>
          )}
        </button>
      </div>

      {/* Battle Plan */}
      {battlePlan && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-red-900 flex items-center">
              <Shield className="w-7 h-7 mr-3" />
              🎯 BATTLE PLAN: OPERATION DOMINATION
            </h3>
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                THREAT: {battlePlan.threat?.toUpperCase()}
              </div>
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                EXECUTE IN: {battlePlan.timeline}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">🎪 Enemy Action Analysis</h4>
            <p className="text-gray-700"><strong>{battlePlan.competitor}</strong> {battlePlan.action}</p>
          </div>

          {/* Battle Steps */}
          <div className="space-y-6">
            {battlePlan.steps?.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {phase.step}
                    </span>
                    {phase.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(phase.urgency)}`}>
                    {phase.urgency?.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.actions?.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Metrics & Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Expected Results
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Projected Reach:</span>
                  <span className="font-bold text-green-600">{battlePlan.metrics?.expectedReach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Leads:</span>
                  <span className="font-bold text-green-600">{battlePlan.metrics?.estimatedLeads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Competitive Lift:</span>
                  <span className="font-bold text-green-600">{battlePlan.metrics?.competitiveLift}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time to Execute:</span>
                  <span className="font-bold text-orange-600">{battlePlan.metrics?.timeToExecute}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Required Resources
              </h4>
              <ul className="space-y-2">
                {battlePlan.resources?.map((resource, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-6">
            <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>EXECUTE BATTLE PLAN</span>
            </button>
            <button className="flex-1 bg-white border-2 border-red-500 text-red-600 py-3 px-6 rounded-xl hover:bg-red-50 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>SHARE WITH TEAM</span>
            </button>
          </div>
        </div>
      )}

      {/* Recent Battles */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
          Recent Battle History
        </h3>
        <div className="space-y-4">
          {recentBattles.map((battle, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                {getStatusIcon(battle.status)}
                <div>
                  <p className="font-medium text-gray-900">
                    <span className="text-red-600">{battle.competitor}</span> → {battle.action}
                  </p>
                  <p className="text-sm text-gray-600">Our Response: {battle.response}</p>
                  <p className="text-xs text-gray-500">{battle.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  battle.status === 'victory' ? 'text-green-600' :
                  battle.status === 'partial' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {battle.result}
                </p>
                <p className={`text-xs ${
                  battle.status === 'victory' ? 'text-green-500' :
                  battle.status === 'partial' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {battle.status.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* War Tips */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
          ⚡ Pro War Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">🚀 Speed is Everything</h4>
            <p className="text-sm text-gray-600">Respond within 6 hours to maintain competitive advantage. First mover in response often wins.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">🎯 Focus on Differentiation</h4>
            <p className="text-sm text-gray-600">Don't just copy - show why your approach is superior. Highlight unique AI capabilities.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-purple-700 mb-2">📱 Multi-Channel Attack</h4>
            <p className="text-sm text-gray-600">Use all platforms simultaneously. Social, email, PR, and content marketing for maximum impact.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">📊 Measure Everything</h4>
            <p className="text-sm text-gray-600">Track competitor response metrics. Learn from each battle to improve future strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarMode;