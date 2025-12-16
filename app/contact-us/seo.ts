import { Metadata } from "next";

export const contactSEO: Metadata = {
  title: 'AiVerse | Contact Us',
  description: 'Get in touch with AiVerse.pk for web development, software, 3D animation, game development, digital marketing, and AI automation services in Pakistan.',
  keywords: 'AiVerse, contact, contact us, web development, software, 3D animation, game development, digital marketing, AI automation, Pakistan',
  
  alternates: {
    canonical: 'https://aiverse.pk/contact-us',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: 'AiVerse | Contact Us',
    description: 'Get in touch with AiVerse.pk for web development, software, 3D animation, game development, digital marketing, and AI automation services in Pakistan.',
    url: 'https://aiverse.pk/contact-us',
    siteName: 'AiVerse',
    images: [
      { url: 'https://aiverse.pk/home/ai-verse.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | Contact Us',
    description: 'Get in touch with AiVerse.pk for web development, software, 3D animation, game development, digital marketing, and AI automation services in Pakistan.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },

  icons: {
    icon: '/favicon.ico',
  },
};
