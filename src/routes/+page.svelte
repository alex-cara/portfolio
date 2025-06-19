<script>
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '../../static/favicon.png';

	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import { createTimeline, utils, stagger, animate } from 'animejs';

	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';

	import { createLinkPreview, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	let m = $state({ x: 0, y: 0 });
	let rad = $state(1);
	let invis = $state('false');

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createLinkPreview({
		forceVisible: true
	});

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
`;

	let Myvid = '/FinalVid.mp4';
	let Carvid = '/output.mp4';
	// State
	// Can definetly make this better
	let value = $state('files');
	let is_about_me = $state(true);
	let video = $state(false);
	let is_art_1 = $state(false);
	let is_art_2 = $state(false);
	let is_art_3 = $state(false);
	const set_states = (state) => {
		is_about_me = false;
		is_art_1 = false;
		is_art_2 = false;
		is_art_3 = false;
		video = false;
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
</script>

{#if true}
	<div
		class="relative grid bg-red-400 h-screen overflow-hidden z-999"
		onclick={() => {
			invis = "false";
			m.x = event.clientX;
			m.y = event.clientY;
			cover_and_reveal.restart();
			invis = "true";
		}}
	>
		<h1 class="bg-red-50">Welcome to SvelteKit</h1>
		<p class="bg-red-200">
			Visit <a href="https://svelte.dev/docs/kit"
				>svelte.dev/docs/kit</a
			> to read the documentation
		</p>

		<svg class="absolute z-999 h-screen w-full overflow-hidden">
			<circle
				class="circle"
				cx={m.x}
				cy={m.y}
				r={rad}
				fill="yellow"
			/>
		</svg>
	</div>
{/if}
{#if false}
	<div class="center h-full w-[66%] items-center justify-center pb-4">
		<div><h2 class="m-auto text-center text-5xl">About Me</h2></div>
		<!-- <div><img src={Selfie} /></div> -->
		<div class="relative items-center">
			<p class="z-30 text-center">
				Hi! This webpage documents certain projects I've made. To navigate the webpage look to the
				left for a menu to change and view the artifacts. Now, about me: I'm currently studying
				Computer Science at the University of Maryland. Outside of academics, I enjoy games that
				challenge the mind like Chess, Go, and Tetris. I’m also a big fan of MMA, wrestling, and
				basketball.
				<br /> When it comes to software engineering, I genuinely enjoy most areas of the field, but
				I’ve found a particular interest in low-level systems and optimization. There’s something
				rewarding about making programs run as efficiently as possible, especially in
				resource-constrained environments like embedded systems. <br />
				My first project is a performance-focused implementation of the AES encryption algorithm. It
				demonstrates my focus on both correctness and efficiency. I used benchmarking tools and test-driven
				development to guide design decisions and ensure optimal performance.<br />
				The second project brings together my passion for embedded systems and robotics. It’s a hands-on
				demonstration of how software and hardware integration can create a responsive, real-world system.
				It was a great opportunity to work with limited resources while still aiming for reliable performance.<br
				/>
				Finally, the third project is this very website.<br /> Built with Svelte and assembled using
				several component libraries, it gave me a chance to explore modern frontend development and
				build a clean, responsive interface to showcase my work.<br />
			</p>
		</div>
	</div>
{/if}
{#if video}
	<div class="center h-full w-[66%] items-center justify-center pb-4">
		<div><h2 class="m-auto w-[100%] text-center text-5xl">My Portfolio Video</h2></div>
		<!-- <div><img src={Artifact2} /></div> -->
		<div class="w-[100%]">
			<p class="z-10 m-auto w-[100%] text-center">
				Here is a video about my portfolio website. It goes a little bit about me, how to contact
				me, a little bit more about this portfolio (and its artifacts), and my goals. Hope you enjoy
				watching!
				<br />
			</p>
		</div>

		<div class="relative z-30 items-center">
			<video width="640" height="480" class="items-center" controls>
				<source src={Myvid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
{/if}
{#if is_art_1}
	<div class="center h-full w-[66%] items-center justify-center pb-4">
		<div><h2 class="m-auto text-center text-5xl">Rust AES</h2></div>
		<!-- <div><img src={Artifact1} /></div> -->
		<div>
			<p class="z-10 text-center text-sm">
				This is an AES encryption algorithm I built in Rust, based entirely on the FIPS 197
				specification. Rather than using hardware AES instructions, by targeting compilation
				systems, and calling assembly directly I wanted to follow the pseudocode more directly. The
				project focused on idiomatic Rust, high performance, and keeping to the algorithm as
				described in the document.
				<br />
				The program is a CLI tool that uses I/O from the file system (i.e. hard drive/ssd), processes
				it, and writes the encrypted or decrypted output. Since file I/O tends to be the main performance
				bottleneck, multithreading can only do so much. Despite this, I implemented a system that allows
				files to be prefetched and loaded while computation is being done on other files. This overlap
				between computation and I/O helps maximize performance within hardware limits, trying to optimize
				around the I/O bottleneck.

				<br />
				It also involved structuring the code in a clean, modular way using idiomatic Rust features like
				traits, iterators, and ownership principles. Overall, this project demonstrated my ability to
				learn off of a simple document specification, and my low-level performance tuning.
				<br />
				<br />
				Here is a multithreaded file reader that allows prefetching of files, and calls the function
				for the computation and reading in files.
			</p>
		</div>
		<div class="space-y-4 p-10">
			<CodeBlock code={rust_code} lang="rs" />
		</div>
	</div>
{/if}
{#if is_art_2}
	<div class="center h-full w-[66%] items-center justify-center pb-4">
		<div><h2 class="m-auto text-center text-5xl">Robotics</h2></div>
		<!-- <div><img src={Artifact2} /></div> -->
		<div>
			<p class="z-10 text-center text-sm">
				This artifact focuses on my embedded/robotic endeavours.
				<br />
				Here I have built a robotic car, which can follow lines, based on light reflection using an LED
				and a sensor.
				<br />
				Along with that I have put together an ultra-sonic sensor that can detect obstacles based on
				reflected sound waves. Allowing the car to stop or change directions if required.
				<br />
				While the car doesn't have a remote for allowing user real time input, it does respond in real
				time to its environment, adjusting its movement based on sensor feedback. Making this a good
				demonstration of reactive embedded systems, even at a basic level.
				<br />
				Programming was done using the Arduino runtime, which offers helpful utilities and standardized
				naming conventions, along with a massive online community to get help when stuck. Although Arduino
				abstracts away some of the complexity, this project was still a valuable learning experience.
				When it came to working with digital and analog I/O, reading sensor values, and controlling actuators
				in a feedback loop, careful calibration and experimentation to get the timing, thresholds, and
				behaviors tuned just right was a challenging part of it. Really encapsulating the concept of
				field testing.
				<br />
				<br />
				To demonstrate the artifact, is a video of the robotic car driving around, half way through the
				development cycle.
			</p>
		</div>

		<div class="relative z-30 items-center">
			<video width="640" height="480" class="items-center" controls>
				<source src={Carvid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
{/if}
{#if is_art_3}
	<div class="center h-full w-[66%] items-center justify-center pb-4">
		<!-- <div><img src={Artifact3} /></div> -->
		<div><h2 class="m-auto text-center text-5xl">This Website</h2></div>
		<div>
			<p class="z-30 text-center text-sm">
				This is a self referential artifact, given the fact that is in fact this very website.
				<br />
				While I can highlight some code here, I think it is best to check out the github for the code.
				<br />
				This website best showcases a couple of things about my coding ability, which include flexibility
				and rapid iteration. Especially my ability to learn on the fly.
				<br />
				Before starting this, I have had only a little experience with JS, HTML/CSS, and the only real
				experience I had with webdev was years ago for some dummy frontend to practice python's Django.
				<br />
				Despite the lack of experience, in short work I have put together a reactive website using Svelte,
				(a framework I have had no previous experience with) and component libraries SkeletonDev and
				Svelte UX.
				<br />
				Now, while the website, even to myself is not the prettiest (and I will admit I do lack a certain
				artistic touch to my design), it is incredibly fast and responsive.
				<br />
				Overall, this website demonstrates my ability to quickly adapt to new tools, solve problems independently,
				and ship functional code, even in areas where I’m less experienced.
				<br />
				<br />
				For example, here is a neat piece of styling: a link preview. Included below is a link to the
				github of the project, presented nicely.
				<br />

				{#if $open}
					<div
						use:melt={$content}
						transition:fly={{ y: -5, duration: 100 }}
						class=" z-10 rounded-md bg-white shadow-sm"
					>
						<div class="w-[300px] rounded-md bg-white p-5 shadow-sm">
							<div class="flex flex-col gap-2">
								<img
									src="/logo_mark.svg"
									alt="Melt UI Logo"
									class="object-fit block h-14 w-14 rounded-full bg-neutral-900 p-1"
								/>
								<div class="flex flex-col gap-4">
									<div>
										<div class="font-bold text-neutral-900">Melt UI</div>
										<div class="text-neutral-400">melt-ui/melt-ui</div>
									</div>
								</div>
								<div class="m-0 text-neutral-700">
									A set of accessible, unstyled component builders for Svelte & SvelteKit. Open
									source.
								</div>
								<div class="flex gap-4">
									<div class="flex gap-1">
										<div class="text-neutral-900">2k</div>
										<div class="text-neutral-400">Stars</div>
									</div>
									<div class="flex gap-1">
										<div class="text-neutral-900">103</div>
										<div class="text-neutral-400">Forks</div>
									</div>
								</div>
							</div>
						</div>
						<div use:melt={$arrow} />
					</div>
				{/if}
			</p>
			<a
				class="trigger center pt-4"
				href="https://github.com/alex-cara/portfolio"
				target="_blank"
				rel="noopener noreferrer"
				use:melt={$trigger}
			>
				<img
					src="/logo_mark.svg"
					alt="Melt UI Logo"
					class="center z-30 m-auto h-[25%] w-[25%] rounded-full bg-neutral-900 object-contain p-1"
				/>
				<span class="sr-only">Open Melt UI Details</span>
			</a>
		</div>
	</div>
{/if}

<style>
	.home-grid {
		display: grid;
	}
</style>
