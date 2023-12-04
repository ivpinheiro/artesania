<template>
    <div class="container">
        <div class="firstSection contrast">
            <h1 class="headline">NOSSOS ARTISTAS EM DESTAQUE</h1>
            <div class="line upper">
                <div class="artist-container" v-for="(artist, index) in artists.slice(0, 2)" :key="index">
                    <router-link :to="`/gallery/artist/${artist.id}`" class="text-decoration-none">
                        <div :id="`${this.cssStyles[index]}`" class="full-on-mobile"
                            :style="{ 'backgroundImage': 'url(' + getImageUrl(artist['artist-profile-url']) + ')' }">
                            <p :class="`${this.cssStyles[index]}Name`" class="artist-name-global">{{ artist.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="line lower">
                <div class="artist-container" v-for="(artist, index) in artists.slice(2, 4)" :key="index">
                    <router-link :to="`/gallery/artist/${artist.id}`" class="text-decoration-none">
                        <div :id="`${this.cssStyles[index + 2]}`" class="full-on-mobile"
                            :style="{ 'backgroundImage': 'url(' + getImageUrl(artist['artist-profile-url']) + ')' }">
                            <p :class="`${this.cssStyles[index + 2]}Name`">{{ artist.name }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="btn-our-artists">
                <router-link :to="`/artists/gallery/profiles`" class="btn buttonPrimary contrast">
                    Ver Todos Artistas
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import { ProductUtils } from '@/utilities/ProductUtils.ts'

export default {
    name: 'OurArtists',
    data: function () {
        return {
            loading: false,
            artists: '',
            cssStyles: ["first", "second", "third", "fourth"]
        }
    },
    created: async function () {
        try {
            this.loading = true
            let response = await ProductService.getAllArtists()
            // shuffle da lista de produtos
            // this.artists = ProductUtils.ProductList.shuffleArray(response.data.map(artist => ({ ...artist })))
            this.artists = response.data
            this.loading = false
        } catch (error) {
            this.errorMessage = error
            this.loading = false
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
.container {
    width: auto;
}

.firstSection {
    padding: 60px 70px 150px 70px;
    width: 100%;
    height: 950px;
    align-items: center;
    background-color: #EAB766;
    border-radius: 40px;
    margin: 80px 0px;

    @media (max-width: 1160px) {
        height: fit-content;
        padding: 60px 70px 60px 70px;
    }
}

.artist-container {
    flex: 1;
    padding: 0 25px;
}

.firstSection .headline {
    color: #9D3207;
    font-size: 54px;
    font-family: 'Inter';
    font-weight: 800;
    line-height: 1;
    text-align: center;
    margin-bottom: 45px;

    @media (max-width: 760px) {
        font-size: 45px;
    }
}

.firstName {
    position: relative;
    top: 5%;
    left: 10%;
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
}

.secondName {
    position: relative;
    top: 62%;
    right: 2%;
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
    text-align: center;
}

.thirdName {
    position: relative;
    top: 5%;
    left: 10%;
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
}

.fourthName {
    position: relative;
    top: 60%;
    right: 20%;
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
    text-align: center;
}

.line {
    display: flex;
    width: 100%;
    height: 47%;
    justify-content: space-between;
    position: relative;
    font-family: 'Inter';
    font-weight: 800;

    @media (max-width: 1160px) {
        flex-direction: column;
    }
}

/* .upper{
    display: grid;
    grid-template-columns: 60% 40%;
}

.lower{
    display: grid;
    grid-template-columns: 50% 50%;
} */

.full-on-mobile {
    @media (max-width: 1160px) {
        width: 100% !important;
        height: 140px !important;
        margin: 10px;
    }
}

#first {
    background-size: cover;
    background-position: center;
    height: 93%;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

#second {
    background-size: cover;
    background-position: center;
    height: 93%;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
}

#third {
    background-size: cover;
    background-position: center;
    height: 95%;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

#fourth {
    background-size: cover;
    background-position: center;
    height: 95%;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
}

.btn-our-artists {
    display: flex;
    justify-content: center;
    align-items: center;
}

.buttonPrimary {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D3207;
    margin-bottom: 10%;
    border-radius: 50px;
    width: 50%;
    height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}
</style>