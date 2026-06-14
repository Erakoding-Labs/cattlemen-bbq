<script lang="ts">
	import { business } from '$lib/data/business';
	import { img, PHOTOS } from '$lib/data/images';

	interface Props {
		title: string;
		description: string;
		path?: string;
		image?: string;
		type?: 'website' | 'article';
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title,
		description,
		path = '',
		image = img(PHOTOS.brisketSlices, 1200, 630),
		type = 'website',
		jsonLd
	}: Props = $props();

	const fullTitle = $derived(`${title} | ${business.name} — Brady, TX`);
	const canonical = $derived(`${business.url}${path}`);
	const schema = $derived(jsonLd ? JSON.stringify(jsonLd) : null);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content="Brady, Texas" />
	<meta name="geo.position" content={`${business.geo.lat};${business.geo.lng}`} />

	{#if schema}
		{@html `<script type="application/ld+json">${schema}<\/script>`}
	{/if}
</svelte:head>
