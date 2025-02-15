import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Meditation from './pages/Meditation';
import Journal from './pages/Journal';
import Community from './pages/Community';
import Resources from './pages/Resources';
import { Sparkles } from 'lucide-react';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';

function App() {
  const { setUser, setSession } = useAuthStore();

  useEffect(() => {
    // Set up auth state listener
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setSession]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-4 right-4"
          >
            <button
              className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2"
              onClick={() => {/* TODO: Implement SOS feature */}}
            >
              <Sparkles size={20} />
              <span>Need Help?</span>
            </button>
          </motion.div>
        </main>
      </div>
    </Router>
  );
}

export default App;