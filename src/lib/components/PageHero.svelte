<script lang="ts">
	import SmartImage from './SmartImage.svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		image: string;
	}

	let { eyebrow, title, subtitle, image }: Props = $props();
</script>

<section class="relative flex min-h-[52vh] items-end overflow-hidden pt-20">
	<SmartImage src={image} alt="" eager class="absolute inset-0 h-full w-full" />
	<div class="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40"></div>
	<div class="absolute inset-0 bg-charcoal-950/30"></div>

	<div class="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
		<div class="max-w-3xl" use:reveal>
			{#if eyebrow}
				<span class="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-ember-400">
					<span class="h-px w-8 bg-ember-500"></span>
					{eyebrow}
				</span>
			{/if}
			<h1 class="mt-3 font-display text-5xl uppercase leading-[0.9] text-stone-50 sm:text-6xl md:text-7xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">{subtitle}</p>
			{/if}
		</div>
	</div>
</section>
