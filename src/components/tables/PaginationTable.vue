<template>
    <div class="mt-3 text-center contrast">
        <!-- Adicione a classe "text-center" para centralizar todo o conteúdo -->
        <nav class="pagination-m" v-if="totalPages > 1">
            <ul class="pagination justify-content-center pagination-lg">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link custom-link" href="#" @click="changePage(1)">Primeira página</a>
                </li>
                <!-- <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage - 1)">Anterior</a>
                </li> -->
                <li class="page-item" v-if="currentPage > 2" :key="currentPage - 2">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage - 2)">{{ currentPage - 2 }}</a>
                </li>
                <li class="page-item" v-if="currentPage > 1" :key="currentPage - 1">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage - 1)">{{ currentPage - 1 }}</a>
                </li>
                <li class="page-item active" v-if="totalPages > 1" :key="currentPage">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage)">{{ currentPage }}</a>
                </li>
                <li class="page-item" v-if="totalPages > currentPage" :key="currentPage + 1">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage + 1)">{{ currentPage + 1 }}</a>
                </li>
                <li class="page-item" v-if="totalPages > currentPage + 1" :key="currentPage + 2">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage + 2)">{{ currentPage + 2 }}</a>
                </li>
                <!-- <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage + 1)">Próxima</a>
                </li> -->
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a class="page-link custom-link" href="#" @click="changePage(totalPages)">Última página</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        changePage: {
            type: Function,
            required: true
        }
    }
};
</script>
  
<style lang="scss" scoped>
.pagination-m {
    margin-top: 10vh;
}

.pagination {
    font-family: inter;
    --bs-pagination-padding-x: 1.75rem;
    --bs-pagination-padding-y: 1rem;
    --bs-pagination-font-size: 1.35rem;
    --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(157, 50, 7, 0.080);
    --bs-pagination-disabled-color: black;
    --bs-pagination-disabled-bg: rgba(157, 50, 7, 0.080);
    --bs-pagination-disabled-border-color: rgba(157, 50, 7, 0.080);
    --bs-pagination-hover-color: #black;
    --bs-pagination-hover-bg: #ffff;
    --bs-pagination-color: var(--bs-link-color);
    --bs-pagination-bg: var(--bs-body-bg);
    --bs-pagination-border-width: var(--bs-border-width);
    --bs-pagination-border-color: var(--bs-border-color);
    --bs-pagination-border-radius: var(--bs-border-radius);
    --bs-pagination-hover-border-color: var(--bs-border-color);
    --bs-pagination-focus-color: #black;
    --bs-pagination-focus-bg: rgba(157, 50, 7, 0.3);
    --bs-pagination-active-color: #fff;
    --bs-pagination-active-bg: rgba(157, 50, 7, 0.3);
    --bs-pagination-active-border-color: rgba(157, 50, 7, 0.3);
}

.custom-link {
    background-color: ffff;
    color: black;
    font-weight: 1000;
    font-size: 20px;
}

.page-link.active,
.active>.page-link {
    background-color: $pagination;
    border-color: $pagination;
    font-weight: 300;
}

.high-contrast-text {
    color: white;
}

.high-contrast {
    color: white;
    background: black;
}
</style>

  