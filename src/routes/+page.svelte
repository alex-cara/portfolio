<script lang="ts">
	import CustomPageTransition from '$lib/components/CustomPageTransition/CustomPageTransition.svelte';
	import CustomButton from '$lib/components/ButtonSunkHover/ButtonSunkHover.svelte';
	import { sphereColor } from '$lib/components/CustomPageTransition/data';
	function setcolor(color: string) {
		sphereColor.set(color);
	}
</script>

<div class="relative z-90 flex h-screen items-center justify-center">
	<div class="home-grid relative z-10 h-screen md:gap-2 md:p-8">
		<div class="cell relative md:col-span-2 md:row-span-2">
			<CustomButton onclick={() => sphereColor.set('#b16286')} id="intro" href="/about">
				<button class="latte bg-gruv-purple-dim h-full w-full">
					<p class="font-ovo text-5xl font-semibold">alexandru cara</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="font-ovo text-5xl font-semibold">software engineer</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="exhibit1" href="/aes" onclick={() => setcolor('#689d6a')}>
				<button class="latte bg-gruv-aqua-dim h-full w-full">
					<p class="font-ovo text-4xl font-extrabold">AES</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative w-full">
			<CustomButton id="exhibit2" href="/leet" onclick={() => setcolor('#d79921')}>
				<button class="latte bg-gruv-yellow-dim h-full w-full">
					<p class="font-ovo text-6xl">O(n&#8729lgn)</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="font-ovo text-6xl">O(n)</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative md:col-span-2">
			<CustomButton id="exhibit3" href="/car" onclick={() => setcolor('#dc414f')}>
				<button class="latte bg-ctp-maroon-600 h-full w-full">
					<p class="font-ovo text-3xl font-extrabold">rc car</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative w-full">
			<CustomButton id="blog" href="/blog" onclick={() => setcolor('#7791f5')}>
				<button class="latte bg-ctp-blue-300 h-full w-full">
					<p class="font-nixie text-3xl font-extrabold">Blog</p>
				</button>
			</CustomButton>
		</div>
	</div>
</div>

<style>
	/* https://enjeck.com/btns/ */
	/* That is a website with button hover effects */
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
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 100%;
		}

		.cell {
			min-height: 19.5vh;
			max-height: max-content;
			width: 100%;
		}
	}
</style>
