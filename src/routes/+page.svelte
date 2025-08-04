<script lang="ts">
	import { onMount } from 'svelte';
	import { createTimeline, utils, stagger, animate } from 'animejs';
	import CustomButton from '$lib/components/ButtonSunkHover/ButtonSunkHover.svelte';

	let m = $state({ x: 0, y: 0 });
	let rad = $state(1);
	let zindex = $state(1);
	let hovered = $state('hovered');

	// Source Code
	// State
	// Can definetly make this better

	let cover_and_reveal;

	onMount(() => {
		cover_and_reveal = createTimeline({
			defaults: {
				duration: 1000
			},
			autoplay: false
		})
			.add('.circle', {
				r: 5400,
				ease: 'inExpo'
			})
			.add('.circle', {
				r: 1,
				ease: 'outQuint'
			});
	});

	//onclick={() => {
	//	zindex = 999;
	//	m.x = event.clientX;
	//	m.y = event.clientY;
	//	cover_and_reveal.restart();
	//	zindex = 1;
	//}}
</script>

{#if true}
	<div class="bg-ctp-peach-100 relative flex h-screen items-center justify-center">
		<div class="home-grid relative z-10 h-screen gap-2 p-8">
			<!-- Replace with buttons tbd  -->
			<div class="intro-square">
				<CustomButton id="intro">
					<button class="latte bg-ctp-mauve-400 h-full w-full rounded-[1vw]">
						<p class="font-ovo text-2xl font-semibold">About Me</p>
						<hr class="mx-auto my-4 h-1 w-12 rounded-sm dark:bg-black" />
						<p class="font-ovo text-2xl font-semibold text-amber-50">Alexandru Cara</p>
						<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
						<p class="font-ovo text-2xl font-semibold">Software Engineer</p>
					</button>
				</CustomButton>
			</div>
			<div class="exhibit1-square">
				<CustomButton id="exhibit1">
					<button class="latte bg-ctp-peach-400 h-full w-full rounded-[1vw]">
						<p class="font-gugi text-2xl font-semibold">AES</p>
					</button>
				</CustomButton>
			</div>
			<div class="exhibit2-square">
				<CustomButton id="exhibit2">
					<button class="latte bg-ctp-green-400 h-full w-full rounded-[1vw]">
						<p class="font-nixie text-2xl font-bold">Leet</p>
						<hr class="mx-auto my-4 h-1 w-12 rounded-sm dark:bg-black" />
						<p class="font-nixie text-2xl font-extrabold">O(<i>n</i> lg<i>n</i>) in O(<i>n</i>)</p>
					</button>
				</CustomButton>
			</div>
			<div class="exhibit4-square">
				<CustomButton id="exhibit4">
					<button class="latte bg-ctp-maroon-600 h-full w-full rounded-[1vw]" />
				</CustomButton>
			</div>
			<div class="blog-square">
				<CustomButton id="blog">
					<button class="latte bg-ctp-blue-300 h-full w-full rounded-[1vw]" />
				</CustomButton>
			</div>
		</div>
	</div>
{/if}

<style>
	/* https://enjeck.com/btns/ */
	/* That is a website with button hover effects */
	/* Worth noting that initial impression is an inversion of shadow drop would be cool*/
	.home-grid {
		box-sizing: border-box;
		margin: auto;
		display: grid;
		height: 100vmin;
		width: 100vmin;
		grid-template-columns: 33% 33% 34%;
		grid-template-rows: 33% 33% 34%;
		grid-template-areas:
			'intro intro exhibit1'
			'intro intro exhibit2'
			'exhibit4 exhibit4 blog';
	}
	.intro-square {
		grid-area: intro;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
	}
	.exhibit1-square {
		grid-area: exhibit1;
		border-radius: 20px;
	}
	.exhibit2-square {
		grid-area: exhibit2;
		border-radius: 20px;
	}

	.exhibit3-square {
		grid-area: exhibit3;
		border-radius: 20px;
	}
	.exhibit4-square {
		grid-area: exhibit4;
		border-radius: 20px;
	}

	.exhibit5-square {
		grid-area: exhibit5;
		border-radius: 20px;
	}

	.blog-square {
		grid-area: blog;
		border-radius: 20px;
	}

	.btn {
		font-family: Arial, Helvetica, sans-serif;
	}

	.btn:hover .btn-slide-show-text1 {
		margin-left: 65px;
	}

	/*	.btn-shadow-drop {
		position: relative;
		margin-top: 10%;
		background: rgb(249, 250, 250);
		padding: 20px;
		font-size: 0.9em;
		font-weight: 700;
		letter-spacing: 5px;
		text-transform: uppercase;
		transition: 0.3s ease-in-out;
		left: 0px;
		top: 0px;
		width: 180px;
		} */

	.btn-shadow-drop--red {
		border: 1px solid rgb(239, 35, 60);
		background-color: rgb(159, 15, 150);
		box-shadow: rgb(1, 35, 60) 3px 2px 8px 0px inset; /* This creates the sunken in effect */
	}
	/* https://tobiasahlin.com/blog/layered-smooth-box-shadows/ */

	.customButton {
		position: relative;
		height: 100%;
		width: 100%;
		z-index: 999;
		background-color: rgb(159, 15, 150);
		border-radius: 5px;
	}

	.customButton-sunk {
		content: '';
		border-radius: 5px;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: absolute;
		z-index: 999;
		box-shadow:
			0 1px 3px rgba(0, 0, 0, 0.22) inset,
			0 2px 4px rgba(0, 0, 0, 0.15) inset,
			0 4px 8px rgba(0, 0, 0, 0.12) inset,
			0 8px 16px rgba(0, 0, 0, 0.1) inset,
			0 16px 32px rgba(0, 0, 0, 0.07) inset,
			0 32px 64px rgba(0, 0, 0, 0.07) inset;
		opacity: 1;
	}

	.customButton-hover {
		content: '';
		border-radius: 5px;
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
</style>
