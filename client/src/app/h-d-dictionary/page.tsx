import { dictionaryEntries } from './dictionary-data';

export default function HDDictionaryPage() {
  return (
    <div className="min-h-screen relative">      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
            H.D. DiCTiONARY
            <div className="w-32 h-1 bg-cyan-400 mx-auto mt-4" />
          </h1>
          
          {/* Dictionary Content */}
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="prose prose-lg prose-invert max-w-none dictionary-content">
                <div className="space-y-6 text-lg">
                  <p className="border-b border-gray-700 pb-2 mb-6 text-gray-400 text-center">* * * * *</p>
                  
                  {dictionaryEntries.map((entry, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                      <p className="leading-relaxed">
                        <strong className="text-cyan-400">{entry.term}</strong>{' '}
                        <em className="text-gray-400">{entry.type}</em>{' '}
                        <span className="text-gray-300">
                          {entry.definition.split(' — ').map((part, i) => (
                            <span key={i}>
                              {i > 0 && <span className="text-gray-500"> — </span>}
                              {part.replace(/\b(\d+)\s*:/g, (match, num) => (
                                `${num} :`
                              ))}
                            </span>
                          ))}
                        </span>
                      </p>
                    </div>
                  ))}
                  
                  <p className="border-t border-gray-700 pt-6 mt-8 text-gray-400 text-center">* * * * *</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}