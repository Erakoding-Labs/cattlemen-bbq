<script lang="ts">
	import { business } from '$lib/data/business';
	import Button from './ui/Button.svelte';
	import SmartImage from './SmartImage.svelte';
	import { img, PHOTOS } from '$lib/data/images';
	import { reveal } from '$lib/actions/reveal';
	import { Phone, UtensilsCrossed } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden">
	<SmartImage src={img(PHOTOS.grillFire, 1600, 700)} alt="" class="absolute inset-0 h-full w-full" />
	<div class="absolute inset-0 bg-charcoal-950/85"></div>
	<div class="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-bbqred-800/40"></div>

	<div class="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8" use:reveal>
		<span class="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-ember-400">
			Hungry yet?
		</span>
		<h2 class="mt-3 font-display text-4xl uppercase leading-[0.95] text-stone-50 sm:text-5xl md:text-6xl">
			Come Get Your Smoke On
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-stone-300">
			Call ahead for takeout or come on in for dine-in. Fresh off the pit daily until we sell out —
			and we always sell out.
		</p>
		<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href={business.phoneHref} variant="primary" size="lg" aria-label="Call {business.name}">
				<Phone class="h-5 w-5" />
				Call {business.phone}
			</Button>
			<Button href="/menu" variant="outline" size="lg">
				<UtensilsCrossed class="h-5 w-5" />
				View Full Menu
			</Button>
		</div>
	</div>
</section>
