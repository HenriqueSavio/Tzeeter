<template>
    <div class="row">
        <div class="col-2">
            <div class="">
                <img src="../assets/henriqueboneco.jpg" class="rounded-circle" height="64">
            </div>
        </div>


        <div class="col-9 px-2 py-4 position-relative">
            <div class="position-relative d-flex" style="">
                <textarea ref="textAreaRef" @input="inputEvent" class="position-relative px-3" rows="1" cols="18" id="objTextArea"
                    placeholder="O que está pensando"></textarea>
            </div>

            <div class="position-relative d-flex p-1">
                <a class="rounded-pill px-2 py-1 azul" href="#">
                    <i class="bi bi-globe"> Everyone can reply</i>
                </a>
            </div>

        </div>

    </div>

    <div class="row">
        <div class="col d-flex">
            <div class="col d-flex align-items-center">
                <a href="#">
                    <i class="bi bi-card-image px-2 azul rounded-pill p-1"></i>
                </a>
                <a href="#">
                    <i class="bi bi-filetype-gif px-2 azul rounded-pill p-1"></i>
                </a>
                <a href="#">
                    <i class="bi bi-emoji-smile px-2 azul rounded-pill p-1"></i>
                </a>
                <a href="#">
                    <i class="bi bi-bar-chart px-2 azul rounded-pill p-1"></i>
                </a>
                <a href="#">
                    <i class="bi bi-calendar-event px-2 azul rounded-pill p-1"></i>
                </a>
                <a href="#">
                    <i class="bi bi-geo-alt px-2 azul rounded-pill p-1"></i>
                </a>

            </div>
            <div class="row">
                <div class="col d-flex d-flex align-items-center">
                    <div class="">
                        <span id="contador" ref="contadorRef" ></span>
                    </div>
                    <div>
                        <i class="bi bi-info-lg"></i>
                    </div>
                    <div class="">
                        <a href="#">
                            <i class="bi bi-plus-circle px-2 azul rounded-pill p-1"></i>
                        </a>
                    </div>
                    <div class="">
                        <button id="butao" ref="butaoRef" type="button" class="rounded-pill px-2 py-1 btn btn-primary"
                            disabled>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
// onMounted(validadorForm);

const textAreaRef = ref({});
const butaoRef = ref({});
const contadorRef = ref({});

function inputEvent(event){
    const textArea = textAreaRef.value;
    const butao = butaoRef.value;
    const contador = contadorRef.value;
    console.log(textArea,butao,contador);
    
    textArea.cols = textArea.scrollWidth;
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + "px";
    let tamanhoText = 140 - textArea.value.length;
    console.log(tamanhoText);
    contador.classList.remove('contadorExtrapola');
    contador.classList.remove('contadorPerigo');
    if (tamanhoText < 0) {
        contador.classList.add('contadorExtrapola');
        butao.disabled = true;
        contador.innerHTML = tamanhoText;
    } else if (tamanhoText < 40) {
        contador.classList.add('contadorPerigo');
        butao.disabled = false;
        contador.innerHTML = tamanhoText;
    } else {
        butao.disabled = false;
        contador.innerHTML = "";
    }
    if (tamanhoText == 140) {
        butao.disabled = true;
    }
}


function validadorForm() {
     console.log(textAreas);
    return;

    const textAreas = document.querySelectorAll("div.texto");

    for (const textarea of textAreas) {
        blabla(textarea);
    }

    function blabla(textareapai) {
        const textArea = textareapai.querySelector('textarea');
        const butao = textareapai.querySelector("#butao");
        const contador = textareapai.querySelector("#contador");
        textArea.addEventListener('input', (event) => {
            textArea.cols = textArea.scrollWidth;
            textArea.style.height = 'auto';
            textArea.style.height = (textArea.scrollHeight) + "px";
            let tamanhoText = 140 - textArea.value.length;
            console.log(tamanhoText);
            contador.classList.remove('contadorExtrapola');
            contador.classList.remove('contadorPerigo');
            if (tamanhoText < 0) {
                contador.classList.add('contadorExtrapola');
                butao.disabled = true;
                contador.innerHTML = tamanhoText;
            } else if (tamanhoText < 40) {
                contador.classList.add('contadorPerigo');
                butao.disabled = false;
                contador.innerHTML = tamanhoText;
            } else {
                butao.disabled = false;
                contador.innerHTML = "";
            }
            if (tamanhoText == 140) {
                butao.disabled = true;
            }
        })

    }

};

</script>

<style>
</style>