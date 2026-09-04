import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isViewHover, setIsViewHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      setRingPos({ x: ringX, y: ringY });
      animFrameId = requestAnimationFrame(render);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animFrameId = requestAnimationFrame(render);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isViewEl = target.closest('.cursor-view-target');
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-hover-target');

      setIsViewHover(!!isViewEl);
      setIsHovered(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Tiny gold center dot */}
      <div
        className="fixed pointer-events-none z-[10000] rounded-full w-[5px] h-[5px] bg-[#d4a853] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Smooth trailing gold ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ${
          isViewHover
            ? 'w-[75px] h-[75px] bg-[#0d0505]/80 border border-[#d4a853] backdrop-blur-[3px]'
            : isHovered
            ? 'w-[52px] h-[52px] border border-[#d4a853]/90 bg-[#d4a853]/10'
            : isClicked
            ? 'w-[24px] h-[24px] border border-[#d4a853]/80'
            : 'w-[34px] h-[34px] border border-[#d4a853]/50'
        }`}
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      >
        {isViewHover && (
          <span className="text-[8px] font-semibold tracking-[2px] text-[#e8c87a] font-accent uppercase">
            VIEW
          </span>
        )}
      </div>
    </>
  );
}
