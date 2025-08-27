<script>
	import { sphereColor } from '../CustomPageTransition/data';
	let { color_for_button = 'text-black', transition_color = '#fffced' } = $props();
</script>

<a
	class="p-2 {color_for_button} text-4xl font-extrabold"
	onclick={() => {
		sphereColor.set(transition_color);
	}}
	href="/"
>
	&#8592;
</a>
