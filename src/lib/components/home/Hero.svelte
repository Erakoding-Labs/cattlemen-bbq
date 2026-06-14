<script lang="ts">
	import { business } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';
	import Button from '$lib/components/ui/Button.svelte';
	import StarRating from '$lib/components/ui/StarRating.svelte';
	import { Phone, UtensilsCrossed, ChevronDown, MapPin } from 'lucide-svelte';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<section class="relative flex min-h-[100svh] items-center overflow-hidden">
	<!-- Parallax background -->
	<div
		class="absolute inset-0 -z-10 will-change-transform"
		style="transform: translateY({scrollY * 0.4}px) scale(1.15);"
	>
		<img
			src={img(PHOTOS.brisketSlices, 1920, 1280, 80)}
			alt="Slow-smoked Texas brisket sliced to reveal a deep smoke ring"
			fetchpriority="high"
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="absolute inset-0 -z-10 bg-charcoal-950/55"></div>
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/70"
	></div>
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-950/80 to-transparent"
	></div>

	<div class="mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-charcoal-900/70 px-4 py-1.5 backdrop-blur-sm"
			>
				<StarRating rating={business.rating} size={15} />
				<span class="text-sm font-semibold text-stone-100">{business.rating.toFixed(1)}</span>
				<span class="text-sm text-stone-400">· {business.reviewCount}+ reviews</span>
			</div>

			<h1
				class="mt-6 font-display text-6xl uppercase leading-[0.88] text-stone-50 drop-shadow-lg sm:text-7xl md:text-8xl"
			>
				Authentic Texas BBQ,<br />
				<span class="text-gradient-ember">Slow-Smoked</span> to Perfection
			</h1>

			<p class="mt-6 max-w-xl text-lg leading-relaxed text-stone-200 sm:text-xl">
				Brisket, ribs, pulled pork, and smoked turkey — pulled fresh off the post-oak pit in Brady,
				Texas. Every plate comes with complimentary beans &amp; cornbread.
			</p>

			<div class="mt-9 flex flex-col gap-4 sm:flex-row">
				<Button href="/menu" variant="primary" size="lg">
					<UtensilsCrossed class="h-5 w-5" /> View Menu
				</Button>
				<Button href={business.phoneHref} variant="outline" size="lg" aria-label="Call {business.name}">
					<Phone class="h-5 w-5" /> Call Now
				</Button>
			</div>

			<div class="mt-8 flex items-center gap-2 text-sm text-stone-300">
				<MapPin class="h-4 w-4 text-ember-500" />
				<span>{business.address.street}, {business.address.city}, {business.address.state} · Dine-In &amp; Takeout</span>
			</div>
		</div>
	</div>

	<div
		class="absolute inset-x-0 bottom-6 flex justify-center"
		style="opacity: {Math.max(0, 1 - scrollY / 300)};"
	>
		<ChevronDown class="h-7 w-7 animate-bounce text-ember-400" aria-hidden="true" />
	</div>
</section>
