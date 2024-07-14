<script>
	import '../app.css';
	import Header from './mainpage/Header.svelte';
	import Footer from './mainpage/Footer.svelte';
	import './styles.css';
</script>


<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
	<Header/>
</div>

<slot />

<Footer/>