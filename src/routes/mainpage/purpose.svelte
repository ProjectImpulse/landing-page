<script>
    import { Button, Card, Heading, P, Span, Mark } from 'flowbite-svelte';
</script>

<div class="page-pad bg-white pt-8 pb-4">
	<Card size="xxl" class="bg-black">
		<Heading tag="h1" class="mb-8 leading-[75px] our-text text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
			Help us in removing <Span underline class="text-white" decorationClass="decoration-8 decoration-red-600 dark:decoration-red-600">Financial Anxiety</Span>, from <Mark class="bg-blue-800">your life</Mark>
		</Heading>
		<Card size="xxl" class="grid md:grid-cols-2 bg-black">
			<figure class="flex flex-col justify-center items-center p-8 text-center bg-black rounded-tl-lg rounded-bl-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<blockquote class="mx-auto mb-4 max-w-2xl text-white dark:text-white">
					<Heading class="text-white our-text pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" tag="h2">We Try Harder.</Heading>
					<P class="text-white pt-4" align="center">
						Startups have to keep innovating all the time. We're not the largest name in finance management apps. We’d be drowned out if we didn't put in extra effort.
					</P>
					<P class="text-white pt-4" align="center">
						The services we offer can't be anything less than cutting-edge financial tools, And since we’re not the largest bank, you won’t feel like just another number when you use our app.
					</P>
					<Heading class="text-white our-text pt-4 pb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl" tag="h3">There’s no slacking for us.</Heading>
				</blockquote>
			</figure>
			<figure class="flex flex-col justify-center items-center p-8 text-center bg-black rounded-tl-lg rounded-bl-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<blockquote class="mx-auto mb-4 max-w-2xl text-white dark:text-white">
					<Heading class="text-white our-text pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" tag="h2">Help us with Feedback.</Heading>
					<P class="text-white pt-4" align="center">
						We’d love to hear your thoughts! Please try out our demo and share your feedback. Your input helps us improve and serve you even better.
					</P>
					<div class="pt-8">
						<Button outline color="green" class="text-white" style="text-decoration:none;" href="https://demo.kuberapp.net">Try our Demo</Button>
					</div>
				</blockquote>
			</figure>
		</Card>
	</Card>
</div>