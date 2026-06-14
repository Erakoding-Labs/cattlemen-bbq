<script lang="ts">
	import { Star, StarHalf } from 'lucide-svelte';

	interface Props {
		rating: number;
		size?: number;
		class?: string;
	}

	let { rating, size = 18, class: className = '' }: Props = $props();

	const full = $derived(Math.floor(rating));
	const half = $derived(rating - full >= 0.5);
	const empty = $derived(5 - full - (half ? 1 : 0));
</script>

<div
	class="inline-flex items-center gap-0.5 {className}"
	role="img"
	aria-label={`${rating} out of 5 stars`}
>
	{#each Array(full) as _, i (i)}
		<Star width={size} height={size} class="fill-ember-400 text-ember-400" />
	{/each}
	{#if half}
		<StarHalf width={size} height={size} class="fill-ember-400 text-ember-400" />
	{/if}
	{#each Array(empty) as _, i (i)}
		<Star width={size} height={size} class="text-charcoal-600" />
	{/each}
</div>
