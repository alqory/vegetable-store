<script setup >
    import { ShoppingCartPlusIcon, InfoCircleIcon, ChecklistIcon } from 'vue-tabler-icons'
    import { useStore } from 'vuex'
    import { computed } from 'vue';

    const { state, commit ,dispatch } = useStore()

    await dispatch('getProductsAsync')

    const topSalesProducts = computed(()=> {
        return state.Product.filter((item) => item.best == true)
    })
    const Products = computed(()=> {
        return state.Product.filter((item) => item.best == false)
    })

    const rupiahFormat = (value) => {
        return new Intl.NumberFormat('id-ID').format(value)
    }

    const addToWishlist = (id, nama, img, price) => {
        const alert = document.querySelector('#alert')
        const addCart = document.querySelector('#addCart')

        alert.classList.remove("hidden")
        addCart.style.pointerEvents="none"

        setTimeout(()=> {
            commit("addToCart", { id, nama, img, price, qty:1 } )
            alert.classList.add("hidden")
            addCart.style.pointerEvents="all"
        },1500)
 
    }

</script>

<template>
        <main class="w-full md:w-[80%] mx-auto bg-gray-100 rounded-md p-3">
        <div id="top-sales">
            <div id="tp-wrapper" class="p-0 md:p-3 flex gap-y-4 flex-wrap justify-center gap-2">
                <div 
                v-for="product in topSalesProducts"
                :key="product.id"
                class="p-1 md:p-2 bg-green-100 rounded-md w-max text-center shadow-md hover:-translate-y-1 transition-all duration-100">
                    <img  
                    :src="product.img"
                    :alt="product.nama"
                    class="w-32 h-28 md:w-40 md:h-40 object-cover rounded-md"
                        >
                    <h3 class="font-bold text-xs md:text-sm my-2">{{ product.nama }}</h3>
                    <p class="text-xs md:text-sm">Rp {{rupiahFormat(product.price)}}/pack</p>
                    <div class="flex justify-center items-center gap-4 my-1 cursor-pointer text-main">
                        <span 
                        id="addCart"
                        @click="addToWishlist(product.id, product.nama, product.img, product.price)"
                            >
                            <ShoppingCartPlusIcon />
                        </span>
                        <span>
                            <InfoCircleIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id="no-top-sales" class="mt-10">
            <div id="tp-wrapper" class="p-0 md:p-3 flex gap-y-2 md:gap-y-4 flex-wrap justify-center gap-x-1 md:gap-x-7">
                <div 
                v-for="product in Products"
                :key="product.id"
                class="p-2 bg-white rounded-md w-max text-center shadow-md hover:-translate-y-1 transition-all duration-100">
                    <img  
                    :src="product.img"
                    :alt="product.nama"
                    class="w-32 h-28 md:w-40 md:h-40 object-cover rounded-md"
                        >
                    <h3 class="font-bold text-xs md:text-sm my-2">{{ product.nama }}</h3>
                    <p class="text-xs md:text-sm">Rp {{rupiahFormat(product.price)}}/pack</p>
                    <div class="flex justify-center items-center gap-4 my-1 cursor-pointer text-main">
                        <span
                        @click="addToWishlist(product.id, product.nama, product.img, product.price)"
                        >
                            <ShoppingCartPlusIcon />
                        </span>
                        <span>
                            <InfoCircleIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div id="alert"
            class="fixed hidden z-50 py-3 px-14 bg-green-700 rounded-md text-white text-sm bottom-10 right-3"
            >
            <ChecklistIcon class="text-xl" />
            <h1>Suskses di tambahkan</h1>
        </div>
    </main>
</template>
