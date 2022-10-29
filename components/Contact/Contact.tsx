import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type ContactForm = {
	name: string
	email: string
	subject: string
	message: string
}

export default function Contact({}: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactForm>()
	const onSubmit: SubmitHandler<ContactForm> = (formData) => {
		// TODO: Doesn't work if the user doesn't have an email client installed
		window.location.href = `mailto:cvetkovocanecpetar@gmail.com?subject=${formData.subject}&body=From ${formData.name}. ${formData.message}`
	}

	return (
		<section id="contact" className="snap-start">
			{/* TODO: Implement a generic component for sections with same animation */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
			>
				{/* TODO: Implement a generic component for headers */}
				<h3 className="absolute top-24 uppercase tracking-wide-2xl text-gray-500 text-2xl">
					Contact
				</h3>

				<div className="flex flex-col space-y-10">
					<h4 className="text-2xl md:text-4xl font-semibold text-center ">
						<span className="underline decoration-red-700/50 mr-2">
							Found something interesting?
							<br />
						</span>
						Lets talk.
					</h4>

					<div className="space-y-10">
						<div className="flex items-center space-x-5 justify-center">
							<EnvelopeIcon className="text-red-900 h-7 w-7 animate-pulse" />
							{/* TODO: change to mail:to */}
							<p className="text-lg md:text-2xl">
								cvetkovocanecpetar@gmail.com
							</p>
						</div>

						<div className="flex items-center space-x-5 justify-center">
							<MapPinIcon className="text-red-900 h-7 w-7 animate-pulse" />
							{/* TODO: change to google maps link */}
							<p className="text-lg md:text-2xl">Bjelovar, Croatia</p>
						</div>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col space-y-2 w-fit mx-auto"
					>
						<div className="flex space-x-2">
							<input
								{...register('name')}
								placeholder="Name"
								className="contact-input"
								type="text"
							/>
							<input
								{...register('email')}
								placeholder="Email"
								className="contact-input"
								type="email"
							/>
						</div>

						<input
							{...register('subject')}
							placeholder="Subject"
							className="contact-input"
							type="text"
						/>

						<textarea
							{...register('message')}
							placeholder="Message"
							className="contact-input"
							rows={5}
						/>

						<button
							type="submit"
							className="bg-red-900 py-5 px-10 rounded-md text-black font-bold text-lg"
						>
							Submit
						</button>
					</form>
				</div>
			</motion.div>
		</section>
	)
}
