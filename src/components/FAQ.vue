<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What can I track with Kuber?",
    answer: "You can keep track of various assets like Bank Accounts, Deposits, MFs, Stocks, Insurance policies, loans etc.",
    value: "item-1",
  },
  {
    question: "Is Kuber a bank?",
    answer:
      "Kuber is NOT a Bank. It's a fintech startup which focuses on Financial and Wealth management. Kuber has financial institutions as partners to bring some of the features such as routing in modules to life.",
    value: "item-2",
  },
  {
    question:
      "Do I need to replace my existing bank account to use Kuber?",
    answer:
      "No, Kuber is not a bank replacement. It's a Financial and Wealth Management platform.",
    value: "item-3",
  },
  {
    question: "How does Kuber make money?",
    answer: "Currently we're still in demo. In the future we plan to introduce a subscription model for premium and power users.",
    value: "item-4",
  },
  {
    question:
      "Will Kuber sell my data?",
    answer: "We do not sell or share your financial data with anyone and do not plan to at any point.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>
