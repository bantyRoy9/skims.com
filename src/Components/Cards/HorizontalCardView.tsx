import clsx from "clsx";
import { FC, ReactNode, useRef, useState, useEffect } from "react";

const HorizontalCardList: FC<{ children: ReactNode[],header?:string }> = ({ children,header}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalItems, setTotalItems] = useState(children.length);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const itemWidth = 800;

  useEffect(() => {
    setTotalItems(children.length);
    
  }, [children]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
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
  const BtnHandler = (isleft:boolean) =>(<button onClick={isleft?scrollLeft:scrollRight} disabled={isleft?currentIndex === 1:currentIndex === totalItems} className={clsx("hover:cursor-pointer z-10 disabled:opacity-50",header?"":isleft? "absolute left-0 top-1/2 -translate-y-1/2":"absolute right-0 top-1/2 -translate-y-1/2")}>
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1">
    <path d={isleft?"M12 17L4.5 9.5L12 2":"M5 17L12.5 9.5L5 2"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
</button>);
  return (
    <>{header && <><div className="w-full flex justify-between items-center px-6 md:px-0 h-20">
        <h2 className="text-xl text-brown font-primary leading-none px-4 -ml-4 text-left md:ml-0 md:!text-center">{header}</h2>
        <div className="hidden md:!flex items-center min-w-36">
          {BtnHandler(true)}
          <div className="font-quinary text-xs px-4">
            <div className="w-full flex items-center justify-between text-center text-tertiary">
              <span className="w-3">{currentIndex}</span><span>/</span>
              <span className="w-3">{totalItems}</span>
            </div>
          </div>
          {BtnHandler(false)}
        </div>
      </div></>}
      <div className="horizontal-card-list overflow-x-auto flex" ref={scrollRef} onScroll={handleScroll}>
      {!header && BtnHandler(true)}
        {children}
      {!header && BtnHandler(false)}
      </div>
    </>
  );
};

export default HorizontalCardList;