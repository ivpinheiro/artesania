<template>
    <ul class="nav contrast justify-content-center flex-on-cell" :key="this.$route.path">
        <span class="desktop-only" style="display: flex;" v-if="shouldRender">
            <li class="nav-item desktop-only" v-for="(item, index) in pageAnchor[0].listPathAncor" :key="index">
                <a class="nav-link" :href="`#${Object.keys(item)}`">Ir para: {{ item[Object.keys(item)] }} [{{ index + 1
                }}]</a>
            </li>
        </span>
        <li class="nav-item">
            <div class="nav-link-joint"><span class="nav-link" id="increase-font-button">A+</span> | <span class="nav-link"
                    id="decrease-font-button">A-</span></div>
        </li>
        <li class="nav-item">
            <font-awesome-icon class="fa-color" icon="fa-solid fa-circle-half-stroke" />
            <span class="high-contrast-b" id="toggle-high-contrast">Alto Contraste</span>
        </li>
    </ul>
</template>
  
<script>
import { GlobalUtils } from '@/utilities/GlobalUtils.ts'
import { ProductService } from '@/services/ProductService.ts'

export default {
    name: 'AcessibilityMenu',
    data() {
        return {
            anchors: [],
            pageName: '',
            pageAnchor: [],
            loading: false
        }
    },
    props: {
        hiddenFullElements: {
            type: Array,
            validator: (value) => {
                return value.every((item) => typeof item === 'string');
            }
        },
    },
    computed: {
        isHidden() {
            return GlobalUtils.HiddenElementsByPath.hiddenElements(this.$route, this.hiddenFullElements)
        },
        shouldRender() {
            return this.isHidden && this.loading && this.pageAnchor[0]?.listPathAncor;
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to.name);
        next();
    },
    created: async function () {
        try {
            this.$watch(
                () => this.$route,
                async (to, from) => {
                    this.pageName = to.name
                    let responseProducts = await ProductService.getAnchors()
                    this.anchors = responseProducts.data
                    this.pageAnchor = this.anchors.filter(item => item.routerPageName.includes(this.pageName))
                    if (this.pageAnchor.length > 0) {
                        this.loading = true
                    }
                }
            )
        } catch (error) {
            this.errorMessage = error
            this.loading = false
        }
    },
};
</script>
<style lang="scss" scoped>
.nav {
    background-color: $acessibility-menu-color;
    min-height: fit-content;
    max-height: min-content;
    justify-content: center;
    align-items: center;
}

.nav-link {
    color: $nav-link-color;
    margin: 0;
    padding: 0 10px;
    color: white;
}

.nav-link-joint {
    color: $nav-link-color;
    margin: 0;
    padding: 0 10px;
    color: white;
    display: flex;
}

.nav-link:hover {
    color: #fff;
    font-weight: 800;
}

.nav-link:visited {
    color: #fff;
    font-weight: 800;
}

.high-contrast-b:hover {
    font-weight: 800;
}

.nav-item {
    cursor: pointer;
}

.fa-color {
    color: white;
    text-decoration: none;
}

.high-contrast-b {
    color: white;
    text-transform: capitalize;
    padding: 0 5px;
    font-size: 18px;
}

.high-contrast {
    background: black;
}

@media (max-width: 1060px) {
    .flex-on-cell {
        display: flex;
        justify-content: space-between !important;
        padding: 0 10px;
    }
}
</style>