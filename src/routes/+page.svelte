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
					<p class="intro-text font-ovo font-semibold">alexandru cara</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="intro-text font-ovo font-semibold">software engineer</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="exhibit1" href="/aes" onclick={() => setcolor('#689d6a')}>
				<button class="latte bg-gruv-aqua-dim interior-button">
					<p class="cell-text-lg font-ovo font-extrabold">AES</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="exhibit2" href="/leet" onclick={() => setcolor('#d79921')}>
				<button class="latte bg-gruv-yellow-dim interior-button">
					<p class="cell-text font-ovo font-extrabold">O(n&#8729lgn)</p>
					<hr class="mx-auto my-4 h-1 w-12 rounded-sm border-0 bg-gray-100 dark:bg-black" />
					<p class="cell-text font-ovo font-extrabold">O(n)</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative col-span-2">
			<CustomButton id="exhibit3" href="/car" onclick={() => setcolor('#dc414f')}>
				<button class="latte bg-ctp-maroon-600 interior-button">
					<p class="cell-text-lg font-ovo font-extrabold">rc car</p>
				</button>
			</CustomButton>
		</div>
		<div class="cell relative">
			<CustomButton id="blog" href="/blog" onclick={() => setcolor('#7791f5')}>
				<button class="latte bg-ctp-blue-300 interior-button">
					<p class="cell-text-lg font-nixie font-extrabold">Blog</p>
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
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
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

	/* Each cell is a size container so children can use cqmin/cqw units */
	.cell {
		container-type: size;
		min-width: 0;
		min-height: 0;
	}

	.interior-button {
		height: 100%;
		width: 100%;
		overflow: hidden;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* Prevent word splitting — each phrase stays on one line */
	.interior-button p {
		white-space: nowrap;
	}

	/*
	 * Font sizes in cqmin (% of the cell's smallest dimension).
	 * This keeps text as large as possible relative to its cell,
	 * scaling down naturally on small screens / high zoom.
	 *
	 * intro cell: 2×2 grid area, so its smallest dimension is still large
	 * small cells: 1×1 grid area, smaller dimension = row height
	 */
	.intro-text {
		font-size: 12cqmin;
	}

	.cell-text-lg {
		font-size: min(18cqmin, 7.5vw);
	}

	.cell-text {
		font-size: min(14cqmin, 6vw);
	}
</style>
