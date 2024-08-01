const numero = document.getElementById("numero");


let promise=new Promise((resolve, reject)=>{
       let resultado=true
       let tempo=3000
       setTimeout(()=>{
          if(resultado){
            resolve("Seu tudo certo")
          }else{
            reject("Deu tudo errado")
          }
       },tempo)
})

promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("erro");
    numero.classList.add("ok");
})
promise.catch((retorno)=>{
    numero.innerHTML =retorno
    numero.classList.add("erro");
    numero.classList.remove("ok");

})























// let resultado = false;
// let tempo = 8000;

// // Atualiza o conteúdo e as classes após o tempo especificado
// setTimeout(() => {
//     resultado = true;
    
//     // Atualiza o elemento com base no resultado
//     if (resultado) {
//         numero.innerHTML = "Deu tudo certo";
//         numero.classList.remove("erro");
//         numero.classList.add("ok");
//     } else {
//         numero.innerHTML = "Deu tudo errado";
//         numero.classList.add("erro");
//         numero.classList.remove("ok");
//     }
// }, tempo);

// // Atualiza o conteúdo inicial
// numero.innerHTML = "Processando...";
