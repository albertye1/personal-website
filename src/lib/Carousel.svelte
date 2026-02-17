<script>
	import { fade } from 'svelte/transition';

	let currentIndex = 0;

	// this is a slightly better default option than an entire album lol
	export let images = ['/tendollar.jpg'];
	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="carousel">
	<div class="carousel-images">
		{#each [images[currentIndex]] as image, index (index)}
			<img transition:fade={{ duration: 2000 }} src={image} alt="Carousel Image" />
		{/each}
	</div>
	<button class="carousel-button prev" on:click={prev}>‹</button>
	<button class="carousel-button next" on:click={next}>›</button>
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		aspect-ratio: var(--aspect, 16/9);
		margin: auto;
		overflow: hidden;
		border-radius: 10px;
		margin-bottom: 2em;
	}

	.carousel-images {
		display: flex;
		width: 100%;
	}

	.carousel-images img {
		width: 100%;
		aspect-ratio: var(--aspect, 16/9);
		object-fit: cover;
	}

	.carousel-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 10px;
		border: none;
		cursor: pointer;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}
</style>
