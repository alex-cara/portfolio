<script lang="ts">
	import CustomPageTransition from '$lib/components/CustomPageTransition/CustomPageTransition.svelte';
	import CustomButton from '$lib/components/ButtonSunkHover/ButtonSunkHover.svelte';
	import { sphereColor } from '$lib/components/CustomPageTransition/data';
	function setcolor(color: string) {
		sphereColor.set(color);
	}
</script>

<div class="relative z-90 flex h-screen items-center justify-center">
	<div class="home-grid relative z-10 h-screen gap-2 p-4 md:p-8">
		<div class="cell relative col-span-2 row-span-2">
			<CustomButton onclick={() => sphereColor.set('#b16286')} id="intro" href="/about">
				<button class="latte bg-gruv-purple-dim interior-button">
					<p class="font-ovo text-5xl font-semibold">alexandru cara</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="font-ovo text-5xl font-semibold">software engineer</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="exhibit1" href="/aes" onclick={() => setcolor('#689d6a')}>
				<button class="latte bg-gruv-aqua-dim interior-button">
					<p class="font-ovo text-4xl font-extrabold">AES</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="exhibit2" href="/leet" onclick={() => setcolor('#d79921')}>
				<button class="latte bg-gruv-yellow-dim interior-button">
					<p class="font-ovo text-4xl font-extrabold">O(n&#8729lgn)</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="font-ovo text-4xl font-extrabold">O(n)</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative col-span-2">
			<CustomButton id="exhibit3" href="/car" onclick={() => setcolor('#dc414f')}>
				<button class="latte bg-ctp-maroon-600 interior-button">
					<p class="font-ovo text-3xl font-extrabold">rc car</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="blog" href="/blog" onclick={() => setcolor('#7791f5')}>
				<button class="latte bg-ctp-blue-300 interior-button">
					<p class="font-nixie text-3xl font-extrabold">Blog</p>
				</button>
			</CustomButton>
		</div>
	</div>
</div>

<style>
	/* https://enjeck.com/btns/ */
	/* That is a website with button hover effects */
	.home-grid {
		box-sizing: border-box;
		margin: auto;
		display: grid;
		grid-template-columns: 33% 33% 34%;
		grid-template-rows: 33% 33% 34%;
		grid-template-areas:
			'intro intro exhibit1'
			'intro intro exhibit2'
			'exhibit3 exhibit3 blog';
	}

	/* Medium+ screens: square grid */
	@media only screen and (width >= 48rem) {
		.home-grid {
			height: 100vmin;
			width: 100vmin;
		}
	}

	/* Small screens: rectangular grid with padding */
	@media only screen and (width < 48rem) {
		.home-grid {
			width: calc(100% - 2rem);
			height: calc(100vh - 2rem);
		}
	}

	.interior-button {
		height: 100%;
		width: 100%;
		overflow: hidden;
		word-break: break-word;
		padding: 0.5rem;
	}
</style>
