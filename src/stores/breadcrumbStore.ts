import { defineStore } from 'pinia';

export const useBreadcrumbStore = defineStore({
    id: 'list',
    state: () => ({
        previousRouteMetaBreadcrumbs: []
    }),
    actions: {
        addPreviousRouteMetaBreadcrumb(metaBreadcrumb) {
            if (!this.previousRouteMetaBreadcrumbs.includes(metaBreadcrumb)) {
                this.previousRouteMetaBreadcrumbs.push(metaBreadcrumb);
            }
        },
        clearPreviousRouteMetaBreadcrumbs() {
            this.previousRouteMetaBreadcrumbs = [];
        }
    }
});