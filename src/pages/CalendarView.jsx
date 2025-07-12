import React, { useState } from 'react';
import { 
  Plus, 
  Filter, 
  Eye, 
  Edit, 
  Copy, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 9)); // July 9, 2025
  const [selectedFilter, setSelectedFilter] = useState('all');

  const calendarEvents = [
    { 
      date: '2025-07-09', 
      type: 'LinkedIn Post', 
      title: 'Product Feature Highlight',
      status: 'scheduled',
      time: '9:00 AM'
    },
    { 
      date: '2025-07-10', 
      type: 'Instagram Story', 
      title: 'Behind the Scenes',
      status: 'draft',
      time: '12:00 PM'
    },
    { 
      date: '2025-07-11', 
      type: 'Twitter Thread', 
      title: 'Industry Insights',
      status: 'published',
      time: '10:30 AM'
    },
    { 
      date: '2025-07-12', 
      type: 'Email Campaign', 
      title: 'Weekly Newsletter',
      status: 'scheduled',
      time: '8:00 AM'
    },
    { 
      date: '2025-07-14', 
      type: 'Facebook Post', 
      title: 'Customer Success Story',
      status: 'draft',
      time: '2:00 PM'
    },
    { 
      date: '2025-07-15', 
      type: 'LinkedIn Article', 
      title: 'Future of AI Marketing',
      status: 'scheduled',
      time: '11:00 AM'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="w-3 h-3" />;
      case 'scheduled':
        return <Clock className="w-3 h-3" />;
      case 'draft':
        return <Edit className="w-3 h-3" />;
      default:
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return calendarEvents.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-poppins">Content Calendar</h1>
          <p className="text-gray-600 mt-1">Plan and schedule your content across all platforms</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="email">Email</option>
          </select>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-medium flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Content</span>
          </button>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Week Days Header */}
        <div className="grid grid-cols-7 gap-0 border-b border-gray-100">
          {weekDays.map((day) => (
            <div key={day} className="bg-gray-50 p-4 text-center font-medium text-sm text-gray-700">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-0">
          {getDaysInMonth(currentDate).map((date, index) => {
            const dayEvents = getEventsForDate(date);
            const isToday = date && date.toDateString() === new Date().toDateString();
            
            return (
              <div 
                key={index} 
                className={`min-h-[120px] p-2 border-r border-b border-gray-100 ${
                  !date ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                } transition-colors duration-200`}
              >
                {date && (
                  <>
                    <div className={`text-sm font-medium mb-2 ${
                      isToday ? 'text-purple-600' : 'text-gray-900'
                    }`}>
                      {date.getDate()}
                      {isToday && (
                        <span className="ml-1 w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
                      )}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`text-xs p-2 rounded-lg border cursor-pointer hover:shadow-sm transition-all duration-200 ${getStatusColor(event.status)}`}
                        >
                          <div className="flex items-center space-x-1 mb-1">
                            {getStatusIcon(event.status)}
                            <span className="font-medium truncate">{event.type}</span>
                          </div>
                          <div className="font-medium truncate">{event.title}</div>
                          <div className="text-xs opacity-75">{event.time}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Content */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">Upcoming Content</h3>
        <div className="space-y-4">
          {calendarEvents
            .filter(event => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${getStatusColor(event.status)}`}>
                    {getStatusIcon(event.status)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-600">{event.type} • {event.date} at {event.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Calendar Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-sm text-gray-600">Scheduled Posts</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Edit className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-600">Draft Posts</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">Published This Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;