<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="mx-[25%] mt-10 mb-5 py-10 sm:mx-[15%] lg:mx-[30%]">
	<brand class="pr-5 text-xl">Albert Ye</brand>
	<a class="px-1 !text-stone-700 hover:underline dark:!text-stone-300" href="/">home</a> /
	<a class="px-1 !text-stone-700 hover:underline dark:!text-stone-300" href="/projects">projects</a>
	/
	<a class="px-1 !text-stone-700 hover:underline dark:!text-stone-300" href="/gallery">gallery</a> /
	<a class="px-1 !text-stone-700 hover:underline dark:!text-stone-300" href="/blog">blog</a>
</nav>

<div class="px-[25%] sm:px-[15%] lg:px-[30%]">{@render children()}</div>

<style>
	a,
	a:hover {
		transition: 500ms;
	}
</style>
