<template>
    <navbar />
  
    <h1 class="text-center text-2xl font-semibold my-8">ตะกร้าสินค้า</h1>
  
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">สินค้า</th>
            <th class="px-4 py-2">ราคา</th>
            <th class="px-4 py-2">จำนวน</th>
            <th class="px-4 py-2">รวม</th>
            <th class="px-4 py-2">ลบสินค้า</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in carts" :key="index" class="border-b border-gray-200">
            <td class="px-4 py-2 flex items-center space-x-2">
              <img :src="cart.product.thumbnail" class="w-16 h-16 object-cover rounded" alt="Product Image">
              <span>{{ cart.product.title }}</span>
            </td>
            <td class="px-4 py-2">{{ cart.product.price }}</td>
            <td class="px-4 py-2 flex items-center space-x-2">
              <button @click="cart_store.decrement_stock(index)" class="px-3 py-1 rounded bg-gray-200 text-gray-700">-</button>
              <span class="px-2">{{ cart.stock }}</span>
              <button @click="cart_store.increment_stock(index)" class="px-3 py-1 rounded bg-gray-200 text-gray-700">+</button>
            </td>
            <td class="px-4 py-2">{{ cart.total_product }} บาท</td>
            <td class="px-4 py-2">
              <button @click="cart_store.remove_cart(index)" class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import navbar from '@/components/navbar.vue'
  import { computed } from 'vue';
  import { useCartStore } from '~/store/cart';
  const cart_store = useCartStore();
  
  const carts = computed(() => cart_store.cart_previews)
  </script>
  
  <style scoped lang="scss">
  /* Add your custom SCSS styles here */
  /* You can add additional styling as needed */
  </style>
  