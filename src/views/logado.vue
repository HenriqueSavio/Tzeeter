<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tweet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body texto">
                    <FormulariodeTzeetVue />
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- <router-link :to="{name: 'home'}"><span>asd</span></router-link> -->
            <itemMenuVue />
            <div class="col-6">
                <router-view></router-view>
            </div>
            <sugestaoSeguidorVue />
        </div>
    </div>
</template>

<script setup>

import ItemMenuVue from '../components/itemMenu.vue';
import SugestaoSeguidorVue from '../components/sugestaoSeguidor.vue';
import FormulariodeTzeetVue from '../components/formulariodeTzeet.vue';

</script>

<style>
</style>