<script setup>
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { CarIcon } from 'vue-tabler-icons'

    const { state, commit } = useStore()
    const Wishlist = computed(()=> state.Wishlist) 
    const router = useRouter()

    const addToWishlist = (id) => {
        document.querySelector(`#btn-cart-add`).classList.add("btn-active-add")
        setTimeout(()=> {
            commit("addItemExistToCart", id )
             document.querySelector(`#btn-cart-add`).classList.remove("btn-active-add")

        },1000)
    }

    const removeToWishlist = (id) => {     
        document.querySelector(`#btn-cart-remove`).classList.add("btn-active-add")
        setTimeout(()=> {
            commit("removeToCart", id )
            document.querySelector(`#btn-cart-remove`).classList.remove("btn-active-add")
        },1000)
    }

    const rupiahFormat = (value) => {
        return new Intl.NumberFormat('id-ID').format(value)
    }

    const goToCheckout = async() => {
        try {
            commit("addToCheckout", {
                id : `${Date.now()}-12bn02-12121`,
                data : state.Wishlist,
                total : state.Wishlist.reduce((current, item) => current + item.price * item.qty, 0)
            })
            commit("clearCart")

            router.push("/auth/checkout")
        } catch (error) {
            console.log(error)
        }
    }

</script>

<template>
    <main class="w-[80%] bg-gray-100 mx-auto rounded-md p-3 mb-20">
        <div id="wishlist-wrapper" class="flex gap-y-3 flex-col">
            <div v-for="item in Wishlist" class="flex justify-around items-center  bg-white p-2 gap-3 rounded-md shadow-md">
                <img class="h-24 w-24 md:h-40 md:w-40 object-cover rounded-md" :src="item.img" alt="">
                <div>
                    <h1 class="px-5 text-xs font-bold">{{item.nama}}</h1>
                    <p class="text-xs text-center text-gray-500">Rp {{rupiahFormat(item.price)}}</p>

                    <div class="bg-gray-100 text-center mt-5 p-2 rounded-md">
                        <button 
                          id="btn-cart-remove"
                          class="p-1 h-8 w-8 rounded-md text-white text-bold bg-main"
                          @click="removeToWishlist(item.id)"
                          >-</button>
                            <span class="px-2 text-sm font-bold">{{item.qty}}</span>
                        <button 
                         id="btn-cart-add"
                         class="p-1 h-8 w-8 rounded-md text-white text-bold bg-main"
                         @click="addToWishlist(item.id)"
                         >+</button>
                    </div>

                    <p class="text-sm translate-x-8 md:translate-x-20 md:translate-y-5">Rp {{rupiahFormat(item.qty * item.price)}}</p>
                </div>
                
            </div>
        </div>
        <button 
            class="bg-main hover:opacity-90 py-5 flex justify-center items-center gap-3 fixed z-50 right-8 md:right-3 bottom-2 w-[80%] md:w-[40%] rounded-md p-2 text-white"
            @click="goToCheckout"
            :disabled="Wishlist.length == 0 ? true : false"
            >
            Checkout ..<CarIcon />
        </button>
    </main>
</template>

<style>
    .btn-active-add {
        pointer-events: none;
        opacity: 5%;
    }
</style>