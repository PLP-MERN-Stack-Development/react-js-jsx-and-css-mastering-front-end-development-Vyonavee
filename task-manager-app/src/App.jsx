import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import { ThemeProvider } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowApp(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 ease-in-out">
        <Navbar />

        <main className="flex flex-col items-center justify-center px-6 py-12">
          <AnimatePresence>
            {showApp && (
              <motion.div
                key="taskmanager"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
                  ✨ Task Manager ✨
                </h1>

                <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
                  Organize your day with grace, style, and just a little sparkle 💫
                </p>

                <TaskManager />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
