import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Settings, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  Clock,
  Edit,
  Trash2,
  MoreVertical,
  Shield,
  Crown,
  User
} from 'lucide-react';

const Team = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const teamMembers = [
    {
      name: 'Dhruv ',
      role: 'Marketing Director',
      email: 'dhruv@company.com',
      avatar: 'DS',
      status: 'online',
      contentCreated: 45,
      approvals: 23,
      lastActive: 'Now',
      permissions: 'admin',
      joinDate: '2024-01-15'
    },
    {
      name: 'Amar choudhary',
      role: 'Content Creator',
      email: 'amar@company.com',
      avatar: 'AS',
      status: 'away',
      contentCreated: 38,
      approvals: 15,
      lastActive: '1h ago',
      permissions: 'editor',
      joinDate: '2024-02-20'
    },
    {
      name: 'Lovjeet singh',
      role: 'Social Media Manager',
      email: 'lovjeet@company.com',
      avatar: 'LK',
      status: 'online',
      contentCreated: 52,
      approvals: 19,
      lastActive: 'Now',
      permissions: 'editor',
      joinDate: '2024-01-28'
    }
  ];
  
  const recentActivity = [
    { user: 'Dhruv Sharma', action: 'approved', item: 'LinkedIn post about AI features', time: '5 min ago', type: 'approval' },
    { user: 'Amar Singh', action: 'created', item: 'Instagram story template', time: '1 hour ago', type: 'creation' },
    { user: 'Lovjeet Kaur', action: 'scheduled', item: 'Twitter campaign for next week', time: '2 hours ago', type: 'scheduling' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getPermissionIcon = (permission) => {
    switch (permission) {
      case 'admin': return <Crown className="w-4 h-4 text-purple-600" />;
      case 'editor': return <Shield className="w-4 h-4 text-blue-600" />;
      case 'contributor': return <Edit className="w-4 h-4 text-green-600" />;
      case 'viewer': return <User className="w-4 h-4 text-gray-600" />;
      default: return <User className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPermissionColor = (permission) => {
    switch (permission) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'editor': return 'bg-blue-100 text-blue-800';
      case 'contributor': return 'bg-green-100 text-green-800';
      case 'viewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'approval': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'creation': return <Edit className="w-4 h-4 text-blue-600" />;
      case 'scheduling': return <Calendar className="w-4 h-4 text-purple-600" />;
      case 'update': return <Settings className="w-4 h-4 text-orange-600" />;
      case 'analysis': return <CheckCircle className="w-4 h-4 text-indigo-600" />;
      case 'publishing': return <CheckCircle className="w-4 h-4 text-pink-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Team Collaboration</h1>
          <p className="text-gray-600 mt-1">Manage your team and track collaboration across all content</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Team Settings</span>
          </button>
          <button 
            onClick={() => setShowInviteModal(true)}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium flex items-center space-x-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Invite Member</span>
          </button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.reduce((sum, member) => sum + member.contentCreated, 0)}</p>
              <p className="text-sm text-gray-600">Content Created</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.reduce((sum, member) => sum + member.approvals, 0)}</p>
              <p className="text-sm text-gray-600">Approvals Given</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.filter(member => member.status === 'online').length}</p>
              <p className="text-sm text-gray-600">Online Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getPermissionColor(member.permissions)}`}>
                  {getPermissionIcon(member.permissions)}
                  <span className="capitalize">{member.permissions}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{member.email}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Content Created</p>
                  <p className="font-medium text-gray-900">{member.contentCreated}</p>
                </div>
                <div>
                  <p className="text-gray-600">Approvals</p>
                  <p className="font-medium text-gray-900">{member.approvals}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last Active</span>
                <span className="font-medium text-gray-900">{member.lastActive}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Joined</span>
                <span className="font-medium text-gray-900">{new Date(member.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center space-x-2">
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                View Profile
              </button>
              <button className="flex-1 bg-purple-100 text-purple-700 py-2 px-3 rounded-lg hover:bg-purple-200 transition-colors duration-200 text-sm font-medium">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Recent Team Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>
                  {' '}
                  <span className="text-gray-600">{activity.action}</span>
                  {' '}
                  <span className="font-medium">{activity.item}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions & Roles */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Permissions & Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Crown className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium text-gray-900">Admin</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Full access to all features and settings</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Manage team members</li>
              <li>• Access all content</li>
              <li>• Billing & settings</li>
              <li>• Analytics & reports</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Shield className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-gray-900">Editor</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Create, edit, and approve content</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Create content</li>
              <li>• Edit all content</li>
              <li>• Approve submissions</li>
              <li>• Access analytics</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Edit className="w-5 h-5 text-green-600" />
              <h4 className="font-medium text-gray-900">Contributor</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">Create and edit own content</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Create content</li>
              <li>• Edit own content</li>
              <li>• Submit for approval</li>
              <li>• Basic analytics</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <User className="w-5 h-5 text-gray-600" />
              <h4 className="font-medium text-gray-900">Viewer</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">View content and basic analytics</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• View content</li>
              <li>• Comment on content</li>
              <li>• Basic analytics</li>
              <li>• Export reports</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Invite Team Member</h3>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="colleague@company.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="viewer">Viewer</option>
                  <option value="contributor">Contributor</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Personal Message (Optional)</label>
                <textarea
                  placeholder="Welcome to our team! Looking forward to collaborating..."
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Team;