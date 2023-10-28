<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: 'AcessibilityMenu'
};
</script>
<style lang="scss" scoped>
.nav{
    background-color: $acessibility-menu-color;
}
.nav-link{
    color: $nav-link-color;
}
</style>