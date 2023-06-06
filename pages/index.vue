<template>
    <div>
        <h1>Home Page</h1>
        <p>{{ SampleStore.sampleName }}</p>
    </div>
</template>

<script setup>

    import { useSampleStore } from '~/store/SampleStore';

    const SampleStore = useSampleStore()

</script>

<style scoped>

</style>