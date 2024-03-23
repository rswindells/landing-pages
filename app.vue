<template>
    <div class="relative h-full w-full">
        <nav class="absolute bottom-2 left-1/2 -translate-x-1/2 min-w-[600px]">
            <div class="border border-teal-600 rounded-full shadow-lg">
                <div class="flex flex-col items-center justify-center px-8 py-3 gap-y-2 opacity-">
                    <h1 class=" text-xl">Landing Page challenges (from frontendmentor.io)</h1>
                    <ul class="flex items-center gap-10 text-sm">
                        <!-- list of nuxt-links -->
                        <li class="">
                            <nuxt-link to="/easybank">Easybank landing page</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/manage-landing-page">Manage landing page</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/insure-landing-page">Insure landing page</nuxt-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div class="w-full h-full">
            <NuxtPage />
        </div>
    </div>
</template>
