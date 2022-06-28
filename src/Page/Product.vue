<script setup>

    import ProductListVue from './ProductList.vue'
    import ProductSkeletonVue from '../components/ProductSkeleton.vue';
    import { onErrorCaptured } from 'vue';

    onErrorCaptured(()=> {
        console.log("Error on ErrorCapture")
    })

</script>
<template>
    <Suspense>
        <ProductListVue />
        <template #fallback>
            <ProductSkeletonVue />
        </template>
    </Suspense>
</template>