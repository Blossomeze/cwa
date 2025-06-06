'use client';

import { cn } from '@/lib/utils';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { AvatarCircles } from "@/components/ui/avatar-circles";

// Constants for reusability
const STAR_RATING = '⭐';
const GOOGLE_REVIEW_TEXT = 'Over 50+ students taught';
const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/134979887?v=4",
    profileUrl: "https://github.com/Blossomeze",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/134979887?v=4",
    profileUrl: "https://github.com/tomonarifeehan",
  }
];

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          'group rounded-full text-base text-white transition-all ease-in',
        )}
      >
        <AnimatedShinyText
          className={cn(
            'flex items-center justify-center py-1',
            'transition ease-out hover:text-neutral-600 hover:duration-300',
            'dark:hover:text-neutral-400',
          )}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <span key={index}>{STAR_RATING}</span>
              ))}
            </div>
            <div className="flex items-center space-x-2 py-2 md:py-0">
              <AvatarCircles numPeople={20} avatarUrls={avatars} />
              <span className="text-gray-600 hover:underline cursor-pointer">
                {GOOGLE_REVIEW_TEXT}
              </span>
            </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}