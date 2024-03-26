<script setup>
const props = defineProps({
    title: String,
    description: String,
    iconUrl: String
});

</script>
<template>
    <div class="flex flex-col items-center text-center md:items-start md:text-start text-balance">
        <slot name="icon"></slot>
        <h2 class="mt-6 text-brand-black text-xl">{{ title }}</h2>
        <p class="mt-4 text-brand-gray">{{ description }}</p>
    </div>
</template>