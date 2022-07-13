<template>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="">
                    <button type="button" class="btn-close position-relative direita" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <img class="mx-auto d-flex" src="../assets/tiziu.png">
                </div>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Entre no Tzeet agora mesmo</h5>
                </div>
                <div class="modal-body">
                    <form class="needs-validation was-validated" novalidate>
                        <div>
                            <div class="">
                                <input type="email" class="form-control valid" id="validationEmail" placeholder="Email:"
                                    required>
                                <div class="invalid-feedback">
                                    Informe um email válido.
                                </div>
                            </div>
                            <br>
                            <div class="">
                                <input type="password" class="form-control" id="validationSenha" placeholder="Senha:"
                                    required>
                                <div>
                                    <a href="#"> Esqueceu a senha?</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button class="btn btn-primary rounded-pill m-2" type="submit" id="entrar" disabled>Entrar</button>
                <div>
                    <b>Não tem uma conta?</b>
                    <router-link @click="myModal.hide()" to="/singup"> Increva-se</router-link>
                </div>
            </div>
        </div>
    </div>
    <div>
        <a class="position-absolute top-50 start-50 btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle"
            role="button">Login</a>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const myModal = ref({});

    document.addEventListener("keyup", function(event){
        var entrar = document.getElementById('entrar');
        const email = document.getElementById('validationEmail');
        const senha = document.getElementById('validationSenha');
        if(senha.value.length > 5 && email.checkValidity()){
            entrar.disabled = false;
        }else{
            entrar.disabled = true;
            console.log("test3");
            }
    });

onMounted(() => {
    myModal.value = new bootstrap.Modal('#exampleModalToggle', {
        keyboard: false
    })
})
</script>

<style>
</style>