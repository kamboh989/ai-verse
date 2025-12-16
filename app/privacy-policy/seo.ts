import { Metadata } from "next";

export const privacySEO: Metadata = {
  title: 'AiVerse | Privacy Policy',
  description: 'Read AiVerse.pk privacy policy. We respect your privacy and explain how we collect, use, and protect your data on our website.',
  keywords: 'AiVerse, privacy policy, data protection, web privacy, user data, AI services, Pakistan',
  
  alternates: {
    canonical: 'https://aiverse.pk/privacy-policy',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: 'AiVerse | Privacy Policy',
    description: 'Read AiVerse.pk privacy policy. We respect your privacy and explain how we collect, use, and protect your data on our website.',
    url: 'https://aiverse.pk/privacy-policy',
    siteName: 'AiVerse',
    images: [
      { url: 'https://aiverse.pk/home/ai-verse.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | Privacy Policy',
    description: 'Read AiVerse.pk privacy policy. We respect your privacy and explain how we collect, use, and protect your data on our website.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },

  icons: {
    icon: '/favicon.ico',
  },
};
