<script setup lang="ts">
const props = defineProps<{
    src: string
    mirror?: ImgService
    caption?: string
    width?: string | number
    fancybox?: boolean
}>()

const src = computed(() => getImgUrl(props.src, props.mirror))
</script>

<template>
    <figure class="image">
        <!-- TODO: 图片点击放大 -->
        <NuxtImg :src :width alt="" />
        <figcaption v-if="caption">
            {{ caption }}
        </figcaption>
    </figure>
</template>

<style scoped lang="scss">
.image {
    margin-block: 1em;
    text-align: center;

    img {
        max-width: 100%;
        border-radius: 0.5em;
    }

    figcaption {
        font-size: 0.8rem;
        color: var(--c-text-3);
    }
}
</style>
