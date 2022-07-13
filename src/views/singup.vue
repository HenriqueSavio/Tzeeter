<template>
    <div @keyup="keyupEvent" class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="">
                    <button type="button" class="btn-close position-relative direita" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">Criar conta</h5>
                    <hr>
                </div>
                <div class="modal-body">
                    <form class="needs-validation was-validated" novalidate>
                        <div>
                            <div class="has-validation">
                                <input type="text" class="form-control valid" id="validationCustomUsername"
                                    placeholder="Nome:" required>
                                <div class="invalid-feedback">
                                    Por favor, informe um nome de usuário.
                                </div>
                            </div>
                            <br>
                            <div class="">
                                <input type="email" class="form-control valid" id="validationCustom01"
                                    placeholder="Email:" required>
                                <div class="invalid-feedback">
                                    Informe um email válido.
                                </div>
                            </div>
                            <br>
                            <div class="">
                                <input type="password" class="form-control valid" id="validationCustom02"
                                    placeholder="Senha:" required>
                                <div class="invalid-feedback">
                                    A senha é obrigatória e deve ter pelo menos 6 caracteres.
                                </div>
                            </div>
                            <br>
                            <div class="">
                                <input type="password" class="form-control valid" id="validationCustom03"
                                    placeholder="Confirmação de senha:" required>
                                <div class="invalid-feedback">
                                    A senha é obrigatória e deve ter pelo menos 6 caracteres.
                                </div>
                            </div>

                            <div>
                                <h4><b>Data de nascimento</b></h4>
                                <span>
                                    Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta
                                    for de empresa, de
                                    um animal de estimação ou outros.
                                </span>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Mês</option>
                                        <option value="0">Janeiro</option>
                                        <option value="1">Fevereiro</option>
                                        <option value="2">Março</option>
                                        <option value="3">Abril</option>
                                        <option value="4">Maio</option>
                                        <option value="5">Junho</option>
                                        <option value="6">Julho</option>
                                        <option value="7">Agosto</option>
                                        <option value="8">Setembro</option>
                                        <option value="9">Outubro</option>
                                        <option value="10">Novembro</option>
                                        <option value="11">Dezembro</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo obrigatório.
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select" id="validationCustom05" required>
                                        <option selected disabled value="">Dia</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo obrigatório.
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select" id="validationCustom06" required>
                                        <option selected disabled value="">Ano</option>
                                        <option value="1">2020</option>
                                        <option value="2">2021</option>
                                        <option value="3">2022</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo obrigatório.
                                    </div>
                                </div>
                            </div>
                            <div
                                class="f>Você concorda com nossos Termos, com a Política de Privacidade e com o Uso de Cookies?orm-check">
                                <span>
                                    <input class="form-check-input" type="checkbox" value="" id="">
                                    Receba e-mails sobre sua atividade no Tzeeter e recomendações.
                                </span>
                            </div>
                            <br>
                            <div class="form-floating mb-3">
                                <span>Você concorda com nossos termos, com a política de privacidade e com o uso de
                                    cookies?</span>
                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="termos1" name="radio-stacked"
                                        required>
                                    <label class="form-check-label" for="termos1">Sim</label>
                                </div>
                                <div class="form-check mb-3">
                                    <input type="radio" class="form-check-input" id="termos2" name="radio-stacked"
                                        required>
                                    <label class="form-check-label" for="termos2">Não</label>
                                    <div class="invalid-feedback">Você deve aceitar os termos de política do Tzeeter.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <button class="btn btn-primary rounded-pill m-2 meuInscreva" type="submit" id="inscrever"
                            disabled>Se inscrever</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <div>
        <a class="position-absolute top-50 start-50 btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle"
            role="button">SingUp</a>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

function keyupEvent(event){
    
    const inscreve = document.getElementById('inscrever');
    const nome = document.getElementById('validationCustomUsername');
    const email1 = document.getElementById('validationCustom01');
    const senha1 = document.getElementById('validationCustom02');
    const senha2 = document.getElementById('validationCustom03')
    const termos = document.getElementById('termos1');
    const radio = document.querySelector('.needs-validation');
    console.log(nome);
    if (nome.value.length > 2 && email1.checkValidity() && senha1.value === senha2.value && senha1.value.length > 5) {
        radio.addEventListener('input', () => {
            if (termos.checked) {
                inscreve.disabled = false;
                console.log('terrmos');
            } else inscreve.disabled = true;
        })
    } else inscreve.disabled = true;

}


onMounted(() => {
    var select = document.getElementById("validationCustom05");
    var options = getDiasMes(11, 2015);
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

})


function getDiasMes(month, year) {
    month--;

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return days;
}

</script>

<style>
</style>