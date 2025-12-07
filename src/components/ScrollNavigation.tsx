import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollNavigation = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  const sections = ["hero", "services", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowUpArrow(scrollTop > 100);
      setShowDownArrow(scrollTop < scrollHeight - clientHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentSectionIndex = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  const scrollToSection = (direction: "up" | "down") => {
    const currentIndex = getCurrentSectionIndex();
    let targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    
    targetIndex = Math.max(0, Math.min(sections.length - 1, targetIndex));
    
    const targetElement = document.getElementById(sections[targetIndex]);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {/* Up Arrow */}
      <button
        onClick={() => scrollToSection("up")}
        onDoubleClick={scrollToTop}
        className={`group relative p-3 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-elegant hover:bg-primary hover:scale-110 transition-all duration-300 ${
          showUpArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        aria-label="Scroll up"
      >
        <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Scroll Up
        </span>
      </button>

      {/* Down Arrow */}
      <button
        onClick={() => scrollToSection("down")}
        onDoubleClick={scrollToBottom}
        className={`group relative p-3 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-elegant hover:bg-primary hover:scale-110 transition-all duration-300 ${
          showDownArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Scroll Down
        </span>
      </button>
    </div>
  );
};

export default ScrollNavigation;
