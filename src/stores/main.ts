import { defineStore } from 'pinia';

export const useBreadcrumbStore = defineStore({
    id: 'list',
    state: () => ({
        previousRouteMetaBreadcrumbs: [] as string[]
    }),
    actions: {
        addPreviousRouteMetaBreadcrumb(metaBreadcrumb: string) {
            this.previousRouteMetaBreadcrumbs.push(metaBreadcrumb)
        },
        clearPreviousRouteMetaBreadcrumbs() {
            this.previousRouteMetaBreadcrumbs = []
        }
    }
});
