<template>
    <button 
    class="text-white !fixed rounded-lg bg-primary bottom-4 right-4"
    @click="scrollToSection('#navbar')"
    >
        <ArrowUpIcon class="size-10 text-white-500 m-1"/> 
    </button>
</template>

<script setup lang="ts">
    import { ArrowUpIcon } from '@heroicons/vue/24/solid'

    const scrollToSection = (href: string) => {
        const section = document.querySelector(href)
        if(section) {
            section.scrollIntoView({behavior :'smooth'})
        }
    }
</script>