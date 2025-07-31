'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spoilersOpen, setSpoilersOpen] = useState(false);
  const [hdLogicOpen, setHdLogicOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  
  // Fetch logo data on mount
  useEffect(() => {
    async function fetchLogo() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`);
        const data = await response.json();
        setLogoUrl(data.data?.image?.url || null);
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    }
    fetchLogo();
  }, []);
  
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
                width={150}
                height={60}
                className="h-12 w-auto"
                priority
              />
            ) : (
              <span className="text-3xl font-bold tracking-tight">HD Logic</span>
            )}
          </Link>
          
          {/* Desktop Navigation */}
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
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/spoilers/what-plot" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  WHAT PLOT!?
                </Link>
                <Link href="/spoilers/who-are-these-characters" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  WHO ARE THESE CHARACTERS!?
                </Link>
                <Link href="/spoilers/degrees-of-dream-interpretation" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors rounded-b-lg">
                  DEGREES OF DREAM INTERPRETATION
                </Link>
              </div>
            </div>
            <Link href="/h-d-dictionary" className="hover:text-amber-400 transition">
              H.D. DICTIONARY
            </Link>
            <div className="relative group">
              <button className="hover:text-amber-400 transition flex items-center">
                H.D. LOGIC
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* H.D. Logic Dropdown menu */}
              <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/hd-logic/bio" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  BIO
                </Link>
                <Link href="/hd-logic/jukevoice" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  JUKEVOICE
                </Link>
                <Link href="/hd-logic/definition" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  DEFINITION
                </Link>
                <Link href="/hd-logic/dad" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors border-b border-gray-800">
                  DAD
                </Link>
                <Link href="/hd-logic/emily" className="block px-6 py-3 hover:bg-gray-800 hover:text-amber-400 transition-colors rounded-b-lg">
                  EMILY
                </Link>
              </div>
            </div>
            <Link href="/songs" className="hover:text-amber-400 transition">
              SONGS
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="py-4 space-y-4">
              <Link href="/" className="block py-2 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
              
              {/* SPOILERS!? Mobile Dropdown */}
              <div>
                <button 
                  className="w-full text-left py-2 hover:text-amber-400 transition flex items-center justify-between"
                  onClick={() => setSpoilersOpen(!spoilersOpen)}
                >
                  SPOILERS!?
                  <svg className={`w-4 h-4 transition-transform ${spoilersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {spoilersOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      href="/spoilers/what-plot" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      WHAT PLOT!?
                    </Link>
                    <Link 
                      href="/spoilers/who-are-these-characters" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      WHO ARE THESE CHARACTERS!?
                    </Link>
                    <Link 
                      href="/spoilers/degrees-of-dream-interpretation" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      DEGREES OF DREAM INTERPRETATION
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/h-d-dictionary" className="block py-2 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                H.D. DICTIONARY
              </Link>
              
              {/* H.D. LOGIC Mobile Dropdown */}
              <div>
                <button 
                  className="w-full text-left py-2 hover:text-amber-400 transition flex items-center justify-between"
                  onClick={() => setHdLogicOpen(!hdLogicOpen)}
                >
                  H.D. LOGIC
                  <svg className={`w-4 h-4 transition-transform ${hdLogicOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {hdLogicOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      href="/hd-logic/bio" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      BIO
                    </Link>
                    <Link 
                      href="/hd-logic/jukevoice" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      JUKEVOICE
                    </Link>
                    <Link 
                      href="/hd-logic/definition" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      DEFINITION
                    </Link>
                    <Link 
                      href="/hd-logic/dad" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      DAD
                    </Link>
                    <Link 
                      href="/hd-logic/emily" 
                      className="block py-2 text-gray-300 hover:text-amber-400 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      EMILY
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/songs" className="block py-2 hover:text-amber-400 transition" onClick={() => setMobileMenuOpen(false)}>
                SONGS
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}