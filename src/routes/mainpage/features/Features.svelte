<!-- <script>
    import { Label, Input, ButtonGroup } from 'flowbite-svelte';
    import { EnvelopeSolid } from 'flowbite-svelte-icons';
    import { Heading, P, Span, Mark, A } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { Card } from 'flowbite-svelte';
  </script>
  

  <section class="bg-white page-pad pt-16" id="features">
    <Heading tag="h1" class="mb-4 our-text">Don't just be <Span underline decorationClass="decoration-8 decoration-red-600 dark:decoration-red-600">aware</Span>, Take <Mark class="bg-blue-800">Action</Mark></Heading>
    <div class="grid grid-cols-4 bg-white">
      <div class = "col-start-1 col-end-5">
        <div class="grid grid-cols-4 pad-container">
          <div class="left-aligned pt-8 pl-4">
            <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">Our platform is designed to simplify money management, so that you can say goodbye to sleepless nights.</P>
            <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">Budgeting shouldn't be a chore. With kuber, you can easily create and stick to a budget that fits your lifestyle, without the stress and complexity. </P>
            <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">Our platform is designed to simplify money management, so that you can say goodbye to sleepless nights.</P>
            <P class="mb-6 text-lg lg:text-xl dark:text-gray-400">Our platform is designed to simplify money management, so that you can say goodbye to sleepless nights.</P>
          </div>
          <div  class = "pt-2 col-start-2 col-end-6">
            <div class="bg-white">
              <img src="/src/lib/images/figma/cluster.png" style="width:900px" alt="Group 1" class="right-aligned" />
            </div>
          </div>
        </div>
      </div>
    </div>  
  </section> -->


  <script>
    import ProductCard from "./ProductCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import { Heading, P, Span, Mark, A } from 'flowbite-svelte';

    let productFeatures = [
        {
            featureList: [
                "Analyze spending patterns and preferences ",
                "Financial Insights",
                "Actionable Solutions",
            ],
            description:
                "Easily aggregates multiple financial institutions into one platform, so you can view all your finances in one place.",
            imgUrl: "/src/lib/images/figma/Depository.png",
        },
        {
            featureList: [
                "Intuituve Flowchart Interface",
                "Directly connect your accounts",
                "Suggestions to achieve your goals more efficiently",
                "View your short-term and long-term goals in one place",
            ],
            description:
                "Monitor budgeting rules aligned to the goals you set, so you can stay on track and achieve your financial goals.",
            imgUrl: "/src/lib/images/figma/Modules.png",
        },
        {
            featureList: [
                "Comnpare with your current spending timeline",
                "See how your spending habits have changed over time",
                "View how your goals mpact your financial growth",
            ],
            description:
                "Get projections on ideal timeline for networth growth, so you can plan your financial future with confidence.",
            imgUrl: "/src/lib/images/figma/Projection.png",
        },
    ];
</script>

<SectionWrapper id="features">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2 pt-16">
            <Heading tag="h1" class="mb-4 our-text">Don't just be <Span underline decorationClass="decoration-8 decoration-blue-800 dark:decoration-red-600">aware</Span>, Take <Mark class="bg-blue-800">Action</Mark></Heading>
        </div>

        {#each productFeatures as productFeature, index}
            <ProductCard {productFeature} {index}>
                {#if index === 0}
                Our platform is designed to <span class="text-yellow-400 font-medium">simplify money management</span>, so that you can say goodbye to sleepless nights.
                {:else if index === 1}
                You can easily create and stick to a budget that fits your lifestyle, without the <span class="text-yellow-400 font-medium">stress and complexity</span>.
                {:else}
                <span class="text-yellow-400 font-medium">Forecast an ideal timeline</span> that can be achieved along with your growth in Net-worth
                {/if}
            </ProductCard>
        {/each}
    </div>
</SectionWrapper>