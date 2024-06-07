<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
  </script>

  <Navbar let:NavContainer class="page-pad">
	<NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
	  <NavBrand href="/">
		<img src="/src/lib/images/kuber-logos.png" class="me-3 h-6 sm:h-9" alt=" Logo" />
		<!-- <span class="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span> -->
	  </NavBrand>
	  <NavHamburger />
	  <NavUl>
		<NavLi href="#features">Features</NavLi>
		<!-- <NavLi href="/about">FAQs</NavLi> -->
		<NavLi href="https://blog.kuberapp.net/">Blog</NavLi>
		<NavLi href="https://demo.kuberapp.net/">Demo</NavLi>
		<NavLi href="#waitlist">Contact</NavLi>
	  </NavUl>
	  <Button color="dark">
		<a href="#waitlist" style="text-decoration:none; color:white;">Join Waitlist</a>
	  </Button>
	</NavContainer>
  </Navbar>
  
  