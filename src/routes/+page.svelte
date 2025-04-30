<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '../../static/favicon.png';

	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';

	// Source Code
	const rust_code = `
        for i in 0..2 {
            thread::scope(|s| {
                s.spawn(|| {
                    for j in 0..((num_files + (1 - i)) / 2) {
                        let curr_file = fs::read(&files[i + 2 * j]);
                        let mut curr_file = curr_file.unwrap();
                        /* Do decryption/encryption based on user input */
                        match (args.reverse, use_iv) {
                            (false, false) => data_encrypt(&mut curr_file, &expanded_key),
                            (false, true) => data_encrypt_iv(&mut curr_file, &expanded_key, &iv),
                            (true, false) => data_decrypt(&mut curr_file, &expanded_key),
                            (true, true) => data_decrypt_iv(&mut curr_file, &expanded_key, &iv),
                        };

                        let _ = fs::write(
                            files[i + 2 * j].to_owned() + enc_or_dec,
                            &curr_file[0..curr_file.len()],
                        );
                    }
                });
            });
`;

	let Selfie = '/aboutme.png';
	let Artifact1 = '/artifact1.png';
	let Artifact2 = '/artifact2.png';
	let Artifact3 = '/artifact3.png';

	// State
	let value = $state('files');
	let is_about_me = $state(true);
	let is_art_1 = $state(true);
	let is_art_2 = $state(true);
	let is_art_3 = $state(true);
	const set_states = (state: String) => {
		is_about_me = false;
		is_art_1 = false;
		is_art_2 = false;
		is_art_3 = false;
		if (state === 'About Me') {
			is_about_me = true;
		} else if (state === 'Artifact 1') {
			is_art_1 = true;
		} else if (state === 'Artifact 2') {
			is_art_2 = true;
		} else if (state === 'Artifact 3') {
			is_art_3 = true;
		}
	};
	$effect(() => {
		set_states(value);
	});
</script>

<div class="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Navigation.Rail
		{value}
		onValueChange={(newValue) => (value = newValue)}
		classes="place-items-center fixed flex"
	>
		{#snippet tiles()}
			<Navigation.Tile id="About Me" label="About Me"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 1" label="Artifact 1"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 2" label="Artifact 2"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 3" label="Artifact 3"><img src={IconFolder} /></Navigation.Tile>
		{/snippet}
	</Navigation.Rail>
	<!-- Content -->
	<div class="flex w-[100%] items-center justify-center">
		<!-- <pre class="pre">value: {value}</pre>  THIS WAS THE PREGIVEN TEXT -->
		{#if is_about_me}
			<div class="center w-[66%] items-center justify-center pb-4">
				<div><h2 class="bg-red-500 text-5xl">About Me</h2></div>
				<div><img src={Selfie} /></div>
				<div>
					<p class="bg-red-500 text-xl">
						Hi! I'm currently studying Computer Science at the University of Maryland. <br />
						Outside of academics, I enjoy games that challenge the mind like Chess, Go, and Tetris.
						<br />
						I’m also a big fan of MMA, wrestling, and basketball. <br /> When it comes to software
						engineering, I genuinely enjoy most areas of the field, but I’ve found a particular
						interest in low-level systems and optimization. <br />There’s something rewarding about
						making programs run as efficiently as possible, especially in resource-constrained
						environments like embedded systems. <br />
						My first project is a performance-focused implementation of the AES encryption algorithm,
						based on the FIPS specification. <br /> Written in Rust, it demonstrates my focus on
						both correctness and efficiency.<br /> I used benchmarking tools and test-driven
						development to guide design decisions and ensure optimal performance.<br />
						This project brings together my passion for embedded systems and robotics.<br /> It’s a
						hands-on demonstration of how software and hardware integration can create a responsive,
						real-world system.<br /> It was a great opportunity to work with limited resources while
						still aiming for reliable performance.<br />
						Finally, the third project is this very website.<br /> Built with Svelte and assembled
						using several component libraries, it gave me a chance to explore modern frontend
						development and build a clean, responsive interface to showcase my work.<br />
					</p>
				</div>
			</div>
		{/if}
		{#if is_art_1}
			<div class="center w-[66%] items-center justify-center pb-4">
				<div><img src={Artifact1} /></div>
				<div>
					<p>
						My rust AES project is based on the FIPS document. I tried to focus on 3 things,
						idomatic code, performance, and following loosely the psuedocode.
						<br />
						One thing to note is that, while many architures provide machine instructions for AES, using
						that wouldn't really follow the psuedocode.
						<br />
						For this project, it was file driven I/O CLI, which puts in some restrictions and limitations
						on multithreading as realistically most of the speed is bound by disk reading. Despite this,
						I still incoporated it to the best of my abilities to speed up both computations and the
						I/O.
						<br />
						<br />
						Here is a multithreaded file reader that allows prefetching of files, and does computation,
						while reading another file.
					</p>
				</div>
				<div>
					<CodeBlock code={rust_code} lang="rs" />
				</div>
			</div>
		{/if}
		{#if is_art_2}
			<div class="center w-[66%] items-center justify-center pb-4">
				<div><img src={Artifact2} /></div>
				<div>
					<p>
						This artifact focuses on my embedded/robotic endeavours.
						<br />
						Here I have built a robotic car, which can follow lines, based on light reflection using
						an LED and a sensor.
						<br />
						Along with that I have put together an ultra-sonic sensor that can detect obstacles based
						on reflected sound waves.
						<br />
						This comes together to form a decently responsive robotic car, which while lacking a remote
						to allow user input in real time, does have some real time reactions.
						<br />
						In terms of actual programming, this used Arduino's runtime, and as such benefitted from
						a lot of the provided utility and naming convention. Despite the shortcuts Arduino supplies,
						it is still a good learning experience, adjusting with pin I/O and reading in and interacting
						based on values.
						<br />
						(*Here ideally would be a video of it running but I don't have it on my laptop, so I would
						need to go back home*)
					</p>
				</div>
			</div>
		{/if}
		{#if is_art_3}
			<div class="center w-[66%] items-center justify-center pb-4">
				<div><img src={Artifact3} /></div>
				<div>
					<p>
						This is a self referential artifact, given the fact that is in fact this very website.
						<br />
						While I can highlight some code here, I think it is best to check out the github for the
						code.
						<br />
						I think this website best showcases a couple of things about my coding ability, which include
						flexibility and rapid iteration.
						<br />
						For example, I have had some minor experience with JS, HTML/CSS, but not enough to design
						a website, and the only real experience I had with webdev was years ago for some dummy frontend
						to practice python's Django.
						<br />
						Despite the lack of experience, in short work I have put together a reactive website using
						Svelte, (a framework I have had no previous experience with) and component libraries SkeletonDev
						and Svelte UX.
						<br />
						(* There is some more visualy stuff I can point out, and I intend to insert some gooey cool
						text from Svelte UX to demonstrate my point as this is a artifact and keep it visual *)
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>
