'use client';
import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

const videos = [
  { id: 1, title: "Purvaj Ayurveda", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0" },
  { id: 2, title: "Health Benefits", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1494399981257038%2F&show_text=false&width=267&t=0" },
  { id: 3, title: "Natural Supplements", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F567748535965343%2F&show_text=false&width=267&t=0" },
  { id: 4, title: "Ayurvedic Tips", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F920491103271860%2F&show_text=false&width=267&t=0" },
  { id: 5, title: "Wellness Journey", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1303408867763896%2F&show_text=false&width=267&t=0" },
  { id: 6, title: "Product Showcase", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F832011378847392%2F&show_text=false&width=267&t=0" },
  { id: 7, title: "Herbal Benefits", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841526701524322%2F&show_text=false&width=267&t=0" },
  { id: 8, title: "Ayurveda Power", embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F365649079969916%2F&show_text=false&width=267&t=0" },
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

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-center mb-3">Watch Our Videos</h2>
        <div className="w-20 h-1 bg-[#C8963E] mx-auto mb-8 rounded-full"></div>
        <p className="text-center text-gray-600 mb-12">Experience the wisdom of Ayurveda through our reels.</p>

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
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0"
                  style={{ 
                    width: itemWidth > 0 ? `${itemWidth}px` : `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`
                  }}
                >
                  <div className="w-full">
                    <div className="relative group bg-gray-100 rounded-2xl overflow-hidden shadow-md aspect-[9/16] border-2 border-transparent hover:border-[#C8963E] transition-all duration-300">
                      <iframe
                        src={video.embedSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={video.title}
                        loading="lazy"
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                    <p className="text-center mt-3 font-semibold text-gray-800 text-xs italic">{video.title}</p>
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

