'use client';

import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex-1">
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          className={`absolute top-1/2 left-1/2 w-[200vw] h-[200vh] transform -translate-x-1/2 -translate-y-1/2 scale-150 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          src="https://www.youtube.com/embed/spDj54kf-vY?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 opacity-50"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="uppercase tracking-wider text-[62px] font-medium text-white">
          SOOKYUNG <span className="font-extrabold text-[#00A3E1]">PARK</span>
        </h1>

        <h2 className="mt-4 text-[28px] font-light">
          I am a{' '}
          <span className="border-b-4 border-[#00A3E1] font-semibold">
            <Typewriter
              words={['Frontend Developer', 'Backend Developer', 'Web Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 z-10">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
