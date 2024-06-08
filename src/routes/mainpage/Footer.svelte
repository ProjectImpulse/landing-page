<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  import { P } from 'flowbite-svelte';
</script>


<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between foot">
    <FooterBrand href="https://kuberapp.net" src=" /kuber-logos.png" alt="Kuber Logo"/>
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
      <FooterLink href="https://blog.kuberapp.net" class="text-black-important">About</FooterLink>
      <FooterLink href="https://blog.kuberapp.net/legal/privacy-policy" class="text-black-important">Privacy Policy</FooterLink>
      <FooterLink href="https://blog.kuberapp.net/legal/cookies-policy" class="text-black-important">Cookies Policy</FooterLink>
    </FooterLinkGroup>
  </div>
  
  <div class="foot1">
    <FooterCopyright href="/" class="text-black" by="Project Impulse" />
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  </div>
  
  <P class="mb-3 disclaimer" weight="light" color="text-gray-500 dark:text-gray-400" size='xs'>
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
</Footer>
