<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		type?: 'button' | 'submit';
		disabled?: boolean;
		external?: boolean;
		children: Snippet;
		onclick?: (e: MouseEvent) => void;
		'aria-label'?: string;
	}

	let {
		href,
		variant = 'primary',
		size = 'md',
		class: className = '',
		type = 'button',
		disabled = false,
		external = false,
		children,
		onclick,
		'aria-label': ariaLabel
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-md font-heading font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950 disabled:opacity-50 disabled:pointer-events-none';

	const variants = {
		primary:
			'bg-ember-500 text-charcoal-950 hover:bg-ember-400 shadow-ember hover:-translate-y-0.5',
		secondary:
			'bg-bbqred-700 text-stone-50 hover:bg-bbqred-600 hover:-translate-y-0.5',
		outline:
			'border-2 border-ember-500/70 text-ember-300 hover:bg-ember-500 hover:text-charcoal-950',
		ghost: 'text-stone-200 hover:text-ember-300 hover:bg-charcoal-800'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base'
	};

	const cls = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a
		{href}
		class={cls}
		aria-label={ariaLabel}
		{onclick}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
	</a>
{:else}
	<button {type} class={cls} {disabled} {onclick} aria-label={ariaLabel}>
		{@render children()}
	</button>
{/if}
