import Link from 'next/link';
import Image from 'next/image';

async function getLogoData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`);
    const data = await response.json();
    //console.log('Fetched logo data:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching logo:', error);
    return null;
  }
}

export default async function Header() {
  const logoData = await getLogoData();
  const logoUrl = logoData?.image?.url || null;
  return (
    <header className="w-full bg-black/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="HD Logic"
                width={150}  // Adjust size as needed
                height={60}   // Adjust size as needed
                className="h-12 w-auto"  // This maintains aspect ratio
                priority
              />
            ) : (
              <span className="text-3xl font-bold tracking-tight">HD Logic</span>
            )}
          </Link>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-amber-400 transition">
              HOME
            </Link>
            <div className="relative group">
              <button className="hover:text-amber-400 transition flex items-center">
                SPOILERS!? 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/dictionary" className="hover:text-amber-400 transition">
              H.D. DICTIONARY
            </Link>
            <div className="relative group">
              <button className="hover:text-amber-400 transition flex items-center">
                H.D. LOGIC
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/songs" className="hover:text-amber-400 transition">
              SONGS
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}