<script lang="ts">
	import { page } from '$app/stores';
	import { nav, business } from '$lib/data/business';
	import { Flame, Menu, X, Phone } from 'lucide-svelte';
	import Button from './ui/Button.svelte';

	let scrolled = $state(false);
	let open = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	$effect(() => {
		// lock body scroll when mobile menu open
		if (typeof document !== 'undefined') {
			document.body.style.overflow = open ? 'hidden' : '';
		}
	});

	const current = $derived($page.url.pathname);
</script>

<svelte:window on:scroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled || open
		? 'border-b border-charcoal-700/60 bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-black/40'
		: 'bg-gradient-to-b from-black/60 to-transparent'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
		<a href="/" class="group flex items-center gap-2.5" aria-label="{business.name} home">
			<span
				class="flex h-10 w-10 items-center justify-center rounded-md bg-ember-500 text-charcoal-950 transition-transform group-hover:scale-105"
			>
				<Flame class="h-6 w-6" />
			</span>
			<span class="flex flex-col leading-none">
				<span class="font-display text-2xl uppercase tracking-wide text-stone-50">Cattleman's</span>
				<span class="font-heading text-[0.65rem] uppercase tracking-[0.35em] text-ember-400">
					Texas BBQ
				</span>
			</span>
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-1 lg:flex">
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class="relative rounded-md px-3.5 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-colors {current ===
						item.href
							? 'text-ember-400'
							: 'text-stone-300 hover:text-ember-300'}"
						aria-current={current === item.href ? 'page' : undefined}
					>
						{item.label}
						{#if current === item.href}
							<span class="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-ember-500"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<div class="hidden items-center gap-3 lg:flex">
			<Button href={business.phoneHref} variant="primary" size="sm" aria-label="Call {business.name}">
				<Phone class="h-4 w-4" />
				Call Now
			</Button>
		</div>

		<!-- Mobile toggle -->
		<button
			class="flex h-11 w-11 items-center justify-center rounded-md text-stone-100 hover:bg-charcoal-800 lg:hidden"
			onclick={() => (open = !open)}
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
		>
			{#if open}
				<X class="h-7 w-7" />
			{:else}
				<Menu class="h-7 w-7" />
			{/if}
		</button>
	</nav>
</header>

<!-- Mobile menu -->
{#if open}
	<div class="fixed inset-0 z-40 lg:hidden">
		<button
			class="absolute inset-0 bg-black/70 backdrop-blur-sm"
			onclick={() => (open = false)}
			aria-label="Close menu overlay"
			tabindex="-1"
		></button>
		<div
			class="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 border-l border-charcoal-700 bg-charcoal-900 px-6 pb-8 pt-24 shadow-2xl"
		>
			{#each nav as item (item.href)}
				<a
					href={item.href}
					onclick={() => (open = false)}
					class="rounded-lg px-4 py-3.5 font-heading text-lg font-medium uppercase tracking-wide transition-colors {current ===
					item.href
						? 'bg-charcoal-800 text-ember-400'
						: 'text-stone-200 hover:bg-charcoal-800 hover:text-ember-300'}"
					aria-current={current === item.href ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
			<div class="mt-4 flex flex-col gap-3 border-t border-charcoal-700 pt-6">
				<Button href={business.phoneHref} variant="primary" size="lg">
					<Phone class="h-5 w-5" />
					Call {business.phone}
				</Button>
				<Button href="/menu" variant="outline" size="lg" onclick={() => (open = false)}>
					View Full Menu
				</Button>
			</div>
		</div>
	</div>
{/if}
