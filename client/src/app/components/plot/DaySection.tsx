import { ReactNode } from 'react';

export type DaySectionType = 'chapter' | 'narrative' | 'theological' | 'challenge' | 'resolution' | 'summary';

interface DaySectionProps {
  type?: DaySectionType;
  title?: string;
  chapterNumber?: number;
  children: ReactNode;
}

const sectionStyles: Record<DaySectionType, {
  container: string;
  icon?: ReactNode;
  titleColor: string;
}> = {
  chapter: {
    container: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 shadow-xl shadow-cyan-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    titleColor: 'text-cyan-400',
  },
  narrative: {
    container: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg',
    titleColor: 'text-gray-100',
  },
  theological: {
    container: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm border border-indigo-500/30 shadow-xl shadow-indigo-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    titleColor: 'text-indigo-400',
  },
  challenge: {
    container: 'bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-sm border border-amber-500/30 shadow-xl shadow-amber-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    titleColor: 'text-amber-400',
  },
  resolution: {
    container: 'bg-gradient-to-br from-green-900/30 to-emerald-900/20 backdrop-blur-sm border border-green-500/30 shadow-xl shadow-green-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleColor: 'text-green-400',
  },
  summary: {
    container: 'bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 shadow-xl',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    titleColor: 'text-gray-300',
  },
};

export default function DaySection({ type = 'narrative', title, chapterNumber, children }: DaySectionProps) {
  const style = sectionStyles[type];

  return (
    <div className={`rounded-xl p-8 transition-all hover:shadow-2xl ${style.container}`}>
      {(title || chapterNumber) && (
        <div className="flex items-center space-x-2 mb-4">
          {style.icon && <span className={style.titleColor}>{style.icon}</span>}
          <h2 className={`text-2xl font-bold ${style.titleColor}`}>
            {chapterNumber && `Chapter ${chapterNumber}: `}{title}
          </h2>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}