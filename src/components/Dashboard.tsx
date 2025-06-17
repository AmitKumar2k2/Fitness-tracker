import { Activity, Target, Flame, Droplets, Clock, TrendingUp, Award, Calendar, Utensils } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      label: 'Steps Today', 
      value: '8,467', 
      target: '10,000', 
      percentage: 85, 
      icon: Activity, 
      color: 'from-blue-500 to-blue-600',
      trend: '+12%'
    },
    { 
      label: 'Calories Burned', 
      value: '2,340', 
      target: '2,500', 
      percentage: 94, 
      icon: Flame, 
      color: 'from-red-500 to-red-600',
      trend: '+8%'
    },
    { 
      label: 'Water Intake', 
      value: '6', 
      target: '8 glasses', 
      percentage: 75, 
      icon: Droplets, 
      color: 'from-cyan-500 to-cyan-600',
      trend: '+2%'
    },
    { 
      label: 'Active Time', 
      value: '2h 45m', 
      target: '3h', 
      percentage: 92, 
      icon: Clock, 
      color: 'from-purple-500 to-purple-600',
      trend: '+15%'
    },
  ];

  const recentActivities = [
    { type: 'Running', duration: '45 min', calories: 420, time: '2 hours ago' },
    { type: 'Strength Training', duration: '60 min', calories: 280, time: '1 day ago' },
    { type: 'Yoga', duration: '30 min', calories: 150, time: '2 days ago' },
    { type: 'Cycling', duration: '90 min', calories: 580, time: '3 days ago' },
  ];

  const achievements = [
    { title: 'Step Master', description: '10,000 steps for 7 days straight', earned: true },
    { title: 'Calorie Crusher', description: 'Burned 3,000+ calories in a day', earned: true },
    { title: 'Consistency King', description: '30 days of activity', earned: false },
    { title: 'Hydration Hero', description: 'Met water goal for 14 days', earned: false },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Alex!</h2>
            <p className="text-blue-100 text-lg">You're crushing your fitness goals today 🔥</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">of {stat.target}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activities</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-500">{activity.duration} • {activity.calories} cal</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
            <Award className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                achievement.earned 
                  ? 'border-yellow-200 bg-yellow-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned 
                      ? 'bg-yellow-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      achievement.earned ? 'text-yellow-800' : 'text-gray-700'
                    }`}>
                      {achievement.title}
                    </p>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-yellow-600' : 'text-gray-500'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <Activity className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-blue-700">Log Workout</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <Utensils className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-green-700">Add Meal</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <Target className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-purple-700">Set Goal</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
            <Calendar className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-orange-700">Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;