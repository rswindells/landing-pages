<script setup>
const props = defineProps({
    level: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const headingClasses = computed(() => {
    return {
        'text-[40px] md:text-[56px] leading-[1] tracking-tighter font-light': props.level === '1',
        'text-3xl font-light': props.level === '2',
        'text-base font-normal': props.level === '3',
    };
});
</script>

<template>
    <component :is="`h${level}`" class="text-brand-primary-blue" :class="headingClasses">
        {{ text }}
    </component>
</template>