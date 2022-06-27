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

    var entrar = document.getElementById('entrar');

    document.addEventListener("submit", function(event){
        var email = document.getElementById('validationEmail');
        var senha = document.getElementById('validationSenha');
    
        if(email.includes("@") && email.includes(".com") && senha.ariaValueMax.length > 5){
            entrar.disabled = false;
        }
    });

    document.addEventListener("submit", function(event){
        const inscreve = document.getElementById('inscrever');
        const nome = document.getElementById('validationCustomUsername');
        const email = document.getElementById('validationCustom01');
        const senha1 = document.getElementById('validationCustom02');
        const senha2 = document.getElementById('validationCustom03');
        const mes = document.getElementById('validationCustom04');
        const dia = document.getElementById('validationCustom05');
        const ano = document.getElementById('validationCustom06');
        const termos = document.getElementById('termos');
        
        if(termos.checked){
            inscreve.disabled = false;
        }
    })
