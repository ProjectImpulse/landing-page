<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import NavContainer from 'flowbite-svelte/NavContainer.svelte';
</script>
  
<Navbar>
	<NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600 flex items-center justify-between">
		<NavBrand href="/">
			<img src="/kuber-logos.png" class="me-3 h-6 sm:h-9" alt="Logo" />
		</NavBrand>
		<div class="flex md:order-2">
			  <Button color="dark" size="sm" href="#waitlist">Join Waitlist</Button>
			  <NavHamburger />
		</div>
		<NavUl class="order-1">
			<NavLi href="#features">Features</NavLi>
			<NavLi href="https://blog.kuberapp.net/">Blog</NavLi>
			<NavLi href="https://demo.kuberapp.net/">Demo</NavLi>
			<NavLi href="#waitlist">Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>