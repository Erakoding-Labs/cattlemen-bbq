<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import { Flame, Home, UtensilsCrossed } from 'lucide-svelte';
</script>

<section class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<Flame class="h-14 w-14 text-ember-500" />
	<p class="mt-6 font-display text-7xl text-ember-400">{$page.status}</p>
	<h1 class="mt-2 font-display text-3xl uppercase text-stone-50">
		{$page.status === 404 ? 'This Plate Is Empty' : 'Something Went Up In Smoke'}
	</h1>
	<p class="mt-3 max-w-md text-stone-400">
		{$page.error?.message ??
			"We couldn't find what you were looking for. Let's get you back to the good stuff."}
	</p>
	<div class="mt-8 flex flex-col gap-3 sm:flex-row">
		<Button href="/" variant="primary" size="lg"><Home class="h-5 w-5" /> Back Home</Button>
		<Button href="/menu" variant="outline" size="lg">
			<UtensilsCrossed class="h-5 w-5" /> See the Menu
		</Button>
	</div>
</section>
