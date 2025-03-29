<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="text-slate-600 dark:text-stone-300"><i>Published: {data.date}</i></p>
    <hr class="py-3 text-slate-400 dark:text-stone-400"/>
	<svelte:component this={data.content} />
</article>