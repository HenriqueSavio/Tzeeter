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

function inputTextIdle(event){
    
}
