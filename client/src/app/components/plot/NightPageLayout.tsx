'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface NightPageLayoutProps {
  title: string;
  subtitle: string;
  currentNight: number;
  children: ReactNode;
}

const nightOrder = [
  { name: 'Monday Night', path: '/spoilers/what-plot/monday-night' },
  { name: 'Tuesday Night', path: '/spoilers/what-plot/tuesday-night' },
  { name: 'Wednesday Nap', path: '/spoilers/what-plot/wednesday-nap' },
  { name: 'Wednesday Night', path: '/spoilers/what-plot/wednesday-night' },
  { name: 'Thursday Night', path: '/spoilers/what-plot/thursday-night' },
  { name: 'Friday Night', path: '/spoilers/what-plot/friday-night' },
  { name: 'Saturday Night', path: '/spoilers/what-plot/saturday-night' },
  { name: 'Sunday Night', path: '/spoilers/what-plot/sunday-night' },
];

export default function NightPageLayout({ title, subtitle, currentNight, children }: NightPageLayoutProps) {
  const prevNight = currentNight > 0 ? nightOrder[currentNight - 1] : null;
  const nextNight = currentNight < nightOrder.length - 1 ? nightOrder[currentNight + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950/20 to-gray-900">
      {/* Navigation Header */}
      <div className="fixed top-20 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/spoilers/what-plot" className="text-purple-400 hover:text-purple-300 transition-colors">
                What Plot
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-300">Nights</span>
              <span className="text-gray-500">/</span>
              <span className="text-purple-300">{title}</span>
            </nav>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Night {currentNight + 1} of {nightOrder.length}</span>
              <div className="flex space-x-1">
                {nightOrder.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentNight ? 'bg-purple-400' : i < currentNight ? 'bg-purple-600' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <h2 className="text-3xl italic text-purple-300/80">{subtitle}</h2>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {children}
          </div>

          {/* Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-purple-500/20">
            <div className="flex justify-between items-center">
              {prevNight ? (
                <Link
                  href={prevNight.path}
                  className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>{prevNight.name}</span>
                </Link>
              ) : (
                <div />
              )}
              
              <Link
                href="/spoilers/what-plot"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                Back to Plot Overview
              </Link>

              {nextNight ? (
                <Link
                  href={nextNight.path}
                  className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>{nextNight.name}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}