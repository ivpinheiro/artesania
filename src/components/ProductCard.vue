<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/img/products/product-1.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-text">Fragmentos da Realidade</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
}
</script>

<style lang="scss">
.card-text {
    font-weight: 1000;
    font-size: large;
    color: $product-card-title;
}
</style>