<script lang="ts">
	import '../app.css';
	import Theme from '$lib/Theme.svelte';

	let { children } = $props();
</script>

<nav class="mx-[5%] mt-10 mb-5 py-10 md:mx-[20%] lg:mx-[30%]">
	<div class="flex h-16 justify-between">
		<div class="flex">
			<div class="flex shrink-0 items-center">
				<brand class="pr-5 text-xl">Albert Ye</brand>
				<a class="b" href="/">home</a> /
				<a class="b" href="/projects">projects</a>
				/
				<a class="b" href="/gallery">gallery</a> /
				<a class="b" href="/blog">blog</a>
			</div>
		</div>
		<div class="flex items-center">
			<Theme />
		</div>
	</div>
</nav>

<div class="px-[5%] md:px-[20%] lg:px-[30%]">{@render children()}</div>

<style>
	a,
	a:hover {
		transition: 500ms;
	}
</style>
