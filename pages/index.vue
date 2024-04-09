<script lang="ts" setup>
import EasyBankImage from '~/assets/images/easybank/easybank_page.webp'

interface Page {
    id: number
    title: string
    route: string
    description?: string
    image_url?: string
    image_alt?: string
}

const pages = ref<Page[]>([
    {
        id: 1,
        title: "Easybank",
        route: "/easybank",
        description: "A landing page for a banking application, built with Tailwindcss",
        image_url: EasyBankImage,
        image_alt: "A screenshot of landing page for a banking application with phones displaying financial data on the application"
    },
    {
        id: 2,
        title: "Bookmark",
        route: "/bookmark",
        description: "A landing page for a bookmark manager, built with scss.",
        image_url: "",
        image_alt: "A screenshot of landing page for a bookmark manager"
    },
]);
</script>

<template>
    <main id="home"
        class="relative min-h-full w-full bg-[var(--color-dark)] text-[var(--color-light)] flex items-center justify-center overflow-y-scroll">
        <div class="container mx-auto space-y-16 grid content-center justify-center px-4 sm:px-10 pt-24 md:pt-0">
            <header class="flex flex-col items-start space-y-8">
                <h1 class="
                        text-5xl
                        underline underline-offset-4 decoration-[var(--color-three)] decoration-thickness-[1.25rem]
                        ">
                    Landing Page Mockups</h1>
                <p class="text-xl max-w-[70ch] text-balance">A series of landing page mockups from
                    frontendmentor.io challenges. These
                    have been built with Nuxt and are generated in SSG mode.
                    Each landing page is standalone (single-page) and mobile responsive.
                </p>
            </header>
            <section class="shrink mx-auto w-full max-w-[25rem] md:max-w-full">
                <nav class="pb-[2rem]">
                    <ul
                        class="w-full grid gap-8 grid-cols-1 md:grid-cols-[repeat(2,minmax(12.5rem,22rem))] justify-between ">
                        <nuxt-link v-for="page in pages" :to="page.route" class="group">
                            <li class="
                                        grid grid-cols-1 gap-4
                                        z-10 relative space-y-2 p-3 h-full text-[var(--color-dark)]
                                        hover:translate-x-[-5px]
                                        hover:translate-y-[-5px]

                                        group-focus:translate-x-[-5px]
                                        group-focus:translate-y-[-5px]

                                        transition-transform
                                        before:transition-transform

                                        before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[var(--color-three)] 
                                        before:hover:translate-x-[10px] before:hover:translate-y-[10px] 
                                    
                                        before:z-[-1]

                                        after:absolute after:inset-0 after:bg-white after:z-[-1]
                                        ">
                                <div class="bg-slate-200 min-h-[12.5rem] max-h-[15.5rem] flex">
                                    <img class="object-cover w-full object-top" :src="page.image_url" height="367"
                                        width="267" />
                                </div>
                                <h2 class="text-xl">{{ page.title }}</h2>
                                <p class="text-sm">{{ page.description }}</p>
                            </li>
                        </nuxt-link>
                    </ul>
                </nav>
            </section>
        </div>
    </main>
</template>

<style lang="css">
main#home {

    --color-dark: #051D2C;
    --color-light: #fdfdfc;
    --color-two: #396580;
    --color-three: #68ABA1;

    background-image: url('~/assets/images/svg/waves.svg');
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
