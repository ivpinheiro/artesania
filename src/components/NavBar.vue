<template>
    <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="../assets/img/artesania-logo.svg" alt="Artesania" />
                <span id="brand-name">ARTESANIA</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Artistas independentes</a>
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
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
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
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
#brand-name {
    font-family: Inter;
    font-weight: 900;
    color: #9D3207;
}

.navbar {
    padding: 10px 0;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.navbar-brand img {
    max-height: 40px;
    margin-right: 10px;
}

#brand-name {
    font-size: 1.5rem;
}

.navbar-toggler {
    margin-right: 15px;
}

.navbar-nav {
    margin-left: auto;
    /* Alinhe o menu à direita da barra de navegação */
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
</style>