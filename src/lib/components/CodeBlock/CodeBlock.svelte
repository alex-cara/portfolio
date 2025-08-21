<!-- @component Code Block based on: https://shiki.style/ -->
<script module>
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	// Themes
	// https://shiki.style/themes
	import themeGruvboxDarkSoft from 'shiki/themes/gruvbox-dark-soft.mjs';
	// Languages
	// https://shiki.style/languages
	import console from 'shiki/langs/console.mjs';
	import html from 'shiki/langs/html.mjs';
	import css from 'shiki/langs/css.mjs';
	import js from 'shiki/langs/javascript.mjs';
	import rs from 'shiki/langs/rs.mjs';
	import cpp from 'shiki/langs/cpp.mjs';

	// https://shiki.style/guide/sync-usage
	const shiki = createHighlighterCoreSync({
		engine: createJavaScriptRegexEngine(),
		// Implement your import theme.
		themes: [themeGruvboxDarkSoft],
		// Implement your imported and supported languages.
		langs: [console, html, css, js, rs, cpp]
	});
</script>

<script lang="ts">
	import type { CodeBlockProps } from './types';

	let {
		code = '',
		lang = 'console',
		theme = 'gruvbox-dark-soft',
		// Base Style Props
		// Before it was
		base = 'overflow-scroll',
		rounded = '',
		shadow = '',
		classes = 'flex text-xl  rounded-2xl ',
		// Pre Style Props
		preBase = '',
		prePadding = '[&>pre]:p-3',
		preClasses = '[&>pre]:w-full '
	}: CodeBlockProps = $props();

	// Shiki convert to HTML
	const generatedHtml = shiki.codeToHtml(code, { lang, theme });
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	<!-- Output Shiki's Generated HTML -->
	{@html generatedHtml}
</div>
