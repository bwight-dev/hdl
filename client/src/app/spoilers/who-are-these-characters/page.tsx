import Link from 'next/link';

export default function WhoAreTheseCharactersPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">WHO ARE THESE CHARACTERS!?</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            &ldquo;Who&apos;s who&rdquo;
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex gap-6 mb-6">
                <Link 
                  href="/spoilers/who-are-these-characters/day-characters"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-xl"
                >
                  DAYS
                </Link>
                <Link 
                  href="/spoilers/who-are-these-characters/night-characters"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-xl"
                >
                  NIGHTS
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">CHARACTER SPOILERS</h2>
              <p className="text-gray-300 mb-4">
                The solutions to the character riddles
              </p>
              <p className="text-gray-400">
                For character spoilers, contact: <a href="mailto:h.d.logic@icloud.com" className="text-purple-400 hover:text-purple-300">h.d.logic@icloud.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}