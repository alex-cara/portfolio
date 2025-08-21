<script>
	import { onMount } from 'svelte';
	import { svg, createTimeline, utils, stagger, animate } from 'animejs';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	let maroon = '#dc414f';
	let car_x = $state(0.1);

	onMount(() => {
		let timeline = createTimeline({ defaults: { autoplay: false } });
		let carAnimation = animate('.car', {
			ease: 'linear',
			duration: 5000,
			...svg.createMotionPath('.road')
		});
		let track = animate(svg.createDrawable('.road'), {
			draw: ['0 0', '0 1', '1 1'],
			ease: 'linear',
			duration: 10000
		});
		let obstacle = animate(svg.createDrawable('.obstacle'), {
			draw: ['0 0', '0 1', '1 1'],
			ease: 'out',
			duration: 9400
		});
		setInterval(() => {
			timeline.sync(carAnimation);
			timeline.sync(track, 1);
			timeline.sync(obstacle, 600);
		}, 11000);
	});
</script>

<!-- For some reason using alias text-ctp-maroon-600 does not give the same result as in the home page, so a quick solution is just using the direct color-->
<HomeButton color_for_button="text-[#dc414f]"></HomeButton>
<div class="m-auto h-full w-[900px] max-w-full items-center justify-center pb-4">
	<div><h2 class="m-auto text-center text-4xl text-[#dc414f]">A Toy Car</h2></div>
	<div>
		<p class="z-10 text-xl text-pretty text-gray-950">
			Some time ago I built a small robotic car that aimed to be reactive (despite not being remote
			controlled). The car uses a line-following mechanism based on light reflection, achieved
			through an LED and a light detector. Additionally, I integrated an ultrasonic sensor to detect
			obstacles, enabling the car to stop or change direction in response to its surroundings. So
			despite the fact that the car doesn't use a remote, it reacts in real time to environmental
			changes by continuously processing sensor input and adjusting its movement accordingly.
			Programming was done using the Arduino runtime, which provides helpful libraries, standardized
			naming conventions, and a large online support community. While Arduino abstracts some
			low-level details, this project still required careful work with both digital and analog I/O,
			interpreting sensor data, and controlling motors in real-time. One of the important challenges
			was tuning the system. Finding the right thresholds, delays, and behaviors through calibration
			and field testing to make the car actually drive as expected. It was a good experience for
			getting into embedded debugging, real-world sensor behavior, and system responsiveness.
		</p>
	</div>
</div>

<div class="relative m-auto h-full w-[700px] max-w-full">
	<svg class="relative w-full" viewBox="0 -8 24 18">
		<title>Drawing of obstacle avoidation</title>
		<g stroke="none" fill="none" fill-rule="evenodd">
			<path
				class="road stroke-gruv-purple-dim"
				d="M0 1h8q1 0 1-1t0-6q0-1 1-1h6q1 0 1 1V0q0 1 1 1h6"
				id="suzuka"
				stroke="black"
				stroke-width="0.1"
			></path>

			<path
				class="obstacle stroke-gruv-yellow-dim"
				d="M10 1V-6H16V1"
				id="suzuka"
				stroke="red"
				stroke-width="0.1"
			></path>

			<path
				class="obstacle stroke-gruv-yellow-dim"
				d="M10 1V8H16V1"
				id="suzuka"
				stroke="red"
				stroke-width="0.1"
			></path>
		</g>

		<rect
			class="car fill-gruv-blue-dim"
			height="0.8"
			width="1.3"
			x="0.1"
			y="-0.4"
			rx="0.5"
			ry="0.5"
		/>
	</svg>
</div>
