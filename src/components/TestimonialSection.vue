<template >
    <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Testimonials</h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(element, index) in testimonials" :key="index">
                    <div class="carousel__item p-4">
                        <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img :src="element.image" alt="testimonial image" loading="lazy">
                                </div>
                                <h6 class="ml-4 font-bold text-sm uppercase text-white">{{ element.fullName }}</h6>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight">
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                        {{ element.comment }}
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide> 
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { Carousel , Navigation , Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
//Carousel settings
const settings =ref({
    itemsToShow:1,
    snapAlign:"center",
})

//Breakpoints
const breakpoints =ref({
    700:{
        itemsToShow:2.5,
        snapAlign:'center',
    },
    1024:{
        itemsToShow:3,
        snapAlign:'start'
    }
})

const testimonials=ref([
    {
        fullName:'Indra Ranu',
        image:new URL(`@assets/testimoni/indra_ranu.jpg`, import.meta.url),
        comment:"Dimas did an outstanding job developing our ship simulator game, delivering a highly realistic and immersive experience. His expertise in game mechanics, 3D integration, and performance optimization brought the project to life seamlessly. Highly recommended for anyone looking for a skilled game developer!"
    },
    {
        fullName:'Alex W',
        image:new URL(`@assets/testimoni/Alex.png`, import.meta.url),
        comment:"Dimas created a sleek, modern, and professional company profile website that truly represents our brand. His expertise in web development and design made the process smooth and efficient. If you're looking for a skilled developer, Dimas is the one!"
    },
    {
        fullName:'David C.',
        image:new URL(`@assets/testimoni/David.png`, import.meta.url),
        comment:'Dimas delivered a high-quality piping inspection website that exceeded our expectations. His ability to understand our needs and translate them into a well-structured and responsive website was remarkable. A true expert in his field!'
    },
    {
        fullName:'Akbar',
        image:new URL(`@assets/testimoni/AAR.png`, import.meta.url),
        comment:'Dimas did an excellent job creating our assets inspection platform. The website is user-friendly, responsive, and meets all our requirements. His professionalism and dedication made the entire development process stress-free. Truly a great collaborator!'
    },
    {
        fullName:'Amirta Mega',
        image:new URL(`@assets/testimoni/Amirta Mega.png`, import.meta.url),
        comment:'Working with Dimas was a fantastic experience! He developed a seamless and efficient assets inspection website that perfectly met our needs. His attention to detail and technical expertise ensured a smooth process from start to finish. Highly recommended!'
    },
    {
        fullName:'Hesti',
        image:new URL(`@assets/testimoni/Hesti.png`, import.meta.url),
        comment:"I couldn't be happier with the website Dimas built for us! His ability to turn our ideas into a functional, easy-to-use assets inspection site was impressive. He was communicative, detail-oriented, and delivered beyond our expectations. I highly recommend him!"
    },
    {
        fullName:'Anton',
        image:new URL(`@assets/testimoni/anton.jpg`, import.meta.url),
        comment:'Working with Dimas on our docking ship management system was a great experience. He developed a responsive and efficient platform that significantly improved our workflow. His expertise and attention to detail made a real difference!'
    },
])
</script>
<style >
    .carousel__prev,.carousel__next {
        color: white !important;
    }
</style>