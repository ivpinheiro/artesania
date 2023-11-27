<template>
    <div class="container d-flex justify-content-center">
        <div v-if="loading">
            <div class="container contrast">
                <div class="row">
                    <div class="col">
                        <SpinnerLoader />
                    </div>
                </div>
            </div>
        </div>
        <div class="firstSection contrast" v-if="!loading">
            <div class="other-imgs">
                <div class="wallpaper-img img-minSize">
                    <img :src="getImageUrl(product.url)" class="card-img card-img-top" alt="...">
                </div>
                <div class="wallpaper-img img-minSize">
                    <img :src="getImageUrl(product.url)" class="card-img card-img-top" alt="...">
                </div>
                <div class="wallpaper-img img-minSize">
                    <img :src="getImageUrl(product.url)" class="card-img card-img-top" alt="...">
                </div>
            </div>
            <div class="img-principal">
                <div class="wallpaper-img">
                    <img :src="getImageUrl(product.url)" class="card-img card-img-top" alt="...">
                </div>
            </div>
        </div>

        <div class="secondSection contrast" v-if="!loading">
            <h5 class="card-title word-wrap-break-word" id="card-title">{{ product.name }}</h5>
            <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="true"
                :rating="Number(product.rating)" :round-start-rating="false"></star-rating>
            <p class="card-text card-value" v-if="product.sale === ''">R${{ product.price }}</p>
            <p class="card-text card-value" v-if="product.sale !== ''">R${{ product.sale }} <span class="sale-value">
                    R${{
                        product.price
                    }}</span><span class="badge rounded-pill text-bg-danger">-{{ calcProductDiscount }}%</span></p>
            <div class="buy-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis lacus libero.
            </div>
            <div class="cart-options">
                <div class="qtdCart">
                    <button  class="buttonCounter" id="decrease-button">-</button>
                    <span><b>{{ counterBuy }}</b></span>
                    <button class="buttonCounter" id="increase-button">+</button>
                </div>
                <div class="addOnCart">
                    <button class="buttonPrimary">Adicionar</button>
                </div>
            </div>   
        </div>
    </div>
    <div class="review-area">
        <div class="title-options-review">
            <div class="leftContent">
                <b>Todas as avaliações</b>
            </div>
            <div class="RightContent">
                <button class="buttonReview"><img src="@/assets/Filter.svg" alt="Filtro de pesquisa"></button>
                <button class="buttonReview">Recentes</button>
                <button class="buttonPrimary write">Comentar</button>
            </div>
        </div>
        <div class="comment-review">
            <div class="card border-0" v-for="client in clientComments" :key="client">
                <CommentCard class="item-product" :cartTitle="client.name" :comment="client.comment" :rating="client.rating">
                </CommentCard>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import StarRating from 'vue-star-rating'
import { ProductUtils } from '@/utilities/ProductUtils.ts'
import { ProductService } from '@/services/ProductService.ts'
import { GlobalUtils } from '@/utilities/GlobalUtils'
import CommentCard from '@/components/cards/CommentCard.vue'

export default {
    name: 'FullProductCard',
    components: { StarRating, ProductUtils, SpinnerLoader, GlobalUtils, CommentCard },
    data: function () {
        return {
            product: {},
            clientComments: [],
            loading: true,
            counterBuy: 0
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
            let responseComments = await ProductService.getAllClientComments()
            this.product = response.data
            this.clientComments = responseComments.data
            this.loading = false

            return  GlobalUtils.PurchaseQuantity.initializeCounter();
        } catch (error) {
            this.errorMessage = error;
        }
    },
    methods: {
        addOne(index) {
            this.$set(this.counter, index, this.counter[index] + 1);
        },
        minusOne(index) {
            this.counterBuy--;
            this.$set(this.counter, index, this.counter[index] - 1);
        },
        addOne(){
            this.counterBuy++;
        },
        minusOne(){
            this.counterBuy--;
        }
    }
}
</script>

<style lang="scss" scoped>
.firstSection {
   /*  width: 60%;
    height: auto;
    max-height: 900px;
    padding: 1rem;
    margin: 2% 0% 2% 2%;

    display: grid;
    grid-template-columns: 1fr 1fr; */

    border-radius: 25px;
    display: flex;
    align-items: center;
    /* background-color: #F0EEED; */
    max-height: 900px;
    height: auto;
    width: 60%;
    /* padding: 1rem; */
    margin: 2rem;
 /*    padding: 15px 15px 15px 15px; */
    overflow: hidden;
/*     margin: 2% 0% 2% 2%; */
    border-radius: 25px;
    /* border: 2px solid #e6e6e6; */

    @media (max-width: 1060px) {
        width: 50%;
        margin: 20px 0px;
    }
}

.other-imgs{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    /* background-color: #fff; */
    border-radius: 25px;
    width: fit-content;
}

.secondSection {
    background-color: #fff;
    padding: 1rem;
    height: auto;
    width: 40%;
    border-radius: 3%;
    overflow: hidden;
    margin: 2rem;
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

.img-principal{
    width: 100%;
    padding: 1rem;
    border-radius: 25px;
    
    background-color: #F0EEED;
}
.wallpaper-img {
    width: 100%;
    border-radius: 20px;
}

.img-minSize{
    width: 70%;
    padding: 0 1rem 1rem 0;
}

.buy-description{
    padding-bottom: 5rem;
}

.cart-options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;

}

.qtdCart{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    background-color: #F0EEED;
    border-radius: 50px;
    width: auto;
    height: auto;

    margin-bottom: 5%;

    span{
        padding: 0.2rem 1rem;
    }
}

.buttonCounter{
    border-style: none;
    border-radius: 50px;
    padding: 0 1em;

    background-color: darkgray;
}

.buttonPrimary {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D3207;
    margin-bottom: 5%;
    border-radius: 50px;
    border-style: none;
    width: 15rem;
    height: auto;
    color: #fff;
    
    font-weight: bold;
    font-size: 20px;
    bottom: 0;
}

.review-area{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title-options-review{
    display: flex;
    flex-direction: row;
    width: 70%;
    padding: 1rem;
    justify-content: space-evenly;
    border-bottom: 1px solid #000;
}

.leftContent{
    font-weight: bold;
    font-size: 20px;
}

.RightContent{
    display: flex;
    flex-direction: row;
}

.buttonReview{
    width: auto;
    margin: 0rem 0.5rem;
    border-style: none;
    border-radius: 25px;

    font-weight: bold;
    font-size: 20px;
}

.write{
    width: 100%;
    margin: 0;
}

.comment-review{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    padding: 50px;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}
</style>