<template>
  <div class="col-3 d-flex justify-content-center">
    <ul class="navegacao">
      <li>
        <img src="../assets/tiziu.png" alt="">
      </li>

      <!-- <li>
        <iconeVue linkIcone="../../../index.html" imgIcone="bi bi-house-door" nomeIcone="Home"/>


        <a href="../../../index.html">
          <i class="bi bi-house-door"></i>
          <span class="d-none d-lg-inline">Home</span>
        </a>
      </li>

      <li>
        <a href="Explore">
          <i class="bi bi-hash"></i>
          <span class="d-none d-lg-inline">Explore</span>
        </a>
      </li>

      <li>
        <a href="Notifications">
          <i class="bi bi-bell"></i>
          <span class="d-none d-lg-inline">Notifications</span>
        </a>
      </li>

      <li>
        <a href="Messages">
          <i class="bi bi-envelope"></i>
          <span class="d-none d-lg-inline">Messages</span>
        </a>
      </li>
      <li>
        <a href="./profile.html">
          <i class="bi bi-person"></i>
          <span class="d-none d-lg-inline">Profile</span>
        </a>
      </li>

      <li>
        <a href="More">
          <i class="bi bi-three-dots"></i>
          <span class="d-none d-lg-inline">More</span>
        </a>
      </li> -->
    
        <li v-for="(valor, index) in todosIcones" :key="index">
            <iconeVue :linkIcone="valor.linkIcone" :imgIcone="valor.imgIcone" :nomeIcone="valor.nomeIcone"/>
        </li>

      <li>
        <button type="button" class="btn btn-primary rounded-pill " data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          <i class="bi bi-chat"></i>
          <span class="d-none d-lg-inline">Tweet</span>
        </button>
      </li>

    </ul>

  </div>



</template>

<script setup>
    import iconeVue from "./icone.vue";
    const todosIcones = [
        {
            linkIcone:"/home",
            imgIcone:"bi bi-house-door",
            nomeIcone:"Home"
        },
        {
            linkIcone:"Explore",
            imgIcone:"bi bi-hash",
            nomeIcone:"Explore"
        },
        {
            linkIcone:"Notifications",
            imgIcone:"bi bi-bell",
            nomeIcone:"Notifications"
        },
        {
            linkIcone:"Messages",
            imgIcone:"bi bi-envelope",
            nomeIcone:"Messages"
        },
        {
            linkIcone:"/profile",
            imgIcone:"bi bi-person",
            nomeIcone:"Profile"
        },
        {
            linkIcone:"More",
            imgIcone:"bi bi-three-dots",
            nomeIcone:"More"
        }
    ]
</script>

<style>
</style>