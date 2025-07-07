
let paragrafo=document.querySelector("button");

paragrafo.addEventListener("click", vejaMensagem);

function vejaMensagem() {
  document.getElementById("novamensagem").innerText = "Você é capaz de alcançar grandes coisas!";
}