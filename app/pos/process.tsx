'use client'
import { FaSmile, FaArrowRight, FaCheck, FaShoppingCart, FaCogs, FaChartLine, FaCashRegister } from "react-icons/fa";

const ProcessSection = () => {
    const benefits = [
        "Fast and accurate billing",
        "Inventory management made easy",
        "Detailed sales reports",
        "24/7 dedicated support",
    ];

    const processSteps = [
        {
            icon: FaShoppingCart,
            title: "Start with Your Business Setup",
            description: "We help you configure SwiftPOS according to your store type, products, and workflow. Every business is unique, so your system fits perfectly.",
            iconColor: "text-white",
            iconBg: "bg-[#27AAE1]",
        },
        {
            icon: FaCogs,
            title: "Customize Features for Your Needs",
            description: "From barcode scanning to loyalty programs, we configure the tools that matter most to your business. Only what drives efficiency and sales.",
            iconColor: "text-white",
            iconBg: "bg-[#27AAE1]",
        },
        {
            icon: FaChartLine,
            title: "Track Sales and Inventory in Real-Time",
            description: "SwiftPOS provides instant insights into sales trends and stock levels, so you always know what’s selling, what’s low, and how to maximize revenue.",
            iconColor: "text-white",
            iconBg: "bg-[#27AAE1]",
        },
        {
            icon: FaCashRegister,
            title: "Continuous Support & Updates",
            description: "We don’t just set it and forget it. Our team continuously updates the system and provides support to keep your business running smoothly.",
            iconColor: "text-white",
            iconBg: "bg-[#27AAE1]",
        },
    ];

    return (
        <div className="w-full min-h-screen  py-12 md:py-16">
            <div className="w-full max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left Side - Sticky Content */}
                    <div className="lg:sticky lg:top-24 lg:self-start flex flex-col justify-center h-fit">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#F4FFEC] text-[#2B3990] font-semibold rounded-full px-4 py-2 w-fit mb-6">
                            <FaSmile className="text-lg" />
                            <span className="text-[15px]">Our Process</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-bold text-gray-300 leading-tight mb-2">
                            Here's How SwiftPOS
                        </h2>
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#27AAE1] leading-tight mb-6">
                            Streamlines Your Business
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-8">
                            Managing sales, inventory, and staff shouldn’t be complicated. SwiftPOS makes it simple, fast, and reliable—so you can focus on growing your business.
                        </p>

                        {/* CTA Button */}
                        <button 
                            onClick={() => window.open("https://swiftpos.solutions/business/register", "_blank")}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#27AAE1] via-[#2B3990] to-[#03034E] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg w-fit mb-8 cursor-pointer"
                        >
                            Get SwiftPOS Now
                            <FaArrowRight className="text-xl" />
                        </button>

                        {/* Benefits Box */}
                        <div className="hidden lg:block bg-[rgba(133,133,133,0.3)] rounded-2xl shadow-lg p-6 border border-[#E5E7EB]">
                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-300 mb-4">
                                Benefits:
                            </h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheck className="text-[#27AAE1] text-sm mt-1 flex-shrink-0" />
                                        <span className="text-gray-300 text-[14px] md:text-[15px]">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Process Steps */}
                    <div className="space-y-6">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="w-full lg:w-[610px] h-auto lg:h-[296px] bg-[rgba(133,133,133,0.3)] rounded-2xl p-8 border border-[#b0bbd3] shadow-lg"
                                >
                                    {/* Icon */}
                                    <div className={`w-12 h-12 lg:w-16 lg:h-16 ${step.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                                        <Icon className={`${step.iconColor} text-[14px] lg:text-[26px]`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[16px] lg:text-[24px] font-bold text-gray-300 mb-4 leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[14px] lg:text-[17px] text-gray-300 leading-relaxed tracking-tight">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
