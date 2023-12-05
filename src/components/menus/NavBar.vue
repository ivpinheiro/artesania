<template>
    <nav class="navbar contrast navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="@/assets/img/navbar/artesania-logo-old.svg" alt="Logo da Artesania" />
                <span class="collapse navbar-collapse" id="brand-name">ARTESANIA</span>
            </a>
            <form class="form-search d-flex justify-content-center" role="search">
                <div class="form-mobile form-control me-2">
                    <div class="input-group">
                        <span class="input-group-text" id="addon-wrapping"
                            style="background-color: white; border:none"><font-awesome-icon icon="magnifying-glass"
                                class="magnifying-g" /></span>
                        <input type="search" class="form-control" placeholder="Procurar" aria-label="Digite seu e-mail"
                            aria-describedby="addon-wrapping" style="border:none">
                    </div>
                </div>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="sectionsArea">
                    <li class="nav-item">
                        <RouterLink to="/artists/gallery/profiles/independent"
                            class="text-decoration-none router-link button-container-link">
                            <a class="nav-link active text-center m-1" aria-current="page">Artistas independentes</a>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-center m-1" aria-current="page" href="#">Pinturas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-center m-1" aria-current="page" href="#">Fotografia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-center m-1" aria-current="page" href="#">Novidades</a>
                    </li>
                </ul>
                <form class="form-search d-flex justify-content-center" role="search">
                    <div class="form-desktop form-control me-2">
                        <div class="input-group">
                            <span class="input-group-text" id="addon-wrapping"
                                style="background-color: white; border:none"><font-awesome-icon icon="magnifying-glass"
                                    class="magnifying-g" /></span>
                            <input type="search" class="form-control" placeholder="Procurar produtos"
                                aria-label="Digite seu e-mail" aria-describedby="addon-wrapping" style="border:none">
                        </div>
                    </div>
                </form>
                <div class="d-flex align-items-center justify-content-center">
                    <div v-if="estaLogado">
                        <p id="nameUser" @click="toggleMenu">Olá, Kamila!</p>
                        <div v-if="showMenu" class="menu-options">
                            <a href="/" @click="logout">Sair</a>
                        </div>
                    </div>
                    <router-link v-else to="/login" class="me-3" aria-label="usuario">
                        <font-awesome-icon class="fa-inverse" icon="circle-user" alt="minha conta" />
                    </router-link>
                    <router-link to="/" aria-label="usuario">
                        <font-awesome-icon class="fa-inverse" icon="cart-shopping" alt="carrinho" />
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    // components: { SearchInput },
    // setup() {
    //     return {
    //         searchVal
    //     }
    // }
    computed: {
        estaLogado() {
            // Verifica o status de login a partir do localStorage
            return localStorage.getItem('statusLogin') === 'Logado';
        }
    },
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        logout() {
            localStorage.setItem('statusLogin', '');
        },
    },

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

#nameUser {
    min-width: 100px;
    margin-bottom: 0px;
    color: #9D3207;
    font-weight: 500;
    cursor: pointer;
}

#brand-name {
    font-family: Inter;
    font-weight: 900;
    font-size: 25px;
    color: #9D3207;
    padding-left: 1em;
}

.menu-options {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.menu-options a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.menu-options a:hover {
    background-color: #f1f1f1;
}

#sectionsArea {
    align-items: center;
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

.form-search {
    max-width: 60%;
}

@media (max-width: 990px) {
    .form-desktop {
        display: none;
    }
}

@media (min-width: 991px) {
    .form-mobile {
        display: none;
    }
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
    padding: 5px;
    font-size: 1.35em;
}

.form-control:focus {
    outline: none;
    box-shadow: none;
}

.form-control {
    border-radius: 30px;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white !important;
}

.magnifying-g {
    color: black !important;
}
</style>