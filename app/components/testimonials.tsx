"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/app/components/ui/testimonials-column-1";

const testimonials = [
  {
    text: "This web development solution completely improved our online presence. The platform is fast, reliable, and easy to manage.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "We used their software development service, it transformed our operations. The system is user-friendly, efficient, reliable, allowing our team to automate work more productively.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "We used their digital marketing service, and it significantly boosted our online presence. The campaigns were well-targeted, engagement improved.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "We used their Shopify development service, and it completely transformed our online store. The site is fast, secure, and easy to manage, making product handling and order processing.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "We used their 3D animation service, and the results were outstanding. The visuals are highly realistic, engaging, and perfectly aligned with our project goals.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "We used their game development service, and the results exceeded our expectations. The game is visually stunning, runs smoothly, and engages our players perfectly.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "We used their WordPress development service, and it completely transformed our website. The design is professional, the site runs smoothly.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "We used their AI automation service, and it transformed our workflows. Repetitive tasks are now automated, decision-making is faster, and overall productivity.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "We used their graphic design service, and the results were impressive. The visuals are creative, professional, and perfectly aligned with our brand identity.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="my-35 relative ">
      <div className="container z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="border py-1 px-4 rounded-lg text-blue-300">
            Testimonials
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
            What our <span className="text-blue-500">users</span> say
          </h2>

          <p className="text-center mt-5 opacity-75 text-gray-400">
            See what our customers have to say about us.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
