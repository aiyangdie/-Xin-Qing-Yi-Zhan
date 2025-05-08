import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaCloud, FaHeart, FaSmile, FaMusic, FaStar, FaRainbow, FaFeather } from 'react-icons/fa';

function App() {
  const [mood, setMood] = useState('happy');
  const [quote, setQuote] = useState('今天是个美好的一天！');
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  const quotes = [
    '生活就像一盒巧克力，你永远不知道下一块是什么味道。',
    '每一个微笑都是阳光，照亮他人的同时也温暖自己。',
    '快乐不是因为拥有的多，而是因为计较的少。',
    '保持微笑，因为这是最简单也最有效的快乐方式。',
    '今天的不开心就到此为止吧，明天依然光芒万丈。',
    '生活不会亏待每一个努力的人。',
    '做一个温暖的人，把温暖传递给他人。',
    '幸福就是，你爱的人也爱你。',
    '生活需要仪式感，就像平凡的日子需要一束光。',
    '愿你成为自己喜欢的样子。'
  ];

  const themes = {
    default: 'from-happy-blue to-happy-pink',
    sunset: 'from-orange-400 to-pink-500',
    ocean: 'from-blue-400 to-teal-500',
    forest: 'from-green-400 to-emerald-500',
    lavender: 'from-purple-400 to-pink-400'
  };

  const changeQuote = () => {
    setShowConfetti(true);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const changeTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextIndex]);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themes[currentTheme]} transition-colors duration-1000`}>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            animate={{ 
              textShadow: [
                "0 0 7px #fff",
                "0 0 10px #fff",
                "0 0 21px #fff",
                "0 0 7px #fff"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            让心情变好的小站
          </motion.h1>
          
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-12"
          >
            <FaSmile className="w-24 h-24 text-happy-yellow mx-auto filter drop-shadow-lg" />
          </motion.div>

          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl text-gray-800 mb-8 font-medium"
              >
                {quote}
              </motion.p>
            </AnimatePresence>
            
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={changeQuote}
                className="bg-happy-yellow text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
              >
                换一句
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={changeTheme}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
              >
                换主题
              </motion.button>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: FaSun, text: '阳光', color: 'text-yellow-400' },
              { icon: FaCloud, text: '云朵', color: 'text-blue-400' },
              { icon: FaHeart, text: '爱心', color: 'text-pink-400' },
              { icon: FaSmile, text: '微笑', color: 'text-yellow-400' },
              { icon: FaMusic, text: '音乐', color: 'text-purple-400' },
              { icon: FaStar, text: '星星', color: 'text-yellow-400' },
              { icon: FaRainbow, text: '彩虹', color: 'text-green-400' },
              { icon: FaFeather, text: '羽毛', color: 'text-gray-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:shadow-xl"
              >
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -10,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: window.innerHeight + 10,
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: Math.random() * 2 + 1,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App; 