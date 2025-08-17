'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface DayPageLayoutProps {
  title: string;
  subtitle?: string;
  currentDay: number;
  children: ReactNode;
}

const dayOrder = [
  { name: 'Monday', path: '/spoilers/what-plot/monday' },
  { name: 'Tuesday', path: '/spoilers/what-plot/tuesday' },
  { name: 'Wednesday Morning', path: '/spoilers/what-plot/wednesday-morning' },
  { name: 'Wednesday Afternoon', path: '/spoilers/what-plot/wednesday-afternoon' },
  { name: 'Thursday', path: '/spoilers/what-plot/thursday' },
  { name: 'Friday', path: '/spoilers/what-plot/friday' },
  { name: 'Saturday', path: '/spoilers/what-plot/saturday' },
  { name: 'Sunday', path: '/spoilers/what-plot/sunday' },
  { name: 'Monday Dawning', path: '/spoilers/what-plot/monday-dawning' },
];

export default function DayPageLayout({ title, subtitle, currentDay, children }: DayPageLayoutProps) {
  const prevDay = currentDay > 0 ? dayOrder[currentDay - 1] : null;
  const nextDay = currentDay < dayOrder.length - 1 ? dayOrder[currentDay + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-950/20 to-gray-900">
      {/* Navigation Header */}
      <div className="fixed top-20 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/spoilers/what-plot" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                What Plot
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-300">Days</span>
              <span className="text-gray-500">/</span>
              <span className="text-cyan-300">{title}</span>
            </nav>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Day {currentDay + 1} of {dayOrder.length}</span>
              <div className="flex space-x-1">
                {dayOrder.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentDay ? 'bg-cyan-400' : i < currentDay ? 'bg-cyan-600' : 'bg-gray-600'
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
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-3xl italic text-cyan-300/80">{subtitle}</h2>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {children}
          </div>

          {/* Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-cyan-500/20">
            <div className="flex justify-between items-center">
              {prevDay ? (
                <Link
                  href={prevDay.path}
                  className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>{prevDay.name}</span>
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

              {nextDay ? (
                <Link
                  href={nextDay.path}
                  className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{nextDay.name}</span>
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