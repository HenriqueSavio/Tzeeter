<template>
    <div class="position-relative">
        <img src="../assets/henriqueboneco.jpg" class="rounded-circle" height="100">
        <button type="button" class="btn btn-primary position-absolute bottom-0 end-0 rounded-pill">
            Edit Profile
        </button>
    </div>
    <h4><a>Henrique Sávio</a></h4>
    <h6><span class="estatistica">@henrique</span></h6>

    <h5><a>Estudante de Redes de computadores, mas apenas um novato da programação.</a></h5>



    <div class="estatistica">
        <ul class="local">
            <li>
                <i class="bi bi-geo-alt"></i>
                <span>Fortaleza </span>
            </li>
            <li>
                <i class="bi bi-calendar"></i>
                <span> Joined January 2010</span>
            </li>
        </ul>

        <ul class="local">
            <li><a href="96 following" class="sublinhado"><b>96</b> <span class="sublinhado">following</span></a>
            </li>
            <li><a href="79 followers" class="sublinhado"><b>79</b> <span class="sublinhado">
                        followers</span></a>
            </li>
        </ul>
    </div>



    <ul class="publicacao nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-tzeets-tab" data-bs-toggle="pill" data-bs-target="#pills-tzeets"
                type="button" role="tab" aria-controls="pills-tzeets" aria-selected="true">Tzeets</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-replies-tab" data-bs-toggle="pill" data-bs-target="#pills-replies"
                type="button" role="tab" aria-controls="pills-replies" aria-selected="false">Tzeets &
                Replies</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-media-tab" data-bs-toggle="pill" data-bs-target="#pills-media"
                type="button" role="tab" aria-controls="pills-media" aria-selected="false">Media</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-links-tab" data-bs-toggle="pill" data-bs-target="#pills-links"
                type="button" role="tab" aria-controls="pills-links" aria-selected="false">Links</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-tzeets" role="tabpanel" aria-labelledby="pills-tzeets-tab"
            tabindex="0">
            <Tzeets />
        </div>
        <div class="tab-pane fade" id="pills-replies" role="tabpanel" aria-labelledby="pills-replies-tab" tabindex="0">
            em contrução
        </div>
        <div class="tab-pane fade" id="pills-media" role="tabpanel" aria-labelledby="pills-media-tab" tabindex="0">
            em contrução

        </div>
        <div class="tab-pane fade" id="pills-links" role="tabpanel" aria-labelledby="pills-links-tab" tabindex="0">
            em contrução

        </div>
    </div>

</template>

<script setup>
import Tzeets from '../components/tzeets.vue';
</script>

<style>
</style>