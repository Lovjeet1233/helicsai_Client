import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  Target,
  CheckCircle,
  Sparkles,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Content', 
      value: '1,247', 
      change: '+12%', 
      icon: FileText, 
      color: 'purple',
      trend: 'up'
    },
    { 
      title: 'Engagement Rate', 
      value: '8.5%', 
      change: '+2.3%', 
      icon: TrendingUp, 
      color: 'green',
      trend: 'up'
    },
    { 
      title: 'Time Saved', 
      value: '156h', 
      change: '+24h', 
      icon: Clock, 
      color: 'blue',
      trend: 'up'
    },
    { 
      title: 'Active Campaigns', 
      value: '12', 
      change: '-2', 
      icon: Target, 
      color: 'orange',
      trend: 'down'
    }
  ];

  const recentActivity = [
    { 
      action: 'LinkedIn post published',
      time: '2 hours ago',
      status: 'success',
      icon: CheckCircle
    },
    { 
      action: 'Instagram story scheduled',
      time: '4 hours ago',
      status: 'pending',
      icon: Clock
    },
    { 
      action: 'AI content generated',
      time: '6 hours ago',
      status: 'info',
      icon: Sparkles
    }
  ];

  const platformPerformance = [
    { platform: 'LinkedIn', engagement: 12.3, icon: Linkedin, color: 'blue-600' },
    { platform: 'Twitter', engagement: 8.7, icon: Twitter, color: 'blue-400' },
    { platform: 'Instagram', engagement: 15.2, icon: Instagram, color: 'pink-600' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your campaigns.</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
          Generate Content
        </button>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`bg-${stat.color}-100 p-3 rounded-xl`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-100' :
                  activity.status === 'pending' ? 'bg-yellow-100' :
                  'bg-purple-100'
                }`}>
                  <activity.icon className={`w-4 h-4 ${
                    activity.status === 'success' ? 'text-green-600' :
                    activity.status === 'pending' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Platform Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Platform Performance</h3>
          <div className="space-y-4">
            {platformPerformance.map((platform, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <platform.icon className={`w-5 h-5 text-${platform.color}`} />
                  <span className="text-sm font-medium text-gray-900">{platform.platform}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{platform.engagement}%</p>
                  <p className="text-xs text-gray-500">engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Generate Content</p>
              <p className="text-sm text-gray-500">Create AI-powered posts</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">New Campaign</p>
              <p className="text-sm text-gray-500">Start a marketing campaign</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-500">Check performance metrics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;