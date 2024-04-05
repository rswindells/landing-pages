<template>
    <header ref="headerRef" class="bg-white drop-shadow-lg">
        <div class="container container-px mx-auto flex items-center justify-between">
            <div class="my-6">
                <EasybankSvgLogo class="text-brand-black" />
            </div>
            <nav 
                class="
                    self-stretch text-brand-gray text-sm hidden md:block
                    "
                >
                <ul class="h-full flex-col gap-2 items-center py-4 md:flex-row md:gap-y-0 flex gap-x-[1.875rem]">
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">About</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Contact</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Blog</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Careers</a>
                    </li>
                </ul>
            </nav>
            <!-- Mobile Nav -->
            <transition 
                enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="-translate-y-4 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0 -translate-y-4"
            >
            <nav 
                v-if="showMenu"
                tabindex="0"
                class="
                    self-stretch text-brand-gray text-sm 
                    absolute bg-white left-0 top-full w-full z-10
                    md:hidden
                    "

                ref="navRef"
                >
                <ul class="h-full flex flex-col gap-y-4 items-center py-8">
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Home</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">About</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Contact</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Blog</a>
                    </li>
                    <li
                        class="flex items-center relative before:transition-opacity before:ease-in-out before:duration-200 before:absolute before:w-full before:h-1 before:bg-brand-gradient before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:cursor-pointer">
                        <a href="#">Careers</a>
                    </li>
                </ul>
            </nav>
            </transition>
            <button class="md:hidden flex flex-col gap-1" :data-open="showMenu ? 'opened' : 'closed'"
                @click.stop="onHamburgerClick">
                <span
                    class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-top-left"
                    :class="{ 'rotate-45 translate-x-[4px] translate-y-[-3px]': showMenu }"></span>
                <span class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300"
                    :class="{ 'opacity-0': showMenu }"></span>
                <span
                    class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-bottom-left"
                    :class="{ 'rotate-[-45deg] translate-x-[4px] translate-y-[3px]': showMenu }"></span>
            </button>

            <easybank-button-request-invite @click="$emit('show-banner')" class="hidden md:block my-4" />
        </div>
    </header>
</template>

<script setup>
const headerRef = ref(null);
const navRef = ref(null);
const showMenu = ref(false);

function showNavbar() {
    showMenu.value = true;
    nextTick(() => {
        navRef.value.focus();
    });
}

function hideNavbar() {
    showMenu.value = false;
}

function onHamburgerClick() {
    console.log(showMenu.value);
    if (showMenu.value) {

        hideNavbar();
    } else {
        showNavbar();
    }    
}

onClickOutside(headerRef, () => {
    showMenu.value = false;
});
</script>