<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Element</p>
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

    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                        <input v-model="element.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input v-model="element.id" type="text" class="form-control" placeholder="ID">
                    </div>
                    <div class="mb-2">
                        <input v-model="element.country" type="text" class="form-control" placeholder="Country">
                    </div>
                    <div class="mb-2">
                        <input v-model="element.groupId" type="text" class="form-control" placeholder="GroupId">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/person.png" class="contact-img" alt="person image">
            </div>
        </div>
    </div>
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import SpinnerLoader from '../components/SpinnerLoader.vue'
export default {
    name: 'EditElement',
    components: { SpinnerLoader },
    data: function () {
        return {
            elementId: this.$route.params.elementId,
            loading: false,
            element: {
                name: '',
                id: '',
                country: '',
                groupId: ''
            },
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ElementService.getElement(this.elementId);
            this.element = response.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        updateSubmit: async function () {
            try {
                let response = await ElementService.updateElement(this.element, this.elementId);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push(`/elements/edit/${this.elementId}`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style scoped></style>