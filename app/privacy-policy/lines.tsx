import type { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4 md:px-10 mt-6">

      {/* Top Badge */}
      <div className="text-gray-200 font-medium bg-white/15 backdrop-blur-md
 rounded-full flex items-center gap-3 px-5 py-2 mb-6 shadow-sm">
        <span className="text-[14px] md:text-[16px]">Privacy Policy</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-bold text-center text-gray-300 leading-tight">
        AI Verse <span className="bg-gradient-to-r from-[#27AAE1] via-blue-500 to-blue-300 text-transparent bg-clip-text">Privacy Policy</span>
      </h1>

      <p className="text-gray-400 text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl mt-4 text-center leading-relaxed">
        Your privacy matters. AI Verse ensures your data stays secure, transparent, and protected at all times.
      </p>

      {/* Sections Container */}
      <div className="mt-12 flex flex-col gap-8 max-w-4xl w-full">

        {/* Section Card */}
        <SectionCard
          title="1. Introduction"
          content="AI Verse is a software development and digital solutions company offering services such as custom software development, Shopify stores, WordPress websites, branding, UI/UX designing, and creative services like Photoshop and digital design. This Privacy Policy explains how we collect, store, protect, and use your personal information."
        />

        <SectionCard
          title="2. Information We Collect"
          content="We collect information to improve your experience and deliver high-quality services. This includes:"
          listItems={[
            "Your name and contact details",
            "Project requirements and business information",
            "Website usage statistics",
            "Payment and invoice information (securely processed)",
            "Support or inquiry messages",
          ]}
        />

        <SectionCard
          title="3. How We Use Your Information"
          content="AI Verse uses your information exclusively to deliver services such as:"
          listItems={[
            "Developing custom software, apps, and websites",
            "Setting up Shopify or WordPress stores",
            "Providing branding, design, and digital marketing solutions",
            "Communication regarding support, updates, or project progress",
          ]}
        />

        <SectionCard
          title="4. Data Protection & Sharing"
          content="Your data is never sold, rented, or shared with third parties except:"
          listItems={[
            "When required by law",
            "When necessary to complete your project (example: domain hosting or payment processing)",
          ]}
        />

        <SectionCard
          title="5. Data Security"
          content="We use industry-standard security practices, encryption, and secure servers to keep your information safe from unauthorized access."
        />

        <SectionCard
          title="6. Cookies & Tracking"
          content="AI Verse may use cookies to enhance user experience, analyze traffic, and personalize website interactions. You can disable cookies anytime through your browser settings."
        />

        <SectionCard
          title="7. Your Rights"
          content="You have full rights to access, update, or request deletion of your data. Contact us anytime for assistance."
        />

        <SectionCard
          title="8. Contact Us"
          content="For any privacy-related questions, reach out to us at:"
          listItems={["info@aiverse.pk"]}
        />

      </div>
    </div>
  );
};

export default PrivacyPolicy;

// -----------------------
// SectionCard Component
// -----------------------
interface SectionCardProps {
  title: string;
  content: string;
  listItems?: string[];
}

const SectionCard: FC<SectionCardProps> = ({ title, content, listItems }) => (
  <div className="bg-white/15 backdrop-blur-md
  rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-gray-100 text-[22px] md:text-[26px] font-semibold mb-3">{title}</h2>
    <p className="text-gray-300 text-[16px] md:text-[17px] leading-relaxed">{content}</p>
    {listItems && (
      <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300">
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);
