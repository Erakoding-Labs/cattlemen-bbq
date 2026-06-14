<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SmartImage from '$lib/components/SmartImage.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { gallery, galleryCategories } from '$lib/data/gallery';
	import { img, PHOTOS } from '$lib/data/images';
	import { breadcrumbSchema } from '$lib/data/schema';
	import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-svelte';

	let filter = $state<(typeof galleryCategories)[number]>('All');
	let lightbox = $state<number | null>(null);

	const filtered = $derived(
		filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)
	);

	function open(i: number) {
		lightbox = i;
	}
	function close() {
		lightbox = null;
	}
	function next() {
		if (lightbox !== null) lightbox = (lightbox + 1) % filtered.length;
	}
	function prev() {
		if (lightbox !== null) lightbox = (lightbox - 1 + filtered.length) % filtered.length;
	}

	function onKey(e: KeyboardEvent) {
		if (lightbox === null) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = lightbox !== null ? 'hidden' : '';
		}
	});

	const schema = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Gallery', path: '/gallery' }
	]);
</script>

<svelte:window on:keydown={onKey} />

<Seo
	title="Gallery"
	description="A look inside Cattleman's BBQ in Brady, TX — smoked brisket close-ups, racks of ribs, the wood-fired pit, our rustic dining room, and happy guests."
	path="/gallery"
	image={img(PHOTOS.bbqPlatter, 1200, 630)}
	jsonLd={schema}
/>

<PageHero
	eyebrow="The Gallery"
	title="Smoke. Fire. Flavor."
	subtitle="A close-up look at the meats, the pit, and the people that make Cattleman's worth the drive."
	image={img(PHOTOS.grillFire, 1920, 1000)}
/>

<!-- Filter -->
<div class="sticky top-[68px] z-30 border-y border-charcoal-700/60 bg-charcoal-950/95 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="flex justify-start gap-1 overflow-x-auto py-3 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
			{#each galleryCategories as cat (cat)}
				<button
					onclick={() => (filter = cat)}
					class="shrink-0 rounded-full px-4 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-colors {filter ===
					cat
						? 'bg-ember-500 text-charcoal-950'
						: 'text-stone-300 hover:bg-charcoal-800 hover:text-ember-300'}"
				>
					{cat}
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Masonry -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
		{#each filtered as image, i (image.src)}
			<button
				use:reveal={{ delay: (i % 3) * 70 }}
				onclick={() => open(i)}
				class="group relative block w-full overflow-hidden rounded-xl border border-charcoal-700/60 break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400"
			>
				<SmartImage
					src={image.src}
					alt={image.alt}
					class="w-full transition-transform duration-500 group-hover:scale-105 {image.span
						? 'aspect-[3/4]'
						: 'aspect-[4/3]'}"
				/>
				<div class="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<div class="flex w-full items-center justify-between p-4">
						<span class="font-heading text-xs uppercase tracking-wide text-ember-300">{image.category}</span>
						<ZoomIn class="h-5 w-5 text-stone-100" />
					</div>
				</div>
			</button>
		{/each}
	</div>
</section>

<!-- Lightbox -->
{#if lightbox !== null}
	<div class="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
		<button class="absolute inset-0" onclick={close} aria-label="Close gallery viewer"></button>

		<button
			onclick={close}
			class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-800/80 text-stone-100 hover:bg-ember-500 hover:text-charcoal-950"
			aria-label="Close"
		>
			<X class="h-6 w-6" />
		</button>

		<button
			onclick={prev}
			class="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-800/80 text-stone-100 hover:bg-ember-500 hover:text-charcoal-950 sm:left-6"
			aria-label="Previous image"
		>
			<ChevronLeft class="h-7 w-7" />
		</button>

		<figure class="relative z-[1] max-h-[85vh] max-w-4xl">
			<img
				src={filtered[lightbox].src}
				alt={filtered[lightbox].alt}
				class="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
			/>
			<figcaption class="mt-3 text-center text-sm text-stone-300">
				{filtered[lightbox].alt}
			</figcaption>
		</figure>

		<button
			onclick={next}
			class="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-800/80 text-stone-100 hover:bg-ember-500 hover:text-charcoal-950 sm:right-6"
			aria-label="Next image"
		>
			<ChevronRight class="h-7 w-7" />
		</button>
	</div>
{/if}

<CtaBanner />
