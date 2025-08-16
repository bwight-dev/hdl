export default function MondayPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-cyan-400">Monday</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Chapters 1-8: A Day in Juke&apos;s Life
          </p>
          
          <div className="space-y-8">
            {/* Chapter 1 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 1: The Eternal Questions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke, a 19-year-old with profound intellectual disability and autism</li>
                <li>Struggles with bathroom needs</li>
                <li>Has an accident</li>
                <li>Beginning of a typical challenging day</li>
              </ul>
            </div>
            
            {/* Chapter 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 2: The Nose Knows</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Discussion of Mormon doctrine about pre-existence</li>
                <li>Exploration of spirits and the afterlife</li>
                <li>Theological questions about disability</li>
                <li>Questioning divine purpose and God&apos;s plan</li>
              </ul>
            </div>
            
            {/* Chapter 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 3: The Bus Waits for No One</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Difficult morning bus ride to school</li>
                <li>Behavioral challenges on the bus</li>
                <li>Juke struggles with the daily routine</li>
                <li>Tension with bus driver and aide</li>
              </ul>
            </div>
            
            {/* Chapter 4 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold mb-4 text-amber-400">Chapter 4: There but for the Grace of God Go I</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke becomes frustrated at school</li>
                <li>Moment of confusion and agitation</li>
                <li>Injures his school attendant, Ms. Grace</li>
                <li>Staff struggle to manage the situation</li>
              </ul>
            </div>
            
            {/* Chapter 5 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Chapter 5: A</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Juke placed in isolation at school</li>
                <li>Learns about the letter &ldquo;A&rdquo;</li>
                <li>Explores simple concepts in his unique way</li>
                <li>Time alone to calm down</li>
              </ul>
            </div>
            
            {/* Chapter 6 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 6: Music and the Spoken Word</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Music therapy session while in isolation</li>
                <li>Juke finds comfort in familiar songs</li>
                <li>Connection through sounds and rhythms</li>
                <li>Calming effect of music on his mood</li>
              </ul>
            </div>
            
            {/* Chapter 7 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Chapter 7: Tactical Stalemate</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Challenging bus ride home</li>
                <li>Juke refuses to get off the bus</li>
                <li>Tense standoff with driver and aide</li>
                <li>Eventually coaxed off the bus</li>
              </ul>
            </div>
            
            {/* Chapter 8 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Chapter 8: The Allure Is Gone</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Evening at home with family</li>
                <li>Watches &ldquo;Blue&apos;s Clues&rdquo; on TV</li>
                <li>Familiar bedtime routine</li>
                <li>Finding peace at the end of the day</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-300 italic">
              This narrative provides an intimate, raw portrayal of life with severe autism, 
              highlighting the daily challenges faced by Juke and his family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}