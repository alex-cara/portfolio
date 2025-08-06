<script lang="ts">
	import { onMount } from 'svelte';
	import { createTimeline, utils, stagger, animate } from 'animejs';
	import CustomButton from '$lib/components/ButtonSunkHover/ButtonSunkHover.svelte';

	let m = $state({ x: 0, y: 0 });
	let rad = $state(1);
	let zindex = $state(1);
	let hovered = $state('hovered');

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
	<div class="relative flex h-screen items-center justify-center">
		<div class="home-grid relative z-10 h-screen gap-2 p-8">
			<div class="intro-square relative md:col-span-2 md:row-span-2 md:rounded-2xl">
				<CustomButton id="intro" href="/about">
					<button class="latte bg-gruv-purple-dim h-full w-full rounded-[1vw]">
						<p class="font-ovo text-5xl font-semibold">alexandru cara</p>
						<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
						<p class="font-ovo text-5xl font-semibold">software engineer</p>
					</button>
				</CustomButton>
			</div>
			<div class="exhibit1-square roundex-2xl md:roundex-2xl relative">
				<CustomButton id="exhibit1" href="/aes">
					<button class="latte bg-gruv-aqua-dim h-full w-full rounded-[1vw]">
						<p class="font-gugi text-4xl font-extrabold">AES</p>
					</button>
				</CustomButton>
			</div>
			<div class="exhibit2-square md:roundex-2xl relative">
				<CustomButton id="exhibit2" href="/leet">
					<button class="latte bg-gruv-yellow-dim h-full w-full rounded-[1vw]">
						<p class="font-nixie text-6xl font-extrabold">O(n&#8729lgn)</p>
						<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
						<p class="font-nixie text-6xl font-extrabold">O(n)</p>
					</button>
				</CustomButton>
			</div>
			<div class="relative md:col-span-2 md:rounded-2xl">
				<CustomButton id="exhibit3" href="/car">
					<button class="latte bg-ctp-maroon-600 h-full w-full rounded-[1vw]">
						<p class="font-nixie text-3xl font-extrabold">rc car</p>
					</button>
				</CustomButton>
			</div>
			<div class="relative w-full">
				<CustomButton id="blog" href="/blog">
					<button class="latte bg-ctp-blue-300 h-full w-full rounded-[1vw]">
						<p class="font-nixie text-3xl font-extrabold">Blog</p>
					</button>
				</CustomButton>
			</div>
		</div>
	</div>
{/if}

<style>
	/* https://enjeck.com/btns/ */
	/* That is a website with button hover effects */
	/* Worth noting that initial impression is an inversion of shadow drop would be cool*/

	@media only screen and (width >= 48rem) {
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
				'exhibit3 exhibit3 blog';
		}
	}
	@media only screen and (width < 48rem) {
		.home-grid {
			box-sizing: border-box;
			margin: auto;
			display: flex;
			width: 100%;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}
	}
</style>
