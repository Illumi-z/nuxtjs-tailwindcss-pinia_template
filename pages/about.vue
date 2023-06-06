<template>
    <div>
        <h1>About Page</h1>
        <div v-for="list in SampleStore.lists" :key="list.id">
            <p>{{ list.title }}</p>
            <p>{{ list.id }}</p>
        </div>
    </div>
</template>

<script setup>

    import { useSampleStore } from '~/store/SampleStore';

    const SampleStore = useSampleStore()

</script>

<style scoped>

</style>