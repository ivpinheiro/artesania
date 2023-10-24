<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Element</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit amet laborum expedita libero sunt aspernatur animi eveniet! Nesciunt expedita eius consectetur inventore facilis pariatur consequuntur doloribus odit illo dolorem!
                </p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input v-model="element.name" type="text" class="form-control" placeholder="Name" required>
                    </div>
                    <div class="mb-2">
                        <input v-model="element.id" type="text" class="form-control" placeholder="ID" required>
                    </div>
                    <div class="mb-2">
                        <input v-model="element.country" type="text" class="form-control" placeholder="Country" required>
                    </div>
                    <div class="mb-2">
                        <input v-model="element.groupId" type="text" class="form-control" placeholder="Group ID" required>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Create">
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
/** 
 * GroupID list is not configurable
 */
import { ElementService } from '../services/ElementService.js'
    export default {
        name: 'AddElement',
        data: function (){
            return {
                element : {
                    name: '',
                    id: '',
                    country: '',
                    groupId: ''
                },
                groups: []
            }
        },
        // created: async function () {
        //     try {
        //         let response = await ElementService.getAllGroups();
        //         this.groups = response.data;
        //     } catch (error) {
        //         console.error(error)
        //     }
        // },
        methods: {
            submitCreate: async function () {
                try {
                    let response = await ElementService.createElement(this.element);
                    if(response){
                        return this.$router.push('/');
                    } else {
                        return this.$router.push('/elements/add');
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>