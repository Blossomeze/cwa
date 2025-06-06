'use client';

import { Cover } from '@/components/ui/cover';

// Constants for reusability
const TITLE_TEXT = 'Learn Cloud Computing with';
const HIGHLIGHT_TEXT = 'CWA Academy';

export function CoverDemo() {
  return (
    <div className="relative z-20 mx-auto max-w-7xl">
      <h1
        className="
          text-3xl md:text-6xl font-semibold 
          bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 
          dark:from-neutral-800 dark:via-white dark:to-white 
          leading-tight text-center
        "
      >
        {TITLE_TEXT} <br />
        <Cover className='mt-2'>{HIGHLIGHT_TEXT}</Cover>
      </h1>
    </div>
  );
}