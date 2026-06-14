<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { business, hours, social } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';
	import { breadcrumbSchema } from '$lib/data/schema';
	import {
		MapPin,
		Phone,
		Mail,
		Clock,
		Navigation,
		Facebook,
		Instagram,
		Send,
		CheckCircle2,
		Utensils,
		ShoppingBag,
		Truck
	} from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let submitted = $state(false);
	let error = $state('');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill in your name, email, and message.';
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			error = 'Please enter a valid email address.';
			return;
		}
		// Open a pre-filled email to the restaurant as a no-backend fallback.
		const subject = encodeURIComponent(`Inquiry from ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
		);
		window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
		submitted = true;
	}

	const serviceList = [
		{ icon: Utensils, label: 'Dine-In', available: business.services.dineIn },
		{ icon: ShoppingBag, label: 'Takeout', available: business.services.takeout },
		{ icon: Truck, label: 'Delivery', available: business.services.delivery }
	];

	const schema = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Contact', path: '/contact' }
	]);
</script>

<Seo
	title="Contact & Location"
	description="Visit Cattleman's BBQ at 2010 S Bridge St, Brady, TX 76825. Call +1 325-597-1111 for takeout, see our hours, get directions, and send us a message. Dine-in & takeout."
	path="/contact"
	image={img(PHOTOS.restaurantInterior, 1200, 630)}
	jsonLd={schema}
/>

<PageHero
	eyebrow="Get In Touch"
	title="Come Visit Us"
	subtitle="Find us on S Bridge Street in Brady. Call ahead for takeout, ask about catering, or just drop us a line."
	image={img(PHOTOS.restaurantInterior, 1920, 1000)}
/>

<!-- Quick contact cards -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-3">
		<a
			href={business.phoneHref}
			use:reveal
			class="group flex flex-col items-start gap-3 rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-6 transition-all hover:-translate-y-1 hover:border-ember-500/50"
		>
			<span class="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/15 text-ember-400">
				<Phone class="h-6 w-6" />
			</span>
			<div>
				<p class="font-heading text-sm uppercase tracking-wide text-stone-400">Call Us</p>
				<p class="font-display text-2xl text-stone-50 group-hover:text-ember-400">{business.phone}</p>
				<p class="text-sm text-stone-500">Tap to call · best for takeout orders</p>
			</div>
		</a>

		<a
			href={business.mapsDirections}
			target="_blank"
			rel="noopener noreferrer"
			use:reveal={{ delay: 90 }}
			class="group flex flex-col items-start gap-3 rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-6 transition-all hover:-translate-y-1 hover:border-ember-500/50"
		>
			<span class="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/15 text-ember-400">
				<MapPin class="h-6 w-6" />
			</span>
			<div>
				<p class="font-heading text-sm uppercase tracking-wide text-stone-400">Find Us</p>
				<p class="font-display text-xl text-stone-50 group-hover:text-ember-400">{business.address.street}</p>
				<p class="text-sm text-stone-500">{business.address.city}, {business.address.state} {business.address.zip} · Get directions</p>
			</div>
		</a>

		<a
			href="mailto:{business.email}"
			use:reveal={{ delay: 180 }}
			class="group flex flex-col items-start gap-3 rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-6 transition-all hover:-translate-y-1 hover:border-ember-500/50"
		>
			<span class="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/15 text-ember-400">
				<Mail class="h-6 w-6" />
			</span>
			<div>
				<p class="font-heading text-sm uppercase tracking-wide text-stone-400">Email Us</p>
				<p class="font-display text-xl text-stone-50 break-all group-hover:text-ember-400">{business.email}</p>
				<p class="text-sm text-stone-500">Catering &amp; large orders welcome</p>
			</div>
		</a>
	</div>
</section>

<!-- Form + details -->
<section class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
	<div class="grid gap-10 lg:grid-cols-2">
		<!-- Form -->
		<div use:reveal class="rounded-2xl border border-charcoal-700/70 bg-charcoal-900 p-7 sm:p-9">
			<SectionHeading eyebrow="Send a Message" title="Drop Us a Line" align="left" />

			{#if submitted}
				<div class="mt-8 flex flex-col items-center gap-4 rounded-xl border border-ember-500/30 bg-ember-500/10 p-8 text-center">
					<CheckCircle2 class="h-12 w-12 text-ember-400" />
					<div>
						<p class="font-heading text-xl font-semibold text-stone-50">Thanks, {name.split(' ')[0]}!</p>
						<p class="mt-1 text-sm text-stone-300">
							Your email app should have opened with your message ready to send. For the fastest
							response, give us a call at
							<a href={business.phoneHref} class="font-semibold text-ember-400">{business.phone}</a>.
						</p>
					</div>
				</div>
			{:else}
				<form class="mt-7 space-y-5" onsubmit={submit} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="flex flex-col gap-2">
							<label for="name" class="font-heading text-sm font-medium text-stone-300">Name *</label>
							<input
								id="name"
								type="text"
								bind:value={name}
								autocomplete="name"
								class="rounded-lg border border-charcoal-700 bg-charcoal-850 px-4 py-3 text-stone-100 placeholder-stone-500 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
								placeholder="Your name"
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="phone" class="font-heading text-sm font-medium text-stone-300">Phone</label>
							<input
								id="phone"
								type="tel"
								bind:value={phone}
								autocomplete="tel"
								class="rounded-lg border border-charcoal-700 bg-charcoal-850 px-4 py-3 text-stone-100 placeholder-stone-500 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
								placeholder="(325) 555-0123"
							/>
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="font-heading text-sm font-medium text-stone-300">Email *</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							autocomplete="email"
							class="rounded-lg border border-charcoal-700 bg-charcoal-850 px-4 py-3 text-stone-100 placeholder-stone-500 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
							placeholder="you@example.com"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="message" class="font-heading text-sm font-medium text-stone-300">Message *</label>
						<textarea
							id="message"
							rows="5"
							bind:value={message}
							class="resize-y rounded-lg border border-charcoal-700 bg-charcoal-850 px-4 py-3 text-stone-100 placeholder-stone-500 transition-colors focus:border-ember-500 focus:outline-none focus:ring-1 focus:ring-ember-500"
							placeholder="Tell us about your order, catering needs, or anything else…"
						></textarea>
					</div>

					{#if error}
						<p class="text-sm text-bbqred-500" role="alert">{error}</p>
					{/if}

					<Button type="submit" variant="primary" size="lg" class="w-full">
						<Send class="h-5 w-5" /> Send Message
					</Button>
					<p class="text-center text-xs text-stone-500">
						Prefer to talk? Call <a href={business.phoneHref} class="text-ember-400">{business.phone}</a>.
					</p>
				</form>
			{/if}
		</div>

		<!-- Details -->
		<div class="flex flex-col gap-6">
			<div use:reveal class="rounded-2xl border border-charcoal-700/70 bg-charcoal-850 p-7">
				<h3 class="flex items-center gap-2 font-heading text-lg font-semibold text-stone-50">
					<Clock class="h-5 w-5 text-ember-400" /> Hours
				</h3>
				<ul class="mt-4 space-y-2">
					{#each hours as d (d.day)}
						<li class="flex items-center justify-between border-b border-charcoal-800 pb-2 text-sm last:border-0">
							<span class="text-stone-400">{d.day}</span>
							<span class="font-medium text-stone-200">{d.closed ? 'Closed' : d.hours}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div use:reveal={{ delay: 80 }} class="rounded-2xl border border-charcoal-700/70 bg-charcoal-850 p-7">
				<h3 class="font-heading text-lg font-semibold text-stone-50">Service Options</h3>
				<div class="mt-4 grid grid-cols-3 gap-3">
					{#each serviceList as s (s.label)}
						<div
							class="flex flex-col items-center gap-2 rounded-lg border p-4 text-center {s.available
								? 'border-ember-500/30 bg-ember-500/5'
								: 'border-charcoal-700 opacity-50'}"
						>
							<s.icon class="h-6 w-6 {s.available ? 'text-ember-400' : 'text-stone-500'}" />
							<span class="font-heading text-sm font-medium text-stone-200">{s.label}</span>
							<span class="text-xs {s.available ? 'text-ember-400' : 'text-stone-500'}">
								{s.available ? 'Available' : 'Not available'}
							</span>
						</div>
					{/each}
				</div>
			</div>

			<div use:reveal={{ delay: 160 }} class="rounded-2xl border border-charcoal-700/70 bg-charcoal-850 p-7">
				<h3 class="font-heading text-lg font-semibold text-stone-50">Follow the Smoke</h3>
				<p class="mt-2 text-sm text-stone-400">Daily specials and sell-out alerts on social.</p>
				<div class="mt-4 flex gap-3">
					<a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="flex h-11 w-11 items-center justify-center rounded-lg border border-charcoal-700 text-stone-300 transition-colors hover:border-ember-500 hover:text-ember-400">
						<Facebook class="h-5 w-5" />
					</a>
					<a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="flex h-11 w-11 items-center justify-center rounded-lg border border-charcoal-700 text-stone-300 transition-colors hover:border-ember-500 hover:text-ember-400">
						<Instagram class="h-5 w-5" />
					</a>
					<a href={business.mapsDirections} target="_blank" rel="noopener noreferrer" aria-label="Directions" class="flex h-11 w-11 items-center justify-center rounded-lg border border-charcoal-700 text-stone-300 transition-colors hover:border-ember-500 hover:text-ember-400">
						<Navigation class="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Map -->
<section class="border-t border-charcoal-700/60">
	<div class="h-[450px] w-full">
		<iframe
			title="Map to {business.name}"
			src={business.mapsEmbed}
			class="h-full w-full"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>
