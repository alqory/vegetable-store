<script setup>
    import { ShoppingCartIcon } from "vue-tabler-icons";
    import { useStore } from "vuex";
    import { computed } from "vue";
    import { useRouter } from "vue-router";

    const { state, dispatch } = useStore()
    const router = useRouter()

    const wishlist = computed(()=> state.Wishlist.length)

    const showNav = () => {
        document.querySelector("#nav").classList.remove("translate-x-[30rem]")
        document.querySelector("#nav").classList.remove("md:translate-x-0")
    }

    const closeNav = () => {
        document.querySelector("#nav").classList.add("translate-x-[30rem]")
        document.querySelector("#nav").classList.add("md:translate-x-0")
    }

    const Auth = localStorage.getItem("Auth") ?  localStorage.getItem("Auth") == "auth" : null
    const Logout = async() => {
        try {
            const logout = await dispatch("LogoutnAsync")
            if(logout){
                router.push("/login")
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
        }
    }


</script>
<template>
    <header class="relative flex w-full justify-between md:justify-around gap-y-10  md:items-stretch p-8">
        <h1 class="text-light text-base lg:text-2xl md:font-bold  text-main">Vegefriend.com</h1>
        <nav v-if="Auth" 
            id="nav"
            class="flex flex-col md:flex-row fixed z-50 md:relative transition-all duration-100 ease-linear top-0
                   h-max bg-gray-100 md:bg-white py-6 md:py-0 px-10 md:px-0 w-full gap-9 md:w-max md:gap-4 lg:gap-8 text-sm
                   translate-x-[30rem] md:translate-x-0 md:translate-y-1 
                   ">
            
            <span @click="closeNav" class="font-bold md:hidden absolute right-10 top-4 text-2xl">
                &#x292B;
            </span>

            <router-link @click="closeNav" to="/">
                Halaman utama
            </router-link>

            <router-link @click="closeNav" to="/auth/product">
                Produk
            </router-link>

            <router-link @click="closeNav"  to="/auth/checkout">
                Checkout
            </router-link>
            
            <router-link @click="closeNav"  to="/auth/delevery">
                Pengantaran
            </router-link>

            <div class="relative flex gap-10 ">
                <router-link  @click="closeNav" to="/auth/wishlist">
                    <ShoppingCartIcon  class="text-main text-xl" />
                    <span class="-translate-y-10 translate-x-4 text-sm h-6 w-6 bg-main rounded-full flex items-center justify-center text-white">
                        {{wishlist}}
                    </span>
                </router-link>
                <button @click="Logout" class="bg-main h-max p-2 rounded-md text-white -translate-y-2">
                     Logout
                </button>
            </div>
        </nav>
        <div v-if="Auth"  class="flex gap-1 md:hidden">
            <div >
                <ShoppingCartIcon  class="text-main text-xl" />
                <span class="-translate-y-9 -translate-x-3 text-[.5rem] h-4 w-4 bg-main rounded-full flex items-center justify-center text-white">
                        {{wishlist}}
                </span>
            </div>
            <div id="Hamburger" @click="showNav">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
        <nav class="w-[37%] text-right" v-else-if="!Auth">
            <router-link class="p-2 rounded-md bg-main text-sm text-white" to="/login">
                Login
            </router-link>
        </nav>
    </header>
</template>

<style scoped>
    .router-link-active {
        font-weight: bold;
        color: #2E9F06;
    }

    .bar1, .bar2, .bar3 {
        width: 24px;
        height: 3px;
        background-color: #2E9F06;
        margin: 4px 0;
        }

</style>
