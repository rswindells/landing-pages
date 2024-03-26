<script setup>
// props: image url, author, title, description
// with types
const props = defineProps({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <article class="group hover:shadow-sm relative bg-white rounded overflow-clip max-w--[400px]">
        <div class="aspect-[5/3] lg:aspect-[4/3]">
            <slot name="article-image"></slot>
        </div>
        <div class="space-y-2 py-8 px-8">
            <p class="text-brand-gray text-sm">By {{ author }}</p>
            <a href="#" class="block font-light text-brand-primary-blue group-hover:text-brand-primary-green">{{ title
                }}</a>
            <p class="text-brand-neutral-blue text-sm">{{ description }}</p>
        </div>
    </article>
</template>
