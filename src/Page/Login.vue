<script setup>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    
    const { dispatch } = useStore()
    const router = useRouter()

    
    const Login = async () => {
        try {
            const data = await dispatch("LoginAsync")
            if(data) {
                router.push('/')
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
            return;
        }
    }

</script>

<template>
        <main class="mx-auto my-32 md:my-30 w-[90%] md:w-[50%] lg:w-[30%] rounded-sm shadow-md bg-gray-50">
            <h1 class="text-center text-xl font-bold text-main py-10 ">Vegefriend, your friend😉</h1>
            <form class="p-1 mt-5 md:p-3" @submit.prevent="">
                <div class="flex flex-col p-2 gap-y-2">
                    <label class="text-gray-500 text-sm md:text-base" for="">username</label>
                    <input class="bg-white rounded-md p-2 focus:outline-main placeholder:text-sm" type="text" placeholder="Langsung masuk aja bang">
                </div>
                <div class="flex flex-col p-2 gap-y-2">
                    <label class="text-gray-500 text-sm md:text-base" for="">password</label>
                    <input class="bg-white rounded-md p-2 focus:outline-main placeholder:text-sm" type="password">
                </div>
                <button @click="Login" class="p-2 ml-2 my-2 bg-main text-white text-sm rounded-md" type="submit">Masuk</button>
            </form>
            <div class="mx-auto text-center p-2 text-main">
                <router-link to="/" class="">
                     Halaman utama
                </router-link>
            </div>
        </main>
</template>