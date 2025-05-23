"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ContentItem = {
  title: string;
  description: string;
  content: React.ReactNode;
};

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export function StickyScroll({
  content,
  contentClassName,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const handleScroll = () => {
      if (!currentRef) return;
      const { scrollTop, clientHeight, scrollHeight } = currentRef;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const cardIndex = Math.min(
        Math.floor(scrollPercentage * content.length),
        content.length - 1
      );
      setActiveCard(cardIndex);
    };

    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <motion.div
      ref={ref}
      className="h-[30rem] overflow-y-auto w-full"
    >
      <div className="flex justify-center relative gap-10">
        <div className="div relative flex items-start">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10",
            contentClassName
          )}
        >
          {content[activeCard].content}
        </motion.div>
      </div>
    </motion.div>
  );
}
