import HeroSection from './components/home/HeroSection';
import AwardsSection from './components/home/AwardsSection';
import BookDescriptionSection from './components/home/BookDescriptionSection';

async function getHomePageData() {
  try {
    const response = await fetch('http://localhost:1337/api/home-page?populate=*', {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return null;
  }
}

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <div className="pt-20"> {/* Account for fixed header */}
      <HeroSection data={data} />
      <BookDescriptionSection data={data} />
      <AwardsSection data={data} />
    </div>
  );
}