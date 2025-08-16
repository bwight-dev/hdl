export default function WednesdayMorningPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-cyan-400">Wednesday Morning</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Chapters 17-20
          </p>
          
          <div className="space-y-8">
            {/* Chapter 17 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 17: Routine Procedures</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke wakes up with Mom sleeping in the recliner next to his bed</li>
                <li>Dad is in the next room</li>
                <li>Dad teases Juke about his hygiene</li>
                <li>Mom carefully prepares Juke for the day</li>
              </ul>
            </div>
            
            {/* Chapter 18 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 18: Waffling</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke sits in Dad&apos;s office wanting to listen to songs</li>
                <li>Dad is working and initially won&apos;t play songs</li>
                <li>Dad eventually makes waffles, plays songs, and feeds Juke</li>
                <li>Mom is upset about potential group home placement for Juke</li>
              </ul>
            </div>
            
            {/* Chapter 19 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 19: To Leave Office</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke is in Dad&apos;s office listening to unfamiliar songs</li>
                <li>Mom discusses potential placements with Dad</li>
                <li>No placements seem likely to have openings</li>
                <li>Juke is thirsty and bored</li>
                <li>Juke has a bowel movement, and Dad helps clean him up</li>
              </ul>
            </div>
            
            {/* Chapter 20 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 20: Admission Impossible</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Mom feeds Juke lunch and talks on the phone</li>
                <li>Juke drops a bagel bite on the floor</li>
                <li>Mom trips while trying to stop Juke from eating it</li>
                <li>Ms. Joyce calls about a potential placement at &ldquo;Planter&rdquo;</li>
                <li>Mr. Jacobsen arrives with paperwork</li>
                <li>Juke falls asleep in Dad&apos;s office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}