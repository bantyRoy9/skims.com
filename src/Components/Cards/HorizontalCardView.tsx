import { FC, ReactNode, useRef, useState, useEffect } from "react";

const HorizontalCardList: FC<{ children: ReactNode[] }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalItems, setTotalItems] = useState(children.length);
  const itemWidth = 800;

  useEffect(() => {
    setTotalItems(children.length);
  }, [children]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / itemWidth) + 1;
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.max(1, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.min(totalItems, prev + 1));
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-6 md:px-0 h-20">
        <div className="hidden md:!block w-36"></div>
        <h2 className="text-xl text-brown font-primary leading-none px-4 -ml-4 text-left md:ml-0 md:!text-center">THE LATEST MUST-HAVES</h2>
        <div className="hidden md:!flex items-center min-w-36">
          <button onClick={scrollLeft} disabled={currentIndex === 1} className="hover:cursor-pointer disabled:opacity-50">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1">
              <path d="M12 17L4.5 9.5L12 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <div className="font-quinary text-xs px-4">
            <div className="w-full flex items-center justify-between text-center text-tertiary">
              <span className="w-3">{currentIndex}</span><span>/</span>
              <span className="w-3">{totalItems}</span>
            </div>
          </div>
          <button onClick={scrollRight} disabled={currentIndex === totalItems} className="hover:cursor-pointer disabled:opacity-50">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1">
              <path d="M5 17L12.5 9.5L5 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="horizontal-card-list overflow-x-auto flex" ref={scrollRef} onScroll={handleScroll}>
        {children}
      </div>
    </>
  );
};

export default HorizontalCardList;