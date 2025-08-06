<script>
	import ProjectLink from '$lib/components/ProjectLink.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
</script>

<HomeButton color_for_button="text-gruv-purple-dim"></HomeButton>
<div class="m-auto h-full w-[1000px] items-center justify-center pb-4">
	<div><h2 class="m-auto text-center text-5xl">Rust AES</h2></div>
	<!-- <div><img src={Artifact1} /></div> -->
	<div>
		<p class="z-10 text-xl text-balance">
			&emsp;Hi! This webpage documents certain projects I've made. To navigate the webpage look to
			the left for a menu to change and view the artifacts. Now, about me: I'm currently studying
			Computer Science at the University of Maryland. Outside of academics, I enjoy games that
			challenge the mind like Chess, Go, and Tetris. I’m also a big fan of MMA, wrestling, and
			basketball.
			<br /> When it comes to software engineering, I genuinely enjoy most areas of the field, but
			I’ve found a particular interest in low-level systems and optimization. There’s something
			rewarding about making programs run as efficiently as possible, especially in
			resource-constrained environments like embedded systems. <br />
		</p>
	</div>

	<ProjectLink
		name="Portfolio"
		repo="alex-cara/portfolio"
		link="https://github.com/alex-cara/portfolio"
		description="A link to the current portfolio page on github."
	/>
</div>
