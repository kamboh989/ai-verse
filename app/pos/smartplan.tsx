'use client';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from './grid-feature';

const features = [
	{
		title: 'A Smart Plan to Attract Your Ideal Patients',
		icon: Zap,
		description: 'Custom targeting strategy based on your specific patient demographics.',
	},
	{
		title: 'Full Ad Campaign Setup and Management',
		icon: Cpu,
		description: 'Complete hands-off campaign management across all platforms.',
	},
	{
		title: 'Ad Copy & Designs for Your Practice',
		icon: Fingerprint,
		description: 'Professional, healthcare-compliant creative assets.',
	},
	{
		title: 'Accurate Tracking to Measure Bookings',
		icon: Pencil,
		description: 'Advanced analytics to track every lead from click to appointment.',
	},
	{
		title: 'Calendar & Booking System Integration',
		icon: Settings2,
		description: 'Seamless integration with your existing scheduling system.',
	},
	{
		title: 'Simple Weekly Reports on Your Progress',
		icon: Sparkles,
		description: 'Clear, easy-to-understand performance reports every week.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						A Custom Plan Can Include:
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Everything you need to build fast, secure, scalable.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
