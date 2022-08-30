let formulario = document.querySelector(".form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
})
//Criar Cards
let btn_submit = document.querySelector('#enviar');
btn_submit.addEventListener('click', function () {
  let titulo = formulario.querySelector('#titulo').value;
  let descricao = formulario.querySelector('#descricao').value;
  let img_url = formulario.querySelector('#imagem').value;
  criarCard(titulo, descricao, img_url);
})

const campoModal = document.querySelector('.modal-content');
function criarCard(cardTitulo, cardDescricao, cardImgUrl) {
  let code = `
    <div class="card">
        <div class="close card_excluir" id="btn_x"><p>&times;</p></div>
        <div class="card_img"><img src="${cardImgUrl}" alt="${cardTitulo}"></div>
        <div class="card_titulo">${cardTitulo}</div>
        <div class="card_text">${cardDescricao}</div>
    </div>
    `;
  campoModal.innerHTML += code;
  cards += code;
}

//Excluir Cards
var excluir_cards = document.querySelectorAll('.card_excluir');
var cards = document.querySelectorAll('.card');


document.querySelector('.modal-content').addEventListener('click', function(evento){
    console.log(evento.target.parentNode.parentNode);
    evento.target.parentNode.parentNode.remove()
  })
  


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");


// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}