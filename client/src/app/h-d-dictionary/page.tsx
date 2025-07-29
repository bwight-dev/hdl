import Image from 'next/image';
import Markdown from 'react-markdown';

async function getDictionaryData() {
  try {
    // Try with populate for backgroundImage
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/hd-dictionary-page?populate=backgroundImage`;
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      console.error('Response not OK:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return null;
    }
    
    const data = await response.json();
    console.log('Fetched dictionary data:', JSON.stringify(data, null, 2));
    
    // Check if it's a single type response structure
    if (data.data) {
      return data.data;
    }
    // Sometimes single types return the data directly
    return data;
  } catch (error) {
    console.error('Error fetching dictionary data:', error);
    return null;
  }
}

export default async function HDDictionaryPage() {
  const dictionaryData = await getDictionaryData();
  const backgroundImage = dictionaryData?.backgroundImage?.url;
  
  // Debug logging
  console.log('Dictionary data in component:', dictionaryData);
  console.log('Background image URL:', backgroundImage);
  console.log('Content:', dictionaryData?.content);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
            {dictionaryData?.title || 'H.D. DICTIONARY'}
            <div className="w-32 h-1 bg-cyan-400 mx-auto mt-4" />
          </h1>
          
          {/* Subtitle */}
          {dictionaryData?.subtitle && (
            <div className="text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
              <Markdown>
                {dictionaryData.subtitle}
              </Markdown>
            </div>
          )}
          
          {/* Dictionary Content */}
          {dictionaryData?.content ? (
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-800">
              <div className="prose prose-lg prose-invert max-w-none dictionary-content">
                <Markdown
                  components={{
                    p: ({ children }) => <p className="mb-6">{children}</p>,
                    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
                    em: ({ children }) => <em className="text-gray-300 italic">{children}</em>,
                  }}
                >
                  {dictionaryData.content}
                </Markdown>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <p className="text-gray-400">Dictionary entries coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}