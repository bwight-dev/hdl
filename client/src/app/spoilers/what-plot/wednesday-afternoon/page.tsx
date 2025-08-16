export default function WednesdayAfternoonPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-cyan-400">Wednesday Afternoon</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Chapters 21-24
          </p>
          
          <div className="space-y-8">
            {/* Chapter 21 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 21: <em>Diver Down</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Dad wakes Juke from a nap to run errands</li>
                <li>Juke gets an extra medication dose</li>
                <li>Family listens to Van Halen while driving to Target</li>
                <li>At Target, Juke thinks he needs a bathroom visit but it&apos;s a false alarm</li>
                <li>He falls into a Pepsi promotional display</li>
                <li>They buy supplies for Juke&apos;s upcoming group home move</li>
              </ul>
            </div>
            
            {/* Chapter 22 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 22: <em>Secrets of M</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke&apos;s thinking becomes erratic due to increased medication</li>
                <li>Dad and Juke stop at McDonald&apos;s for French fries</li>
                <li>Juke is curious about the &ldquo;M&rdquo; on the drive-through attendant&apos;s shirt</li>
                <li>Mom receives news that Planter found a residence for Juke</li>
                <li>The residence is for the most severe cases</li>
                <li>Family goes for a walk with Juke in a wheelchair</li>
              </ul>
            </div>
            
            {/* Chapter 23 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 23: <em>The Eggs Have It</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke eats eggs for dinner (a dietary staple)</li>
                <li>He contemplates different egg preparation methods</li>
                <li>Mom and Dad discuss Juke&apos;s placement at Planter</li>
              </ul>
            </div>
            
            {/* Chapter 24 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 24: <em>The Cold Hard Facts of Science</em></h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke takes evening medication</li>
                <li>Increased dose continues to affect his thinking</li>
                <li>Family watches music videos while Juke dances</li>
                <li>Mom and Dad discuss Juke&apos;s challenges and life&apos;s fairness</li>
                <li>Mom packs Juke&apos;s things</li>
                <li>Mom puts Juke to bed, lies next to him, and cries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}