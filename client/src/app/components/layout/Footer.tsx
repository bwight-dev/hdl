import Link from 'next/link';
import Image from 'next/image';

async function getFooterData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer?populate=*`);
    const data = await response.json();
    //console.log('Fetched footer data:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching footer:', error);
    return null;
  }
}

export default async function Footer() {
  const footerData = await getFooterData();
  console.log('Footer data:', footerData);
  const footerImage = footerData?.image?.url || null;
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
              {footerImage ? (
              <Image
                src={footerImage}
                alt="Author"
                width={120}
                height={120}
                className="rounded-full"
              />
              ) : (
                <div className="w-30 h-30 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">Author</span>
                </div>
              )}
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