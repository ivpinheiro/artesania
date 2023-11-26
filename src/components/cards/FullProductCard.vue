<template>
    <div class="container d-flex">
        <div v-if="loading">
            <div class="container contrast">
                <div class="row">
                    <div class="col">
                        <SpinnerLoader />
                    </div>
                </div>
            </div>
        </div>
        <div class="firstSection contrast">
            <div class="wallpaper-img">
                <img :src="getImageUrl(product.url)" class="card-img card-img-top" alt="...">
            </div>
        </div>

        <div class="secondSection contrast">
            <h5 class="card-title word-wrap-break-word" id="card-title">{{ product.name }}</h5>
            <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true"
                :rating="Number(product.rating)" :round-start-rating="false"></star-rating>
            <p class="card-text card-value" v-if="product.sale === ''">R${{ product.price }}</p>
            <p class="card-text card-value" v-if="product.sale !== ''">R${{ product.sale }} <span class="sale-value">
                    R${{
                        product.price
                    }}</span><span class="badge rounded-pill text-bg-danger">-{{ calcProductDiscount }}%</span></p>
        </div>
    </div>
</template>

<script>
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import StarRating from 'vue-star-rating'
import { ProductUtils } from '@/utilities/ProductUtils.ts'
import { ProductService } from '@/services/ProductService.ts'

export default {
    name: 'FullProductCard',
    components: { StarRating, ProductUtils, SpinnerLoader },
    data: function () {
        return {
            product: {},
            loading: true
        }
    },
    props: {
        productId: {
            type: String,
            required: true
        }
    },
    computed: {
        calcProductDiscount() {
            return ProductUtils.ProductDiscount.discountCalculator(parseFloat(this.product.sale), parseFloat(this.product.price))
        }
    },
    setup() {
        const getImageUrl = (name) => {
            return new URL(`../../assets/img/products/${name}`, import.meta.url).href
        }
        return { getImageUrl }
    },
    created: async function () {
        try {
            this.loading = true
            let response = await ProductService.getProduct(this.productId)
            this.product = response.data
            this.loading = false
        } catch (error) {
            this.errorMessage = error;
        }
    }
}
</script>

<style lang="scss" scoped>
.firstSection {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffff;
    max-height: 900px;
    height: auto;
    width: 60%;
    padding: 15px 15px 15px 15px;
    overflow: hidden;
    margin: 2% 0% 2% 2%;
    border-radius: 25px;
    border: 2px solid #e6e6e6;

    @media (max-width: 1060px) {
        width: 50%;
        margin: 20px 0px;
    }
}

.secondSection {
    background-color: #fff;
    height: auto;
    width: 40%;
    border-radius: 3%;
    overflow: hidden;
    margin: 2% 0% 2% 2%;
    border: 2px solid #e6e6e6;

    @media (max-width: 1060px) {
        height: auto;
        background-position: top;
        width: 50%;
    }
}

.card {
    --bs-card-border-width: none;
}

#card-title {
    font-family: Inter;
    font-size: 30px;
    font-weight: 900;
    color: $product-card-title;
    padding: 10px;
}

.card-value {
    font-weight: 1000;
    font-size: large;
    color: $product-card-price;
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

.buttonPrimary {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D3207;
    margin-bottom: 10%;
    border-radius: 50px;
    width: 75%;
    height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    bottom: 0;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}
</style>