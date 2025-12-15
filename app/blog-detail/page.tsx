import type { FC } from "react";


const BlogDetail: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4 md:px-10 mt-6">

      {/* Top Badge */}
      <div className="text-[#2B3990] font-medium bg-[#F1ECFE] rounded-full flex items-center gap-3 px-5 py-2 mb-6 shadow-sm">
        <span className="text-[14px] md:text-[16px]">Blogs-detail</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-bold text-center text-gray-200] leading-tight">
        Unlocking the <span className="bg-gradient-to-r from-[#27AAE1] via-[#2B3990] to-[#03034E] text-transparent bg-clip-text">Future of Technology</span>
      </h1>

      <p className="text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl mt-4 text-center leading-relaxed">
        Welcome to our in-depth exploration of the latest technological trends.
      </p>

      {/* Sections Container */}
      <div className="mt-12 flex flex-col gap-8 max-w-4xl w-full">

        {/* Section Card */}
        <SectionCard
          title="🤖 AI & Automation"
          content="Boost your business efficiency and reduce operational costs with our cutting-edge AI and automation services. Our solutions are designed to handle repetitive tasks, streamline workflows, and deliver accurate results, freeing your team to focus on growth and innovation. Whether you’re looking to automate customer support, optimize processes, or integrate intelligent systems, our expert team ensures a seamless implementation that drives measurable results. Experience smarter business operations and enhanced productivity today with our tailored AI solutions By integrating intelligent systems, we enable you to save time, reduce costs, and improve overall efficiency:"
          listItems={[
            "Business Process Automation – Automate repetitive tasks to save time and reduce errors.",
            "AI-Powered Analytics – Make smarter, data-driven decisions with AI insights.",
            "Customer Support Automation – Enhance customer experience with chatbots and virtual assistants.",
            "Workflow Optimization – Streamline operations for higher efficiency and productivity.",
            "Predictive Analysis – Forecast trends and plan ahead using intelligent algorithms.",
            "Cost Reduction & Scalability – Reduce operational costs while scaling your business seamlessly.",
            "Custom AI Solutions – Tailored AI and automation systems to meet your unique business needs.",
          ]}
        />

        <SectionCard
          title="💻 Web Development Services"
          content="Take your online presence to the next level with our expert web development services. We design and build responsive, fast, and user-friendly websites tailored to your business needs. From e-commerce platforms to corporate websites:"
          listItems={[
            "Responsive Website Design – Websites that look perfect on all devices, from mobiles to desktops.",
            "E-commerce Solutions – Build online stores that drive sales and enhance customer experience.",
            "Custom Web Applications – Tailored solutions to meet your unique business requirements.",
            "Website Maintenance & Support – Keep your website updated, secure, and running smoothly.",
            "SEO-Friendly Development – Optimized websites that improve search engine visibility.",
            "Fast & Secure Websites – High-performance sites with strong security measures.",
            "UI/UX Optimization – Engaging and user-friendly interfaces to boost user satisfaction.",
          ]}
        />

        <SectionCard
          title="💾 Custom Software Development"
          content="Transform your business processes with our professional software development services. We build custom software solutions tailored to your specific needs, ensuring improved efficiency, enhanced performance, and seamless integration with your existing systems. Whether you need enterprise applications, desktop software, or specialized tools, our expert team delivers scalable, secure, and reliable solutions that drive measurable results:"
          listItems={[
            "Custom Software Solutions – Tailored software to meet your unique business requirements.",
            "Enterprise Application Development – Streamline operations with powerful business applications.",
            "Cross-Platform Development – Software that works smoothly across multiple platforms and devices.",
            "System Integration – Connect your software with existing tools for seamless workflows.",
            "Maintenance & Support – Keep your software updated, secure, and performing at its best.",
            "Scalable & Secure Solutions – Build systems that grow with your business while protecting data.",
            "UI/UX Focused Design – User-friendly interfaces to enhance productivity and engagement.",
          ]}
        />

        <SectionCard
          title="🧩 3D Animation"
          content="Capture your audience’s attention and tell your story like never before with our high-quality 3D animation services. From product visualization to explainer videos, our team creates stunning animations that make complex ideas easy to understand. Whether it’s for marketing, presentations, or educational purposes, our 3D animations help your business stand out and leave a lasting impression:"
          listItems={[
            "Product Visualization – Showcase your products realistically before production.",
            "Explainer Videos – Simplify complex concepts with engaging 3D animations.",
            "Architectural & Interior Animation – Bring building designs and layouts to life.",
            "Marketing & Promotional Content – Create visually stunning videos to attract customers.",
            "Character Animation – Develop animated characters for storytelling and branding.",
            "High-Quality Rendering – Smooth, detailed, and visually appealing animations.",
            "Custom 3D Solutions – Tailored animations that fit your brand and goals perfectly.",
          ]}
        />

        <SectionCard
          title="🛒 Shopify Development"
          content="Take your business online and start selling with confidence using our professional Shopify development services. We create customized, user-friendly, and fully responsive Shopify stores designed to increase conversions and provide a seamless shopping experience. From store setup to app integration, our team ensures your e-commerce business thrives in the competitive online market:"
          listItems={[
            "Custom Shopify Store Design – Tailored designs to match your brand identity.",
            "Theme Customization – Modify themes to create a unique and attractive storefront.",
            "App Integration – Enhance your store functionality with Shopify apps.",
            "Payment Gateway Setup – Secure and smooth payment processing for your customers.",
            "SEO Optimization – Boost your store’s visibility on search engines.",
            "Store Maintenance & Support – Keep your Shopify store updated and running smoothly.",
            "E-commerce Strategy Consultation – Expert advice to maximize sales and customer engagement.",
          ]}
        
        />

        <SectionCard
          title="🌐 WordPress Development"
          content="Grow your online presence with our expert WordPress development services. We create custom, responsive, and SEO-friendly WordPress websites that perfectly reflect your brand. From blogs and corporate websites to e-commerce stores, our team ensures your site is fast, secure, and easy to manage, helping you attract more visitors and convert them into loyal customers:"
          listItems={[
            "Custom WordPress Themes – Unique designs tailored to your brand identity.",
            "Plugin Integration & Customization – Add powerful features to enhance your website.",
            "E-commerce with WooCommerce – Build online stores that drive sales.",
            "Responsive Design – Websites that look perfect on all devices.",
            "SEO-Friendly Development – Optimize your site for better search engine ranking.",
            "Website Maintenance & Support – Keep your site secure, updated, and running smoothly.",
            "Speed & Performance Optimization – Fast-loading websites for a better user experience.",
          ]}
        />

        <SectionCard
          title="🎮 Game Development"
          content="ring your gaming ideas to life with our expert game development services. We design and develop interactive, immersive, and high-performance games for multiple platforms, including mobile, PC, and consoles. Our team combines creativity, technology, and storytelling to deliver games that captivate users and provide unforgettable experiences:"
           listItems={[
            "Custom Game Development – Games tailored to your concept and audience.",
            "Mobile Game Development – Engaging games for Android and iOS platforms.",
            "PC & Console Game Development – High-quality games for desktop and console users.",
            "2D & 3D Game Design – Stunning visuals and animations to enhance gameplay.",
            "Multiplayer & Online Games – Connect players with seamless online experiences.",
            "Game Testing & Optimization – Ensure smooth performance and bug-free gameplay.",
            "VR & AR Game Development – Immersive virtual and augmented reality experiences.",
          ]}
        />

        <SectionCard
          title="🧠 AI Development"
          content="Leverage the power of Artificial Intelligence to streamline your business processes, improve decision-making, and enhance customer experiences. Our AI development services provide custom solutions tailored to your unique needs, from intelligent algorithms and predictive analytics to AI-powered applications that drive growth and efficiency. Stay ahead of the competition by integrating AI into your operations:"
          listItems={[
            "Custom AI Solutions – Tailored AI systems to meet your business goals.",
            "Machine Learning Models – Build predictive models for smarter decision-making.",
            "Natural Language Processing (NLP) – Enhance customer interaction with AI-driven communication.",
            "Computer Vision Applications – Automate image and video analysis with precision.",
            "AI Chatbots & Virtual Assistants – Provide 24/7 intelligent customer support.",
            "Data Analytics & Insights – Turn complex data into actionable insights.",
            "Integration & Deployment – Seamless AI integration into your existing systems.",
          ]}
        />

      </div>
    </div>
  );
};

export default BlogDetail;

// -----------------------
// SectionCard Component
// -----------------------
interface SectionCardProps {
  title: string;
  content: string;
  listItems?: string[];
}

const SectionCard: FC<SectionCardProps> = ({ title, content, listItems }) => (
  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-white text-[22px] md:text-[26px] font-semibold mb-3">{title}</h2>
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
