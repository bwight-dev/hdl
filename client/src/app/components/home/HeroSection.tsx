import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { HomePageData } from '@/types/strapi';

export default function HeroSection({ data }: { data: HomePageData }) {
  // Fix the image URL path - bookCover is directly on data, not nested
  const imageUrl = data?.bookCover?.url || '/book-cover.jpg';

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Rich text subtitle */}
            {data?.richsubtitle && (
              <div className="text-red-600 text-lg mb-4 text-center font-bold [&_u]:text-cyan-500">
                <BlocksRenderer content={data.richsubtitle} />
              </div>
            )}
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-center">
              <span className="italic">Of the</span><br />
              <span className="text-6xl lg:text-8xl">NOBLE</span><br />
              <span className="italic">and</span><br />
              <span className="text-6xl lg:text-8xl">GREAT</span><br />
              <span className="italic text-5xl lg:text-6xl">Ones</span>
            </h1>
            <div className="text-center">
              <Link 
                href={data?.buyLink || '#'}
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 text-xl transform transition hover:scale-105 shadow-lg"
              >
                BUY THE BOOK
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={imageUrl}
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