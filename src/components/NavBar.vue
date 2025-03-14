<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20" id="navbar">
        <div class="text-white text-3xl font-bold flex items-center">
            <img src="./../assets/logo/Tech horse logo-03.png" alt="Tech Horse Logo" width="50" height="50">
            <span class="pl-2">
                THE CODING HORSE
            </span>
        </div>
        <div class="md:hidden z-30">
            <button type="button" 
            class="block focus:outline-none"
            @click="isMenuOpen != isMenuOpen"
            >
                <span v-if="isMenuOpen" class="text-5xl">  
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
                </span>
                <span v-else class="text-5xl">  
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="close" width="50" height="50">
                </span>
            </button>
        </div>
        
        <!-- Navbar Link -->
        <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-regal-blue md:relative md:bg-transparent md:flex md:justify-between md:flex-row', isMenuOpen ? 'block' : 'hidden']">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <button :href="item.href"
                        class="block text-white transition hover:text-primary ease-liner text-2xl md:text-lg"
                        @click="scrollToSection(item.href)"
                        >{{ item.name }}
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    
    const Menu = ref<HTMLDivElement | null>([
        { name: 'Services', href: '#services'},
        { name: 'About Me', href: '#about'},
        { name: 'Skills', href: '#skills'},
        { name: 'Projects', href: '#projects'},
        { name: 'Testimonials', href: '#testimonials'},
        { name: 'Contact', href: '#contact'},
    ])

    const isMenuOpen = ref(false)
    const scrollToSection = (href: string) => {
        isMenuOpen.value = false
        const section = document.querySelector(href)
        if(section) {
            section.scrollIntoView({behavior :'smooth'})
        }
    }
</script>