import { useState } from 'react';
import { Plus, Search, Coffee, Sandwich, Pizza } from 'lucide-react';

const Nutrition = () => {
  const [showAddFood, setShowAddFood] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');

  const dailyStats = {
    calories: { consumed: 1850, target: 2200, remaining: 350 },
    carbs: { consumed: 185, target: 275, remaining: 90 },
    protein: { consumed: 98, target: 120, remaining: 22 },
    fat: { consumed: 67, target: 85, remaining: 18 }
  };

  const meals = [
    {
      id: 1,
      name: 'Breakfast',
      icon: Coffee,
      time: '8:00 AM',
      calories: 420,
      foods: [
        { name: 'Oatmeal with berries', calories: 280, serving: '1 bowl' },
        { name: 'Greek yogurt', calories: 140, serving: '1 cup' }
      ]
    },
    {
      id: 2,
      name: 'Lunch',
      icon: Sandwich,
      time: '12:30 PM',
      calories: 650,
      foods: [
        { name: 'Grilled chicken salad', calories: 450, serving: '1 large serving' },
        { name: 'Avocado toast', calories: 200, serving: '1 slice' }
      ]
    },
    {
      id: 3,
      name: 'Dinner',
      icon: Pizza,
      time: '7:00 PM',
      calories: 780,
      foods: [
        { name: 'Salmon with quinoa', calories: 520, serving: '1 fillet + 1 cup' },
        { name: 'Steamed broccoli', calories: 55, serving: '1 cup' },
        { name: 'Mixed nuts', calories: 205, serving: '1 handful' }
      ]
    }
  ];

  const popularFoods = [
    { name: 'Banana', calories: 105, category: 'Fruit' },
    { name: 'Chicken breast', calories: 165, category: 'Protein' },
    { name: 'Brown rice', calories: 218, category: 'Grain' },
    { name: 'Almonds', calories: 160, category: 'Nuts' },
    { name: 'Greek yogurt', calories: 140, category: 'Dairy' },
    { name: 'Spinach', calories: 7, category: 'Vegetable' },
  ];

  const getPercentage = (consumed: number, target: number) => {
    return Math.min((consumed / target) * 100, 100);
  };


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Nutrition</h1>
          <p className="text-gray-600">Track your daily nutrition and meals</p>
        </div>
        <button
          onClick={() => setShowAddFood(true)}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Food
        </button>
      </div>

      {/* Daily Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(dailyStats).map(([key, stats]) => (
            <div key={key} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray={`${getPercentage(stats.consumed, stats.target)}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">
                    {Math.round(getPercentage(stats.consumed, stats.target))}%
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 capitalize mb-2">{key}</h3>
              <p className="text-sm text-gray-600">
                {stats.consumed} / {stats.target}
                {key === 'calories' ? ' kcal' : 'g'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {stats.remaining} remaining
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-4">
        {meals.map((meal) => {
          const MealIcon = meal.icon;
          return (
            <div key={meal.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MealIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{meal.name}</h3>
                    <p className="text-sm text-gray-600">{meal.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{meal.calories} kcal</p>
                  <button
                    onClick={() => {
                      setSelectedMeal(meal.name);
                      setShowAddFood(true);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Add food
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                {meal.foods.map((food, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{food.name}</p>
                      <p className="text-sm text-gray-600">{food.serving}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{food.calories} kcal</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Nutrition Tips */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Nutrition Tip of the Day</h2>
        <p className="text-green-100 text-lg">
          Aim to fill half your plate with vegetables and fruits at each meal. They're packed with vitamins, minerals, and fiber while being naturally low in calories! 🥗
        </p>
      </div>

      {/* Add Food Modal */}
      {showAddFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Add Food {selectedMeal && `to ${selectedMeal}`}
              </h3>
              <button
                onClick={() => {
                  setShowAddFood(false);
                  setSelectedMeal('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for food items..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Meal Selection */}
            {!selectedMeal && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Add to meal</label>
                <select
                  value={selectedMeal}
                  onChange={(e) => setSelectedMeal(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a meal</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>
            )}

            {/* Popular Foods */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Popular Foods</h4>
              <div className="space-y-2">
                {popularFoods.map((food, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{food.name}</p>
                      <p className="text-sm text-gray-600">{food.category}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{food.calories} kcal</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Entry */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Or add custom food</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Food Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Calories</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Serving</label>
                  <input
                    type="text"
                    placeholder="e.g., 1 cup"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddFood(false);
                  setSelectedMeal('');
                }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Add Food
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutrition;