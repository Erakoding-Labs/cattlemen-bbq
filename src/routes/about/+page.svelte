<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import SmartImage from '$lib/components/SmartImage.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { business } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';
	import { breadcrumbSchema } from '$lib/data/schema';
	import {
		Flame,
		Clock,
		Beef,
		Users,
		Heart,
		TreePine,
		ThermometerSun,
		UtensilsCrossed,
		ArrowRight
	} from 'lucide-svelte';

	const steps = [
		{
			icon: TreePine,
			step: '01',
			title: 'Seasoned Post Oak',
			text: 'It starts with the wood. We burn split, seasoned Texas post oak — the gold standard of Hill Country barbecue — for a clean, sweet smoke.'
		},
		{
			icon: Flame,
			step: '02',
			title: 'Rubbed & Fired',
			text: 'Briskets get a simple salt-and-pepper rub, then go onto the offset pit before sunrise while the coals are steady and hot.'
		},
		{
			icon: ThermometerSun,
			step: '03',
			title: 'Low & Slow',
			text: 'We hold a steady low temperature for up to 14 hours, spritzing and tending the fire until the bark sets and the fat renders to butter.'
		},
		{
			icon: UtensilsCrossed,
			step: '04',
			title: 'Carved to Order',
			text: 'Nothing is sliced until you order it. Every plate leaves the pit juicy, smoky, and exactly the way Texas intended.'
		}
	];

	const values = [
		{
			icon: Beef,
			title: 'Quality First',
			text: 'We start with good meat and treat it with respect. No filler, no shortcuts, no liquid smoke — ever.'
		},
		{
			icon: Users,
			title: 'Family-Style',
			text: 'Big portions meant for sharing. Family packs, complimentary sides, and a table that feels like home.'
		},
		{
			icon: Heart,
			title: 'Brady Proud',
			text: 'We are part of this community. We cook for our neighbors and treat every guest like an old friend.'
		}
	];

	const schema = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' }
	]);
</script>

<Seo
	title="Our Story"
	description="The story of Cattleman's BBQ in Brady, TX — Texas barbecue tradition, real post-oak smoke, low-and-slow cooking, and family-style dining built on quality and flavor."
	path="/about"
	image={img(PHOTOS.pitmaster, 1200, 630)}
	jsonLd={schema}
/>

<PageHero
	eyebrow="Our Story"
	title="Born of Fire & Tradition"
	subtitle="A Brady, Texas barbecue joint built on real wood smoke, honest portions, and the kind of flavor that takes time."
	image={img(PHOTOS.pitmaster, 1920, 1000)}
/>

<!-- Story -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="grid items-center gap-12 lg:grid-cols-2">
		<div use:reveal>
			<SectionHeading
				eyebrow="Where It Began"
				title="Texas BBQ, The Way It Should Be"
				align="left"
			/>
			<div class="mt-6 space-y-4 text-stone-300">
				<p>
					Cattleman's BBQ was built on a simple belief: great barbecue can't be rushed. Here in Brady
					— the geographic heart of Texas — we honor a tradition that goes back generations, when
					ranchers and pitmasters turned tough cuts and patient fires into something unforgettable.
				</p>
				<p>
					Every morning starts before sunrise. We split our post oak, fire the pit, and let time do
					what time does best. By the time the doors open, the smell of smoke has settled over S
					Bridge Street like an invitation.
				</p>
				<p>
					We're not a chain. We're a local pit serving real Texas barbecue to neighbors, road-trippers,
					and anybody hungry enough to find us. Rated <span class="font-semibold text-ember-400">{business.rating.toFixed(1)} stars</span>
					by <span class="font-semibold text-ember-400">{business.reviewCount}+</span> guests — and we're just getting warmed up.
				</p>
			</div>
			<div class="mt-8">
				<Button href="/menu" variant="primary" size="lg">
					See What We Smoke <ArrowRight class="h-4 w-4" />
				</Button>
			</div>
		</div>

		<div use:reveal class="grid grid-cols-2 gap-4">
			<SmartImage src={img(PHOTOS.smoker, 700, 900)} alt="Offset smoker at dawn" class="aspect-[3/4] rounded-2xl" />
			<SmartImage src={img(PHOTOS.brisketSlices, 700, 600)} alt="Sliced smoked brisket" class="mt-10 aspect-square rounded-2xl" />
			<SmartImage src={img(PHOTOS.woodPile, 700, 600)} alt="Stacked post oak firewood" class="-mt-2 aspect-square rounded-2xl" />
			<SmartImage src={img(PHOTOS.ribsRack, 700, 900)} alt="Rack of smoked ribs" class="aspect-[3/4] rounded-2xl" />
		</div>
	</div>
</section>

<!-- Process timeline -->
<section class="border-y border-charcoal-700/60 bg-charcoal-900">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
		<div class="flex justify-center">
			<SectionHeading
				eyebrow="The Process"
				title="From Wood to Plate"
				subtitle="Four steps, zero shortcuts. This is how every brisket earns its bark."
			/>
		</div>

		<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each steps as s, i (s.step)}
				<div
					use:reveal={{ delay: i * 100 }}
					class="relative rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-6"
				>
					<span class="font-display text-5xl text-charcoal-600">{s.step}</span>
					<span class="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/15 text-ember-400">
						<s.icon class="h-6 w-6" />
					</span>
					<h3 class="mt-4 font-heading text-lg font-semibold text-stone-50">{s.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-stone-400">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Values -->
<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="flex justify-center">
		<SectionHeading eyebrow="What We Stand For" title="Our Promise To You" />
	</div>
	<div class="mt-14 grid gap-6 md:grid-cols-3">
		{#each values as v, i (v.title)}
			<div
				use:reveal={{ delay: i * 100 }}
				class="rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-8 text-center transition-colors hover:border-ember-500/40"
			>
				<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember-500/15 text-ember-400">
					<v.icon class="h-7 w-7" />
				</span>
				<h3 class="mt-5 font-heading text-xl font-semibold text-stone-50">{v.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-stone-400">{v.text}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Quote band -->
<section class="relative overflow-hidden">
	<SmartImage src={img(PHOTOS.grillFire, 1600, 700)} alt="" class="absolute inset-0 h-full w-full" />
	<div class="absolute inset-0 bg-charcoal-950/85"></div>
	<div class="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8" use:reveal>
		<Flame class="mx-auto h-10 w-10 text-ember-500" />
		<p class="mt-6 font-display text-3xl uppercase leading-tight text-stone-50 sm:text-4xl md:text-5xl">
			“Good barbecue isn't made. It's earned — one hour of smoke at a time.”
		</p>
		<p class="mt-6 font-heading text-sm uppercase tracking-[0.25em] text-ember-400">
			— The Cattleman's Pit Crew
		</p>
	</div>
</section>

<CtaBanner />
