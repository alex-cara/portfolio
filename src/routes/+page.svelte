<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '../../static/favicon.png';

	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';

	// Source Code
	const rust_code = `for i in 0..2 {
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
	}
`;

	let Myvid = '/myvideo.mp4';
	// State
	let value = $state('files');
	let is_about_me = $state(true);
	let video = $state(false);
	let is_art_1 = $state(false);
	let is_art_2 = $state(false);
	let is_art_3 = $state(false);
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
		} else if (state === 'Video') {
			video = true;
		} else {
			is_about_me = true;
		}
	};
	$effect(() => {
		set_states(value);
	});
</script>

<div class="card border-surface-100-900 grid h-full w-full grid-cols-[auto_1fr] border-[1px]">
	<!-- Component -->
	<Navigation.Rail
		{value}
		onValueChange={(newValue) => (value = newValue)}
		classes="place-items-center fixed flex"
	>
		{#snippet tiles()}
			<Navigation.Tile id="About Me" label="About Me"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Video" label="Video"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 1" label="Artifact 1"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 2" label="Artifact 2"><img src={IconFolder} /></Navigation.Tile>
			<Navigation.Tile id="Artifact 3" label="Artifact 3"><img src={IconFolder} /></Navigation.Tile>
		{/snippet}
	</Navigation.Rail>
	<!-- Content -->
	<div class="flex h-full w-[100%] items-center justify-center pt-[20px]">
		<!-- <pre class="pre">value: {value}</pre>  THIS WAS THE PREGIVEN TEXT -->
		{#if is_about_me}
			<div class="center h-full w-[66%] items-center justify-center pb-4">
				<div><h2 class="m-auto text-center text-5xl">About Me</h2></div>
				<!-- <div><img src={Selfie} /></div> -->
				<div class="relative z-30 items-center">
					<video width="640" height="480" class="items-center" controls>
						<source src={Myvid} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div class="relative items-center">
					<p class="text-justify z-30">
						Hi! This webpage documents certain projects I've made. To navigate the webpage look to
						the left for a menu to change and view the artifacts. Now, about me: I'm currently
						studying Computer Science at the University of Maryland. Outside of academics, I enjoy
						games that challenge the mind like Chess, Go, and Tetris. I’m also a big fan of MMA,
						wrestling, and basketball.
						<br /> When it comes to software engineering, I genuinely enjoy most areas of the field,
						but I’ve found a particular interest in low-level systems and optimization. There’s
						something rewarding about making programs run as efficiently as possible, especially in
						resource-constrained environments like embedded systems. <br />
						My first project is a performance-focused implementation of the AES encryption algorithm,
						based on the FIPS specification. Written in Rust, it demonstrates my focus on both correctness
						and efficiency. I used benchmarking tools and test-driven development to guide design decisions
						and ensure optimal performance.<br />
						This project brings together my passion for embedded systems and robotics. It’s a hands-on
						demonstration of how software and hardware integration can create a responsive, real-world
						system. It was a great opportunity to work with limited resources while still aiming for
						reliable performance.<br />
						Finally, the third project is this very website.<br /> Built with Svelte and assembled
						using several component libraries, it gave me a chance to explore modern frontend
						development and build a clean, responsive interface to showcase my work.<br />
					</p>
				</div>
			</div>
		{/if}
		{#if is_art_1}
			<div class="center h-full w-[66%] items-center justify-center pb-4">
				<!-- <div><img src={Artifact1} /></div> -->
				<div>
					<p class="z-10 text-center">
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
			<div class="center h-full w-[66%] items-center justify-center pb-4">
				<!-- <div><img src={Artifact2} /></div> -->
				<div>
					<p class="z-10">
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
			<div class="center h-full w-[66%] items-center justify-center pb-4">
				<!-- <div><img src={Artifact3} /></div> -->
				<div>
					<p class="z-30">
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

<div class="area center fixed z-20">
	<ul class="circles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>

<style>
	video {
		display: block;
		margin: auto;
	}
	.circles {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
	}

	.circles li {
		position: fixed;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(255, 255, 255, 0.2);
		animation: animate 25s linear infinite;
		bottom: -150px;
		pointer-events: none;
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.circles li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.circles li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
