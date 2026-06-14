<script lang="ts">
	import { business, hours, nav, social } from '$lib/data/business';
	import { Flame, Phone, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-svelte';

	const year = 2026;
</script>

<footer class="border-t border-charcoal-700 bg-charcoal-950">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
		<!-- Brand -->
		<div class="lg:col-span-1">
			<div class="flex items-center gap-2.5">
				<span class="flex h-10 w-10 items-center justify-center rounded-md bg-ember-500 text-charcoal-950">
					<Flame class="h-6 w-6" />
				</span>
				<div class="flex flex-col leading-none">
					<span class="font-display text-2xl uppercase tracking-wide text-stone-50">Cattleman's</span>
					<span class="font-heading text-[0.65rem] uppercase tracking-[0.35em] text-ember-400">
						Texas BBQ
					</span>
				</div>
			</div>
			<p class="mt-4 text-sm leading-relaxed text-stone-400">
				Authentic Texas barbecue slow-smoked over post oak in the heart of Brady. Brisket, ribs,
				pulled pork, and complimentary beans &amp; cornbread.
			</p>
			<div class="mt-4 flex items-center gap-2">
				<Star class="h-4 w-4 fill-ember-400 text-ember-400" />
				<span class="text-sm font-semibold text-stone-200">{business.rating.toFixed(1)}</span>
				<span class="text-sm text-stone-500">· {business.reviewCount}+ reviews</span>
			</div>
		</div>

		<!-- Explore -->
		<div>
			<h3 class="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
				Explore
			</h3>
			<ul class="mt-4 flex flex-col gap-2.5">
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							class="text-sm text-stone-400 transition-colors hover:text-ember-300"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Visit -->
		<div>
			<h3 class="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
				Visit Us
			</h3>
			<ul class="mt-4 flex flex-col gap-3 text-sm text-stone-400">
				<li class="flex items-start gap-2.5">
					<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
					<a href={business.mapsDirections} target="_blank" rel="noopener noreferrer" class="hover:text-ember-300">
						{business.address.street}<br />{business.address.city}, {business.address.state}
						{business.address.zip}
					</a>
				</li>
				<li class="flex items-center gap-2.5">
					<Phone class="h-4 w-4 shrink-0 text-ember-500" />
					<a href={business.phoneHref} class="hover:text-ember-300">{business.phone}</a>
				</li>
			</ul>
			<div class="mt-5 flex gap-3">
				<a
					href={social.facebook}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					class="flex h-9 w-9 items-center justify-center rounded-md border border-charcoal-700 text-stone-300 transition-colors hover:border-ember-500 hover:text-ember-400"
				>
					<Facebook class="h-4 w-4" />
				</a>
				<a
					href={social.instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					class="flex h-9 w-9 items-center justify-center rounded-md border border-charcoal-700 text-stone-300 transition-colors hover:border-ember-500 hover:text-ember-400"
				>
					<Instagram class="h-4 w-4" />
				</a>
			</div>
		</div>

		<!-- Hours -->
		<div>
			<h3 class="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
				<Clock class="h-4 w-4" /> Hours
			</h3>
			<ul class="mt-4 flex flex-col gap-1.5 text-sm">
				{#each hours as d (d.day)}
					<li class="flex items-center justify-between gap-3">
						<span class="text-stone-400">{d.day}</span>
						<span class="font-medium text-stone-300">{d.closed ? 'Closed' : d.hours}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-charcoal-800">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:px-6 lg:px-8"
		>
			<p>© {year} {business.name}. All rights reserved.</p>
			<p>Dine-In · Takeout · Catering · Brady, Texas</p>
		</div>
	</div>
</footer>
