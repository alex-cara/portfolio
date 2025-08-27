<script lang="ts">
	import '../app.css';

	import CustomPageTransition from '$lib/components/CustomPageTransition/CustomPageTransition.svelte';
	let { children } = $props();
</script>

<CustomPageTransition></CustomPageTransition>

{@render children()}
