'use client'
import { FaCheck, FaShieldAlt, FaUserTie } from "react-icons/fa";

const HealthcareChoose = () => {
    const features = [
        {
            icon: FaCheck,
            iconBg: "bg-[#27AAE1]",
            iconColor: "text-white",
            title: "Fast & Accurate Billing",
            desc: "Process transactions quickly with our intuitive POS system, reducing checkout times and errors.",
        },
        {
            icon: FaShieldAlt,
            iconBg: "bg-[#2B3990]",
            iconColor: "text-white",
            title: "Secure & Reliable",
            desc: "Your data is safe with encrypted transactions and cloud backup for peace of mind.",
        },
        {
            icon: FaUserTie,
            iconBg: "bg-[#03034E]",
            iconColor: "text-white",
            title: "Dedicated Support Team",
            desc: "Our SwiftPOS experts are always available to assist you and ensure smooth operations.",
        },
    ];

    const stats = [
        {
            number: "500+",
            label: "Businesses Using SwiftPOS",
            bg: "bg-[#F4FFEC]",
            textColor: "text-[#15803D]",
        },
        {
            number: "99%",
            label: "Customer Satisfaction",
            bg: "bg-[#F4FFEC]",
            textColor: "text-[#15803D]",
        },
        {
            number: "1,200,000+",
            label: "Transactions Processed",
            bg: "bg-[#F4FFEC]",
            textColor: "text-[#15803D]",
        },
        {
            number: "300%",
            label: "Average Efficiency Gain",
            bg: "bg-[#F4FFEC]",
            textColor: "text-[#15803D]",
        },
    ];

    return (
        <div className="w-full min-h-screen  flex items-start justify-center px-4 py-12 md:py-16">
            <div className="w-full max-w-7xl bg-[rgba(133,133,133,0.3)] h-auto rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 h-full">

                    {/* Left Side - Features */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-gray-300 leading-tight mb-6">
                            Why Businesses Choose SwiftPOS
                        </h2>

                        <div className="space-y-5">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`${feature.iconBg} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                                            <Icon className={`${feature.iconColor} text-[16px] md:text-[20px]`} />
                                        </div>
                                        <div>
                                            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-gray-400">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[14px] md:text-[16px] lg:text-[16px] text-gray-400 leading-relaxed mt-1">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 w-full md:w-auto mx-auto max-w-[360px]">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`${stat.bg} rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center h-[100px] md:h-[120px]`}
                            >
                                <h3 className={`text-[24px] md:text-[28px] lg:text-[32px] font-bold ${stat.textColor} mb-1`}>
                                    {stat.number}
                                </h3>
                                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#03034E] leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HealthcareChoose;
