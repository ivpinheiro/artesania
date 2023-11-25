<template>
    <ol class="breadcrumb contrast">
        <li class="breadcrumb-item" v-for="(value, index) in listValues" :key="index"
            :class="{ 'active': index === (listValues.length - 1), 'breadcrumb-item-last': index === (listValues.length - 1) }"
            :aria-current="index === (listValues.length - 1) ? 'page' : null">
            <template v-if="index !== (listValues.length - 1)">
                <a class="text-decoration-none page-inactive" :href="value.path">{{ value.meta.breadcrumb }}</a>
            </template>
            <template v-else>
                <p class="d-flex page-active">{{ value.meta.breadcrumb }}</p>
            </template>
        </li>
    </ol>
</template>
  
<script>
import { useBreadcrumbStore } from '@/stores/breadcrumbStore'

export default {
    name: 'BreadCrumbComponent',
    data() {
        return {
            newValue: '',
        };
    },
    computed: {
        listValues() {
            return useBreadcrumbStore().previousRouteMetaBreadcrumbs;
        }
    },
    created() {
        const routeHistoryStore = useBreadcrumbStore()
    },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
    padding: 10px;
}

.page-active {
    font-weight: bold;
    color: black;
}

.page-inactive {
    font-weight: bold;
    color: rgb(#000000, 0.6);
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>