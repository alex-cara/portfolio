<script>
	import ProjectLink from '$lib/components/ProjectLink.svelte';
</script>

<div class="center m-auto h-full w-[66%] items-center justify-center pb-4">
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
			My first project is a performance-focused implementation of the AES encryption algorithm. It demonstrates
			my focus on both correctness and efficiency. I used benchmarking tools and test-driven development
			to guide design decisions and ensure optimal performance.<br />
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

<div class="center h-full w-[66%] items-center justify-center pb-4">
	<!-- <div><img src={Artifact3} /></div> -->
	<div><h2 class="m-auto text-center text-5xl">This Website</h2></div>
	<diva class="center h-full">
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
			(a framework I have had no previous experience with) and component libraries SkeletonDev and Svelte
			UX.
			<br />
			Now, while the website, even to myself is not the prettiest (and I will admit I do lack a certain
			artistic touch to my design), it is incredibly fast and responsive.
			<br />
			Overall, this website demonstrates my ability to quickly adapt to new tools, solve problems independently,
			and ship functional code, even in areas where I’m less experienced.
			<br />
			<br />
			For example, here is a neat piece of styling: a link preview. Included below is a link to the github
			of the project, presented nicely.
			<br />
		</p>
		<!-- Here is a decent github logo with a hoverover effect -->
		<ProjectLink
			name="Portfolio"
			repo="alex-cara/portfolio"
			link="https://github.com/alex-cara/portfolio"
			description="A link to the current portfolio page on github."
		/>
	</diva>
</div>
