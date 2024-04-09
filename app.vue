<script setup>
const mainTitle = "Landing Page Mockups";
const mainDescription = "A series of landing page mockups from frontendmentor.io challenges.";
useSeoMeta({
    title: mainTitle,
    description: mainDescription,
    ogTitle: mainTitle,
    ogDescription: mainDescription,
});

</script>
<template>
    <div class="w-full h-full">
        <NuxtPage />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(0.6rem);
    transform: translateY(-1%);
}
</style>