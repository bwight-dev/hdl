import Link from "next/link";
import { HomePageData } from '@/types/strapi';
import Markdown from 'react-markdown';

export default function BookDescriptionSection({ data }: { data: HomePageData }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {data?.description ? (
          <div className="prose prose-lg prose-invert max-w-none">
            <Markdown
              components={{
                p: ({ children }) => <p className="mb-6 text-lg leading-relaxed">{children}</p>,
                em: ({ children }) => <em className="italic">{children}</em>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                a: ({ href, children }) => (
                  <Link 
                    href={href || '#'}
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-10 text-xl transform transition hover:scale-105 shadow-lg no-underline"
                  >
                    {children}
                  </Link>
                ),
              }}
            >
              {data.description}
            </Markdown>
          </div>
        ) : (
          // Fallback content if no description from Strapi
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">Book description coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}