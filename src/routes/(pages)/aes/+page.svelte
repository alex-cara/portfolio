<script>
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	import ProjectLink from '$lib/components/ProjectLink/ProjectLink.svelte';
	import { rust_code } from './data.js';
</script>

<HomeButton color_for_button="text-gruv-aqua-dim" transition_color="#689d6a"></HomeButton>
<div class="h-content m-auto w-[1000px] max-w-full items-center justify-center pb-4">
	<div><h2 class="text-gruv-aqua-dim m-auto text-center text-4xl">Rust AES</h2></div>
	<div>
		<p class="z-10 text-xl text-balance">
			In cryptography AES is a titan of an algorithm, standing for Advanced Encryption Standard, it
			despite being made over 20 years ago is still the go to algorithm, used as a foundational
			piece in modern quantum resistant communications. In fact, it might be fair to say that
			AES-256 (A 256 bit key) is inherently quantum resistant, despite not being made for that
			purpose. I decided to make my own implementation of the algorithm following the FIPS 197
			specification in Rust. Rather than using hardware AES instructions, by targeting compilation
			systems, and calling assembly directly I wanted to follow the pseudocode more directly. The
			project focused on idiomatic Rust, high performance, and keeping to the algorithm as described
			in the document. The program is a CLI tool that uses I/O from the file system (i.e. hard
			drive/ssd), processes it, and writes the encrypted or decrypted output. Since file I/O tends
			to be the main performance bottleneck, multithreading can only do so much. Despite this, I
			implemented a system that allows files to be prefetched and loaded while computation is being
			done on other files. This overlap between computation and I/O helps maximize performance
			within hardware limits, trying to optimize around the I/O bottleneck. It also involved
			structuring the code in a clean, modular way using idiomatic Rust features like iterators and
			staying within Rust ownership principles. Overall, this project focused on making a product
			simply from a simple document specification, and performance tuning.
			<br />
			&emsp;Here is a multithreaded file reader that allows prefetching of files, and calls the function
			for the computation and reading in files.
		</p>
	</div>
	<div class="border-4xl p-2">
		<CodeBlock code={rust_code} lang="rs" />
	</div>
</div>

<ProjectLink
	name="Portfolio"
	repo="alex-cara/portfolio"
	link="https://github.com/alex-cara/portfolio"
	description="A link to the current portfolio page on github."
/>
