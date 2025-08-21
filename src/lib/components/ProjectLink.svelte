<script>
	import { fly } from 'svelte/transition';
	import { createLinkPreview, melt } from '@melt-ui/svelte';
	let { name, repo, link, description } = $props();

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createLinkPreview({
		forceVisible: true
	});
</script>

{#if $open}
	<div
		use:melt={$content}
		transition:fly={{ y: -5, duration: 100 }}
		class="z-10 rounded-md bg-white shadow-sm"
	>
		<div class="w-[300px] rounded-md bg-white p-5 shadow-sm">
			<div class="flex flex-col gap-2">
				<img
					src="/logo_mark.svg"
					alt="github logo"
					class="object-fit block h-14 w-14 rounded-full bg-neutral-900 p-1"
				/>
				<div class="flex flex-col gap-4">
					<div>
						<div class="font-bold text-neutral-900">Portfolio</div>
						<div class="text-neutral-400">alex-cara/portfolio</div>
					</div>
				</div>
				<div class="m-0 text-neutral-700">A link to the current portfolio page on github.</div>
			</div>
		</div>
		<div use:melt={$arrow} />
	</div>
{/if}

<a
	class="trigger center pt-4"
	href={link}
	target="_blank"
	rel="noopener noreferrer"
	use:melt={$trigger}
>
	<img
		src="/logo_mark.svg"
		alt="Github logo"
		class="center z-30 m-auto h-[25%] w-[25%] rounded-full bg-neutral-900 object-contain p-1"
	/>
	<span class="sr-only">Link</span>
</a>
