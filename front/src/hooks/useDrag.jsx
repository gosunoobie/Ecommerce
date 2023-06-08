import { useEffect, useRef } from "react";

const useDrag = (scrollableNodeRef) => {
  const handleMouseMove = useRef(null);
  const handleTouchMove = useRef(null);

  const preventGlobalMouseEvents = () => {
    document.documentElement.style.pointerEvents = "none";
  };

  const restoreGlobalMouseEvents = () => {
    document.documentElement.style.pointerEvents = "auto";
  };

  useEffect(() => {
    const scrollableNode = scrollableNodeRef.current.getScrollElement();

    const handleDragMove = (event) => {
      event.stopPropagation();
      const startX = event.pageX || event.touches[0].pageX;
      const scrollLeft = scrollableNode.scrollLeft;

      const walkSpeed = 1.5; // Adjust the scroll speed here

      const handleMove = (event) => {
        const x = event.pageX || event.touches[0].pageX;
        const walk = (x - startX) * walkSpeed;
        scrollableNode.scrollTo({
          left: scrollLeft - walk,
        });
      };

      const handleDragEnd = () => {
        restoreGlobalMouseEvents();
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("touchend", handleDragEnd);
      };

      preventGlobalMouseEvents();
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("touchend", handleDragEnd);
    };

    scrollableNode.addEventListener("mousedown", handleDragMove);
    scrollableNode.addEventListener("touchstart", handleDragMove, {
      passive: false,
    });

    return () => {
      scrollableNode.removeEventListener("mousedown", handleDragMove);
      scrollableNode.removeEventListener("touchstart", handleDragMove, {
        passive: false,
      });
    };
  }, [scrollableNodeRef]);

  return scrollableNodeRef;
};

export default useDrag;
