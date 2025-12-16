
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";



import './globals.css';

export const metadata = {
  title: 'AiVerse | Digital & AI Solutions',
  description: 'AiVerse provides web development, software solutions, graphic design, 3D animation, game development, digital marketing, and AI automation services.',
  keywords: 'AiVerse, web development, software development, 3D animation, game development, digital marketing, AI automation, graphic design, IT services',
  alternates: {
    canonical: 'https://aiverse.pk', // global canonical
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [{ name: 'AiVerse', url: 'https://aiverse.pk' }],
  openGraph: {
    title: 'AiVerse | Complete Digital & AI Solutions',
    description: 'Providing web development, software, graphic design, 3D animation, game development, digital marketing, and AI automation services.',
    url: 'https://aiverse.pk',
    siteName: 'AiVerse',
    images: [
      {
        url: 'https://aiverse.pk/home/ai-verse.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiVerse | Complete Digital & AI Solutions',
    description: 'Providing web development, software, graphic design, 3D animation, game development, digital marketing, and AI automation services.',
    images: ['https://aiverse.pk/home/ai-verse.png'],
    creator: '@AiVerseOfficial',
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ai Verse",
              "url": "https://aiverse.pk",
              "logo": "https://aiverse.pk/home/ai-verse.png",
              "sameAs": [
                "https://www.facebook.com/people/Aiversepk/61583308357755/",
                "https://www.instagram.com/aiverse.pk/",
                "https://www.linkedin.com/company/aiverse-pk/about/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923364987786",
                "contactType": "Customer Service"
              },
              "description": "AiVerse provides web development, software solutions, graphic design, 3D animation, game development, digital marketing, and AI automation services."
            }),
          }}
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className='font-nunito'
        
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
