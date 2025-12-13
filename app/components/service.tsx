'use client'
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { 
  Monitor , 
  Cpu, 
  Palette , 
  Wrench, 
  ShoppingCart, 
  Film,
  Bot,
  Joystick
} from "lucide-react";
import Next from "../../public/home/nextjs.png";
import Node from "../../public/home/node.png";
import react from "../../public/home/react.png";
import Native from "../../public/home/native.png";
import Java from "../../public/home/java.png";
import Image, { StaticImageData } from "next/image";
import globe from "../../public/home/globe.png";

const serviceImages: Record<string, StaticImageData> = {
  "service-1": Next,
  "service-2": Node,
  "service-3": react,
  "service-4": Native,
  "service-5": Java,
};

// CardSticky Component
interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
});
ContainerScroll.displayName = "ContainerScroll";

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  ({ index, incrementY = 70, incrementZ = 50, children, className, style, ...props }, ref) => {
    const y = index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        layout={typeof window !== "undefined" && window.innerWidth >= 768 ? "position" : false} // disable layout on mobile
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          willChange: "transform, opacity",
          ...style,
        }}
        className={cn(
          "sticky rounded-2xl border bg-card p-8",
          className,
          "md:shadow-md shadow-sm",
          "md:backdrop-blur-md"
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
CardSticky.displayName = "CardSticky";

// Feature Component
const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number; }) => {
  return (
    <div className={cn(
      "flex flex-col lg:border-r py-10 relative group border-gray-300 dark:border-gray-700",
      (index === 0 || index === 4) && "lg:border-l border-gray-300 dark:border-gray-700",
      index < 4 && "lg:border-b border-gray-300 dark:border-gray-700"
    )}>
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-blue-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-100 text-lg">{title}</span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};

// Main Service Component
const ServiceShowcase = () => {
  const services = [
    { title: "Web & Software Development", description: "Building fast, responsive, and user-friendly websites, along with efficient, scalable, and robust software solutions tailored to your business goals.", icon: <Monitor  className="w-8 h-8" /> },

    { title: "Digital Marketing", description: "Creating effective digital marketing strategies to boost online presence, engage customers, and drive measurable business growth.", icon: <Cpu className="w-8 h-8" /> },

    { title: "Graphic & UI/UX Design", description: "Creating visually engaging graphics and intuitive user interfaces that enhance brand identity and improve user experience.", icon: <Palette  className="w-8 h-8" /> },

    { title: "WordPress Development", description: "Building custom, responsive, and SEO-friendly WordPress websites tailored to your business needs, with easy-to-manage content and scalable functionality", icon: <Wrench className="w-8 h-8" /> },

    { title: "Shopify Development", description: "Creating custom Shopify stores that are fast, secure, and optimized for conversions, helping businesses sell online effectively.", icon: <ShoppingCart className="w-8 h-8" /> },

    { title: "3D Animation", description: "High-quality 3D animations, motion graphics, product visualizations, and explainer videos that bring concepts to life for web, social, and marketing campaigns", icon: <Film className="w-8 h-8" /> },

    { title: "AI Automation Solutions", description: "Implementing smart AI-driven automation to streamline workflows, reduce manual tasks, and boost efficiency with intelligent systems tailored to your business.", icon: <Bot className="w-8 h-8" /> },

    { title: "Game Development", description: "Designing and developing immersive 2D and 3D games with engaging gameplay, stunning visuals, and optimized performance for mobile, PC, and web platforms.", icon: <Joystick className="w-8 h-8" /> },
  ];

  const serviceDetails = [
    { id: "service-1", title: "Next js", description: "Next.js is a powerful React-based framework built for performance, scalability, and modern digital experiences. Whether you're building a landing page, an eCommerce store, or a full-scale SaaS platform, Next.js enables lightning-fast." },

    { id: "service-2", title: "Node.js", description: "Node.js is a fast, efficient, and lightweight runtime built on Chrome’s V8 engine — perfect for developing real-time, data-intensive applications. Whether you’re building an API, web app, or full-stack solution, Node.js enables fast execution, seamless scalability, and reliable performance." },

    { id: "service-3", title: "React", description: "React is a powerful, component-based JavaScript library for building fast, dynamic, and interactive user interfaces. Whether you're creating a single-page application, dashboard, or full-scale front-end solution." },

    

    { id: "service-5", title: "JavaScript", description: "JavaScript is a versatile, high-level programming language that powers the dynamic behavior of websites and web applications. Whether you're building interactive interfaces, server-side logic, or full-stack solutions." },
  ];

  return (
    <div className="w-full" id="service">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-gray-200">
            Our <span className="bg-gradient-to-r from-blue-400/100 via-blue-300/70 to-blue-400/70 bg-clip-text text-transparent">Services</span>
          </div>
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto text-gray-300">
            Tailored solutions to help business leaders achieve operational excellence and sustainable growth
          </div>
        </div>
        
      </section>

      {/* Features Grid */}
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {services.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
            <div className="md:sticky md:top-[50px] md:h-[calc(100vh-100px)] md:py-12">
              <h2 className="mb-6 inline-block border border-blue-200 text-blue-400 py-1 px-4 rounded-lg">Technologies</h2>
              <p className="max-w-prose text-gray-300">
                At Ai Verse, we deliver innovative web, automation, and software solutions that help businesses operate smarter and grow faster. Our services streamline workflows, automate repetitive tasks, and provide real-time insights.
              </p>
         <div className="relative w-full">
  <Image
    src={globe}
    alt="globe"
    className="mt-7 w-120 h-120 object-contain spin-globe absolute left-[-35%]"
  />
</div>

            </div>
            {/* Right scrollable cards */}
            <div className="space-y-6 py-12">
              {serviceDetails.map((service, index) => (
                <CardSticky
                  key={service.id}
                  index={index + 2}
                  className="rounded-2xl border border-border bg-card p-8 shadow-md backdrop-blur-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="my-6 text-2xl font-bold tracking-tighter text-card-foreground text-blue-500">{service.title}</h2>
                    <div className="w-12 h-12 relative">
                      <Image src={serviceImages[service.id]} alt={service.title} fill className="object-contain" priority />
                    </div>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </CardSticky>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceShowcase;
