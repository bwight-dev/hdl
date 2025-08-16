export default function DegreesOfDreamInterpretationPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">DEGREES OF DREAM INTERPRETATION</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8 italic">
            &ldquo;Everything is a riddle, particularly Juke&apos;s dreams.&rdquo;
          </p>
          
          <div className="space-y-8">
            {/* Outer Darkness */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-gray-600">
              <h2 className="text-3xl font-bold mb-4 text-gray-400">Outer Darkness: Zero Degrees</h2>
              <p className="text-lg text-gray-300">
                Dreams are a &ldquo;monotonous, confusing, frustrating, obscure, pointless, and contrived fantasy trip.&rdquo;
              </p>
            </div>
            
            {/* Telestial Glory */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-amber-600">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">Telestial Glory: First Degree</h2>
              <p className="text-lg text-gray-300">
                Provides insight into experiencing life with autism and profound intellectual disability. 
                The dream maintains its confusing nature while offering empathy and understanding.
              </p>
            </div>
            
            {/* Terrestrial Glory */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Terrestrial Glory: Second Degree</h2>
              <p className="text-lg text-gray-300">
                Dreams precisely parallel Juke&apos;s daily experiences. Patterns become recognizable, 
                transforming confusion into solvable riddles.
              </p>
            </div>
            
            {/* Celestial Glory - Lowest Tier */}
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-purple-600">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">Celestial Glory: Lowest Tier</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Explores a faith crisis through a reimagining of the biblical Genesis story.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Focuses on Mormon doctrine about spirits with disabilities</li>
                  <li>Centers on the choice of existence and birth</li>
                  <li>Questions the nature of divine purpose and human suffering</li>
                </ul>
              </div>
            </div>
            
            {/* Higher Tiers */}
            <div className="bg-gradient-to-r from-purple-900 to-amber-900 rounded-lg p-8 border-2 border-amber-400">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">Higher Tiers of Celestial Glory</h2>
              <p className="text-lg text-gray-300 mb-4">
                Details not fully revealed. The highest degrees of interpretation transcend 
                conventional understanding.
              </p>
              <p className="text-lg text-amber-400 italic">
                Interested parties are invited to contact: 
                <a href="mailto:h.d.logic@icloud.com" className="underline hover:text-amber-300 ml-2">
                  h.d.logic@icloud.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center">
            <blockquote className="text-xl italic text-amber-400">
              Dreams are complex, multilayered experiences that can be interpreted at different depths, 
              with each level offering new understanding.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}