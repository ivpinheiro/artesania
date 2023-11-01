<template>
    <div class="card border-0">
        <div class="wallpaper-img">
            <img :src="require(`@/assets/img/products/${imgUrl}`)" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h3 class="card-text">{{ productName }}</h3>
            <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true" :rating="Number(rating)"
                :round-start-rating="false"></star-rating>
            <p class="card-value" v-if="productSale === ''">R${{ productPrice }}</p>
            <p class="card-value" v-if="productSale !== ''">R${{ productSale }} <span class="sale-value"> R${{ productPrice
            }}</span><span class="badge rounded-pill text-bg-danger">-{{ discountCalc }}%</span></p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'ProductCard',
    components: { StarRating },
    data: function () {
        return {
            urlImg: ""
        }
    },
    props: {
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: String,
            required: true
        },
        productSale: {
            type: String,
            required: false
        },
        rating: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        }
    },
    created: function () {
        this.urlImg = this.imgUrl
    },
    computed: {
        discountCalc() {
            let value = 1 - (parseFloat(this.productSale) / parseFloat(this.productPrice))
            value = Math.abs(value * 100)
            return value.toFixed(0);
        }
    }
}
</script>

<style lang="scss">
.card {
    align-content: center;
    justify-content: center;
    width: 100%;
    
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

.sale-value {
    color: #00000060;
    text-decoration: line-through;
    font-size: large;
    font-weight: 1000;
}

.badge{
    padding: 8px; 
    margin-left: 10px;    
}

.wallpaper-img {
    background-color: #F0EEED;
    padding: 10px;
    border-radius: 20px;
}
</style>