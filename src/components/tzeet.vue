<template>

    <div class="tzeet">
        <img :src="imgTzeet" height="16">
        <a>{{nomeTzeet}}</a><span class="estatistica"> {{estatisticaTzeet}}<!--@henrique Oct21, 2021--></span>
        <p>
            <a>
                <!--Se vai furar orçamento, dá pra voltar a financiar absorventes e a ciência? Ou só voto mesmo?-->
                {{mensagemTzeet}}
            </a>
        </p>

        <div class=" acao d-flex justify-content-evenly">
            <a :href="replyLinkTzeet">
                <i class="bi bi-chat rounded-circle p-1"></i>
                {{replyQtdTzeet}}
            </a>
            <a :href="retzeetLinkTzeet">
                <i class="bi bi-arrow-repeat rounded-circle p-1"></i>
                {{retzeetQtdTzeet}}
            </a>
            <a :href="likeLinkTzeet">
                <i class="bi bi-heart rounded-circle p-1"></i>
                {{likeQtdTzeet}}
            </a>
            <a :href="shareLinkTzeet">
                <i class="bi bi-upload rounded-circle p-1"></i>
            </a>
        </div>
    </div>
    
</template>

<script setup>
  const props = defineProps({
  imgTzeet: String,
  nomeTzeet: String,
  estatisticaTzeet: String,
  mensagemTzeet: String,
  replyLinkTzeet: String,
  replyQtdTzeet: Number,
  retzeetLinkTzeet: String,
  retzeetQtdTzeet: Number,
  likeLinkTzeet: String,
  likeQtdTzeet: Number,
  shareLinkTzeet: String
  })
</script>

<style>

</style>