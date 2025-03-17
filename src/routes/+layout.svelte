<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<style>
	a, a:hover{
		transition: 500ms;
	}
</style>


<nav class="mx-60 mt-10 py-2 mb-5">
	<brand class="text-xl pr-5">Albert Ye</brand>
	<a class="px-1 hover:underline !text-stone-700 dark:!text-stone-300" href="/">home</a> /
	<a class="px-1 hover:underline !text-stone-700 dark:!text-stone-300" href="/projects">projects</a> /
    <a class="px-1 hover:underline !text-stone-700 dark:!text-stone-300" href="/gallery">gallery</a> /
    <a class="px-1 hover:underline !text-stone-700 dark:!text-stone-300" href="/blog">blog</a>
</nav>


<div class="px-60">{@render children()}</div>
