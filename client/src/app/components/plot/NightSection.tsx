import { ReactNode } from 'react';

export type SectionType = 'intro' | 'narrative' | 'battle' | 'spiritual' | 'resolution' | 'quote';

interface NightSectionProps {
  type?: SectionType;
  title?: string;
  children: ReactNode;
}

const sectionStyles: Record<SectionType, {
  container: string;
  icon?: ReactNode;
  titleColor: string;
}> = {
  intro: {
    container: 'bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleColor: 'text-purple-400',
  },
  narrative: {
    container: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg',
    titleColor: 'text-gray-100',
  },
  battle: {
    container: 'bg-gradient-to-br from-red-900/30 to-orange-900/20 backdrop-blur-sm border border-red-500/30 shadow-xl shadow-red-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleColor: 'text-red-400',
  },
  spiritual: {
    container: 'bg-gradient-to-br from-blue-900/30 to-indigo-900/20 backdrop-blur-sm border border-blue-500/30 shadow-xl shadow-blue-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    titleColor: 'text-blue-400',
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
  quote: {
    container: 'bg-gradient-to-br from-amber-900/30 to-yellow-900/20 backdrop-blur-sm border border-amber-500/30 shadow-xl shadow-amber-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titleColor: 'text-amber-400',
  },
};

export default function NightSection({ type = 'narrative', title, children }: NightSectionProps) {
  const style = sectionStyles[type];

  return (
    <div className={`rounded-xl p-8 transition-all hover:shadow-2xl ${style.container}`}>
      {title && (
        <div className="flex items-center space-x-2 mb-4">
          {style.icon && <span className={style.titleColor}>{style.icon}</span>}
          <h3 className={`text-2xl font-bold ${style.titleColor}`}>{title}</h3>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}