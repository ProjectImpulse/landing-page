<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import NavContainer from 'flowbite-svelte/NavContainer.svelte';
</script>
  
<Navbar>
	<NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600 flex items-center justify-between">
		<div class="flex items-center">
			<NavHamburger class="md:hidden" />
			<NavBrand href="/">
				<img src="/kuber-logos.png" class="ms-3 h-6 sm:h-9" alt="Logo" />
			</NavBrand>
		</div>
		<div class="flex md:order-2">
			<Button color="dark" size="sm" href="#waitlist">Join Waitlist</Button>
		</div>
		<NavUl class="order-1 md:flex">
			<NavLi href="#features">Features</NavLi>
			<NavLi href="https://blog.kuberapp.net/">Blog</NavLi>
			<NavLi href="https://demo.kuberapp.net/">Demo</NavLi>
			<NavLi href="#waitlist">Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>