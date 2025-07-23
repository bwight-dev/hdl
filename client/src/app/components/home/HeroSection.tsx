import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ data }: { data: any }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <p className="text-blue-400 text-lg mb-4">
              The Truest Story Whenever Told about Life and{' '}
              <span className="text-blue-500 underline">Disabilities</span>
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="italic">Of the</span><br />
              <span className="text-6xl lg:text-8xl">NOBLE</span><br />
              <span className="italic">and</span><br />
              <span className="text-6xl lg:text-8xl">GREAT</span><br />
              <span className="italic text-5xl lg:text-6xl">Ones</span>
            </h1>
            
            <Link 
              href={data?.buyLink || '#'}
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 text-xl transform transition hover:scale-105 shadow-lg"
            >
              BUY THE BOOK
            </Link>
          </div>
          
          {/* Right side - Book cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={data?.bookCover?.data?.attributes?.url || '/book-cover.jpg'}
                alt="Of the Noble and Great Ones book cover"
                width={500}
                height={750}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}