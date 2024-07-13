<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink, P } from 'flowbite-svelte';
</script>

<Footer footerType="logo" class="bg-white dark:bg-gray-600">
	<div class="px-5 rounded-lg bg-white dark:bg-gray-600 flex flex-col items-center justify-between sm:flex-row sm:items-center sm:justify-between">
		<FooterBrand href="https://kuberapp.net" src="/kuber-logos.png" alt="Kuber Logo" />
		<FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
			<FooterLink href="https://blog.kuberapp.net" class="text-black-important mb-2 sm:mb-0 sm:mr-4">About</FooterLink>
			<FooterLink href="https://blog.kuberapp.net/legal/privacy-policy" class="text-black-important mb-2 sm:mb-0 sm:mr-4">Privacy Policy</FooterLink>
			<FooterLink href="https://blog.kuberapp.net/legal/cookies-policy" class="text-black-important mb-2 sm:mb-0 sm:mr-4">Cookies Policy</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="rounded-lg bg-white dark:bg-gray-600">
		<FooterCopyright href="/" class="py-4 text-black" by="Project Impulse" />
		<P class="px-4 mb-3 text-gray-500 dark:text-gray-400 text-xs">
			<strong class="font-semibold text-gray-900 dark:text-white">Disclaimer: </strong>
			The content, tools, and resources on Kuberapp.net are intended solely for informational and educational purposes 
			and should not be construed as professional financial or investment advice. 
			Our materials are designed to provide general guidance and are based on the input and data provided by users. 
			Kuber makes no guarantee of the accuracy, completeness, or applicability of this content to individual circumstances.
			Effective financial planning and investment involve comprehensive consideration of a wide array of personal financial factors. 
			The tools and resources available on Kuber are aimed at helping users develop an understanding of their financial trajectory. 
			However, they should not be solely relied upon for creating a complete financial plan. We strongly recommend consulting a financial 
			services professional who can provide personalized advice based on your unique financial situation before making any significant 
			financial decisions. While we endeavor to keep the information on Kuber current and accurate, the content may differ 
			from that found on other financial institutions, service providers, or specific product sites. All content and tools on Kuber 
			are provided without any guarantees or warranties of any kind. 
		</P>
	</div>
</Footer>