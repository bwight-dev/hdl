import Image from 'next/image';

export default function AwardsSection({ data }: { data: any }) {
  // This would come from Strapi
  const awards = data?.awards || [
    {
      id: 1,
      title: "Literary Titan Book Award",
      subtitle: "Gold Book Award",
      image: "/award-literary-titan.png"
    },
    {
      id: 2,
      title: "Feathered Quill Book Awards",
      subtitle: "Bronze Medalist - Adult Fiction (2025)",
      image: "/award-feathered-quill.png"
    },
    {
      id: 3,
      title: "2024 WINNER",
      subtitle: "SPEAK UP TALK RADIO FIREBIRD BOOK AWARDS",
      description: "2024 Firebird Book Award Grand Prize in Special Needs and First Prize in Literary Fiction",
      image: "/award-firebird.png"
    },
    {
      id: 4,
      title: "HUMOR & SATIRE Awards",
      subtitle: "2023 CIBAs Mark Twain Award Long List for Humor and Satire",
      image: "/award-humor-satire.png"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Awards & Recognition
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award: any) => (
            <div 
              key={award.id}
              className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition duration-300 border border-gray-800 hover:border-amber-500"
            >
              <div className="h-40 flex items-center justify-center mb-4">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{award.title}</h3>
              <p className="text-gray-400 text-sm">{award.subtitle}</p>
              {award.description && (
                <p className="text-gray-500 text-xs mt-2">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}