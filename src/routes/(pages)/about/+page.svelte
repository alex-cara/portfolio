<script>
	import ProjectLink from '$lib/components/ProjectLink/ProjectLink.svelte';
	import HomeButton from '$lib/components/HomeButton/HomeButton.svelte';
	import { page, navigating } from '$app/state';
</script>

<HomeButton color_for_button="text-gruv-purple-dim" transition_color="#b16286"></HomeButton>
<div class="h-content relative m-auto w-[1000px] max-w-full items-center justify-center pb-4">
	<div><h2 class="text-gruv-purple-dim m-auto text-center text-4xl">About Me</h2></div>
	<p class="z-10 text-xl text-pretty text-gray-950">
		&emsp;My name is Alexandru Cara, and I am a software engineer who's passionate about writing
		useful and elegant code. The appeal to me in computer science is the complexity the problems and
		the ambiguity of the solutions. A solution is a balancing game between maintainability,
		readability, flexibility and so many more things, and I enjoy that game. But I really thrive on
		trying to optimize code. After making a solution looking for improvements feels as though you
		are chiseling out a sculpture from the original block of marble. As for some possibly
		controversial opinions: vim keybindings/modal editing is the superior and Linux is better for
		personal use than Mac and Firefox is better than Chrome.
		<br />
		<br />
		&emsp;Outside of CS, I'm a proud member of UMD Terps, who likes cracking jokes and keeping things
		light-hearted. I really enjoy music with my favorite genre being Hip-Hop, but I do like most genres.
		I also like video games, team games are my favorite as I feel it almost always adds another layer
		of fun. These past few years, admittedly, I've lost a bit of interest in video games, now I only
		really play tetris and cs:go. In the near future, I want to get into blacksmithing, always thought
		it was an interesting topic and would like to actually make something. Anyways, it feels proper,
		since I mentioned music, to include some of my favorite songs.
	</p>

	<div
		class="relative top-3 flex h-max w-[1400px] max-w-full justify-between gap-3 overflow-scroll"
	>
		<iframe
			title="MFDoom Spotify Song"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/track/1JZW4KLFdvnpUfw3zSvsIl?utm_source=generator&theme=1"
			width="100%"
			height="130"
			frameBorder="0"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
		<iframe
			title="KDot & Thundercat"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/track/6fkL9CjWmjeV6vfDxTp9OZ?utm_source=generator"
			width="100%"
			height="130"
			frameBorder="0"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
		<iframe
			title="DangerMouse Spotify Song"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/track/6cJ5RPKucbS6VQEbT05z7q?utm_source=generator&theme=0"
			width="100%"
			height="130"
			frameBorder="0"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	</div>
</div>

<ProjectLink
	name="Portfolio"
	repo="alex-cara/portfolio"
	link="https://github.com/alex-cara/portfolio"
	description="A link to the current portfolio page on github."
/>
