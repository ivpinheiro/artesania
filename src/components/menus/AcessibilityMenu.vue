<template>
    <ul class="nav contrast justify-content-center flex-on-cell">
        <span style="display: flex;" v-if="isHidden">
            <li class="nav-item desktop-only">
                <a class="nav-link active" aria-current="page" href="#acabou-chegar">Ir para acabou de chegar [1]</a>
            </li>
            <li class="nav-item desktop-only">
                <a class="nav-link" href="#mais-vendidos">Ir para mais vendidos [2]</a>
            </li>
            <li class="nav-item desktop-only">
                <a class="nav-link" href="#nossos_artistas">Ir para nossos artistas [3]</a>
            </li>
            <li class="nav-item desktop-only">
                <a class="nav-link" href="#footer">Ir para rodapé [4]</a>
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

export default {
    name: 'AcessibilityMenu',
    props: {
        hiddenFullElements: {
            type: [],
            required: true
        }
    },
    computed: {
        isHidden() {
            return GlobalUtils.HiddenElementsByPath.hiddenElements(this.$route, this.hiddenFullElements)
        }
    }
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