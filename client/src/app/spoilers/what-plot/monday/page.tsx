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
              <p className="text-gray-300 mb-4">
                Juke, a 19-year-old young man with profound intellectual disability and autism, 
                struggles with bathroom needs and has an accident.
              </p>
            </div>
            
            {/* Chapter 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 2: The Nose Knows</h2>
              <p className="text-gray-300 mb-4">
                Discussion of Mormon doctrine about pre-existence and spirits, exploring 
                theological questions about disability and divine purpose.
              </p>
            </div>
            
            {/* Chapter 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 3: The Bus Waits for No One</h2>
              <p className="text-gray-300 mb-4">
                A difficult morning bus ride with behavioral challenges as Juke struggles 
                with the routine of going to school.
              </p>
            </div>
            
            {/* Chapter 4 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 4: There but for the Grace of God Go I</h2>
              <p className="text-gray-300 mb-4">
                Juke injures his school attendant, Ms. Grace, during a moment of frustration 
                and confusion.
              </p>
            </div>
            
            {/* Chapter 5 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 5: A</h2>
              <p className="text-gray-300 mb-4">
                Juke learns about the letter &ldquo;A&rdquo; and spends time in isolation at school, 
                exploring simple concepts in his unique way.
              </p>
            </div>
            
            {/* Chapter 6 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 6: Music and the Spoken Word</h2>
              <p className="text-gray-300 mb-4">
                Juke listens to music therapy from isolation, finding comfort and connection 
                through songs and sounds.
              </p>
            </div>
            
            {/* Chapter 7 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 7: Tactical Stalemate</h2>
              <p className="text-gray-300 mb-4">
                A challenging bus ride home with Juke refusing to get off the bus, creating 
                a tense standoff.
              </p>
            </div>
            
            {/* Chapter 8 */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-cyan-500">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Chapter 8: The Allure Is Gone</h2>
              <p className="text-gray-300 mb-4">
                Evening at home, watching &ldquo;Blue&apos;s Clues&rdquo; and going to bed, finding peace 
                in familiar routines.
              </p>
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