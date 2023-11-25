import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        counter: 0
    }),
    actions: {
        increment() {
            this.counter++;
        }
    }
});
