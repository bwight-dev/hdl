// Strapi image type
export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

// Award type for the awards section
export interface Award {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  image: StrapiImage;
}

// Import the BlocksContent type from Strapi blocks renderer
import type { BlocksContent } from '@strapi/blocks-react-renderer';

// Homepage data type
export interface HomePageData {
  richsubtitle?: BlocksContent; // Strapi blocks content
  bookCover?: StrapiImage;
  buyLink?: string;
  awards?: Award[];
  description?: string; // Strapi richtext content
}

// Book description section data
export interface BookDescriptionData {
  buyLink?: string;
}