import HeroSection from './components/home/HeroSection';
import AwardsSection from './components/home/AwardsSection';
import BookDescriptionSection from './components/home/BookDescriptionSection';

// In src/app/page.tsx
async function getHomePageData() {
  try {
    const response = await fetch('http://localhost:1337/api/home-page?populate[bookCover][populate]=*&populate[awards][populate]=*', {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    
    const data = await response.json();
    console.log('Fetched home page data:', data);
    console.log(JSON.stringify(data.data.richsubtitle, null, 2));
    return data.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    // Return mock data for development
    return {
      title: "Hello NextJs",
      subtitle: "The Truest Story Whenever Told about Life and Disabilities",
      heroText: "Hello NextJs",
      buyLink: "#",
      bookCover: null,
      awards: []
    };
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