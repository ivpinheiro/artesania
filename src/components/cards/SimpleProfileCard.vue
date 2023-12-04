<template>
    <router-link :to="`/gallery/artist/${artistId}`" class="text-decoration-none">
        <div class="card product-card contrast">
            <div class="wallpaper-img">
                <img :src="getImageUrl(urlImg)" class="card-img card-img-top" fetchpriority="high" :alt="{ artistName }">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title word-wrap-break-word" id="card-title">{{ artistName }}</h5>
                <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true" :rating="Number(rating)"
                    :round-start-rating="false"></star-rating>
                <div class="btn-purchase">
                    <router-link :to="`/gallery/artist/${artistId}`" class="btn buttonPrimary contrast">
                        Galeria do Artista
                    </router-link>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import StarRating from 'vue-star-rating'
import { ProductUtils } from '@/utilities/ProductUtils.ts'

export default {
    name: 'SimpleProductCard',
    components: { StarRating, ProductUtils },
    data: function () {
        return {
            urlImg: ""
        }
    },
    props: {
        artistId: {
            type: Number,
            required: true
        },
        artistName: {
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
    },
    created: function () {
        this.urlImg = this.imgUrl
    },
    computed: {
        calcProductDiscount() {
            return ProductUtils.ProductDiscount.discountCalculator(parseFloat(this.productSale), parseFloat(this.productPrice))
        }
    },
    setup() {
        const getImageUrl = (name) => {
            return new URL(`../../assets/img/artists/${name}.svg`, import.meta.url).href
        }
        return { getImageUrl }
    }
}
</script>

<style lang="scss" scoped>
.card {
    --bs-card-border-width: none;
}


#card-title {
    font-family: Inter;
    font-size: x-large;
    font-weight: 900;
    color: $product-card-title;
    padding: 10px;
}

.product-card {
    align-content: center;
    justify-content: center;
    width: 300px;
    height: 600px;
    position: relative;
}

.card-value {
    font-weight: 1000;
    font-size: large;
    color: $product-card-price;
}

.card-img {
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

.btn-purchase {
    display: flex;
    justify-content: center;
    align-items: center;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}
</style>