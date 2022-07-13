<template>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-tzeets" role="tabpanel" aria-labelledby="pills-tzeets-tab"
      tabindex="0">

      <li v-for="(valor, index) in todosTzeet" :key="index">
        <tzeetVue :img-tzeet="valor.imgTzeet" :nome-tzeet="valor.nomeTzeet" :estatistica-tzeet="valor.estatisticaTzeet"
          :mensagem-tzeet="valor.mensagemTzeet" :reply-link-tzeet="valor.replyLinkTzeet"
          :reply-img-tzeet="valor.replyImgTzeet" :reply-qtd-tzeet="valor.replyQtdTzeet"
          :retzeetLinkTzeet="valor.retzeetLinkTzeet" :retzeetImgTzeet="valor.retzeetImgTzeet"
          :retzeetQtdTzeet="valor.retzeetQtdTzeet" :likeLinkTzeet="valor.likeLinkTzeet"
          :likeImgTzeet="valor.likeImgTzeet" :likeQtdTzeet="valor.likeQtdTzeet" :shareLinkTzeet="valor.shareLinkTzeet"
          :shareImgTzeet="valor.shareImgTzeet" />
      </li>

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
  import tzeetVue from './tzeet.vue';
  const todosTzeet =[
    {
       imgTzeet:"../src/assets/henriqueboneco.jpg",
       nomeTzeet:"Henrique Sávio",
       estatisticaTzeet:"@henrique Oct21, 2021",
       mensagemTzeet:"Se vai furar orçamento, dá pra voltar a financiar absorventes e a ciência? Ou só voto mesmo?",
       replyLinkTzeet:"#",
       replyQtdTzeet:200,
       retzeetLinkTzeet:"#",
       retzeetQtdTzeet:100,
       likeLinkTzeet:"#",
       likeQtdTzeet:120,
       shareLinkTzeet:""
    },
    {
       imgTzeet:"../src/assets/bruno gois.png",
       nomeTzeet:"Bruno Góis Mateus",
       estatisticaTzeet:"@brunomateus Hun 1, 2011",
       mensagemTzeet:"Something really bad is happing in somewhere in the world ..gmail is off",
       replyLinkTzeet:"#",
       replyQtdTzeet:200,
       retzeetLinkTzeet:"#",
       retzeetQtdTzeet:100,
       likeLinkTzeet:"#",
       likeQtdTzeet:120,
       shareLinkTzeet:"#"
       
    },
    {
      imgTzeet: "../src/assets/logo.png",
      nomeTzeet: "vue",
      estatisticaTzeet: "@vuejsbrasil Hun 12, 2015",
      mensagemTzeet: "isso não é um test",
      replyLinkTzeet: "#",      
      replyQtdTzeet: 150,
      retzeetLinkTzeet: "#",
      retzeetQtdTzeet: 90,
      likeLinkTzeet: "#",      
      likeQtdTzeet: 12,
      shareLinkTzeet: "#"      
    }

  ];

</script>

<style>
</style>