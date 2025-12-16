'use client'

import React, { useState } from "react";
import type { FormEvent } from "react";
import { ContactCard } from "./contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

export default function DefaultDemo() {

	const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movbwllw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };


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
					<form
						onSubmit={handleSubmit}
						className="w-full space-y-4"
					>
						<div className="flex flex-col gap-2">
							<Label>Name</Label>
							<Input type="text" name="name" required />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Email</Label>
							<Input type="email" name="email" required />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Phone</Label>
							<Input type="text" name="phone" />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Message</Label>
							<Textarea name="message" required />
						</div>

						{/* 3D Gradient Button */}
						<button
							type="submit"
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
						>  {status === "sending" ? "Sending..." : "Send Message"}
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

							

							{/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center pt-2">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center pt-2">
              Something went wrong. Try again.
            </p>
          )}
						</button>
					</form>
				</ContactCard>
			</div>
		</main>
	);
}
