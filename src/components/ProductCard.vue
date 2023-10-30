<template>
    <div class="card border-0" style="width: 18rem;">
        <div class="wallpaper-img">
            <img src="../assets/img/products/product-1.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h3 class="card-text">{{ productName }}</h3>
            <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true" :rating="Number(rating)"
                :round-start-rating="false"></star-rating>
            <p class="card-value">R${{ productPrice }}</p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'ProductCard',
    components: { StarRating },
    props: {
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.card {
    align-content: center;
    justify-content: center;
}

.card-text {
    font-weight: 1000;
    font-size: large;
    color: $product-card-title;
}

.card-value {
    font-weight: 1000;
    font-size: large;
    color: $product-card-price;
}

.card-img-top {
    background-image: black;
    background-size: cover;
}

.wallpaper-img {
    background-color: #F0EEED;
    padding: 10px;
    border-radius: 20px;
}
</style>