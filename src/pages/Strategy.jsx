import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  Users, 
  BarChart3,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  PieChart,
  Zap,
  RefreshCw,
  Download
} from 'lucide-react';
import { callGeminiAPI } from '../services/geminiService';

const Strategy = () => {
  const [strategyData, setStrategyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const generateStrategy = async () => {
    setLoading(true);
    
    const detailedPrompt = `
You are a senior marketing strategist creating a comprehensive AI-powered marketing strategy for Helics.ai (an AI marketing platform). Generate a detailed strategy document.

CONTEXT ABOUT HELICS.AI:
- AI-powered marketing platform 
- Offers brand DNA analysis, content generation, competitive analysis, team collaboration
- Target: Marketing teams, agencies, content creators, SMBs to enterprise
- Positioning: Premium AI-first solution in content marketing space
- Competitors: Canva, Adobe Creative, Figma, Hootsuite, Buffer
- Key differentiators: Advanced AI capabilities, brand consistency, multi-platform optimization

GENERATE A COMPREHENSIVE MARKETING STRATEGY INCLUDING:

1. WEEKLY STRATEGY OVERVIEW:
   - Current week focus (e.g., "Product Launch Campaign", "Brand Awareness Drive")
   - Target platforms with specific post counts and engagement rates
   - 3-4 SMART goals with progress percentages and status (on-track/ahead/behind)

2. PLATFORM PERFORMANCE DATA:
   - LinkedIn: posts per week, engagement rate
   - Twitter: posts per week, engagement rate  
   - Instagram: posts per week, engagement rate
   - Email: frequency, engagement rate

3. CONTENT STRATEGY MIX (must total 100%):
   - Educational Content: percentage, description
   - Product Updates: percentage, description
   - Behind the Scenes: percentage, description
   - User Generated: percentage, description

4. OPTIMAL POSTING SCHEDULE:
   - Platform-specific timing recommendations
   - Frequency suggestions
   - Optimization status (optimal/needs optimization)

5. KEY METRICS WITH TRENDS:
   - Content Reach: value, change percentage, trend (up/down)
   - Engagement Rate: value, change percentage, trend
   - Lead Generation: value, change percentage, trend
   - Conversion Rate: value, change percentage, trend

6. UPCOMING CAMPAIGNS (3 campaigns):
   - Campaign name, start date, duration, budget estimate

7. 30-DAY PERFORMANCE FORECAST:
   - Projected Reach with growth percentage
   - Engagement Rate forecast with growth
   - Expected Leads with growth
   - Conversion Rate with growth

8. ACTION ITEMS:
   - 4 high priority tasks
   - 4 medium priority tasks

9. AI STRATEGY RECOMMENDATIONS:
   - 4 things working well
   - 4 optimization opportunities

Format the response as a valid JSON object with this exact structure:
{
  "weeklyStrategy": {
    "week": "Week of July 9, 2025",
    "focus": "Campaign name",
    "platforms": [
      {"name": "LinkedIn", "icon": "Linkedin", "color": "blue-600", "posts": 7, "engagement": "12.3%"},
      {"name": "Twitter", "icon": "Twitter", "color": "blue-400", "posts": 21, "engagement": "8.7%"},
      {"name": "Instagram", "icon": "Instagram", "color": "pink-600", "posts": 5, "engagement": "15.2%"},
      {"name": "Email", "icon": "Mail", "color": "gray-600", "posts": 2, "engagement": "24.1%"}
    ],
    "goals": [
      {"goal": "Goal description", "progress": 68, "status": "on-track"},
      {"goal": "Goal description", "progress": 45, "status": "behind"},
      {"goal": "Goal description", "progress": 78, "status": "ahead"}
    ]
  },
  "contentMix": [
    {"type": "Educational Content", "percentage": 40, "color": "bg-blue-500", "description": "Industry insights, tips, and tutorials"},
    {"type": "Product Updates", "percentage": 30, "color": "bg-purple-500", "description": "Features, improvements, and announcements"},
    {"type": "Behind the Scenes", "percentage": 20, "color": "bg-green-500", "description": "Company culture and team highlights"},
    {"type": "User Generated", "percentage": 10, "color": "bg-orange-500", "description": "Customer success stories and testimonials"}
  ],
  "postingSchedule": [
    {"platform": "LinkedIn", "frequency": "Daily at 9:00 AM", "optimal": true},
    {"platform": "Twitter", "frequency": "3x daily (9 AM, 1 PM, 5 PM)", "optimal": true},
    {"platform": "Instagram", "frequency": "Daily at 12:00 PM", "optimal": true},
    {"platform": "Email", "frequency": "Weekly on Wednesdays", "optimal": false}
  ],
  "keyMetrics": [
    {"metric": "Content Reach", "value": "2.4M", "change": "+18%", "trend": "up"},
    {"metric": "Engagement Rate", "value": "11.2%", "change": "+2.8%", "trend": "up"},
    {"metric": "Lead Generation", "value": "1,247", "change": "+35%", "trend": "up"},
    {"metric": "Conversion Rate", "value": "3.7%", "change": "-0.3%", "trend": "down"}
  ],
  "upcomingCampaigns": [
    {"name": "AI Innovation Series", "start": "2025-07-15", "duration": "2 weeks", "budget": "$15,000"},
    {"name": "Customer Success Stories", "start": "2025-07-22", "duration": "1 week", "budget": "$8,000"},
    {"name": "Webinar Promotion", "start": "2025-07-29", "duration": "3 weeks", "budget": "$12,000"}
  ],
  "forecast": {
    "projectedReach": {"value": "3.2M", "growth": "+22%"},
    "engagementRate": {"value": "12.8%", "growth": "+15%"},
    "expectedLeads": {"value": "1,850", "growth": "+28%"},
    "conversionRate": {"value": "4.2%", "growth": "+8%"}
  },
  "actionItems": {
    "highPriority": [
      "Launch AI Innovation Series campaign",
      "Optimize Instagram posting schedule", 
      "Create LinkedIn thought leadership content",
      "Set up email automation sequence"
    ],
    "mediumPriority": [
      "Analyze competitor content strategy",
      "Update brand guidelines document",
      "Plan webinar promotion campaign", 
      "Review and optimize ad spend"
    ]
  },
  "recommendations": {
    "workingWell": [
      "LinkedIn engagement is 35% above industry average",
      "Educational content driving highest CTR",
      "Morning posts performing 2x better", 
      "Video content getting 4x more shares"
    ],
    "optimizationOpportunities": [
      "Increase Instagram Stories frequency",
      "A/B test email send times",
      "Expand user-generated content",
      "Implement cross-platform campaigns"
    ]
  }
}

Ensure all metrics are realistic and data-driven. Make recommendations specific and actionable for an AI marketing platform.
`;
    
    try {
      const response = await callGeminiAPI(detailedPrompt);
      // Clean the response to ensure it's valid JSON
      const cleanedResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsedStrategy = JSON.parse(cleanedResponse);
      setStrategyData(parsedStrategy);
    } catch (error) {
      console.error('Error generating strategy:', error);
      // Fallback strategy data
      setStrategyData({
        weeklyStrategy: {
          week: 'Week of July 9, 2025',
          focus: 'AI Innovation Campaign',
          platforms: [
            { name: 'LinkedIn', icon: 'Linkedin', color: 'blue-600', posts: 7, engagement: '12.3%' },
            { name: 'Twitter', icon: 'Twitter', color: 'blue-400', posts: 21, engagement: '8.7%' },
            { name: 'Instagram', icon: 'Instagram', color: 'pink-600', posts: 5, engagement: '15.2%' },
            { name: 'Email', icon: 'Mail', color: 'gray-600', posts: 2, engagement: '24.1%' }
          ],
          goals: [
            { goal: 'Increase brand awareness by 25%', progress: 68, status: 'on-track' },
            { goal: 'Generate 500 qualified leads', progress: 45, status: 'behind' },
            { goal: 'Boost engagement by 40%', progress: 78, status: 'ahead' }
          ]
        },
        contentMix: [
          { type: 'Educational Content', percentage: 40, color: 'bg-blue-500', description: 'Industry insights, tips, and tutorials' },
          { type: 'Product Updates', percentage: 30, color: 'bg-purple-500', description: 'Features, improvements, and announcements' },
          { type: 'Behind the Scenes', percentage: 20, color: 'bg-green-500', description: 'Company culture and team highlights' },
          { type: 'User Generated', percentage: 10, color: 'bg-orange-500', description: 'Customer success stories and testimonials' }
        ],
        postingSchedule: [
          { platform: 'LinkedIn', frequency: 'Daily at 9:00 AM', optimal: true },
          { platform: 'Twitter', frequency: '3x daily (9 AM, 1 PM, 5 PM)', optimal: true },
          { platform: 'Instagram', frequency: 'Daily at 12:00 PM', optimal: true },
          { platform: 'Email', frequency: 'Weekly on Wednesdays', optimal: false }
        ],
        keyMetrics: [
          { metric: 'Content Reach', value: '2.4M', change: '+18%', trend: 'up' },
          { metric: 'Engagement Rate', value: '11.2%', change: '+2.8%', trend: 'up' },
          { metric: 'Lead Generation', value: '1,247', change: '+35%', trend: 'up' },
          { metric: 'Conversion Rate', value: '3.7%', change: '-0.3%', trend: 'down' }
        ],
        upcomingCampaigns: [
          { name: 'AI Innovation Series', start: '2025-07-15', duration: '2 weeks', budget: '$15,000' },
          { name: 'Customer Success Stories', start: '2025-07-22', duration: '1 week', budget: '$8,000' },
          { name: 'Webinar Promotion', start: '2025-07-29', duration: '3 weeks', budget: '$12,000' }
        ],
        forecast: {
          projectedReach: { value: '3.2M', growth: '+22%' },
          engagementRate: { value: '12.8%', growth: '+15%' },
          expectedLeads: { value: '1,850', growth: '+28%' },
          conversionRate: { value: '4.2%', growth: '+8%' }
        },
        actionItems: {
          highPriority: [
            'Launch AI Innovation Series campaign',
            'Optimize Instagram posting schedule',
            'Create LinkedIn thought leadership content',
            'Set up email automation sequence'
          ],
          mediumPriority: [
            'Analyze competitor content strategy',
            'Update brand guidelines document',
            'Plan webinar promotion campaign',
            'Review and optimize ad spend'
          ]
        },
        recommendations: {
          workingWell: [
            'LinkedIn engagement is 35% above industry average',
            'Educational content driving highest CTR',
            'Morning posts performing 2x better',
            'Video content getting 4x more shares'
          ],
          optimizationOpportunities: [
            'Increase Instagram Stories frequency',
            'A/B test email send times',
            'Expand user-generated content',
            'Implement cross-platform campaigns'
          ]
        }
      });
    }
    
    setLoading(false);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    generateStrategy();
  }, []);

  const refreshStrategy = () => {
    generateStrategy();
  };

  const getIconComponent = (iconName) => {
    const icons = {
      Linkedin,
      Twitter,
      Instagram,
      Mail
    };
    return icons[iconName] || Mail;
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-900">AI Generating Your Marketing Strategy...</p>
            <p className="text-gray-600">Analyzing market trends and competitive landscape</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Marketing Strategy</h1>
          <p className="text-gray-600 mt-1">AI-optimized strategy for maximum impact and ROI</p>
          <p className="text-sm text-gray-500 mt-1">Last updated: {lastUpdated.toLocaleString()}</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={refreshStrategy}
            disabled={loading}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Regenerate Strategy</span>
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Strategy</span>
          </button>
          <button 
            onClick={refreshStrategy}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium"
          >
            Optimize Strategy
          </button>
        </div>
      </div>

      {/* Current Strategy Overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{strategyData?.weeklyStrategy?.week}</h3>
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-purple-700">{strategyData?.weeklyStrategy?.focus}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Target Platforms */}
          <div>
            <h4 className="font-medium mb-4 text-gray-900 flex items-center">
              <Target className="w-4 h-4 mr-2 text-purple-600" />
              Target Platforms
            </h4>
            <div className="space-y-3">
              {strategyData?.weeklyStrategy?.platforms?.map((platform, index) => {
                const IconComponent = getIconComponent(platform.icon);
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`w-5 h-5 text-${platform.color}`} />
                      <span className="text-sm font-medium text-gray-900">{platform.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{platform.posts} posts</p>
                      <p className="text-xs text-gray-500">{platform.engagement}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Goals Progress */}
          <div>
            <h4 className="font-medium mb-4 text-gray-900 flex items-center">
              <BarChart3 className="w-4 h-4 mr-2 text-green-600" />
              Goals Progress
            </h4>
            <div className="space-y-4">
              {strategyData?.weeklyStrategy?.goals?.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 truncate">{goal.goal}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      goal.status === 'on-track' ? 'bg-blue-100 text-blue-700' :
                      goal.status === 'ahead' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        goal.status === 'on-track' ? 'bg-blue-500' :
                        goal.status === 'ahead' ? 'bg-green-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Metrics */}
          <div>
            <h4 className="font-medium mb-4 text-gray-900 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
              Key Metrics
            </h4>
            <div className="space-y-3">
              {strategyData?.keyMetrics?.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{metric.metric}</p>
                    <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Mix */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-purple-600" />
            Content Strategy Mix
          </h3>
          <div className="space-y-4">
            {strategyData?.contentMix?.map((content, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{content.type}</h4>
                  <span className="text-sm font-bold text-gray-900">{content.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${content.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${content.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Posting Schedule */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Optimal Posting Schedule
          </h3>
          <div className="space-y-4">
            {strategyData?.postingSchedule?.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    schedule.optimal ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-900">{schedule.platform}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{schedule.frequency}</p>
                  <p className={`text-xs ${
                    schedule.optimal ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {schedule.optimal ? 'Optimal' : 'Needs optimization'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Campaigns */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-green-600" />
          Upcoming Campaigns
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strategyData?.upcomingCampaigns?.map((campaign, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Start Date:</span>
                  <span className="font-medium text-gray-900">{campaign.start}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{campaign.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium text-green-600">{campaign.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy Recommendations */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Strategy Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-green-700 mb-3">✓ Working Well</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {strategyData?.recommendations?.workingWell?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-3">⚠ Optimization Opportunities</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {strategyData?.recommendations?.optimizationOpportunities?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Forecast */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">30-Day Performance Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">{strategyData?.forecast?.projectedReach?.value}</div>
            <div className="text-sm text-gray-600">Projected Reach</div>
            <div className="text-xs text-green-600 mt-1">{strategyData?.forecast?.projectedReach?.growth} vs last month</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">{strategyData?.forecast?.engagementRate?.value}</div>
            <div className="text-sm text-gray-600">Engagement Rate</div>
            <div className="text-xs text-green-600 mt-1">{strategyData?.forecast?.engagementRate?.growth} vs last month</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">{strategyData?.forecast?.expectedLeads?.value}</div>
            <div className="text-sm text-gray-600">Expected Leads</div>
            <div className="text-xs text-green-600 mt-1">{strategyData?.forecast?.expectedLeads?.growth} vs last month</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">{strategyData?.forecast?.conversionRate?.value}</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
            <div className="text-xs text-green-600 mt-1">{strategyData?.forecast?.conversionRate?.growth} vs last month</div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">This Week's Action Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">High Priority</h4>
            {strategyData?.actionItems?.highPriority?.map((task, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{task}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Medium Priority</h4>
            {strategyData?.actionItems?.mediumPriority?.map((task, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;