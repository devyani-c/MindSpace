import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, BookOpen, MessageSquare } from 'lucide-react';

const Resources = () => {
  const emergencyContacts = [
    {
      name: "Crisis Helpline",
      number: "1-800-273-8255",
      available: "24/7",
      icon: Phone,
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      name: "Text Support",
      number: "741741",
      available: "24/7",
      icon: MessageSquare,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  const resources = [
    {
      title: "Mental Health Articles",
      description: "Evidence-based articles about mental wellness",
      icon: BookOpen,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Find a Therapist",
      description: "Connect with licensed mental health professionals",
      icon: Globe,
      color: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <section className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Emergency Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {emergencyContacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.name}
                className={`${contact.color} p-6 rounded-xl flex items-start gap-4`}
              >
                <div className={`${contact.iconColor} p-3 bg-white rounded-lg shadow-sm`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{contact.name}</h3>
                  <p className="text-gray-600 text-lg font-semibold">{contact.number}</p>
                  <p className="text-gray-500 text-sm">Available {contact.available}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <button
                key={resource.title}
                className={`${resource.color} p-6 rounded-xl transition-transform hover:scale-[1.02] flex items-start gap-4`}
              >
                <div className={`${resource.iconColor} p-3 bg-white rounded-lg shadow-sm`}>
                  <Icon size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Resources;