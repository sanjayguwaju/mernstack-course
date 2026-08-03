import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Controls({ currentSlide, totalSlides, onNext, onPrev }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-900">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Controls Bar */}
      <div className="bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50 px-6 py-4 flex items-center justify-between">
        <div className="text-slate-400 font-medium tracking-widest text-sm">
          MERN STACK MASTERCLASS
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-slate-500 text-sm font-bold tracking-widest">
            <span className="text-slate-200">{currentSlide + 1}</span> / {totalSlides}
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={onPrev}
              disabled={currentSlide === 0}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
