'use client'
import type { FC } from "react";  
import { FaRegLightbulb } from "react-icons/fa";
import { HiX, HiCheck, HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Solution: FC = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center py-16 sm:py-20 lg:py-24 px-4">

            {/* Top Badge */}
            <div className="text-[#2B3990] font-medium bg-[#dae7d1] rounded-full flex items-center gap-2 px-4 py-2">
                <FaRegLightbulb size={18} />
                <p className="text-[14px] sm:text-[15px]">The SwiftPOS Solution</p>
            </div>

            {/* Heading */}
            <div className="max-w-5xl px-2 lg:px-10 mt-4 text-center">
                <h1 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[53px] text-gray-300 font-bold leading-tight tracking-tight">
                    We Build A System That Gives You{" "}
                    <span className="text-gray-300">
                        Complete Control Over Your Business
                    </span>
                </h1>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 mt-6 leading-relaxed">
                    Running a business is hard when everything is manual. SwiftPOS automates billing, tracks inventory, manages expenses, 
                    and gives you real-time insights — all in one powerful dashboard.
                </p>
            </div>

            {/* CARDS */}
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 justify-center">

                    {/* BEFORE CARD */}
                    <div className="w-full bg-white/80 backdrop-blur-xl 
rounded-2xl p-6 
shadow-[0_8px_30px_rgba(0,0,0,0.15)]
border border-white/40  sm:p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center">
                                <HiX size={18} className="text-white" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#170C40]">
                                Before SwiftPOS
                            </h3>
                        </div>

                        <ul className="space-y-3 flex-1">
                            {[
                                "Manual billing that slows down operations",
                                "Difficulty tracking real-time stock levels",
                                "Inaccurate sales & expense reporting",
                                "No insight into daily profit or loss"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center border border-[#B91C1C]">
                                        <HiX size={12} className="text-[#B91C1C]" />
                                    </div>
                                    <span className="text-[#B91C1C] text-[15px] sm:text-[16px] leading-tight">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AFTER CARD */}
                    <div className="w-full bg-white/80 backdrop-blur-xl 
rounded-2xl p-6 
shadow-[0_8px_30px_rgba(0,0,0,0.15)]
border border-white/40  sm:p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center">
                                <HiCheck size={18} className="text-white" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#170C40]">
                                After SwiftPOS
                            </h3>
                        </div>

                        <ul className="space-y-3 flex-1">
                            {[
                                "Fast, error-free billing in seconds",
                                "Smart inventory tracking with auto-alerts",
                                "Real-time sales, expenses & profit dashboard",
                                "Better decisions backed by data analytics"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center border border-[#22C55E]">
                                        <HiCheck size={12} className="text-[#22C55E]" />
                                    </div>
                                    <span className="text-[#166534] text-[15px] sm:text-[16px] font-medium leading-tight">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* BUTTON + TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2 flex flex-col items-center mt-8"
                    >
                        <button
                            onClick={() =>
                                window.open("https://swiftpos.solutions/business/register", "_blank")
                            }
                            className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#27AAE1] via-[#2B3990] to-[#03034E] text-white font-bold text-[18px] md:text-[20px] rounded-xl shadow-xl cursor-pointer"
                        >
                            Get Started With SwiftPOS
                            <motion.span whileHover={{ x: 8 }}>
                                <HiArrowNarrowRight size={22} />
                            </motion.span>
                        </button>

                        <p className="text-[14px] sm:text-[16px] text-gray-300 mt-3">
                            Free demo • No credit card required
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Solution;
