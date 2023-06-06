import { defineStore } from 'pinia'

export const useSampleStore = defineStore('SampleStore', {
    state: () => ({
        sampleName: 'Sample Name',
        lists: [
            { title: 'title 1', id: 1 },
            { title: 'title 2', id: 2 },
            { title: 'title 3', id: 3 },
        ]
    })
})