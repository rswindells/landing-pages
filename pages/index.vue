<script lang="ts" setup>
import EasyBankImage from '~/assets/images/easybank/easybank_page.webp'

interface Page {
    id: number
    title: string
    route: string
    description?: string
    url?: string
}

const pages = ref<Page[]>([
    {
        id: 1,
        title: "Easybank",
        route: "/easybank",
        description: "A landing page for a banking application, built with Tailwindcss",
        url: EasyBankImage
    },
    {
        id: 2,
        title: "Bookmark",
        route: "/bookmark",
        description: "A landing page for a bookmark manager, built with scss."
    },
])
</script>

<template>
    <main id="home"
        class="relative h-full w-full bg-[var(--color-dark)] text-[var(--color-light)] flex items-center justify-center">
        <div class="container mx-auto grid grid-cols-[repeat(5,1fr)] gap-10">
            <header class="flex flex-col items-start space-y-8 col-[2/5]">
                <h1
                    class="text-5xl relative before:absolute before:w-full before:h-2 before:bg-[var(--color-three)] before:left-0 before:top-[80%] before:z-[-1] z-0">
                    Landing Page Mockups</h1>
                <p class="text-xl max-w-[70ch] text-balance">A series of landing page mockups from
                    frontendmentor.io challenges. These
                    have been built with Nuxt and are generated in SSG mode.
                    Each landing page is standalone (single-page) and mobile responsive.
                </p>
            </header>
            <section class="col-[2/5] ">
                <nav>
                    <ul class="w-full grid gap-x-8 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] ">
                        <nuxt-link v-for="page in pages" :to="page.route" class="group">
                            <li class="
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
                                <div class="bg-slate-200 min-h-[200px] flex">
                                    <img class="object-cover" :src="page.url" />
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

    /* --color-dark: #3A4856; */
    --color-dark: #051D2C;
    --color-light: #fdfdfc;
    --color-two: #396580;
    --color-three: #68ABA1;

    background-image: url('~/assets/images/svg/waves.svg');
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
