<script>
	import ProjectLink from '$lib/components/ProjectLink.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
</script>

<HomeButton color_for_button="text-gruv-purple-dim"></HomeButton>
<div class="m-auto h-full w-[900px] max-w-full items-center justify-center pb-4">
	<div><h2 class="text-gruv-purple-dim m-auto text-center text-4xl">About Me</h2></div>
	<div>
		<p class="z-10 text-xl text-pretty text-gray-950">
			&emsp;My name is Alexandru Cara, and I am a software engineer who is studying at University of
			Maryland. Outside of school, I enjoy music with my favorite genre being Hip-Hop, but I do like
			most genres. I also like video games, but these past few years I've lost a bit of interest in
			them, now I only really play tetris and cs:go. Before I talk a bit about me as a programmer
			here are some of my favorite songs:
			<br />
		</p>
		<div class="relative right-[100px] flex w-[1100px] gap-3 overflow-scroll p-5">
			<iframe
				title="MFDoom Spotify Song"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/track/1JZW4KLFdvnpUfw3zSvsIl?utm_source=generator&theme=1"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
			<iframe
				title="KDot Spotify Song"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/track/3q2v8QaTnHLveAQzR6gvYm?utm_source=generator"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
			<iframe
				title="DangerMouse Spotify Song"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/track/6cJ5RPKucbS6VQEbT05z7q?utm_source=generator&theme=0"
				width="100%"
				height="152"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
		<p class="z-10 text-xl text-pretty text-gray-950">
			<br />&emsp;When it comes to software engineering, I genuinely enjoy most areas of the field,
			but I’ve found a particular interest in low-level systems and optimization. There’s something
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
