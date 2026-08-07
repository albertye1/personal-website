<script>
	import { onDestroy } from 'svelte';

	let currentIndex = 0;

	// this is a slightly better default option than an entire album lol
	export let images = ['/tendollar.jpg'];
	// how long each image stays before rotating (ms)
	export let interval = 5000;

	/** @type {ReturnType<typeof setInterval>} */
	let timer;

	// the img.aly.sh share URLs end in the ~228KB "preview" tier; swap it for the
	// ~8KB "thumbnail" tier to get a tiny placeholder we can load instantly + blur.
	/** @param {string} url */
	function thumb(url) {
		return url.replace(/\/?$/, '/thumbnail');
	}

	// only pull the full-size image for the current slide and its two neighbours,
	// so opening a carousel doesn't fetch every full image up front. Grows as you
	// navigate and never shrinks, so revisiting a slide is instant.
	let full = new Set([0]);
	function preload() {
		const n = images.length;
		full.add(currentIndex);
		full.add((currentIndex + 1) % n);
		full.add((currentIndex - 1 + n) % n);
		full = full;
	}

	// hide a thumbnail whose /thumbnail tier doesn't exist (e.g. the local default image)
	/** @param {Event} e */
	function hide(e) {
		const img = /** @type {HTMLElement} */ (e.currentTarget);
		img.style.display = 'none';
	}

	// track which full images have finished loading so we can crossfade them in
	let ready = new Set();
	/** @param {number} index */
	function onload(index) {
		ready.add(index);
		ready = ready;
	}

	function schedule() {
		clearInterval(timer);
		if (images.length > 1) {
			timer = setInterval(next, interval);
		}
	}

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
		preload();
		schedule();
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		preload();
		schedule();
	}

	preload();
	schedule();
	onDestroy(() => clearInterval(timer));
</script>

<div class="carousel">
	<div class="carousel-images">
		{#each images as image, index (index)}
			<!-- one slide: tiny blurred thumbnail underneath, full image fades in on top -->
			<div class="slide" class:active={index === currentIndex}>
				<img
					class="thumb"
					src={thumb(image)}
					alt=""
					loading="eager"
					decoding="async"
					fetchpriority="low"
					on:error={hide}
				/>
				{#if full.has(index)}
					<!-- prioritise the full image the user is actually looking at over the
					     14 thumbnails + neighbour previews sharing the same connection -->
					<img
						class="full"
						class:ready={ready.has(index)}
						src={image}
						alt=""
						decoding="async"
						fetchpriority={index === currentIndex ? 'high' : 'low'}
						on:load={() => onload(index)}
					/>
				{/if}
			</div>
		{/each}
	</div>
	<button class="carousel-button prev" on:click={prev} aria-label="Previous image">‹</button>
	<button class="carousel-button next" on:click={next} aria-label="Next image">›</button>
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
		position: relative;
		width: 100%;
		height: 100%;
	}

	.slide {
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity 2000ms ease-in-out;
	}

	.slide.active {
		opacity: 1;
	}

	.slide img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		aspect-ratio: var(--aspect, 16/9);
		object-fit: cover;
	}

	/* upscale + blur the tiny thumbnail so its low resolution isn't obvious */
	.slide .thumb {
		transform: scale(1.08);
	}

	/* full image sits on top and fades in once it has loaded */
	.slide .full {
		opacity: 0;
		transition: opacity 400ms ease-in-out;
	}

	.slide .full.ready {
		opacity: 1;
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
		z-index: 1;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}
</style>
