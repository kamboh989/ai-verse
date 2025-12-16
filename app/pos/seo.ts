import { Metadata } from "next";

export const posSEO: Metadata = {
  title: 'AiVerse | POS Solutions',
  description: 'AiVerse.pk offers professional POS (Point of Sale) solutions for businesses, including inventory management, billing, and sales tracking in Pakistan.',
  keywords: 'AiVerse, POS, Point of Sale, POS solutions, inventory management, billing, sales tracking, business software, Pakistan',
  
  alternates: {
    canonical: 'https://aiverse.pk/pos',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: 'AiVerse | POS Solutions',
    description: 'AiVerse.pk offers professional POS (Point of Sale) solutions for businesses, including inventory management, billing, and sales tracking in Pakistan.',
    url: 'https://aiverse.pk/pos',
    siteName: 'AiVerse',
    images: [
      { url: 'https://aiverse.pk/home/ai-verse.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | POS Solutions',
    description: 'AiVerse.pk offers professional POS (Point of Sale) solutions for businesses, including inventory management, billing, and sales tracking in Pakistan.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },

  icons: {
    icon: '/favicon.ico',
  },
};
