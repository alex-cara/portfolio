import { writable } from 'svelte/store';

export let sphereColor = writable('#ffffff');

export let sphereCoords = writable({
	sphereX: 0,
	sphereY: 0
});

import { onMount } from 'svelte';
import { createTimeline } from 'animejs';

/*
export const transitionStart = createTimeline({
	defaults: {
		duration: 1000
	},
	autoplay: false
}).add('.circle', {
	r: 5400,
	ease: 'inExpo'
});
export const transitionEnd = createTimeline({
	defaults: {
		duration: 1000
	},
	autoplay: false
}).add('.circle', {
	r: 1,
	ease: 'outQuint'
});

*/
