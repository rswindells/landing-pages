<template>
    <header class="bg-white drop-shadow-lg">
        <div class="container container-px mx-auto flex items-center justify-between">
            <div class="my-6">
                <EasybankSvgLogo class="text-brand-black" />
            </div>
            <nav class="self-stretch text-brand-gray text-sm hidden md:block">
                <ul class="h-full flex gap-x-[1.875rem]">
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
            <button class="md:hidden flex flex-col gap-1" :data-open="showMenu ? 'opened' : 'closed'"
                @click="onHamburgerClick">
                <span
                    class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-top-left"
                    :class="{ 'rotate-45 translate-x-[4px] translate-y-[-3px]': showMenu }"></span>
                <span class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300"
                    :class="{ 'opacity-0': showMenu }"></span>
                <span
                    class="block h-px w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-bottom-left"
                    :class="{ 'rotate-[-45deg] translate-x-[4px] translate-y-[3px]': showMenu }"></span>
            </button>

            <easybank-button-request-invite class="hidden md:block my-4" />
        </div>
    </header>
</template>

<script setup>
const showMenu = ref(false);
function onHamburgerClick() {
    console.log('clicked');
    showMenu.value = !showMenu.value;
}
</script>