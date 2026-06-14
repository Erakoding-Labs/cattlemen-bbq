<script lang="ts">
	import type { Review } from '$lib/data/reviews';
	import StarRating from './ui/StarRating.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Quote } from 'lucide-svelte';

	interface Props {
		review: Review;
		delay?: number;
	}

	let { review, delay = 0 }: Props = $props();

	const initials = $derived(
		review.name
			.split(' ')
			.map((p) => p[0])
			.join('')
			.slice(0, 2)
	);
</script>

<article
	use:reveal={{ delay }}
	class="flex h-full flex-col rounded-xl border border-charcoal-700/70 bg-charcoal-850 p-6 transition-colors hover:border-ember-500/40"
>
	<Quote class="h-7 w-7 text-ember-500/60" />
	<StarRating rating={review.rating} size={16} class="mt-3" />
	<p class="mt-3 flex-1 text-[0.95rem] leading-relaxed text-stone-300">“{review.text}”</p>
	<div class="mt-5 flex items-center gap-3 border-t border-charcoal-700 pt-4">
		<span
			class="flex h-10 w-10 items-center justify-center rounded-full bg-bbqred-700 font-heading text-sm font-semibold text-stone-50"
		>
			{initials}
		</span>
		<div class="leading-tight">
			<p class="font-heading text-sm font-semibold text-stone-100">{review.name}</p>
			<p class="text-xs text-stone-500">{review.location} · {review.date}</p>
		</div>
	</div>
</article>
