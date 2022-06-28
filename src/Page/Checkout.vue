<script setup>
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';


    const { state, commit } = useStore()
    const CheckoutList = computed(()=> state.Checkout)
    const router = useRouter()

    const rupiahFormat = (value) => {
        return value ? new Intl.NumberFormat('id-ID').format(value) : 0
    }

    const Paying = () => {

        commit("addToDelevery", {
            id :`${Date.now()}-12bn02-32323323`,  
        })

        commit("clearCheckout")
        router.push('/auth/delevery')
    }
    
</script>

<template>
    <main class="w-[80%] mx-auto bg-gray-100 p-3 mb-10">
        <h1 class="p-2 text-xs md:text-md font-bold">ID Transaksi : <br> {{CheckoutList.id}}</h1>
        <div v-for="item in CheckoutList?.data" class="flex justify-around p-2 mt-1 bg-white shadow-sm rounded-md">
            <h2 class="text-main text-xs md:text-sm ">{{item?.nama}}</h2>
            <p class="text-[.5rem] md:text-sm">{{item.qty}}/pack x {{rupiahFormat(item.price)}}</p>
            <p class="text-xs md:text-md">{{rupiahFormat(item.qty * item.price)}}</p>
        </div>

        <div class="text-right p-3">
            <span class="font-bold">Rp {{ rupiahFormat(CheckoutList.total) }}</span>
        </div>

        <div class="mt-5 p-2 flex flex-col md:flex-row gap-2">
            <h2 class="text-xs md:text-sm text-center md:text-left my-2">Metode pembayaran</h2>
            <select class="py-1 text-sm  md:py-2 px-10 rounded-md">
                <option class="bg-blue-500 text-white">Indomaret</option>
                <option class="bg-rose-500 text-white">Alfamart</option>
                <option class="bg-main text-white">Cash on delevery</option>
            </select>
        </div>
        <div class="p-2">
            <button 
                class="w-full md:w-[35%] bg-main text-white rounded-md text-xs md:text-base p-2"
                @click="Paying"
                :disabled="CheckoutList?.data ? false : true "
                >Bayar</button>
        </div>
    </main>
</template>