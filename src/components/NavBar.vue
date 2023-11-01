<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="../assets/img/navbar/artesania-logo-old.svg" alt="Artesania" />
                <span id="brand-name">ARTESANIA</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/elements">Artistas independentes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Pinturas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Fotografia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Novidades</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">                    
                    <div class="form-control me-2">
                        <div class="input-group">
                            <span class="input-group-text" id="addon-wrapping"
                                style="background-color: white; border:none"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="search" class="form-control" placeholder="Procurar produtos" aria-label="Digite seu e-mail"
                                aria-describedby="addon-wrapping" style="border:none">
                        </div>
                    </div>
                    <!-- <SearchInput v-model="searchVal" /> -->
                </form>
                <div class="my-2 my-lg-0">
                    <router-link to="/">
                        <i class="fa-solid fa-cart-shopping fa-inverse"></i>
                    </router-link>
                    <router-link to="/">
                        <i class="fa-regular fa-circle-user fa-inverse"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
// import { ref } from 'vue'
// import SearchInput from 'vue-search-input'
// import 'vue-search-input/dist/styles.css'

// const searchVal = ref('')

export default {
    name: 'NavBar',
    // components: { SearchInput },
    // setup() {
    //     return {
    //         searchVal
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #ffff;
    border: none;
    padding: 0;
    z-index: 10;
    font-weight: bold;
    padding: 10px 0;
}

#brand-name {
    font-family: Inter;
    font-weight: 900;
    font-size: 25px;
    color: #9D3207;
    padding-left: 1em;
}

.navbar-brand {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: unset;
}

.navbar-brand img {
    max-height: 50px;
    margin-right: 10px;
    margin: 0;
}

.navbar-toggler {
    margin-right: 15px;
}

.navbar-nav {
    margin-left: auto;
}

.form-control {
    width: auto;
}

.my-2.my-lg-0 {
    display: flex;
    align-items: center;
}

.my-2.my-lg-0 i {
    font-size: 1.5rem;
    margin-left: 10px;
}

.fa-inverse {
    color: $nav-btn-color;
}

.form-control:focus {
    outline: none;
    box-shadow: none;
}
.form-control{
    border-radius: 30px;
}
</style>