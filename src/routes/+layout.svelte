<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { localBusinessSchema } from '$lib/data/schema';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const schema = JSON.stringify(localBusinessSchema);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${schema}<\/script>`}
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ember-500 focus:px-4 focus:py-2 focus:font-heading focus:text-charcoal-950"
>
	Skip to content
</a>

<Navbar />

<main id="main" class="min-h-screen">
	{@render children()}
</main>

<Footer />
