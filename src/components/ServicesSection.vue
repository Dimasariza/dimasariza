<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>

        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {ref} from 'vue';
    const services =ref([
        {
            id:1,
            icon:'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
            name:'WEB DEVELOPMENT',
            description:'Building fast, responsive, and scalable websites to help businesses establish a strong online presence.'
        },
        {
            id:2,
            icon:'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
            name:'Technical Writing',
            description:'Crafting clear, concise, and well-structured documentation to simplify complex concepts.'
        },
        {
            id:3,
            icon:'https://img.icons8.com/?size=100&id=2169&format=png&color=ffffff',
            name:'Mobile Development',
            description:'Creating user-friendly and high-performance mobile applications for iOS and Android.'
        },
        {
            id:4,
            icon:'https://img.icons8.com/?size=100&id=80007&format=png&color=ffffff',
            name:'GAME DEVELOPMENT',
            description:'Designing immersive and engaging gaming experiences with smooth performance and great visuals.'
        },
        {
            id:5,
            icon:'https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png',
            name:'Graphic Design',
            description:'Delivering eye-catching visuals and branding materials that enhance your business identity.'
        },
        {
            id:6,
            icon:'https://img.icons8.com/?size=100&id=66060&format=png&color=ffffff',
            name:'Web Design',
            description:'Designing modern, intuitive, and aesthetically pleasing website interfaces for a seamless user experience.'
        },
    ])
</script>