import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Wind, Brain, Heart } from 'lucide-react';

const Meditation = () => {
  const meditations = [
    {
      title: "Calm Mind",
      duration: "5 min",
      icon: Brain,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "A quick meditation to clear your mind and reduce anxiety"
    },
    {
      title: "Peaceful Sleep",
      duration: "15 min",
      icon: Moon,
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      description: "Gentle guidance to help you drift into restful sleep"
    },
    {
      title: "Breathing Space",
      duration: "3 min",
      icon: Wind,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      description: "Simple breathing exercises for instant calm"
    },
    {
      title: "Self-Love",
      duration: "10 min",
      icon: Heart,
      color: "bg-pink-50",
      iconColor: "text-pink-600",
      description: "Cultivate compassion and kindness towards yourself"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Meditation</h2>
        <p className="text-gray-600 mb-6">Find your peace with guided meditations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meditations.map((meditation) => {
            const Icon = meditation.icon;
            return (
              <button
                key={meditation.title}
                className={`${meditation.color} p-6 rounded-xl transition-transform hover:scale-[1.02] flex items-start gap-4`}
              >
                <div className={`${meditation.iconColor} p-3 bg-white rounded-lg shadow-sm`}>
                  <Icon size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{meditation.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{meditation.duration}</p>
                  <p className="text-gray-500 text-sm">{meditation.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Meditation;