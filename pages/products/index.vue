<template>
    <navbar />
    <div class="flex justify-center items-center">
        <div class="container grid grid-cols-5 gap-6">
            <div v-for="(product,index) in list" :key="index" class="card">
                <h2 class="title">{{ product.title }}</h2>
                <img :src="product.thumbnail" class="w-full h-48 object-cover">
                <h1 class="description">{{ product.price }}</h1>
                <<button class="btn-add-to-cart" @click="cart_store.add_cart(product.id,product.price)">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar.vue'

//pinia
import { computed } from 'vue';

import { useProductStore } from '~/store/products';
const product_store = useProductStore()

const list = computed(() => product_store.list_products)

import { useCartStore } from '~/store/cart';
const cart_store = useCartStore()

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 300px;
    height: auto;
    margin: 30px 15px;
    background: #333;
    padding: 20px;
    border-radius: 8px;
}

.title {
    color: white;
    text-align: center;
    font-size: 1.2em;
}

.card:hover {
    background: blue;
}

.btn-add-to-cart {
    display: block;
    width: 100%;
    padding: 10px 0;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: background-color 0.3s;
}

.btn-add-to-cart:hover {
    background-color: #45a049;
}

.description {
    color: white;
    text-align: center;
    font-size: 1.2em;
}
</style>
