<script>
    import { Label, Input, ButtonGroup } from 'flowbite-svelte';
    import { EnvelopeSolid } from 'flowbite-svelte-icons';
    import { Heading, P, A } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { Card } from 'flowbite-svelte';
  </script>
  
  <!-- <div class="mb-6 waitlist">
    <Heading tag="h2" customSize="text-4xl font-extrabold ">Join our Waitlist</Heading>
    <Input id="email" type="email" placeholder="name@mail.com">
      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </Input>
  </div> -->

  <section id="waitlist">
    <div class="grid grid-cols-4 gap-4 bg-white page-pad">
      <div class = "pt-2 pl-4 col-start-1 col-end-5">
        <Card size='xxl'>
        <div class="grid grid-cols-4 gap-4 pad-container">
          <div class="p-[25%]"> 
            <Heading tag="h4" align="left">Contact us</Heading>
            <Heading tag="h6" align="left">projimpulseinfo@gmail.com</Heading>
          </div>
          <div  class = " pt-2 pl-4 col-start-3 col-end-5">
            <Heading tag="h2" customSize="text-4xl font-extrabold ">Join our Waitlist</Heading>
            <form class="ud-contact-form">
              <div class="ud-form-group p-12">
                  <iframe src="https://fm.addxt.com/form/?vf=1FAIpQLSeg1jrOEiDrpp0_GYrWdQfYUOQKNEsLjb4vSr89swRXQgaLrg" width="100%" height="300" frameborder="0"  marginheight="0"  marginwidth="0" scrolling="no">
                  Loading…
                  </iframe>
              </div>
            </form>
          </div>
        </div>
        </Card>
      </div>
    </div>
  </section>