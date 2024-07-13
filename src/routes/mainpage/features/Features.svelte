<script>
    import ProductCard from "./ProductCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import { Heading, Span, Mark } from 'flowbite-svelte';

    let productFeatures = [
        {
            featureList: [
                "Analyze spending patterns and preferences ",
                "Financial Insights",
                "Actionable Solutions",
            ],
            description:
                "Easily aggregates multiple financial institutions into one platform, so you can view all your finances in one place.",
            imgUrl: "/figma/Depository.png",
        },
        {
            featureList: [
                "Intuitive Flowchart Interface",
                "Directly connect your accounts",
                "Suggestions to achieve your goals more efficiently",
                "View your short-term and long-term goals in one place",
            ],
            description:
                "Monitor budgeting rules aligned to the goals you set, so you can stay on track and achieve your financial goals.",
            imgUrl: "/figma/Modules.png",
        },
        {
            featureList: [
                "Compare with your current spending timeline",
                "See how your spending habits have changed over time",
                "View how your goals impact your financial growth",
            ],
            description:
                "Get projections on ideal timeline for net worth growth, so you can plan your financial future with confidence.",
            imgUrl: "/figma/Projection.png",
        },
    ];
</script>

<SectionWrapper id="features">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14 w-full">
        <div class="flex flex-col gap-2 pt-16 text-center">
            <Heading tag="h1" class="mb-4 our-text">
                Don't just be <Span underline decorationClass="decoration-8 decoration-blue-800 dark:decoration-red-600">aware</Span>, Take <Mark class="bg-blue-800">Action</Mark>
            </Heading>
        </div>

        {#each productFeatures as productFeature, index}
            <ProductCard {productFeature} {index} class="w-full max-w-md md:max-w-lg lg:max-w-xl">
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

<style>
    .our-text {
        text-align: center;
    }
</style>
