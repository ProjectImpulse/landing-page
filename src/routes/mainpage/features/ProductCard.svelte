<script>
    export let index;
    export let productFeature;
    import { Button } from 'flowbite-svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base">
    <div class={"flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 "  +
    (index % 2 === 1 ? "md:order-2" : "")}>
        <h4 class="text-2xl sm:text-3xl md:text-4xl max-w-none w-full font-medium relative text-center md:text-left">
            <slot />
        </h4>
        <div class="flex justify-center md:justify-start items-center">
            <Button size="xl" style="font-size: 1.125rem;" color="dark" href="https://demo.kuberapp.net">Try our Demo</Button>
        </div>
        <p class="text-center md:text-left">{productFeature.description}</p>
        <div class="flex flex-col gap-3">
            {#each productFeature.featureList as listItem}
                <div class="flex gap-2 items-center">
                    <div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300">
                        <i class="fa-solid fa-bolt text-green-400"></i>
                    </div>
                    <p>{listItem}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col dropShadow overflow-hidden border rounded-lg">
        <div class="rounded-t-xl h-8 sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">
            {#each [1, 2, 3] as i}
                <div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300" />
            {/each}
        </div>
        <div class="flex flex-col bg-white gap-4 flex-1">
            <img src={productFeature.imgUrl} alt="product-img" class="w-full h-auto object-cover" />
        </div>
    </div>
</div>

<style>
    @media (max-width: 768px) {
        .text-center {
            text-align: center;
        }
        .justify-center {
            justify-content: center;
        }
    }
</style>
