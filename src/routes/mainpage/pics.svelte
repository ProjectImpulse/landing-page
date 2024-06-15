<script>
    import { Button, DeviceMockup, P } from 'flowbite-svelte';
  </script>

<div class="bg-white pb-16 page-pad">
    <div class="center" style="padding-bottom: 40px;">
        <Button size="xl" color="dark">
            <a href="#waitlist" style="font-size: 1.125rem; text-decoration:none; color:white;">Join Waitlist</a>
        </Button>
    </div>
    <DeviceMockup device="laptop">
        <img src=" /figma/Main Dashboard.png" class="dark:hidden h-[156px] md:h-[278px] w-full" alt="laptop example 1" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full" alt="laptop example 2" />
    </DeviceMockup>
</div>