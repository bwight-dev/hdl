import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-red-500 font-semibold">
                  The Truest Story Whenever<br />
                  Told about Life and<br />
                  Disabilities
                </p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="italic">Of the</span><br />
                  <span className="text-white">NOBLE</span><br />
                  <span className="italic">and</span><br />
                  <span className="text-white">GREAT</span><br />
                  <span className="italic">Ones</span>
                </h1>
              </div>
              
              <a 
                href="https://www.amazon.com/dp/B0CD8N17C2?ref_=cm_sw_r_cp_ud_dp_AEXRWPK28SS4HTJYEZ80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 text-lg"
              >
                BUY THE BOOK
              </a>
            </div>
            
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30" />
                <Image
                  src="/images/Of-the-Noble-and-Great-Ones-Ebook-642x1024.jpg"
                  alt="Of the Noble and Great Ones Book Cover"
                  width={400}
                  height={640}
                  className="relative rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Description Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl font-bold text-cyan-400">
              I can&apos;t talk. I can&apos;t care for myself. My perfect Mormon family is in crisis. And it&apos;s only Monday.
            </p>
            
            <p>
              Inspired by reality, <em>Of the Noble and Great Ones</em> is the award-winning inside story of one 
              intellectually disabled autistic teenager&apos;s triumphant nightmare quest to solve the riddles of life and eternity:
            </p>
            
            <p className="text-lg italic text-purple-300">
              Why was I born this way? How do I stop abuse? Where do I go to the bathroom?
            </p>
            
            <p>
              Our hero Juke must master these secrets and quit attacking his caregivers or face his greatest test: 
              being torn from his family and placed in a group home with strangers.
            </p>
            
            <p>
              Juke finds respite in lucid dreams of a spirit world before any of us were born, where valiant Emily 
              and brave Julian battle Wickedness in the timeless war against truth.
            </p>
            
            <p>
              As revealed by H.D. LOGiC, channeling Juke&apos;s genius inner voice, <em>Of the Noble and Great Ones</em> is 
              the literary novel and modern spiritual epic as complex and sensational as the human beings with 
              disabilities in your life.
            </p>
            
            <p className="text-xl font-bold text-center mt-12">
              Are you ready to get inside Juke&apos;s head? <span className="text-cyan-400">BUY NOW</span> and have 
              everything you believe primed for rebirth.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Awards & Recognition</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Literary Titan Gold */}
            <div className="text-center space-y-4">
              <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                <Image
                  src="/images/Literary-Titan-Gold-Book-Award-1009x1024.png"
                  alt="Literary Titan Gold Book Award"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">Literary Titan Gold Book Award</h3>
            </div>
            
            {/* Feathered Quill Bronze */}
            <div className="text-center space-y-4">
              <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                <Image
                  src="/images/Bronze.png"
                  alt="Feathered Quill Bronze Medal"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">Feathered Quill Book Awards<br />Bronze Medalist<br />Adult Fiction (2025)</h3>
            </div>
            
            {/* Firebird Award */}
            <div className="text-center space-y-4">
              <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                <Image
                  src="/images/CertApril2024-HD-Logic-768x432-2.jpg"
                  alt="2024 Firebird Book Award"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">2024 Firebird Book Award<br />Grand Prize in Special Needs<br />First Prize in Literary Fiction</h3>
            </div>
            
            {/* Mark Twain Award */}
            <div className="text-center space-y-4">
              <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
                <Image
                  src="/images/Humor-Awards.jpg-2.webp"
                  alt="2023 CIBAs Mark Twain Award"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">2023 CIBAs Mark Twain Award<br />Long List<br />for Humor and Satire</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}