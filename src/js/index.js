const video = document.getElementById("video");
const linkDoVideo= video.src;
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const buttonFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){

    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão");
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});


buttonFecharModal.addEventListener("click", () => {
    alternarModal("");
    video.setAttribute("src", "")
});