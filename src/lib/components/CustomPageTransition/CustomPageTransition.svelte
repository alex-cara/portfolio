<script lang="ts">
	import { tick, onMount } from 'svelte';
	import { createTimeline, utils, stagger, animate } from 'animejs';
	import { sphereCoords, sphereColor } from './data.js';
	import { effect } from '@melt-ui/svelte/internal/helpers';
	import { page, navigating } from '$app/state';
	let cx = $sphereCoords.sphereX;
	let cy = $sphereCoords.sphereY;
	sphereColor.set('#ffffff');

	import { beforeNavigate, onNavigate, afterNavigate } from '$app/navigation';

	let transitioning = $state(false);
	let visibility = $state('hidden');

	let cover;
	let reveal;
	onMount(() => {
		beforeNavigate((navigation) => {
			let visibility = 'visible';
			tick().then(() => {
				cover = animate('.circle', {
					duration: 1000,
					r: '200%',
					ease: 'inExpo'
				});
			});
		});
		afterNavigate((navigation) => {
			reveal = animate('.circle', {
				duration: 1000,
				r: '0%',
				ease: 'outQuint'
			});
		});
	});
</script>

<svelte:body
	onmousedowncapture={(event) => {
		sphereCoords.set({ sphereX: event.clientX, sphereY: event.clientY });
	}}
/>
<svg class="absolute z-99 h-dvh w-dvw overflow-hidden" pointer-events="none">
	<circle
		class="circle"
		r="1%"
		cx={$sphereCoords.sphereX}
		cy={$sphereCoords.sphereY}
		fill={$sphereColor}
	>
	</circle>
</svg>
