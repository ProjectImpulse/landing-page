<script lang="ts" setup>
import { ref } from 'vue';
import Fuse from 'fuse.js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import glossary from '../assets/combined_glossary.json';

// Sample financial terms data
const terms = glossary;

// Fuse.js options for fuzzy search
const fuseOptions = {
  keys: ["term", "definition"],
  threshold: 0.4, // Controls fuzzy matching, lower means more exact matching
};

// Initialize Fuse.js
const fuse = new Fuse(terms, fuseOptions);

// Reactive data
const searchQuery = ref("");
const filteredTerms = ref(terms);
const selectedTerm = ref(null);
const openDialogs = ref({}); // Track open state for each term

// Search function
const search = () => {
  if (searchQuery.value) {
    filteredTerms.value = fuse.search(searchQuery.value).map((result) => result.item);
  } else {
    filteredTerms.value = terms; // If search is cleared, reset to all terms
  }
};

// Open or close the dialog for a specific term
const toggleDialog = (term) => {
  openDialogs.value[term.term] = !openDialogs.value[term.term];
};
</script>

<template>
  <div class="lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
    <!-- Search Input -->
    <div class="mb-4">
      <input
        v-model="searchQuery"
        @input="search"
        type="text"
        style="color: black;"
        placeholder="Search financial terms..."
        class="w-full p-2 border rounded-md"
      />
    </div>

    <!-- Searchable Grid of Terms -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="term in filteredTerms" :key="term.term" class="relative">
        <Dialog v-model:open="openDialogs[term.term]">
          <DialogTrigger as-child>
            <div
              class="border p-4 rounded-md shadow-sm cursor-pointer"
              @click="toggleDialog(term)"
            >
              <h3 class="font-bold text-lg">{{ term.term }}</h3>
            </div>
          </DialogTrigger>

          <DialogContent class="sm:max-w-[1225px] glassy-dialog-content">
            <DialogHeader>
              <DialogTitle>{{ term.term }}</DialogTitle>
              <DialogDescription class="p-2 mt-2">
                {{ term.definition }}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </div>
</template>
