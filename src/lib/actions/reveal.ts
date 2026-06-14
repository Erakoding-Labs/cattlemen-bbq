import type { Action } from 'svelte/action';

type RevealParams = {
	delay?: number;
	threshold?: number;
	once?: boolean;
};

/**
 * Scroll-reveal action. Adds `in-view` when the element enters the viewport.
 * Pair with the `.reveal` base class (defined in app.css).
 * Respects prefers-reduced-motion (handled in CSS).
 */
export const reveal: Action<HTMLElement, RevealParams | undefined> = (node, params) => {
	const { delay = 0, threshold = 0.15, once = true } = params ?? {};

	if (delay) node.style.transitionDelay = `${delay}ms`;
	node.classList.add('reveal');

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('in-view');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('in-view');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
