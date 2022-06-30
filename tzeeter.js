//const textArea = document.getElementById("objTextArea");

/*textArea.addEventListener('input',(ev) => {
   /* if(textArea.scrollHeight > textArea.offsetHeight){
        textArea.rows += 1;
    }else{
        textArea.rows -= 1;
    }
    
     if( textArea.scrollHeight < textArea.offsetWidth){
            textArea.cols += 1;
        }else{
            textArea.cols += 1;
        }
    }

    /*while (objTextArea.scrollHeight > objTextArea.offsetHeight) {
        objTextArea.rows += 1;
    }
    while (objTextArea.scrollHeight < objTextArea.offsetHeight) {
        objTextArea.rows -= 1;
    }

})*/


//textArea.setAttribute("style","height:" + (textArea.scrollHeight)+ "px;overflow-y:hidden;");
/*
textArea.addEventListener('input',(ev) => {
    textArea.cols = textArea.scrollWidth;  
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + "px";

})

document.addEventListener('input',(ev) =>{
    const contador = document.getElementById("contador");

    let tamanhoText = 140 - textArea.value.length;
    console.log(tamanhoText);

    contador.classList.remove('contadorExtrapola');
    contador.classList.remove('contadorPerigo');



    if(tamanhoText < 0){
        contador.classList.add('contadorExtrapola');
        document.getElementById("butao").disabled = true;
        contador.innerHTML = tamanhoText;

    }else if(tamanhoText < 40){
        contador.classList.add('contadorPerigo');
        document.getElementById("butao").disabled = false;
        contador.innerHTML = tamanhoText;
    }else {
        document.getElementById("butao").disabled = false;
        contador.innerHTML = "";
    }

    if(tamanhoText == 140){
        document.getElementById("butao").disabled = true;
    }

})
*/

const textAreas = document.querySelectorAll("div.texto");

for (const textarea of textAreas) {
    blabla(textarea);    
}

function blabla(textareapai){    
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
        if(tamanhoText < 0){
            contador.classList.add('contadorExtrapola');
            butao.disabled = true;
            contador.innerHTML = tamanhoText;
        }else if(tamanhoText < 40){
            contador.classList.add('contadorPerigo');
            butao.disabled = false;
            contador.innerHTML = tamanhoText;
        }else {
            butao.disabled = false;
            contador.innerHTML = "";
        }
        if(tamanhoText == 140){
            butao.disabled = true;
        }
    })

}


/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  */

  //login
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
//quando executa a pagina do singup esse codigo fica dando erro pois nao temos o id"senha", mas não interfere no outro
   

    
    //if(email.includes("@") && email.includes(".com") && senha.ariaValueMax.length > 5){
    //    entrar.disabled = false;
    //}
    const inscreve = document.getElementById('inscrever');
    const nome = document.getElementById('validationCustomUsername');
    const email1 = document.getElementById('validationCustom01');
    const senha1 = document.getElementById('validationCustom02');
    const senha2 = document.getElementById('validationCustom03')
    const termos = document.getElementById('termos1');
    const radio = document.querySelector('.needs-validation');


    document.addEventListener("keyup", function(event){
        if(nome.value.length > 2 && email1.checkValidity() && senha1.value===senha2.value && senha1.value.length > 5){
            radio.addEventListener('input',() => {
                if(termos.checked){
                    inscreve.disabled = false;
                    console.log('terrmos');
                }else inscreve.disabled = true;
            })}else inscreve.disabled = true;
    })

    window.onload = function() {
        var select = document.getElementById("validationCustom05");
        var options = getDiasMes(11, 2015);
        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
    }
    
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
    