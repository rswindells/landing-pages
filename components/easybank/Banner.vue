<script setup>
const showBannerUI = defineModel({ default: false });
const emit = defineEmits(["close-banner"]);
</script>
<template>
    <Teleport to="body">
        <!-- Banner -->
        <transition enter-active-class="transform ease-out duration-300 transition"
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="showBannerUI"
                class="absolute top-0 left-0 w-full z-20 grid justify-items-center grid-cols-[1fr,auto] gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5">
                <p class="text-sm leading-6 text-white flex items-center flex-wrap gap-y-1">
                    <strong class="font-semibold basis-full sm:basis-auto">Easybank Landing Page mockup</strong>
                    <span class="shrink lg:shrink-0">
                        <svg viewBox="0 0 2 2" class="mx-2 hidden sm:inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true">
                            <circle cx="1" cy="1" r="1" />
                        </svg>This is responsive single page mockup from figma, links and buttons do
                        nothing.
                    </span>
                </p>
                <div class="flex justify-end">
                    <button @click="$emit('close-banner')" type="button"
                        class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                        <span class="sr-only">Dismiss</span>
                        <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            </div>
        </transition>
    </Teleport>
</template>
