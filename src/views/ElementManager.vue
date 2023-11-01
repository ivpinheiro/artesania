<template>
    <div class="container mt-1">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Element Manager
                    <router-link to="/elements/add" class="btn btn-success btn-sm">
                        <i class="fa fa-plus-circle">
                            New
                        </i>
                    </router-link>
                </p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque saepe libero, porro alias dolore
                    maxime, ea sit voluptas vitae consequuntur suscipit corrupti aliquam natus nisi ad. Aperiam, quae ab?
                </p>
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Insira o ID">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn btn-outline-dark" placeholder="Insira o ID">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!--SpinnerLoader-->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <SpinnerLoader />
                </div>
            </div>
        </div>
    </div>

    <!--ErroMessage-->
    <div v-if="!loading && errorMessage">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="elements.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="element of elements" :key="element">
                <div class="container-fluid container-card card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img src="../assets/img/person.png" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Name:
                                        <span class="fw-bold">{{ element.name }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        ID:
                                        <span class="fw-bold">{{ element.id }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Country:
                                        <span class="fw-bold">{{ element.country }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link :to="`/elements/view/${element.id}`" class="btn btn-warning my-1">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/elements/edit/${element.id}`" class="btn btn-primary my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger my-1" @click="clickDeleteElement(element.id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import SpinnerLoader from '../components/SpinnerLoader.vue'

export default {
    name: 'ElementManager',
    components: { SpinnerLoader },
    data: function () {
        return {
            loading: false,
            elements: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ElementService.getAllElements();
            this.elements = response.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        clickDeleteElement: async function (elementId) {
            try {
                this.loading = true;
                let response = await ElementService.deleteElement(elementId);
                if (response) {
                    let response = await ElementService.getAllElements();
                    this.elements = response.data;
                    this.loading = false;
                }
                this.loading = false;

            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped></style>