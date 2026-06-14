<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		align?: 'left' | 'center';
		light?: boolean;
	}

	let { eyebrow, title, subtitle, align = 'center', light = false }: Props = $props();

	const alignCls = $derived(
		align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
	);
</script>

<div class="flex flex-col gap-3 {alignCls} max-w-2xl" use:reveal>
	{#if eyebrow}
		<span class="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-ember-400">
			<span class="h-px w-8 bg-ember-500"></span>
			{eyebrow}
		</span>
	{/if}
	<h2
		class="font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl {light
			? 'text-stone-50'
			: 'text-stone-100'}"
	>
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-1 max-w-xl text-base leading-relaxed text-stone-400 md:text-lg">
			{subtitle}
		</p>
	{/if}
</div>
