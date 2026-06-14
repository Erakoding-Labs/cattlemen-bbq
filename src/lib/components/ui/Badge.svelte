<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Flame } from 'lucide-svelte';

	interface Props {
		variant?: 'popular' | 'tag' | 'complimentary';
		class?: string;
		children: Snippet;
	}

	let { variant = 'tag', class: className = '', children }: Props = $props();

	const variants = {
		popular:
			'bg-ember-500 text-charcoal-950 shadow-[0_0_18px_-4px_rgba(249,115,22,0.7)]',
		tag: 'bg-charcoal-700/80 text-ember-300 border border-ember-500/30',
		complimentary: 'bg-bbqred-700 text-stone-50'
	};
</script>

<span
	class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wide {variants[
		variant
	]} {className}"
>
	{#if variant === 'popular'}<Flame class="h-3 w-3" />{/if}
	{@render children()}
</span>
