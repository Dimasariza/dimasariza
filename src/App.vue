<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
  const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'))
  const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
  const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'))
  const LatestProject = defineAsyncComponent(() => import('@/components/LatestProject.vue'))
  const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
  const TestimonialSection = defineAsyncComponent(() => import('@/components/TestimonialSection.vue'))
  const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
  const FixedPlugIn = defineAsyncComponent(() => import('@/components/FixedPlugIn.vue'))
  import loadingSpinner from '@/components/loadingScreen.vue'
  import toastr from '@/components/Toastr.vue'
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


