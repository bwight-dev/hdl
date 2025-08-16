export default function WednesdayNapPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4 text-purple-400">Wednesday Nap</h1>
        <h2 className="text-3xl italic mb-8 text-purple-300">Brief Interlude</h2>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 text-purple-400">A Moment of Rest</h3>
              <p className="text-gray-300 mb-4">
                Juke dreams briefly during his afternoon nap. The medication has made his thoughts cloudy and fragmented. 
                Images of Emily and Julian flash through his mind, but they are disjointed and unclear.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300">
                The dream world remains distant and hazy, a brief respite before the challenges of the afternoon continue. 
                Juke&apos;s spirit hovers between the waking world and the pre-mortal realm, unable to fully enter either.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}