<script setup>
    import Motor from '../assets/Motor.png'
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const { state, commit } = useStore()
    const Delevery = computed(()=> state.Delevery )
    const router = useRouter()

    const doneDelevery = () => {
        commit("removeDelevery")
        router.push('/auth/product')
    }

</script>


<template>
    <main class="w-[80%] mx-auto flex justify-center items-center">
        <span v-if="!Delevery?.id" class="font-light text-sm md:text-md">
            Tidak ada pengantaran
        </span>

        <div v-else class="shadow-md bg-gray-50 flex flex-col justify-center items-center p-2 rounded-md">
        <h1 class="font-bold text-xs md:text-md text-main my-2">Barang anda sedang dalam perjalanan</h1>
            <img :src="Motor" alt="" width="200">
            <div class="w-[60%] text-center">
                <h1 class="my-2 text-sm">ID : {{Delevery?.id}}</h1>
                <p class="text-xs md:text-sm  text-gray-700">Jalan raya mandor RT 03 RW 02 Kecamatan Mandor Kabupaten Landak Kalimantan barat</p>
            </div>
            <button 
              @click="doneDelevery"
              class="p-2 rounded-md bg-main text-white text-xs md:text-sm my-3">Pesanan diterima</button>
        </div>
    </main>
</template>