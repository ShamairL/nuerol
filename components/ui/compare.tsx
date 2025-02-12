"use client";
import type React from "react";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  firstImage?: React.ReactNode | string;
  secondImage?: React.ReactNode | string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  keepPosition?: boolean;
}

export const Compare = ({
  firstImage,
  secondImage,
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  keepPosition = false,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  function mouseLeaveHandler() {
    if (slideMode === "hover" && !keepPosition) {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
      }
    },
    [slideMode]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => handleStart(e.touches[0].clientX),
    [handleStart]
  );
  const handleTouchEnd = useCallback(() => handleEnd(), [handleEnd]);
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => handleMove(e.touches[0].clientX),
    [handleMove]
  );

  return (
    <div
      ref={sliderRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <motion.div
        className="absolute top-0 h-full bg-gradient-to-r from-primary/10 to-transparent"
        style={{
          left: `${sliderXPercent}%`,
          width: "1px",
          zIndex: 30,
        }}
      >
        {showHandlebar && (
          <div className="h-8 w-8 rounded-full bg-primary absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center shadow-lg">
            <IconDotsVertical className="h-4 w-4 text-white" />
          </div>
        )}
      </motion.div>

      <div className="overflow-hidden w-full h-full relative">
        <AnimatePresence initial={false}>
          <motion.div
            className="absolute inset-0 w-full h-full bg-background"
            style={{
              clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              zIndex: 2,
            }}
          >
            {typeof firstImage === "string" ? (
              <img
                src={firstImage || "/placeholder.svg"}
                className={cn(
                  "w-full h-full object-cover",
                  firstImageClassName
                )}
                alt="First comparison"
              />
            ) : (
              firstImage
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 w-full h-full bg-background"
          style={{ zIndex: 1 }}
        >
          {typeof secondImage === "string" ? (
            <img
              src={secondImage || "/placeholder.svg"}
              className={cn("w-full h-full object-cover", secondImageClassname)}
              alt="Second comparison"
            />
          ) : (
            secondImage
          )}
        </motion.div>
      </div>
    </div>
  );
};
