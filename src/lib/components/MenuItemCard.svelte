<script lang="ts">
	import type { MenuItem } from '$lib/data/menu';
	import SmartImage from './SmartImage.svelte';
	import Badge from './ui/Badge.svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		item: MenuItem;
		delay?: number;
	}

	let { item, delay = 0 }: Props = $props();
</script>

<article
	use:reveal={{ delay }}
	class="group flex flex-col overflow-hidden rounded-xl border border-charcoal-700/70 bg-charcoal-850 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-xl hover:shadow-black/40"
>
	<div class="relative aspect-[4/3] overflow-hidden">
		<SmartImage
			src={item.image}
			alt={item.name}
			class="h-full w-full"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent"></div>
		<div class="absolute left-3 top-3 flex flex-wrap gap-2">
			{#if item.popular}
				<Badge variant="popular">Popular</Badge>
			{/if}
			{#each item.tags ?? [] as tag (tag)}
				<Badge variant={tag === 'Complimentary' ? 'complimentary' : 'tag'}>{tag}</Badge>
			{/each}
		</div>
	</div>

	<div class="flex flex-1 flex-col p-5">
		<div class="flex items-start justify-between gap-3">
			<h3 class="font-heading text-xl font-semibold leading-tight text-stone-50">
				{item.name}
			</h3>
			<span class="shrink-0 font-display text-xl text-ember-400">{item.price}</span>
		</div>
		<p class="mt-2 flex-1 text-sm leading-relaxed text-stone-400">{item.description}</p>
	</div>
</article>
