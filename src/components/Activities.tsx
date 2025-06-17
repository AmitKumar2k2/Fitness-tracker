import { useState } from 'react';
import { Plus, Calendar, Clock, Flame, MapPin, Play, Pause, Square, Filter } from 'lucide-react';

const Activities = () => {
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [, setActiveWorkout] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const activities = [
    {
      id: 1,
      type: 'Running',
      duration: '45 min',
      calories: 420,
      distance: '5.2 km',
      date: '2024-01-15',
      time: '07:30 AM',
      location: 'Golden Gate Park',
      notes: 'Great morning run, felt energized!'
    },
    {
      id: 2,
      type: 'Strength Training',
      duration: '60 min',
      calories: 280,
      date: '2024-01-14',
      time: '06:00 PM',
      location: 'Home Gym',
      notes: 'Upper body focus, increased weights'
    },
    {
      id: 3,
      type: 'Yoga',
      duration: '30 min',
      calories: 150,
      date: '2024-01-13',
      time: '08:00 AM',
      location: 'Living Room',
      notes: 'Relaxing flow session'
    },
    {
      id: 4,
      type: 'Cycling',
      duration: '90 min',
      calories: 580,
      distance: '25.8 km',
      date: '2024-01-12',
      time: '09:00 AM',
      location: 'Bay Trail',
      notes: 'Long ride along the coast'
    },
  ];

  const workoutTypes = [
    'Running', 'Walking', 'Cycling', 'Swimming', 'Strength Training', 
    'Yoga', 'Pilates', 'HIIT', 'Boxing', 'Dancing', 'Other'
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return interval;
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
    setActiveWorkout(null);
  };

  return (
    <div className="space-y-6">
      {/* Header with Add Activity Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Activities</h1>
          <p className="text-gray-600">Track and monitor your fitness activities</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button
            onClick={() => setShowAddActivity(true)}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Activity
          </button>
        </div>
      </div>

      {/* Quick Start Workout */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Quick Start Workout</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-blue-100 mb-4">Start tracking your workout with our built-in timer</p>
            <div className="text-4xl font-mono font-bold mb-4">
              {formatTime(timer)}
            </div>
            <div className="flex gap-3">
              {!isRunning ? (
                <button
                  onClick={startTimer}
                  className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start
                </button>
              ) : (
                <button
                  onClick={stopTimer}
                  className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </button>
              )}
              <button
                onClick={resetTimer}
                className="flex items-center px-6 py-3 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors duration-200"
              >
                <Square className="w-5 h-5 mr-2" />
                Stop
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {activity.type.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{activity.type}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {activity.date} at {activity.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Flame className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.calories} cal</span>
                    </div>
                    {activity.distance && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.distance}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                  </div>
                  
                  {activity.notes && (
                    <p className="text-sm text-gray-700 bg-gray-100 p-3 rounded-lg">
                      {activity.notes}
                    </p>
                  )}
                </div>
                
                <button className="ml-4 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Activity Modal */}
      {showAddActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Add New Activity</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {workoutTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Calories Burned</label>
                <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes (optional)</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3}></textarea>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddActivity(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Save Activity
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;