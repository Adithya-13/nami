'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Comics({ onBackClick }: { onBackClick: () => void }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const pages = [
    '/images/section2/cover.jpg',
    '/images/section2/page1.jpg',
    '/images/section2/page2.jpg',
    '/images/section2/page3.jpg',
  ];

  const audioFiles = [
    '',
    '/images/section2/page1.mp3',
    '/images/section2/page2.mp3',
    '/images/section2/page3.mp3',
  ];

  const nextPage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
      stopAudio();
    }
  };

  const prevPage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setPageIndex(
        (prevIndex) => (prevIndex - 1 + pages.length) % pages.length
      );
      stopAudio();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    if (audioRef.current && audioFiles[pageIndex]) {
      audioRef.current.src = audioFiles[pageIndex];
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isFlipping) {
      const timer = setTimeout(() => setIsFlipping(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isFlipping]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-[url('/images/section2/bg.png')] sm:bg-[url('/images/section2/bg-mobile.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ease-in-out overflow-hidden"
      style={{ opacity: 1 }}
      id={'section2'}
    >
      <motion.button
        onClick={onBackClick}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-4 left-4 focus:outline-none z-50 sm:top-8 sm:left-8"
      >
        <Image
          src="/new/icons/back.png"
          alt="Back to main page"
          width={100}
          height={45}
          className="w-[100px] sm:w-[150px] h-auto"
        />
      </motion.button>

      <div className="relative w-full max-w-6xl aspect-[4/3] flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          <motion.button
            onClick={toggleAudio}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-[-40px] sm:top-[-60px] transform focus:outline-none z-20"
          >
            <img
              src="/images/section2/speaker.png"
              alt={isPlaying ? 'Stop audio' : 'Play audio'}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
            />
          </motion.button>
          <button
            onClick={prevPage}
            className="absolute left-[-20px] sm:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
          >
            <img
              src="/images/section2/left.png"
              alt="Previous page"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </button>
          <div className="w-full h-full relative overflow-hidden perspective-1000">
            <img
              src={pages[pageIndex]}
              alt={`Book Page ${pageIndex + 1}`}
              className={`w-full h-full object-contain transition-transform duration-500 ease-in-out ${
                isFlipping ? 'rotate-y-180' : 'rotate-y-0'
              }`}
            />
          </div>
          <button
            onClick={nextPage}
            className="absolute right-[-20px] sm:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
          >
            <img
              src="/images/section2/right.png"
              alt="Next page"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </button>
        </div>
      </div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
