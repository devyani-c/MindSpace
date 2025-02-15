import React from 'react';
import { motion } from 'framer-motion';
import { PenLine, Book, Sparkles } from 'lucide-react';

const Journal = () => {
  const prompts = [
    "What's one thing that made you smile today?",
    "What's something you're looking forward to?",
    "What's a challenge you faced, and how did you handle it?",
    "Write about a moment of peace you experienced recently"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Journal</h2>
        <p className="text-gray-600 mb-6">Express yourself freely and reflect on your journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button className="bg-purple-50 p-6 rounded-xl flex items-center gap-4 transition-transform hover:scale-[1.02]">
            <div className="bg-white p-3 rounded-lg shadow-sm text-purple-600">
              <PenLine size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg">New Entry</h3>
              <p className="text-gray-600 text-sm">Start writing your thoughts</p>
            </div>
          </button>

          <button className="bg-blue-50 p-6 rounded-xl flex items-center gap-4 transition-transform hover:scale-[1.02]">
            <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
              <Book size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg">Past Entries</h3>
              <p className="text-gray-600 text-sm">Review your journey</p>
            </div>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-purple-600" size={20} />
            <h3 className="font-semibold text-lg">Writing Prompts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prompts.map((prompt, index) => (
              <button
                key={index}
                className="p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100 transition-colors"
              >
                <p className="text-gray-700">{prompt}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Journal;