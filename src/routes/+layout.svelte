<script lang="ts">
	import '../app.css';
	import Theme from '$lib/Theme.svelte';

	let { children } = $props();
</script>

<nav class="mx-[25%] mt-10 mb-5 py-10 sm:mx-[15%] lg:mx-[30%]">
	<div class="flex justify-between h-16">
		<div class="flex">
			<div class="flex-shrink-0 flex items-center">
				<brand class="pr-5 text-xl">Albert Ye</brand>
				<a class="b" href="/">home</a> /
				<a class="b" href="/projects">projects</a>
				/
				<a class="b" href="/gallery">gallery</a> /
				<a class="b" href="/blog">blog</a>
			</div>
		</div>
		<div class="flex items-center">
			<Theme/></div>
	</div>
</nav>

<div class="px-[25%] sm:px-[15%] lg:px-[30%]">{@render children()}</div>

<style>
	a,
	a:hover {
		transition: 500ms;
	}
</style>