'use client';

import { useState } from 'react';

const videos = [
  {
    id: 'Ou75T-40wuw',
    title: 'Virtual Tour - Project Walkthrough',
    thumbnail: 'https://img.youtube.com/vi/Ou75T-40wuw/maxresdefault.jpg',
  },
  {
    id: 'vQYPO-BBAZ4',
    title: 'About Kaz Properties',
    thumbnail: 'https://img.youtube.com/vi/vQYPO-BBAZ4/maxresdefault.jpg',
  },
];

export default function PropertyShowcase() {
  const [playing, setPlaying] = useState<{ [key: string]: boolean }>({});

  const handlePlay = (videoId: string) => {
    setPlaying(prev => ({ ...prev, [videoId]: true }));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 xl:py-32 bg-[#FAF7F5] dark:bg-[#0d0d0d] overflow-hidden" id="showcase">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        {/* Header */}
        <div className="mb-8 sm:mb-10 xl:mb-14 fade-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-px h-7 xl:h-10 bg-[#BE9F98]" />
            <span className="text-[#BE9F98] uppercase tracking-widest text-sm sm:text-base font-bold">Experience It</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-[#000000] dark:text-white leading-tight">
            Virtual <span className="font-bold">Tour</span>
          </h2>
          <p className="text-black/50 dark:text-white/50 text-sm xl:text-base mt-2 font-light max-w-md">
            Experience our properties through immersive video tours.
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 xl:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-sm overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-lg video-card group"
              style={{ aspectRatio: '16/9' }}
            >
              {playing[video.id] ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Play button */}
                  <button
                    onClick={() => handlePlay(video.id)}
                    className="play-overlay absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label={`Play ${video.title}`}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#BE9F98]/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:bg-[#BE9F98] transition-all duration-300 hover:scale-110">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1 sm:w-6 sm:h-6">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">{video.title}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
