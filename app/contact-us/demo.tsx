'use client'

import { ContactCard } from "./contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

export default function DefaultDemo() {
	return (
		<main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
			<div className="mx-auto max-w-5xl">
				<ContactCard
					title="Get in touch"
					description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
					contactInfo={[
						{
							icon: MailIcon,
							label: 'Email',
							value: 'info@aiverse.pk',
							href: 'mailto:info@aiverse.pk'
						},
						{
							icon: PhoneIcon,
							label: 'Phone',
							value: '+923364987786',
							href: 'tel:+923364987786'
						},
						{
							icon: MapPinIcon,
							label: 'Address',
							value: 'office#113, mall of faisalabad, canal road, Faisalabad',
							href: 'https://www.google.com/maps/search/?api=1&query=office%20113%20mall%20of%20faisalabad%20canal%20road%20Faisalabad',
							className: 'col-span-2'
						}
					]}
				>
					<form action="" className="w-full space-y-4">
						<div className="flex flex-col gap-2">
							<Label>Name</Label>
							<Input type="text" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Email</Label>
							<Input type="email" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Phone</Label>
							<Input type="phone" />
						</div>
						<div className="flex flex-col gap-2">
							<Label>Message</Label>
							<Textarea />
						</div>

						{/* 3D Gradient Button */}
						<button
							className="
								w-full
								relative
								py-3
								text-white
								font-semibold
								rounded-xl
								overflow-hidden
								transition-all
								duration-300
								active:scale-95
								hover:scale-105
								shadow-[0_10px_25px_rgba(0,0,0,0.25)]
								group
							"
							type="button"
						>
							{/* BACKGROUND GRADIENT GLOW */}
							<span
								className="
									absolute inset-0 
									bg-gradient-to-r from-blue-400 via-blue-400 to-pink-400 
									blur-xl opacity-70
									transition-all duration-500
									group-hover:blur-2xl
								"
							></span>

							{/* 3D FRONT LAYER */}
							<span className="relative z-10">Submit</span>
						</button>
					</form>
				</ContactCard>
			</div>
		</main>
	);
}
