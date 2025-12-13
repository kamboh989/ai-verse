'use client'
import { HiCheck, HiChartBar, HiArrowUp } from "react-icons/hi";  
import { AiOutlineSafety } from "react-icons/ai";
import { TiMediaFastForward } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";

const benefitsData = [
  {
    icon: HiCheck,
    iconBg: "#27AAE1",
    title: "No Wasted Budget",
    description: "Only pay for features and modules that truly improve your business operations",
  },
  {
    icon: AiOutlineSafety,
    iconBg: "#27AAE1",
    title: "Precise Setup",
    description: "POS configuration tailored to your store size, products, and sales channels",
  },
  {
    icon: TiMediaFastForward,
    iconBg: "#27AAE1",
    title: "Faster Onboarding",
    description: "Swift installation and setup so you can start selling immediately",
  },
  {
    icon: BsGraphUpArrow,
    iconBg: "#27AAE1",
    title: "Scalable Growth",
    description: "Our system grows with your business, adding modules as needed",
  },
];

const businessData = [
  {
    icon: FaRegBuilding,
    iconBg: "#3B82F6",
    title: "Small Business",
    subtitle: "1–2 locations",
    goal: "Goal: Efficient sales & inventory management",
    focus: "Focus: Basic POS + Local Inventory",
    bg: "from-[#DBEAFE]/50 to-[#E0F2FE]/40",
    border: "border-[#93C5FD]",
  },
  {
    icon: HiArrowUp,
    iconBg: "#27AAE1",
    title: "Growing Business",
    subtitle: "3–5 locations",
    goal: "Goal: Multi-location management & analytics",
    focus: "Focus: Advanced POS + Reporting & Automation",
    bg: "from-[#D1FAE5]/50 to-[#A7F3D0]/40",
    border: "border-[#86EFAC]",
  },
  {
    icon: HiChartBar,
    iconBg: "#27AAE1",
    title: "Enterprise",
    subtitle: "6+ locations",
    goal: "Goal: Full-scale operations & business intelligence",
    focus: "Focus: Enterprise POS + CRM + Analytics",
    bg: "from-[#FDE68A]/50 to-[#FCD34D]/40",
    border: "border-[#FBBF24]",
  },
];

const WhyCustomPlans = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">

        {/* LEFT SIDE - BENEFITS */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-gray-300 mb-6 leading-snug">
            Why Custom POS Plans Work Better
          </h2>

          {benefitsData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-5 px-2 lg:px-0">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.iconBg }}
              >
                <item.icon size={20} className="text-white sm:text-[24px]" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-300 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base lg:text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - BUSINESS TIERS */}
        <div className="space-y-6">
          {businessData.map((item, index) => (
            <div
              key={index}
              className={` ${item.bg} backdrop-blur-sm ${item.border} border rounded-2xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <item.icon size={22} className="text-white sm:text-[26px]" />
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-100">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">{item.subtitle}</p>
                </div>
              </div>

              <p className="text-blue-500 font-semibold text-sm sm:text-base mb-1">
                {item.goal}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyCustomPlans;
