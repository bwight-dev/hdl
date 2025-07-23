import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HD Logic</h3>
            <p className="text-gray-400 italic">
              Whenever reason without language or math<br />
              and be sensational
            </p>
          </div>
          
          {/* Contact section */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <a 
              href="mailto:h.d.logic@icloud.com" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg inline-block transition"
            >
              h.d.logic@icloud.com
            </a>
          </div>
          
          {/* Author section */}
          <div className="text-right">
            <div className="inline-block">
              <Image
                src="/author-photo.jpg"
                alt="Author"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}