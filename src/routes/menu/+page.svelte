<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import MenuItemCard from '$lib/components/MenuItemCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { menu } from '$lib/data/menu';
	import { business } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';
	import { breadcrumbSchema } from '$lib/data/schema';
	import { Flame, Info } from 'lucide-svelte';

	let active = $state(menu[0].id);

	function scrollTo(id: string) {
		active = id;
		const el = document.getElementById(`cat-${id}`);
		if (el) {
			const y = el.getBoundingClientRect().top + window.scrollY - 130;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}

	function onScroll() {
		const offset = 160;
		for (let i = menu.length - 1; i >= 0; i--) {
			const el = document.getElementById(`cat-${menu[i].id}`);
			if (el && el.getBoundingClientRect().top <= offset) {
				active = menu[i].id;
				break;
			}
		}
	}

	// Menu JSON-LD
	const menuSchema = {
		'@context': 'https://schema.org',
		'@type': 'Menu',
		name: `${business.name} Menu`,
		hasMenuSection: menu.map((cat) => ({
			'@type': 'MenuSection',
			name: cat.name,
			description: cat.blurb,
			hasMenuItem: cat.items.map((item) => ({
				'@type': 'MenuItem',
				name: item.name,
				description: item.description,
				offers: { '@type': 'Offer', price: item.price.replace('$', ''), priceCurrency: 'USD' }
			}))
		}))
	};

	const schema = [
		menuSchema,
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Menu', path: '/menu' }
		])
	];
</script>

<svelte:window on:scroll={onScroll} />

<Seo
	title="Menu & Prices"
	description="Browse the full Cattleman's BBQ menu — brisket, ribs, pulled pork, smoked turkey, BBQ plates, loaded fries, jalapeño poppers, sides & drinks. Most plates $10–20 with complimentary beans & cornbread."
	path="/menu"
	image={img(PHOTOS.bbqPlatter, 1200, 630)}
	jsonLd={schema}
/>

<PageHero
	eyebrow="Slow-Smoked Daily"
	title="The Menu"
	subtitle="Everything is smoked in-house over post oak. Most plates run $10–20 and include two complimentary sides — pit beans and skillet cornbread."
	image={img(PHOTOS.bbqPlatter, 1920, 1000)}
/>

<!-- Sticky category nav -->
<div class="sticky top-[68px] z-30 border-y border-charcoal-700/60 bg-charcoal-950/95 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
			{#each menu as cat (cat.id)}
				<button
					onclick={() => scrollTo(cat.id)}
					class="shrink-0 rounded-full px-4 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-colors {active ===
					cat.id
						? 'bg-ember-500 text-charcoal-950'
						: 'text-stone-300 hover:bg-charcoal-800 hover:text-ember-300'}"
				>
					{cat.name}
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Complimentary banner -->
<div class="bg-bbqred-800/30">
	<div class="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 text-center text-sm text-ember-200 sm:px-6 lg:px-8">
		<Info class="h-4 w-4 shrink-0 text-ember-400" />
		<span>Every plate includes <strong class="font-semibold text-ember-300">complimentary pit beans &amp; cornbread</strong>. Dine-in &amp; takeout — call {business.phone}.</span>
	</div>
</div>

<!-- Categories -->
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	{#each menu as cat (cat.id)}
		<section id="cat-{cat.id}" class="scroll-mt-32 py-16">
			<div class="flex items-center gap-3" use:reveal>
				<Flame class="h-7 w-7 text-ember-500" />
				<div>
					<h2 class="font-display text-4xl uppercase leading-none text-stone-50 sm:text-5xl">
						{cat.name}
					</h2>
				</div>
			</div>
			<p class="mt-3 max-w-2xl text-stone-400" use:reveal>{cat.blurb}</p>

			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each cat.items as item, i (item.name)}
					<MenuItemCard {item} delay={(i % 3) * 80} />
				{/each}
			</div>
		</section>
	{/each}
</div>

<CtaBanner />
