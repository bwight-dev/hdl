import Link from "next/link";

export default function BookDescriptionSection({ data }: { data: any }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl font-semibold">
            I can't talk. I can't care for myself. My perfect Mormon family is in crisis. 
            And it's only Monday.
          </p>
          
          <p>
            Inspired by reality, <em>Of the Noble and Great Ones</em> is the award-winning 
            inside story of one intellectually disabled autistic teenager's triumphant 
            nightmare quest to solve the riddles of life and eternity:
          </p>
          
          <p className="text-gray-300 italic text-xl my-8">
            Why was I born this way? How do I stop abuse? Where do I go to the bathroom?
          </p>
          
          <p>
            Our hero Juke must master these secrets and quit attacking his caregivers or 
            face his greatest test: being torn from his family and placed in a group home 
            with strangers.
          </p>
          
          <p>
            Juke finds respite in lucid dreams of a spirit world before any of us were born, 
            where valiant Emily and brave Julian battle Wickedness in the timeless war against truth.
          </p>
          
          <p>
            As revealed by H.D. LOGIC, channeling Juke's genius inner voice, 
            <em>Of the Noble and Great Ones</em> is the literary novel and modern spiritual 
            epic as complex and sensational as the human beings with disabilities in your life.
          </p>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold mb-6">
              Are you ready to get inside Juke's head?
            </p>
            <Link 
              href={data?.buyLink || '#'}
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 text-xl transform transition hover:scale-105 shadow-lg"
            >
              BUY NOW
            </Link>
            <p className="mt-4 text-lg">
              and have everything you believe primed for rebirth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}