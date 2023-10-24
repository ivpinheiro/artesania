<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Element</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit amet laborum expedita libero sunt
                    aspernatur animi eveniet! Nesciunt expedita eius consectetur inventore facilis pariatur consequuntur
                    doloribus odit illo dolorem!
                </p>
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

    <div class="container" v-if="!loading && isDone()">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="../assets/img/person.png" class="contact-img-big" alt="person image">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold">{{element.name}}</span> </li>
                    <li class="list-group-item">ID: <span class="fw-bold">{{element.id}}</span></li>
                    <li class="list-group-item">Country: <span class="fw-bold">{{element.country}}</span></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerLoader from '../components/SpinnerLoader.vue'
import { ElementService } from '../services/ElementService.js'
export default {
    name: 'ViewElement',
    components: { SpinnerLoader },
    data: function () {
        return {
            elementId: this.$route.params.elementId,
            loading: false,
            element: {},
            group: {},
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ElementService.getElement(this.elementId);
            let groupResponse = await ElementService.getAllGroups(response.data);
            this.element = response.data;
            this.group = groupResponse.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
        }
    },
    methods: {
        isDone: function () {
            return Object.keys(this.element).length > 0 && Object.keys(this.group).length > 0;
        }
    }
}
</script>

<style scoped></style>