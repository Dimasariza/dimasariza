<template>
  <div :class="['!fixed right-4 top-4 max-w-xs bg-gray-800 text-sm text-white rounded-xl shadow-lg z-50', 
    { 'bg-gray-800': type === 'normal' }, 
    { 'bg-red-500': type === 'error' }, 
    { 'bg-teal-500': type === 'success' }, 
    { 'bg-blue-500': type === 'info' }, 
    { 'bg-yellow-500': type === 'warning' }
  ]" role="alert" tabindex="-1" aria-labelledby="hs-toast-soft-color-teal-label" v-if="visible">    
    <div id="hs-toast-soft-color-teal-label" class="flex p-4">
      {{ message }}

      <div class="ms-auto">
        <button type="button" class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-teal-800 opacity-50 hover:opacity-100 focus:outline-hidden focus:opacity-100 dark:text-teal-200" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Toastr',
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'normal',
        },
        duration: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return {
            visible: false
        };
    },
    mounted() {
        // this.show();
    },
    methods: {
        changeValue({ message, type, duration }) {
            this.messsage = message;
            this.type = type;
            this.duration = duration;
        },
        show() {
            this.visible = true;
            setTimeout(this.close, this.duration);
        },
        close() {
            this.visible = false;
        }
    }
};
</script>