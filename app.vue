<template>
    <div>
        <NuxtLayout name="default">

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'


// useProductStore
import { useProductStore } from '~/store/products.js'
const product_store = useProductStore()

//useCartStore
import { useCartStore } from '~/store/cart.js';
const cart_store = useCartStore()

onMounted(() => product_store.fetch_products())
onMounted(() => cart_store.loadFromLocalStorage())

</script>

<style scoped>

</style>