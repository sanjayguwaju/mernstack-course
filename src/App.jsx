import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { curriculum } from './data/curriculum';
import Slide from './components/Slide';
import Controls from './components/Controls';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < curriculum.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="relative w-full h-[100dvh] bg-slate-950 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      
      <main className="relative z-10 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <Slide 
            key={currentSlideIndex} 
            slide={curriculum[currentSlideIndex]} 
            direction={direction} 
          />
        </AnimatePresence>
      </main>

      <Controls 
        currentSlide={currentSlideIndex}
        totalSlides={curriculum.length}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
      />
    </div>
  );
}

export default App;
