<!-- -- https://tobiasahlin.com/blog/how-to-animate-box-shadow/ -->
<!-- As for how to make this work maybe using a animejs timeline and chain together the .button-hover and inset-->

<script lang="ts">
	import { onMount } from 'svelte';
	import { createTimeline, utils, stagger, animate } from 'animejs';

	let { id, href, children } = $props();
	let from_sunk_to_hover;

	onMount(() => {
		from_sunk_to_hover = createTimeline({
			defaults: {
				duration: 300
			},
			autoplay: false
		})
			.add('#' + id + 'sunk', {
				opacity: 0,
				ease: 'linear'
			})
			.add(
				'#' + id + 'hover',
				{
					opacity: 1,
					ease: 'linear'
				},
				'-=50'
			);
	});
</script>

<div
	class="relative h-full w-full"
	onmouseover={() => {
		from_sunk_to_hover.play();
	}}
	onmouseout={() => {
		from_sunk_to_hover.reverse();
	}}
>
	<a {href}>
		{@render children()}
		<div id={id + 'hover'} class="customButton-hover"></div>
		<div id={id + 'sunk'} class="customButton-sunk"></div>
	</a>
</div>

<style>
	@media only screen and (width > 48rem) {
		.customButton-sunk {
			content: '';
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			position: absolute;
			z-index: 999;
			box-shadow:
				0 1px 3px rgba(0, 0, 0, 0.39) inset,
				0 2px 4px rgba(0, 0, 0, 0.35) inset,
				0 4px 8px rgba(0, 0, 0, 0.3) inset,
				0 8px 16px rgba(0, 0, 0, 0.2) inset,
				0 16px 32px rgba(0, 0, 0, 0.17) inset;
			opacity: 1;
		}

		.customButton-hover {
			content: '';
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			position: absolute;
			z-index: -1;
			box-shadow:
				0 1px 3px rgba(0, 0, 0, 0.17),
				0 2px 4px rgba(0, 0, 0, 0.12),
				0 4px 8px rgba(0, 0, 0, 0.1),
				0 8px 16px rgba(0, 0, 0, 0.07),
				0 16px 32px rgba(0, 0, 0, 0.07),
				0 32px 64px rgba(0, 0, 0, 0.07);
			opacity: 0;
		}
	}
</style>
