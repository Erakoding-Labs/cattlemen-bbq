<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import MenuItemCard from '$lib/components/MenuItemCard.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import SmartImage from '$lib/components/SmartImage.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import StarRating from '$lib/components/ui/StarRating.svelte';
	import { reveal } from '$lib/actions/reveal';

	import { business, hours } from '$lib/data/business';
	import { featured } from '$lib/data/menu';
	import { reviews } from '$lib/data/reviews';
	import { img, PHOTOS } from '$lib/data/images';

	import {
		Flame,
		Clock,
		MapPin,
		Phone,
		Award,
		Beef,
		Leaf,
		Star,
		ArrowRight,
		Navigation
	} from 'lucide-svelte';

	const trust = [
		{ icon: Star, value: business.rating.toFixed(1), label: 'Star Rating', sub: `${business.reviewCount}+ reviews` },
		{ icon: Flame, value: '14 hrs', label: 'Smoked Daily', sub: 'over post oak' },
		{ icon: Award, value: '100%', label: 'Texas Tradition', sub: 'no shortcuts' },
		{ icon: Beef, value: 'Fresh', label: 'Off the Pit', sub: 'till we sell out' }
	];

	const process = [
		{
			icon: Flame,
			title: 'Real Wood Smoke',
			text: 'We burn seasoned Texas post oak in an offset pit — never gas, never liquid smoke.'
		},
		{
			icon: Clock,
			title: 'Low & Slow',
			text: 'Brisket smokes up to 14 hours until the bark is set and the fat renders to butter.'
		},
		{
			icon: Beef,
			title: 'Hand-Carved',
			text: 'Every order is sliced or pulled to order so it hits your plate juicy, never dry.'
		},
		{
			icon: Leaf,
			title: 'Sides On Us',
			text: 'Pit beans and skillet cornbread come complimentary with every plate. Always.'
		}
	];

	const homeReviews = reviews.slice(0, 3);
</script>

<Seo
	title="Texas BBQ in Brady"
	description="Cattleman's BBQ serves authentic Texas barbecue in Brady, TX — slow-smoked brisket, ribs, pulled pork & smoked turkey with complimentary beans and cornbread. Dine-in & takeout. Call +1 325-597-1111."
	path="/"
/>

<Hero />

<!-- Trust strip -->
<section class="border-y border-charcoal-700/60 bg-charcoal-900">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-2 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each trust as t, i (t.label)}
			<div use:reveal={{ delay: i * 80 }} class="flex items-center gap-4 px-2 py-6">
				<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-charcoal-800 text-ember-400">
					<t.icon class="h-6 w-6" />
				</span>
				<div class="leading-tight">
					<p class="font-display text-2xl text-stone-50">{t.value}</p>
					<p class="font-heading text-sm font-semibold uppercase tracking-wide text-stone-200">
						{t.label}
					</p>
					<p class="text-xs text-stone-500">{t.sub}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Featured items -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
		<SectionHeading
			eyebrow="Fresh Off the Pit"
			title="Fan-Favorite Smoked Meats"
			subtitle="The cuts our regulars drive in for. Pulled, sliced, and stacked high."
			align="left"
		/>
		<Button href="/menu" variant="ghost" class="shrink-0">
			Full Menu <ArrowRight class="h-4 w-4" />
		</Button>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each featured as item, i (item.name)}
			<MenuItemCard {item} delay={i * 90} />
		{/each}
	</div>
</section>

<!-- Process / Why us -->
<section class="relative overflow-hidden bg-charcoal-900">
	<div class="absolute inset-0 opacity-10">
		<SmartImage src={img(PHOTOS.smoker, 1600, 900)} alt="" class="h-full w-full" />
	</div>
	<div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
		<SectionHeading
			eyebrow="The Cattleman's Way"
			title="Smoked With Patience, Served With Pride"
			subtitle="No shortcuts. Just fire, smoke, time, and decades of Texas barbecue tradition."
		/>
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each process as step, i (step.title)}
				<div
					use:reveal={{ delay: i * 90 }}
					class="rounded-xl border border-charcoal-700/70 bg-charcoal-850/80 p-6 backdrop-blur-sm transition-colors hover:border-ember-500/40"
				>
					<span class="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/15 text-ember-400">
						<step.icon class="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-heading text-lg font-semibold text-stone-50">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-stone-400">{step.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Complimentary sides highlight -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div use:reveal class="relative">
			<div class="grid grid-cols-2 gap-4">
				<SmartImage
					src={img(PHOTOS.beans, 700, 800)}
					alt="Smoky pit beans simmered with burnt ends"
					class="aspect-[4/5] rounded-2xl"
				/>
				<SmartImage
					src={img(PHOTOS.cornbread, 700, 800)}
					alt="Golden skillet cornbread served warm"
					class="mt-8 aspect-[4/5] rounded-2xl"
				/>
			</div>
			<div
				class="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-ember-500/40 bg-charcoal-900 px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-ember-400 shadow-ember"
			>
				On the House
			</div>
		</div>

		<div use:reveal>
			<SectionHeading
				eyebrow="Always Complimentary"
				title="Beans & Cornbread, On Us"
				subtitle="Every single plate comes with our slow-simmered pit beans and warm skillet cornbread — no upcharge, no exceptions. It's the Texas way."
				align="left"
			/>
			<ul class="mt-8 space-y-4">
				<li class="flex items-start gap-3">
					<span class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-ember-500/15 text-ember-400">
						<Flame class="h-3.5 w-3.5" />
					</span>
					<p class="text-stone-300">
						<span class="font-semibold text-stone-100">Pit Beans</span> — pinto beans simmered low with
						burnt-end bits, brown sugar, and a smoky kick.
					</p>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-ember-500/15 text-ember-400">
						<Flame class="h-3.5 w-3.5" />
					</span>
					<p class="text-stone-300">
						<span class="font-semibold text-stone-100">Skillet Cornbread</span> — baked golden, just a
						touch sweet, and served warm with every order.
					</p>
				</li>
			</ul>
			<div class="mt-8">
				<Button href="/menu" variant="secondary" size="lg">
					Explore the Sides <ArrowRight class="h-4 w-4" />
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- Reviews highlight -->
<section class="border-y border-charcoal-700/60 bg-charcoal-900">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
		<div class="flex flex-col items-center gap-4 text-center">
			<div use:reveal class="flex flex-col items-center">
				<div class="flex items-baseline gap-3">
					<span class="font-display text-6xl text-ember-400">{business.rating.toFixed(1)}</span>
					<StarRating rating={business.rating} size={24} />
				</div>
				<p class="mt-2 text-stone-400">
					Rated by <span class="font-semibold text-stone-200">{business.reviewCount}+</span> hungry Texans
				</p>
			</div>
			<SectionHeading
				eyebrow="Word of Mouth"
				title="What Folks Are Saying"
			/>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each homeReviews as review, i (review.name)}
				<ReviewCard {review} delay={i * 90} />
			{/each}
		</div>

		<div class="mt-10 text-center" use:reveal>
			<Button href="/reviews" variant="outline" size="lg">
				Read All Reviews <ArrowRight class="h-4 w-4" />
			</Button>
		</div>
	</div>
</section>

<!-- Location + hours -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="grid gap-10 lg:grid-cols-2">
		<div use:reveal>
			<SectionHeading
				eyebrow="Find Us"
				title="Come On Down to Brady"
				subtitle="Right on S Bridge Street in the heart of the Texas Hill Country. Dine in or call ahead for takeout."
				align="left"
			/>

			<div class="mt-8 space-y-5">
				<div class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal-800 text-ember-400">
						<MapPin class="h-5 w-5" />
					</span>
					<div>
						<p class="font-heading font-semibold text-stone-100">Address</p>
						<p class="text-stone-400">{business.address.full}</p>
						<a href={business.mapsDirections} target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-ember-400 hover:text-ember-300">
							<Navigation class="h-3.5 w-3.5" /> Get Directions
						</a>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal-800 text-ember-400">
						<Phone class="h-5 w-5" />
					</span>
					<div>
						<p class="font-heading font-semibold text-stone-100">Phone</p>
						<a href={business.phoneHref} class="text-stone-400 hover:text-ember-300">{business.phone}</a>
					</div>
				</div>

				<div class="flex items-start gap-4">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal-800 text-ember-400">
						<Clock class="h-5 w-5" />
					</span>
					<div class="w-full">
						<p class="font-heading font-semibold text-stone-100">Hours</p>
						<ul class="mt-1 space-y-1">
							{#each hours as d (d.day)}
								<li class="flex max-w-xs justify-between gap-4 text-sm">
									<span class="text-stone-500">{d.day}</span>
									<span class="text-stone-300">{d.closed ? 'Closed' : d.hours}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div use:reveal class="overflow-hidden rounded-2xl border border-charcoal-700">
			<iframe
				title="Map to {business.name}"
				src={business.mapsEmbed}
				class="h-full min-h-[420px] w-full"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>

<CtaBanner />
