import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Frown, Meh, Sun, Moon, Cloud } from 'lucide-react';

const Dashboard = () => {
  const moodOptions = [
    { icon: Smile, label: 'Great', color: 'text-green-500' },
    { icon: Meh, label: 'Okay', color: 'text-yellow-500' },
    { icon: Frown, label: 'Not Good', color: 'text-red-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
        <div className="flex justify-around">
          {moodOptions.map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Icon className={`w-12 h-12 ${color}`} />
              <span className="text-gray-600">{label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Daily Inspiration</h3>
          <p className="text-gray-600 italic">
            "Life is all about the peace."
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Sun className="text-purple-600" />
              <span>Breathe</span>
            </button>
            <button className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Moon className="text-blue-600" />
              <span>Sleep</span>
            </button>
            <button className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Cloud className="text-green-600" />
              <span>Meditate</span>
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Dashboard;