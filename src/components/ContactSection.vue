<template>
    <Toast ref="toast" v-bind="toastStatus"/>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's Connect</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">
                    Have a project in mind or need insights on web or game development? I’d love to help bring your ideas to life! Whether you're looking for a custom web solution or want to discuss game development, feel free to reach out. Let’s collaborate and create something amazing together—get in touch today!
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>roganda.sihombing11@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Phone</h4>
                            <p>+62 895421010192</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2"
                            style="background: #111a3e; width: 50px;height: 46px; display: flex;justify-content: center; border-radius: 50%;
                        overflow: hidden;border: 1px solid#111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"
                                class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <p>wwww.linkedin.com/in/rogandadimas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
            style="background: #111a3e; width: 100%;height: 100%; border-radius: 20px;
            overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
            <form class="flex flex-col p-2" data-aos="zoom-in-up" @submit="handleSubmitForm" action="https://api.web3forms.com/submit" method="POST">
                <div class="mb-6">
                    <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="email@gmail.com" 
                        v-model="email"
                        >
                </div>
                <div class="mb-6">
                    <label for="name" class="text-white block mb-2 text-sm font-medium">Email</label>
                    <input 
                        id="name" 
                        class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Your name" 
                        v-model="name"
                        >
                </div>
                <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input 
                        type="subject" 
                        id="subject" 
                        class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="subject" 
                        v-model="subject"
                        >
                </div>
                <div class="mb-6">
                    <label for="Message" class="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea 
                        id="Message" 
                        class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about ... " 
                        v-model="message"
                        >
                    </textarea>
                </div>
                <button 
                type="submit" 
                class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                    Send Message
                </button>
            </form>
        </div>
        <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 
        -translate-1/2
        "></div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import Toast from '@/components/Toastr.vue'
    import axios from 'axios'

    const toast = ref(null)
    const name = ref('')
    const email = ref('')
    const subject = ref('')
    const message = ref('')

    const toastStatus = ref({
        message: 'Message sent successfully',
        type: 'success'
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!email.value || !subject.value || !message.value) {
            toastStatus.value.message = 'Please fill all fields'
            toastStatus.value.type = 'error'
            toast.value.show()
            return
        }

        axios({
            method: 'post',
            url: 'https://api.web3forms.com/submit',
            data: {
                access_key: '75139b84-d8a2-4330-9761-59391ec47cf1',
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            }
        })
        .then(() => {
            toastStatus.value.message = 'Message sent successfully'
            toastStatus.value.type = 'success'
            toast.value.show()

            name.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        })
        .catch(() => {
            toastStatus.value.message = 'Failed to send message'
            toastStatus.value.type = 'error'
            toast.value.show()
        })
    }
</script>
