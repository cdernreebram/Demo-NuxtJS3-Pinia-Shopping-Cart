import { defineStore } from "pinia";
import axios from 'axios';
import { ref, computed } from 'vue';
import { useRuntimeConfig } from '#app';

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([]);
    const input = ref('');

    const list_products = computed(() => products.value);
    const load_products = computed(() => products.value.length > 0);
    
    const fetch_products = async () => {
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiUrl;

        await axios.get(apiUrl)
            .then((response) => {
                products.value = response.data.products; 
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const search_products = computed(() => {
        if (input.value.length < 3) return products.value;
        return products.value.filter((prd) => {
            return prd.title.toLowerCase().includes(input.value.toLowerCase());
        });
    });

    return { products, fetch_products, list_products, load_products, input, search_products };
});
