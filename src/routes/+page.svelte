<script>
	import Waitlist from './mainpage/waitlist.svelte';
	import Hero from './mainpage/Hero.svelte';
	import Pics from './mainpage/pics.svelte';
	import Purpose from './mainpage/purpose.svelte';
	import Features from './mainpage/features/Features.svelte';
	import GoTop from './mainpage/GoTop.svelte';
</script>
  

<svelte:head>
	<title>Kuber</title>
	<meta name="description" content="Kuber - Personal Finance Concierge" />
</svelte:head>


<section >
	<Hero />
	<Pics />
	<div class="bg-white">
		<Features />
	</div>
	<div class="pl-4 bg-white">
		<Purpose />
	</div>
	<Waitlist />

	<GoTop showAtPixel={1000} />
</section>
