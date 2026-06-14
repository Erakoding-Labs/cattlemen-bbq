<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import StarRating from '$lib/components/ui/StarRating.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { reviews, ratingBreakdown, reviewStats } from '$lib/data/reviews';
	import { business, social } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';
	import { breadcrumbSchema } from '$lib/data/schema';
	import { Star, ThumbsUp, ExternalLink, ShieldCheck } from 'lucide-svelte';

	const schema = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Reviews', path: '/reviews' }
	]);
</script>

<Seo
	title="Reviews & Ratings"
	description="Read what guests say about Cattleman's BBQ in Brady, TX — rated 4.0/5 across 382+ reviews. Brisket, ribs, huge portions, great value, and complimentary beans & cornbread."
	path="/reviews"
	image={img(PHOTOS.happyCustomers, 1200, 630)}
	jsonLd={schema}
/>

<PageHero
	eyebrow="Guest Reviews"
	title="Loved by Locals"
	subtitle="Rated {business.rating.toFixed(1)} out of 5 across {business.reviewCount}+ reviews. Here's what folks say after they pull up a chair."
	image={img(PHOTOS.happyCustomers, 1920, 1000)}
/>

<!-- Rating summary -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
	<div class="grid gap-10 rounded-2xl border border-charcoal-700/70 bg-charcoal-900 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
		<div class="flex flex-col items-center text-center md:border-r md:border-charcoal-700 md:pr-12" use:reveal>
			<span class="font-display text-7xl text-ember-400">{business.rating.toFixed(1)}</span>
			<StarRating rating={business.rating} size={22} class="mt-2" />
			<p class="mt-2 text-sm text-stone-400">{business.reviewCount}+ Google reviews</p>
		</div>

		<div use:reveal class="space-y-2.5">
			{#each ratingBreakdown as row (row.stars)}
				<div class="flex items-center gap-3">
					<span class="flex w-12 shrink-0 items-center gap-1 text-sm text-stone-400">
						{row.stars} <Star class="h-3.5 w-3.5 fill-ember-400 text-ember-400" />
					</span>
					<div class="h-2.5 flex-1 overflow-hidden rounded-full bg-charcoal-800">
						<div class="h-full rounded-full bg-ember-500" style="width: {row.percent}%"></div>
					</div>
					<span class="w-10 shrink-0 text-right text-sm text-stone-500">{row.count}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Stats -->
<section class="border-y border-charcoal-700/60 bg-charcoal-900">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
		{#each reviewStats as s, i (s.label)}
			<div use:reveal={{ delay: i * 80 }} class="px-2 py-10 text-center">
				<p class="font-display text-4xl text-ember-400 sm:text-5xl">{s.value}</p>
				<p class="mt-1 font-heading text-sm font-semibold uppercase tracking-wide text-stone-100">
					{s.label}
				</p>
				<p class="text-xs text-stone-500">{s.sub}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Testimonials -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="flex justify-center">
		<SectionHeading
			eyebrow="In Their Words"
			title="What Guests Are Saying"
			subtitle="Real feedback from the folks who keep our pit busy."
		/>
	</div>
	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each reviews as review, i (review.name)}
			<ReviewCard {review} delay={(i % 3) * 80} />
		{/each}
	</div>
</section>

<!-- Trust section -->
<section class="border-t border-charcoal-700/60 bg-charcoal-900">
	<div class="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8" use:reveal>
		<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember-500/15 text-ember-400">
			<ShieldCheck class="h-7 w-7" />
		</span>
		<h2 class="mt-5 font-display text-4xl uppercase text-stone-50 sm:text-5xl">
			Taste It For Yourself
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-stone-300">
			Reviews are great, but the brisket speaks for itself. Come see why {business.reviewCount}+ guests
			keep coming back — then leave a review of your own.
		</p>
		<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href={social.google} variant="primary" size="lg" external>
				<ThumbsUp class="h-5 w-5" /> Leave a Review
			</Button>
			<Button href="/menu" variant="outline" size="lg">View the Menu <ExternalLink class="h-4 w-4" /></Button>
		</div>
	</div>
</section>

<CtaBanner />
