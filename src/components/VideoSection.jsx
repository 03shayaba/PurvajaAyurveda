'use client';
import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

const videos = [
  { id: 1, title: "Purvaj Ayurveda", src: "/videos/video1.mp4", poster: "/products/cover.jpg" },
  { id: 2, title: "Health Benefits", src: "/videos/video2.mp4", poster: "/products/cover2.jpg" },
  { id: 3, title: "Natural Supplements", src: "/videos/video3.mp4", poster: "/products/cover3.jpg" },
  { id: 4, title: "Ayurvedic Tips", src: "/videos/video4.mp4", poster: "/products/cover4.png" },
  { id: 5, title: "Wellness Journey", src: "/videos/video5.mp4", poster: "/products/img1.jpg" },
  { id: 6, title: "Product Showcase", src: "/videos/video6.mp4", poster: "/products/imgs.jpg" },
  { id: 7, title: "Herbal Benefits", src: "/videos/video7.mp4", poster: "/products/lemonthumbnail1.jpg" },
  { id: 8, title: "Ayurveda Power", src: "/videos/video8.mp4", poster: "/products/silajeetthumbnail.jpg" },
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [gap, setGap] = useState(16);
  const [itemWidth, setItemWidth] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let count = 1;
      let g = 16;

      if (width >= 1024) {
        count = 6;
        g = 20;
      } else if (width >= 768) {
        count = 4;
        g = 20;
      } else if (width >= 640) {
        count = 3;
        g = 16;
      } else {
        count = 2;
        g = 16;
      }

      setVisibleCount(count);
      setGap(g);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate the actual pixel width of one item + its gap
  useEffect(() => {
    if (containerRef.current) {
      const W = containerRef.current.offsetWidth;
      if (W > 0) {
        const singleItemWidth = (W - (visibleCount - 1) * gap) / visibleCount;
        setItemWidth(singleItemWidth);
        setTrackOffset(currentIndex * (singleItemWidth + gap));
      }
    }
  }, [currentIndex, visibleCount, gap]);

  const maxIndex = Math.max(0, videos.length - visibleCount);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Keep dots logic similar but based on individual items
  const totalDots = maxIndex + 1;

  const videoRefs = useRef([]);
  const [playingId, setPlayingId] = useState(null);

  const handlePlayPause = (id, idx) => {
    // Pause all other videos
    videoRefs.current.forEach((vid, i) => {
      if (i !== idx && vid) {
        vid.pause();
      }
    });

    const video = videoRefs.current[idx];
    if (video) {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setPlayingId(id);
          }).catch(error => {
            console.warn("Video file missing or play interrupted:", error);
          });
        }
      } else {
        video.pause();
        setPlayingId(null);
      }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C8963E] font-bold tracking-luxury uppercase text-[10px] block mb-2">Visual Wisdom</span>
          <p className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-[#1B4332]">Watch Our Stories</p>
          <div className="w-16 h-0.5 bg-[#C8963E]/30 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 font-sans text-lg">Experience the ancient wisdom of Ayurveda through our curated lenses.</p>
        </div>

        <div className="relative group/nav px-1">
          <div ref={containerRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${trackOffset}px)`,
                willChange: 'transform'
              }}
            >
              {videos.map((video, idx) => (
                <div
                  key={video.id}
                  className="flex-shrink-0"
                  style={{
                    width: itemWidth > 0 ? `${itemWidth}px` : `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`
                  }}
                >
                  <div className="w-full">
                    <div 
                      className="relative group bg-gray-100 rounded-2xl overflow-hidden shadow-md aspect-[9/16] border-2 border-transparent hover:border-[#C8963E] transition-all duration-300 cursor-pointer"
                      onClick={() => handlePlayPause(video.id, idx)}
                    >
                      <video
                        ref={el => videoRefs.current[idx] = el}
                        src={video.src}
                        poster={video.poster}
                        className="w-full h-full object-cover"
                        playsInline
                        loop
                        onPlay={() => setPlayingId(video.id)}
                        onPause={() => setPlayingId(null)}
                      />
                      
                      {/* Custom Beautiful Play Button Overlay */}
                      <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${playingId === video.id ? 'opacity-0' : 'opacity-100 group-hover:bg-black/40'}`}>
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
                          <FiPlay className="w-5 h-5 text-[#1B4332] ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-4 font-sans font-semibold text-gray-800 text-sm tracking-tight">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 md:-ml-8 w-10 h-10 bg-white border border-gray-100 text-[#C8963E] rounded-full flex items-center justify-center shadow-xl transition-all z-20 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-[#C8963E] hover:text-white'}`}
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 md:-mr-8 w-10 h-10 bg-white border border-gray-100 text-[#C8963E] rounded-full flex items-center justify-center shadow-xl transition-all z-20 ${currentIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'hover:bg-[#C8963E] hover:text-white'}`}
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        {totalDots > 1 && (
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2.5 bg-[#C8963E]' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

