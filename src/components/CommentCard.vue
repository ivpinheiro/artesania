<template>
    <div class="card border-0">
        <div class="card text-bg mb-3" style="max-width: 18rem;">
            <div class="card-rating">
                <star-rating :inline="true" :star-size="25" :read-only="true" :show-rating="false" :rating="Number(rating)"
                    :round-start-rating="false">
                </star-rating>
            </div>
            <div class="card-body">
                <h5 class="card-title-title">{{ cartTitle }}</h5>
                <p class="card-text">{{ comment }}</p>
            </div>
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
        cartTitle: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
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
    width: 20rem;
    background-color: white;
}

.card-rating {
    display: flex;
    width: 100%;
    padding: 15px;
}


.card-title-title {
    font-weight: 1000;
    font-size: large;
    color: $comment-card-title;
}

.card-text {
    font-weight: 300;
    font-size: large;
    color: black;
}

.sale-value {
    color: #00000060;
    text-decoration: line-through;
    font-size: large;
    font-weight: 1000;
}
</style>