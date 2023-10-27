<template>
    <nav class="fixed-top navbar navbar-expand-lg navbar navbar-dark">
        <div class="container">
            <div class="logo-conteiner">
                <a href="/">
                    <img src="../assets/img/artesania-logo.svg" class="navbar-brand" alt="F1 Car" />
                </a>
                <router-link to="/" class="nav-section" id="brand-name">
                    ARTESANIA
                </router-link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active">
                        <router-link to="/" class="nav-section" style="">
                            Artistas independentes
                        </router-link>
                        <router-link to="/" class="nav-section" style="">
                            Pinturas
                        </router-link>
                        <router-link to="/" class="nav-section" style="">
                            Fotografia
                        </router-link>
                        <router-link to="/" class="nav-section" style="">
                            Novidades
                        </router-link>
                    </a>
                </div>
                <div class="navbar-collapse">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">                        
                    </form>
                </div>
            </div>
            <div class="my-2 my-lg-0">
                <router-link to="/" class="navbar-brand">
                    <i class="fa-solid fa-cart-shopping fa-inverse"></i>
                </router-link>
                <router-link to="/" class="navbar-brand">
                    <i class="fa-regular fa-circle-user fa-inverse"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.logo-conteiner a img {
    max-width: 45%;
    height: auto;
}

.fa-inverse {
    color: #000000;
}

#brand-name {
    font-family: Inter;
    font-weight: 900;
    color: #9D3207;
}
</style>