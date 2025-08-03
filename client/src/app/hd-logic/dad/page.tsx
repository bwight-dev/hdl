import Image from 'next/image';

export default function DadPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">DAD</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <p className="text-xl mb-6 italic">
              &ldquo;I&apos;ve spent 28 years listening to him, and this book is my best approximation of what Juke has to say.&rdquo;
            </p>
            
            <p className="text-lg mb-6">
              Dad is Juke&apos;s father. This book represents a love letter between father and son, a testament to their 
              enduring relationship through the challenges and joys of life with profound disability.
            </p>
            
            <p className="text-lg">
              Through decades of careful observation, patient listening, and deep love, Dad has learned to understand 
              Juke&apos;s unique form of communication and has helped share his son&apos;s voice with the world.
            </p>
          </div>
          
          {/* Placeholder for images */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-80 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Juke pushing his dad in a wheelchair (March 9, 2013)</span>
              </div>
              <p className="text-center text-gray-400">Juke pushing his dad in a wheelchair - March 9, 2013</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-80 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Dad (August 2023)</span>
              </div>
              <p className="text-center text-gray-400">Dad - August 2023</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-80 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Dad portrait</span>
              </div>
              <p className="text-center text-gray-400">Dad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}