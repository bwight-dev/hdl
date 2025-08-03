import Link from 'next/link';

export default function WhoAreTheseCharactersPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">WHO ARE THESE CHARACTERS!?</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Meet the complex and compelling characters of &ldquo;Of the Noble and Great Ones&rdquo;
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Character Resources</h2>
              <Link 
                href="/spoilers/who-are-these-characters/night-characters"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View Night Characters →
              </Link>
              <p className="mt-4 text-gray-400">
                Comprehensive list of all characters introduced in the dream sequences, organized by night.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-400">Additional character profiles coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}