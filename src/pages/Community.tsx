import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Shield } from 'lucide-react';

const Community = () => {
  const groups = [
    {
      name: "Stress Management",
      members: 234,
      description: "Share tips and support for managing daily stress",
      icon: Shield,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      name: "Student Life",
      members: 456,
      description: "Connect with other students navigating college life",
      icon: Users,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      name: "Self-Care Circle",
      members: 189,
      description: "Exchange self-care routines and wellness practices",
      icon: Heart,
      color: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Community</h2>
            <p className="text-gray-600">Connect with others on similar journeys</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors">
            <MessageCircle size={20} />
            <span>New Post</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <button
                key={group.name}
                className={`${group.color} p-6 rounded-xl transition-transform hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${group.iconColor} p-3 bg-white rounded-lg shadow-sm`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{group.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{group.members} members</p>
                    <p className="text-gray-500 text-sm">{group.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Community;