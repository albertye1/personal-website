<script>
	import { onMount } from 'svelte';

	let time = $state(new Date());
	let { lang = 0 } = $props();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	let hours = $derived(time.getHours());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if lang == 0}
	{#if hours < 6 || hours >= 19}
		Good evening!
	{:else if hours < 12}
		Good morning!
	{:else}
		Good afternoon!
	{/if}
{:else if lang == 1}
	{#if hours < 6 || hours >= 19}
		Bona nit!
	{:else if hours < 12}
		Bon dia!
	{:else}
		Bona tarda!
	{/if}
{/if}
