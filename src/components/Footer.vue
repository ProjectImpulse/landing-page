<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 sm:py-32"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center"
          >
          <img
            src="/src/assets/kuber-logos_gold.png"
            alt="Vue Logo"
            class="bg-gradient-to-tr  rounded-lg w-15 h-9 mr-2 border text-white"
          />

            <h3 class="text-2xl">Kuber</h3>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>
          <!-- <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div> -->

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Platforms</h3>
          <div>
            <a
              href="#contact"
              class="opacity-60 hover:opacity-100"
            >
              iOS
            </a>
          </div>

          <div>
            <a
              href="#contact"
              class="opacity-60 hover:opacity-100"
            >
              Android
            </a>
          </div>

          <div>
            <a
              href="#contact"
              class="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Help</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>

          <div>
            <a
              href="#faq"
              class="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>

          <!-- <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Feedback
            </a>
          </div> -->
        </div>

        <!-- <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Socials</h3>
          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              href="#"
              class="opacity-60 hover:opacity-100"
            >
              Dribbble
            </a>
          </div>
        </div> -->
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          &copy; 2024 
          <a
            target="_blank"
            href="https://projectimpulse.pages.dev/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
          Project Impulse
          </a>
          All Rights Reserved.
        </h3>
      </section>
    </div>
    <div class="p-4">
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
  </footer>

  

</template>
