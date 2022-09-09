const formulario = document.getElementById("formulario");
const alert = document.querySelector(".main__alert");

const encriptar = texto => {
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/a/g, "ai")
    .replace(/u/g, "ufat");
  return textoEncriptado;
};
const desencriptar = texto => {
  let textoDesEncriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");
  return textoDesEncriptado;
};
const validar = texto => {
  const regex = /[A-Z\u00E0-\u00f0\u00f2-\u00FC\u00d1]/g;
  return regex.test(texto);
}

const buttonActive = () => {
  formulario.buttonC.classList.add("panel__button--active");
  formulario.buttonD.classList.add("panel__button--active");
  formulario.buttonCopy.classList.remove("panel__button--active");
  formulario.textIn.classList.add("textarea__input--active")
  formulario.textOut.classList.add("textarea__output--active")
}
const focoTextInt = () => {
  formulario.buttonCopy.classList.add("panel__button--active");
  formulario.textOut.value = "";
  formulario.buttonC.classList.remove("panel__button--active");
  formulario.buttonD.classList.remove("panel__button--active");
  formulario.textIn.classList.remove("textarea__input--active")
  formulario.textOut.classList.remove("textarea__output--active")
  alert.classList.remove("alert--active");
};
const procesarTexto = e => {
    e.preventDefault();
    if(validar(e.target.textIn.value)){
      alert.classList.add("alert--active");
    }else{
      if(e.submitter.id === "buttonC" && e.target.textIn.value){
        e.target.textOut.value = encriptar(e.target.textIn.value);
        buttonActive();
      }else if(e.submitter.id === "buttonD" && e.target.textIn.value){
        e.target.textOut.value = desencriptar(e.target.textIn.value);
        buttonActive();
      }else if(e.submitter.id === "buttonCopy"){
        formulario.textOut.select();
        document.execCommand("copy");
        focoTextInt();
      }
      e.target.textIn.value = "";
    }
  };

formulario.textIn.addEventListener("click", focoTextInt);
formulario.addEventListener("submit", procesarTexto);
