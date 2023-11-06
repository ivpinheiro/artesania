<template>
    <div class="card border-0 contrast">
        <div class="wallpaper-img">
            <img :src="getImageUrl(urlImg)" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title" id="card-title">{{ productName }}</h5>
            <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true" :rating="Number(rating)"
                :round-start-rating="false"></star-rating>
            <p class="card-value" v-if="productSale === ''">R${{ productPrice }}</p>
            <p class="card-value" v-if="productSale !== ''">R${{ productSale }} <span class="sale-value"> R${{ productPrice
            }}</span><span class="badge rounded-pill text-bg-danger">-{{ calcProductDiscount }}%</span></p>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { ProductUtils } from '../utilities/ProductUtils.ts'

export default {
    name: 'ProductCard',
    components: { StarRating, ProductUtils },
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
        calcProductDiscount(){
            return ProductUtils.ProductDiscount.discountCalculator(parseFloat(this.productSale), parseFloat(this.productPrice))
        }
    },
    setup() {
        const getImageUrl = (name) => {
            return new URL(`../assets/img/products/${name}`, import.meta.url).href
        }
        return { getImageUrl }
    }
}
</script>

<style lang="scss" scoped>
#card-title {
    font-family: Inter;
    font-size: x-large;
    font-weight: 900;
    color: $product-card-title;
}

.card {
    align-content: center;
    justify-content: center;
    max-width: 300px;
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

.badge {
    padding: 8px;
    margin-left: 10px;
}

.wallpaper-img {
    background-color: #F0EEED;
    padding: 10px;
    border-radius: 20px;
}

high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}
</style>