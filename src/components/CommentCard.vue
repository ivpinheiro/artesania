<template>
    <div class="container contrast card border-0">
        <div class="card contrast text-bg mb-3" style="max-width: 100%">
            <div class="card-rating">
                <star-rating :inline="true" :star-size="22" :read-only="true" :show-rating="false" :rating="Number(rating)"
                    :round-start-rating="false">
                </star-rating>
            </div>
            <div class="card-body">
                <h5 class="card-title-title">{{ cartTitle }}
                    <img src="./../assets/img/artists/circle-check-solid.svg" class="titleChecked">
                </h5>
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

<style lang="scss" scoped>
.card {
    height: 100%;
    //align-content: center;
    align-items: stretch;
    justify-content: center;
    padding: 0.5vw;
    width: 100%;
    background-color: white;
    //display: flex;
}

.card-rating {
    display: flex; 
    padding-left: 15px;  
    width: 100%;
    
}


.card-title-title {
    
    font-weight: 1000;
    font-size: 100%;
    color: $comment-card-title;
}
.titleChecked{
    //color: #01ab01;
    width: 17px;
    margin-right: 5px; /* Adjust the spacing between the icon and text */
    margin-bottom: 3px;
    display: inline-block;
}

.card-text {
    font-weight: 100;
    font-size: 100%;
    color: black;
}

.sale-value {
    color: #00000060;
    text-decoration: line-through;
    font-size: large;
    font-weight: 1000;
}
.high-contrast {
  color: white;
  background: black;
}
.high-contrast-text {
  color: white;
}
</style>