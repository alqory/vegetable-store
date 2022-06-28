<script setup>
    import Banner from '../assets/Banner.png'
    import Elon from '../assets/Elon.jpg'
    import Mark from '../assets/Mark.jpg'
    import Evan from '../assets/Evan.jpg'
    import { ref, onMounted } from 'vue';
    import prevArrow from '../assets/prev-arrow.png'
    import nextArrow from '../assets/next-arrow.png'
    import NavbarVue from '../components/Navbar.vue';

    const index = ref(0)
    const transitions = ref("all .5s ease")

    const ProductDisplay = [
        {
            img : "https://cf.shopee.co.id/file/37b912f81744b7cbbbef6b2af8643371",
            nama : "Brazialian Brocoli",
            price : 30000,
            sales : 211
        },
        {
            img : "https://cdn1-production-images-kly.akamaized.net/J6cLZK_XxgxMGrPDpKX1nL2-FY0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2782178/original/063445700_1555568202-iStock-158690297.jpg",
            nama : "Lobak putih",
            price : 15000,
            sales : 101
        },
        {
            img : "https://awsimages.detik.net.id/community/media/visual/2020/06/10/tomat-untuk-skincare-alami-3_169.jpeg?w=700&q=90",
            nama : "Tomat",
            price : 15000,
            sales : 321
        },
        {
            img : "https://lzd-img-global.slatic.net/g/p/cb6b909a8092157ee12a41fef5ceae9c.jpg_720x720q80.jpg_.webp",
            nama :"Lada hitam",
            price : 25000,
            sales : 273
        },
        {
            img : "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayopurwakarta/images/post/articles/2021/07/05/8948/pineapple-5108775_640.jpg",
            nama : "Nanas",
            price : 30000,
            sales : 133
        },
        {
            img : "https://cf.shopee.co.id/file/8eadf1c391d092049225b31bb332866a",
            nama : "Cabe Rawit",
            price : 40000,
            sales : 903
        }
    ]

    const rupiahFormat = (value) => {
        return new Intl.NumberFormat('id-ID').format(value)
    }

    const runCoutingFunc = (e) => {
        if(window.scrollY  >= 200) {
           counting()
           if(window.scrollY >= 201) {
            window.removeEventListener("scroll", runCoutingFunc)
           }
        }
     }

    onMounted(()=> {
        const width = window.innerWidth;

        if(width <= 320) {
            index.value = -300
        }else {
            index.value = -600
        }
    
    window.addEventListener("scroll", runCoutingFunc)
        
    })


    const prev = () => {
        const card = document.querySelector("#ts-content")
        const width = window.innerWidth <= 320 ? -320 : -600

        document.querySelector("#btn-next").classList.remove("hidden")

        if(index.value < width ) {
            // index.value = -card.getBoundingClientRect().width
            // transitions.value = ""
            document.querySelector("#btn-prev").classList.add("hidden")
            return;
            
        }else {

            
            index.value -= card.getBoundingClientRect().width
            transitions.value = "all .5s ease"
        }
    }

    const next = () => {
        const card = document.querySelector("#ts-content")
        // const width = window.innerWidth == 320 ? -320 : -600

        document.querySelector("#btn-prev").classList.remove("hidden")

        if(index.value == 0) {
            // index.value = -card.getBoundingClientRect().width
            // transitions.value = ""
            document.querySelector("#btn-next").classList.add("hidden")
            return
            
        }else {
            
            index.value += card.getBoundingClientRect().width
            transitions.value = "all .5s ease"
        }
        
    }

    const counting = () => {
        let counters = document.querySelectorAll("#counter")
        counters.forEach((count) => {
            count.innerText = "0"

            const updateCounter = () => {
                const dataTarget = count.getAttribute("data-target")
                const indicator  = +count.textContent
                const increment  = +dataTarget / +dataTarget

                if(indicator < +dataTarget) {
                    count.innerText = `${Math.ceil(indicator + increment)}`
                    const startCounter = setTimeout(()=> {
                        updateCounter()
                    }, 8)

                    if(indicator == dataTarget) {
                        clearTimeout(startCounter)
                    }

                }
            }

            updateCounter()
        })
    }

    
    

</script>

<template>
    <NavbarVue />
    <main class="mx-auto">

        <section id="Jumbotron" class="flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-evenly items-center mt-14">
            <div class="text-center">
                <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold">Penuhi kebutuhan <br> sayur anda di <br> <span class="text-main">Vegefriend.com</span> </h1>
                <p class="text-gray-600 mt-3 text-xs md:text-sm ">Dapatkan diskon spesial setiap harinya <br> setiap pembelian 4 pack sayuran</p>
                <router-link to="/auth/product">
                    <button
                     class="text-center mx-auto mt-5 py-2 px-8 text-xs md:text-sm lg:text-base rounded-md bg-main text-white shadow-2xl shadow-main"
                     >Mulai berbelanja</button>
                </router-link>
            </div>
            <img class="w-[70%] md:w-[21rem] lg:w-[30rem]" :src="Banner" alt="" >
        </section>
        
        <section id="counter-container" class=" text-main w-full md:w-[75%] mx-auto flex justify-evenly mt-28">
            <div class="text-center flex flex-col justify-center items-center">
                <div id="counter-wrapper" class="flex">
                    <span id="counter" class="text-3xl md:text-6xl font-bold" data-target="120">0</span>
                    <sup class="text-xl md:text-3xl">+</sup>
                </div>
                <h1 class="font-normal md:font-bold text-xs md:text-sm text-main md:text-black">Konsumen aktif</h1>
            </div>
            <div class="text-centerflex flex-col justify-center items-center">
                <div id="counter-wrapper" class="flex">
                    <span id="counter" class="text-3xl md:text-6xl font-bold" data-target="70">0</span>
                    <sup class="text-xl md:text-3xl">+</sup>
                </div>

                <h1 class="font-normal text-center md:font-bold text-xs md:text-sm text-main md:text-black">Mitra</h1>
            </div>
            <div class="text-center flex flex-col justify-center items-center">
                <div id="counter-wrapper" class="flex">
                    <span id="counter" class="text-3xl md:text-6xl font-bold" data-target="250">0</span>
                    <sup class="text-xl md:text-3xl">+</sup>
                </div>
                <h1 class="font-normal md:font-bold text-xs md:text-sm text-main md:text-black">Konsumen pasif</h1>
            </div>
        </section>
        
         <section id="product-list" class="bg-gray-50 mt-20 md:mt-28 p-1 text-center">
            <h1 class="text-center text-main font-bold my-6 md:my-8 text-semibold">Produk kami</h1>
            <div id="product-wrapper" class="w-full md:w-[80%] mx-auto flex justify-center gap-2 md:gap-8 flex-wrap">
                <div v-for="item in ProductDisplay" id="product-item" class="rounded-md w-max bg-white shadow-md">
                    <img :src="item.img" alt="" class="w-36 h-28 md:h-40 md:w-40 object-cover p-1">
                    <p class="text-center py-1 text-main md:py-2 text-xs md:text-sm font-semibold">{{item.nama}}</p>
                    <span class="flex justify-center items-center my-1 md:y-2">
                        <p class="text-xs p-1 font-semibold"><sup>Rp</sup>{{rupiahFormat(item.price)}}<sup>/pack</sup></p>
                        <p class="text-[.5rem]">{{item.sales}} terjual</p>
                    </span>
                </div>
            </div>
            <router-link to="/auth/product">
                <button
                 class="mt-10 md:mt-14 mb-8 py-2 px-8 text-xs md:text-sm lg:text-base rounded-md bg-main text-white"
                 >Lihat selengkapnya</button>
            </router-link>
        </section>
        
        <section class="w-full p-3 py-6 mt-10">
            <h1 class="text-center font-bold my-10 text-semibold">Testimonial</h1>
            <div id="testimonial" class="text-center relative mx-auto overflow-hidden w-[300px] md:w-[600px]" >

                <button 
                    id="btn-prev"
                    @click="prev"
                    class="absolute bg-gray-100 left-1 top-20 z-50 p-1 rounded-full shadow-md"
                >
                    <img :src="prevArrow" alt="" width="25">
                </button>
                
                <button 
                  id="btn-next"
                  @click="next"
                  class="absolute bg-gray-100 right-1 top-20 z-50 p-1 rounded-full shadow-md"
                  >
                    <img :src="nextArrow" alt="" width="25">            
                </button>

                <ul id="ts-wrapper" class="flex" :style="{transform:`translateX(${index}px)`, transition:transitions}">
                    <li>
                        <figure id="ts-content" class=" rounded-md p-2 bg-white flex items-center justify-center flex-col">
                            <img class="w-24 h-24 object-cover rounded-full border-2 border-main" :src="Elon" alt="" >
                            <div class="">
                                <blockquote class="text-[.8rem] md:text-smp-2 font-ligth text-slate-600">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum, dicta facere laudantium aliquid necessitatibus beatae, quidem ex officiis, odit velit veritatis veniam blanditiis quae culpa. Nostrum amet provident id.</p>
                                </blockquote>
                                <figcaption>
                                    <p class="font-bold text-main">Elon Musk</p>
                                    <p class="text-sm text-slate-500">Creator of Tesla motors</p>
                                </figcaption>
                            </div>
                        </figure>
                    </li>
                    <li>
                        <figure id="ts-content" class=" rounded-md p-2 bg-white flex items-center justify-center flex-col">
                            <img class="w-24 h-24 object-cover rounded-full border-2 border-main" :src="Evan" alt="" >
                            <div class="">
                                <blockquote class="text-[.8rem] md:text-sm p-2 font-ligth text-slate-600">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum, dicta facere laudantium aliquid necessitatibus beatae, quidem ex officiis, odit velit veritatis veniam blanditiis quae culpa. Nostrum amet provident id.</p>
                                </blockquote>
                                <figcaption>
                                    <p class="font-bold text-main">Evan You</p>
                                    <p class="text-sm text-slate-500">Creator of VueJS</p>
                                </figcaption>
                            </div>
                        </figure>
                    </li>
                    <li>
                        <figure id="ts-content" class=" rounded-md p-2 bg-white flex items-center justify-center flex-col">
                            <img class="w-24 h-24 object-cover rounded-full border-2 border-main" :src="Mark" alt="" >
                            <div class="">
                                <blockquote class="text-[.8rem] md:text-sm p-2 font-ligth text-slate-600">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum, dicta facere laudantium aliquid necessitatibus beatae, quidem ex officiis, odit velit veritatis veniam blanditiis quae culpa. Nostrum amet provident id.</p>
                                </blockquote>
                                <figcaption>
                                    <p class="font-bold text-main">Mark Zuckerberg</p>
                                    <p class="text-sm text-slate-500">Creator of Facebook</p>
                                </figcaption>
                            </div>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>

        <section id="footer" class="bg-gray-100 mt-28 p-4">
            <div id="footer-content" class="w-[80%] mx-auto flex flex-col md:flex-row justify-between py-10">
                <h1 class="font-bold text-main text-xs md:text-sm">Vegefriend.com 2022. All Right Reserved</h1>
            </div>
        </section>
    </main>
</template>

<style>
    #ts-content {
        width: 300px;
        border-top: 6px solid #2E9F06;
    }
    @media (min-width: 768px) {
        #ts-content{
            width: 600px;
        }
    }
</style>