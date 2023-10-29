<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/img/products/product-1.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-text">Fragmentos da Realidade</h3>
            <star-rating :inline="true" :star-size="20" :read-only="true" :show-rating="true" :rating="4.5" :round-start-rating="false"></star-rating>
            <p class="card-value">R$130</p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'ProductCard',
    components: { StarRating }
}
</script>

<style lang="scss">
.card-text {
    font-weight: 1000;
    font-size: large;
    color: $product-card-title;
}
.card-value{
    font-weight: 1000;
    font-size: large;
    color: $product-card-price;
}
</style>