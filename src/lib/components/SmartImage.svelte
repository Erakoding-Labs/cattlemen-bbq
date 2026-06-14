<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		class?: string;
		width?: number;
		height?: number;
		eager?: boolean;
		sizes?: string;
	}

	let {
		src,
		alt,
		class: className = '',
		width,
		height,
		eager = false,
		sizes
	}: Props = $props();

	let loaded = $state(false);
	let failed = $state(false);

	// Smoky gradient fallback so the UI never shows a broken image.
	const fallback =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='450' viewBox='0 0 600 450'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%232a1f19'/%3E%3Cstop offset='0.5' stop-color='%23211814'/%3E%3Cstop offset='1' stop-color='%23140f0c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='450' fill='url(%23g)'/%3E%3Cpath d='M150 270c-30 30-10 55 15 70 25-15 45-40 15-70z' fill='%23b8470a' opacity='0.5'/%3E%3Cpath d='M300 250c-40 40-15 70 20 90 35-20 60-50 20-90z' fill='%23f97316' opacity='0.55'/%3E%3Cpath d='M450 270c-30 30-10 55 15 70 25-15 45-40 15-70z' fill='%23b8470a' opacity='0.5'/%3E%3C/svg%3E";
</script>

<div class="relative overflow-hidden {className}">
	{#if !loaded && !failed}
		<div class="absolute inset-0 animate-pulse bg-charcoal-800"></div>
	{/if}
	<img
		src={failed ? fallback : src}
		{alt}
		{width}
		{height}
		{sizes}
		loading={eager ? 'eager' : 'lazy'}
		decoding="async"
		fetchpriority={eager ? 'high' : 'auto'}
		class="h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out {loaded ||
		failed
			? 'opacity-100'
			: 'opacity-0'}"
		onload={() => (loaded = true)}
		onerror={() => (failed = true)}
	/>
</div>
