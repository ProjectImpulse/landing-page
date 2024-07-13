<script>
    import { Heading, Card } from 'flowbite-svelte';
</script>
  
<section id="waitlist">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white page-pad">
		<div class="pt-2 col-span-full">
			<Card size='xxl'>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4 pad-container">
					<div class="p-4 md:p-[25%] md:col-span-2"> 
						<Heading tag="h4" align="left" customSize="text-4xl font-extrabold">Contact us</Heading>
						<Heading tag="h6" align="left">projimpulseinfo@gmail.com</Heading>
					</div>
					<div class="pt-2 pl-4 md:col-span-2">
						<Heading tag="h2" customSize="text-4xl font-extrabold">Join our Waitlist</Heading>
						<form class="ud-contact-form">
							<div class="ud-form-group p-4 md:p-12">
								<iframe title="waitlist-form" src="https://fm.addxt.com/form/?vf=1FAIpQLSeg1jrOEiDrpp0_GYrWdQfYUOQKNEsLjb4vSr89swRXQgaLrg" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">
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