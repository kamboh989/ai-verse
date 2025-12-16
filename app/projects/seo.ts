import { Metadata } from "next";

export const projectsSEO: Metadata = {
  title: 'AiVerse | Our Projects',
  description: 'Explore AiVerse.pk projects including web development, software, 3D animation, game development, digital marketing, and AI automation solutions in Pakistan.',
  keywords: 'AiVerse, projects, portfolio, web development, software, 3D animation, game development, digital marketing, AI automation, Pakistan',
  
  alternates: {
    canonical: 'https://aiverse.pk/projects/3d-animation',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    title: 'AiVerse | Our Projects',
    description: 'Explore AiVerse.pk projects including web development, software, 3D animation, game development, digital marketing, and AI automation solutions in Pakistan.',
    url: 'https://aiverse.pk/projects/3d-animation',
    siteName: 'AiVerse',
    images: [
      { url: 'https://aiverse.pk/home/ai-verse.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | Our Projects',
    description: 'Explore AiVerse.pk projects including web development, software, 3D animation, game development, digital marketing, and AI automation solutions in Pakistan.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },

  icons: {
    icon: '/favicon.ico',
  },
};
