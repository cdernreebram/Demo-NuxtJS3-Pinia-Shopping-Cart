<template>
  <nav class="bg-gray-800 py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <div>
        <span class="text-white text-lg font-semibold">Mall</span>
      </div>


      <!-- Navbar links -->
      <div class="hidden md:flex space-x-6">
        <a href="/" class="text-white hover:text-gray-300">Home</a>
        <a href="/products" class="text-white hover:text-gray-300">Products</a>
        <div @click="gotologin()" href="#" class="text-white hover:text-gray-300">gotoFucntion</div>
      </div>

      <!-- Cart icon -->
      <div class="flex items-center">
        <a href="/cart" class="text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 9l3 3m0 0l3-3m-3 3V5m0 14v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
          </svg>
        </a>
      </div>

      <!-- Hamburger menu for mobile -->
      <div class="md:hidden flex items-center">
        <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-gray-700">
      <a href="/" class="block py-2 px-4 text-white">Home</a>
      <a href="/products" class="block py-2 px-4 text-white">Products</a>
      <div @click="gotologin()" href="#" class="block py-2 px-4 text-white">gotoFucntion</div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const gotologin = () => {
  const router = useRouter()
  router.push({ path: '/login' })
}
</script>
