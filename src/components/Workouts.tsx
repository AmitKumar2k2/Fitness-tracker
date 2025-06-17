import { useState } from 'react';
import { Play, Clock, Flame, Trophy, Star, Search, Plus } from 'lucide-react';

const Workouts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showCreateWorkout, setShowCreateWorkout] = useState(false);

  const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT', 'Flexibility', 'Sports'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const workouts = [
    {
      id: 1,
      title: 'Full Body HIIT',
      category: 'HIIT',
      difficulty: 'Intermediate',
      duration: 30,
      calories: 350,
      rating: 4.8,
      description: 'High-intensity interval training targeting all major muscle groups',
      exercises: 8,
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Morning Yoga Flow',
      category: 'Yoga',
      difficulty: 'Beginner',
      duration: 25,
      calories: 120,
      rating: 4.9,
      description: 'Gentle yoga sequence to start your day with energy and mindfulness',
      exercises: 12,
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Upper Body Strength',
      category: 'Strength',
      difficulty: 'Advanced',
      duration: 45,
      calories: 280,
      rating: 4.7,
      description: 'Build strength and muscle in your chest, shoulders, and arms',
      exercises: 10,
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      title: 'Cardio Blast',
      category: 'Cardio',
      difficulty: 'Intermediate',
      duration: 20,
      calories: 300,
      rating: 4.6,
      description: 'Quick cardio workout to boost your heart rate and burn calories',
      exercises: 6,
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      title: 'Flexibility & Mobility',
      category: 'Flexibility',
      difficulty: 'Beginner',
      duration: 15,
      calories: 60,
      rating: 4.5,
      description: 'Improve your flexibility and joint mobility with gentle stretches',
      exercises: 8,
      image: 'https://images.pexels.com/photos/374632/pexels-photo-374632.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      title: 'Core Crusher',
      category: 'Strength',
      difficulty: 'Intermediate',
      duration: 20,
      calories: 180,
      rating: 4.8,
      description: 'Intense core workout to build a strong and stable midsection',
      exercises: 7,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
  ];

  const featuredWorkouts = workouts.slice(0, 3);

  const filteredWorkouts = workouts.filter(workout => {
    const categoryMatch = selectedCategory === 'All' || workout.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || workout.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workouts</h1>
          <p className="text-gray-600">Discover and follow structured workout routines</p>
        </div>
        <button
          onClick={() => setShowCreateWorkout(true)}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Workout
        </button>
      </div>

      {/* Featured Workouts */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Featured Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWorkouts.map((workout) => (
            <div key={workout.id} className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{workout.title}</h3>
              <div className="flex items-center justify-between text-sm text-blue-100 mb-3">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {workout.duration} min
                </span>
                <span className="flex items-center">
                  <Flame className="w-4 h-4 mr-1" />
                  {workout.calories} cal
                </span>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <Play className="w-4 h-4 mr-2" />
                Start Workout
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search workouts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <img
              src={workout.image}
              alt={workout.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  {workout.category}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(workout.difficulty)}`}>
                  {workout.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{workout.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{workout.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {workout.duration} min
                </span>
                <span className="flex items-center">
                  <Flame className="w-4 h-4 mr-1" />
                  {workout.calories} cal
                </span>
                <span className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  {workout.exercises} exercises
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(workout.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{workout.rating}</span>
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Workout Modal */}
      {showCreateWorkout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Custom Workout</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Workout Name</label>
                <input
                  type="text"
                  placeholder="e.g., My Morning Routine"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {difficulties.slice(1).map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Describe your workout..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateWorkout(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Create Workout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;