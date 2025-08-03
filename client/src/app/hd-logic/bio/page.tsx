import Image from 'next/image';

export default function BioPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">BIO</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <p className="text-lg mb-6">
              I am one of <strong>Juke&apos;s</strong> caregivers, and I serve as his <strong>voice</strong>.
            </p>
            
            <p className="text-lg mb-6">
              <strong>Juke</strong> is a man in his late twenties with autism and profound intellectual disability.
            </p>
            
            <p className="text-lg mb-6">
              He speaks around 30 words, knows a dozen signs, and makes many noises. His favorite things are:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
              <li>Songs</li>
              <li>Pet dogs and cats</li>
              <li>Fashion (glasses and hats and jewelry)</li>
              <li>Going on outings with his family and friends</li>
              <li>Mechanical things (especially escalators and wheelchairs)</li>
              <li>Watching himself in the mirror</li>
              <li>Hot baths</li>
            </ul>
            
            <p className="text-lg mb-6">
              I call myself <strong>H.D. Logic</strong> and act as a surrogate for a separate consciousness, similar to writers like 
              Carolyn Keene (Nancy Drew mysteries), Franklin W. Dixon (The Hardy Boys), or Victor Appleton (Tom Swift). I have chosen 
              to remain anonymous.
            </p>
            
            <p className="text-lg mb-6">
              My motto is: <em className="text-amber-400">&ldquo;Whenever reason without language or math and be sensational.&rdquo;</em>
            </p>
            
            <p className="text-lg mb-6">
              I am a member of <a href="https://thearc.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">The Arc</a>, 
              the largest national community-based organization advocating for and with people with intellectual 
              and developmental disabilities. I donate all profits to The Arc.
            </p>
          </div>
          
          {/* Placeholder for images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="h-64 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">H.D. Logic Image 1</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="h-64 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">H.D. Logic Image 2</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="h-64 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">H.D. Logic Image 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}