<template>
  <div>
    <router-link :to="linkIcone">
      <i :class="imgIcone"></i>
      <span class="d-none d-lg-inline"> {{nomeIcone}} </span>
    </router-link>
  </div>
</template>

<script setup>
  const props = defineProps({
  nomeIcone: String,
  linkIcone: String,
  imgIcone: String

})
</script>

<style>

</style>