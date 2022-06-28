<template>
    <main class="w-full md:w-[80%] p-3 bg-gray-50 mx-auto gap-2 flex flex-wrap justify-center">
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
        <section id="skeleton-wrapper">
            <figure class="p-1 md:p-2 bg-white rounded-md w-max text-center shadow-md">
                <div id="sk-foto" class="w-32 h-28  md:w-40 md:h-40 object-cover rounded-md "></div>
                <figcaption class="mx-auto flex flex-col justify-center items-center py-2">
                    <p class="h-7 w-24 rounded-md bg-gray-100 mb-3"></p>
                     <p class="h-7 w-24 rounded-md bg-gray-100"></p>
                </figcaption>
            </figure>
        </section>
    </main>
</template>

<style scoped>
    #sk-foto, p {
        animation: Loading 1s ease infinite;
    }
    

    @keyframes Loading {
        0%, 100%{
            background-color: rgb(225, 224, 224);
        }
        50% {
            background-color: rgb(243, 239, 239);
        }
    }

</style>