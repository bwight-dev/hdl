import Link from 'next/link';

export default function WhatPlotPage() {
  const days = [
    { name: 'Monday', href: '/spoilers/what-plot/monday' },
    { name: 'Tuesday', href: '/spoilers/what-plot/tuesday' },
    { name: 'Wednesday Morning', href: '/spoilers/what-plot/wednesday-morning' },
    { name: 'Wednesday Afternoon', href: '/spoilers/what-plot/wednesday-afternoon' },
    { name: 'Thursday', href: '/spoilers/what-plot/thursday' },
    { name: 'Friday', href: '/spoilers/what-plot/friday' },
    { name: 'Saturday', href: '/spoilers/what-plot/saturday' },
    { name: 'Sunday', href: '/spoilers/what-plot/sunday' },
    { name: 'Monday Dawning', href: '/spoilers/what-plot/monday-dawning' },
  ];

  const nights = [
    { name: 'Monday Night', href: '/spoilers/what-plot/monday-night' },
    { name: 'Tuesday Night', href: '/spoilers/what-plot/tuesday-night' },
    { name: 'Wednesday Nap', href: '/spoilers/what-plot/wednesday-nap' },
    { name: 'Wednesday Night', href: '/spoilers/what-plot/wednesday-night' },
    { name: 'Thursday Night', href: '/spoilers/what-plot/thursday-night' },
    { name: 'Friday Night', href: '/spoilers/what-plot/friday-night' },
    { name: 'Saturday Night', href: '/spoilers/what-plot/saturday-night' },
    { name: 'Sunday Night', href: '/spoilers/what-plot/sunday-night' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold mb-12 text-center">WHAT PLOT!?</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Days Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">DAYS</h2>
            <div className="space-y-4">
              {days.map((day) => (
                <Link
                  key={day.name}
                  href={day.href}
                  className="block w-full text-center py-3 px-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors rounded-lg font-semibold"
                >
                  {day.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Nights Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">NIGHTS</h2>
            <div className="space-y-4">
              {nights.map((night) => (
                <Link
                  key={night.name}
                  href={night.href}
                  className="block w-full text-center py-3 px-6 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors rounded-lg font-semibold"
                >
                  {night.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}