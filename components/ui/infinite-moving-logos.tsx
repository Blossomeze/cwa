'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Props interface
interface InfiniteMovingLogosProps {
  items: { logo: string; name: string }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingLogos({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: InfiniteMovingLogosProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  // Set up animation based on props
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate items for seamless looping
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Set animation direction
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse',
      );

      // Set animation speed
      const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '100s';
      containerRef.current.style.setProperty('--animation-duration', duration);
    }
  }, [items, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-full overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
      aria-label="Infinite scrolling logos"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex shrink-0 py-4 flex-nowrap',
          'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="flex items-center flex-shrink-0 px-2 md:px-6"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={100}
              className="w-20 md:w-32 object-contain"
            />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 100s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
      `}</style>
    </div>
  );
}