<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const HeroSection = defineAsyncComponent(() => import('@components/HeroSection.vue'))
  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
  const ServicesSection = defineAsyncComponent(() => import('./components/ServicesSection.vue'))
  const AboutSection = defineAsyncComponent(() => import('./components/AboutSection'))
  const ExperienceAndSkills = defineAsyncComponent(() => import('./components/ExperienceAndSkills'))
  const LatestProject = defineAsyncComponent(() => import('./components/LatestProject'))
  const ContactSection = defineAsyncComponent(() => import('./components/ContactSection'))
  const TestimonialSection = defineAsyncComponent(() => import('./components/TestimonialSection'))
  const Footer = defineAsyncComponent(() => import('./components/Footer'))
  const FixedPlugIn = defineAsyncComponent(() => import('./components/FixedPlugIn'))
  import loadingSpinner from './components/loadingScreen'
</script>

<template>
  <div class="bg-regal-blue min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProject />
          <ContactSection />
          <TestimonialSection />
          <Footer />
          <FixedPlugIn />
        </div>
      </template>

      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
*{
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>


