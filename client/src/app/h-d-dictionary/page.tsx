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
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="prose prose-lg prose-invert max-w-none dictionary-content">
              {dictionaryData?.content ? (
                <Markdown
                  components={{
                    p: ({ children }) => <p className="mb-6">{children}</p>,
                    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
                    em: ({ children }) => <em className="text-gray-300 italic">{children}</em>,
                  }}
                >
                  {dictionaryData.content}
                </Markdown>
              ) : (
                /* Static content as fallback */
                <div className="space-y-8 text-lg">
                  <p className="border-b border-gray-700 pb-2 mb-6 text-gray-400">* * * * *</p>
                  
                  <div>
                    <p><strong>867.4 quadrillion</strong> <em>n</em> : the hypothetical number of eternal spirits; a proxy for &ldquo;infinite&rdquo; for pre-mortal comprehension</p>
                  </div>
                  
                  <div>
                    <p><strong>advanced</strong> <em>adj</em> <strong>1</strong> : having accumulated net-positive experience : aged (well) <strong>2</strong> : the degree of accumulation of net-positive experience — <strong>exceedingly advanced</strong> <em>adj</em> : ancient — <strong>far advanced</strong> <em>adj</em> : old — <strong>newly advanced</strong> <em>adj</em> : young — <strong>not-too-far-advanced</strong> <em>adj</em> : teenage <strong>3</strong> : of a higher quality or progression — <strong>advance</strong> <em>v</em> (progress) <strong>4</strong> : a significant accumulation</p>
                  </div>
                  
                  <div>
                    <p><strong>Angel</strong> <em>n</em> : an eternal spirit who does not follow Righteousness : evil spirit — <strong>Angelic</strong> <em>adj</em></p>
                  </div>
                  
                  <div>
                    <p><strong>Armory</strong> <em>n</em> : the Righteous temple for the performance of rituals or the receipt of spiritual knowledge</p>
                  </div>
                  
                  <div>
                    <p><strong>as born as a birthday</strong> <em>adj phr</em> : ironic expression for &ldquo;certainly born&rdquo; (ironic because anniversa-ries are meaningless in eternity) : as dead as a doornail : certain-ly dead</p>
                  </div>
                  
                  <div>
                    <p><strong>Aufklärung</strong> <em>n</em> <strong>1</strong> : in Righteous theology, a divine endowment of wisdom received in preparation for birth to help overcome, endure, understand, or comprehend great challenges <strong>2</strong> : enlightenment</p>
                  </div>
                  
                  <div>
                    <p><strong>Balaam</strong> <em>n</em> : a God infamous for conversing with His ass</p>
                  </div>
                  
                  <div>
                    <p><strong>bewonderment</strong> <em>n</em> : amazement or difficulty in believing a practice or course of conduct exists or per-sists, particularly with respect to Righteousness — <strong>bewonder</strong> <em>n</em> — <em>v</em></p>
                  </div>
                  
                  <div>
                    <p><strong>dream</strong> <em>n</em> : how things could be — <strong>nightmare</strong> <em>n</em> (disadvanced dream); <em>see</em> <strong>life</strong></p>
                  </div>
                  
                  <div>
                    <p><strong>eternal spirit</strong> <em>n</em> <strong>1</strong> : an individual woman, man, or child : human being : person : soul <strong>2</strong> : an individual woman, man, or child living in the pre-Existence <strong>3</strong> : any living organism</p>
                  </div>
                  
                  <div>
                    <p><strong>Heavenly Dream Logic</strong> <em>n</em> <strong>1</strong> : whenever reason without language or math <strong>2</strong> : thinking primarily by sense or the senses; sensational thought — <strong>get in tune</strong> <em>v phr</em> (decipher H.D. Logic) <strong>3</strong> : perception less inhibited by time and custom <strong>4</strong> : the Ghost of Future Present <strong>5</strong> : the surrogate for a separate consciousness (anonymous) <strong>6</strong> : the author of <em>The Scriptures</em> <strong>7</strong> : the mouthpiece, voice, and interpsychographer <strong>8</strong> : a caregiver <strong>9</strong> : Me!</p>
                  </div>
                  
                  <div>
                    <p><strong>life</strong> <em>n</em> <strong>1</strong> : the existence of an eternal spirit <strong>2</strong> : one; one thing <strong>3</strong> : a precious gift (unexpected) <strong>4</strong> : the greatest book whenever written</p>
                  </div>
                  
                  <div>
                    <p><strong>whenever</strong> <em>n</em> <strong>1</strong> : Eternal God <strong>2</strong> : unit of eternal time (always indeterminate) : instant : minute : moment : second : time</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}