import { defineStore } from "pinia";

import { ref, computed } from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

//useProductStore
import { useProductStore } from "./products";

export const useCartStore = defineStore('useCartStore', () => {
    const cart = ref([])
    const product_store = useProductStore(); // เพิ่มการนำเข้าและใช้งาน useProductStore
    
    const add_cart = (id, price, stock = 1) => {
        const data = {
            id,
            price,
            stock
        }

        const findId = cart.value.find(e => e.id === data.id)

        if(findId) {
            alert_add_cart_failed()
        } else {
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }

        
        console.log(cart.value)
    }

    const add_cart_detail = (id, price, stock) => {
        const data = {
            id,
            price,
            stock
        }

        const findId = cart.value.find(e => e.id == data.id)

        if(findId) {
            const findIndexProduct = cart.value.findIndex(e => e.id == data.id)
            cart.value[findIndexProduct].stock = cart.value[findIndexProduct].stock + stock
            saveToLocalStorage()
            alert_add_cart()
        } else {
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const loadFromLocalStorage = () => {
        if(localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.getItem('cart'))
        }
    }

    const cart_previews = computed(() => {
        return cart.value.map((prd, i) => {
            const findIndexProduct = product_store.products.findIndex(e => e.id == prd.id);
            if (findIndexProduct === -1) return null;

            return {
                product: product_store.products[findIndexProduct],
                stock: cart.value[i].stock,
                total_product: product_store.products[findIndexProduct].price * cart.value[i].stock
            };
        }).filter(prd => prd !== null);
    });

    const total = computed(() => {
        return cart.value.reduce((sum, prd) => sum + prd.price * prd.stock ,0)
    })

    const alert_add_cart = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มสินค้าเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'คุณได้เพิ่มสินค้าไปแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const increment_stock = (i) => {
        cart.value[i].stock += 1
        saveToLocalStorage()
    }

    const decrement_stock = (i) => {
        cart.value[i].stock -= 1
        saveToLocalStorage()

        if(cart.value[i].stock == 0) {
            cart.value.splice(i, 1)
            saveToLocalStorage()
        }
    }

    const remove_cart = (i) => {
        cart.value.splice(i, 1)
        saveToLocalStorage()
    }

    const clear_cart = () => {
        cart.value = []
        saveToLocalStorage()
    }

    return { cart, add_cart, loadFromLocalStorage, cart_previews, increment_stock, decrement_stock, remove_cart, add_cart_detail, clear_cart, total }
})