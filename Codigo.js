
console.log("Parabéns! Você achou o easter egg!!!")
/*
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
if (screen.width<768) {
    mybutton.style.display = "none";
}
 // Selecionando o elemento <div> pelo ID
 const minhaDiv = document.getElementById("minhaDiv");

 // Adicionando um evento de clique ao elemento <div>
 minhaDiv.addEventListener("click", function() {
   // Redirecionando o navegador para outra página quando a <div> for clicada
   window.location.href = "indice.html";
 }); */
 const conteudos = document.querySelectorAll('.conteudo');
const botaoVoltar = document.getElementById('botaoVoltar');
const botaoProsseguir = document.getElementById('botaoProsseguir');
let indiceAtual = 0;

function mostrarConteudo(indice) {
  conteudos.forEach((conteudo, index) => {
    if (index === indice) {
      conteudo.style.display = 'block';
    } else {
      conteudo.style.display = 'none';
    }
  });
}

botaoVoltar.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + conteudos.length) % conteudos.length;
  mostrarConteudo(indiceAtual);
});

botaoProsseguir.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % conteudos.length;
  mostrarConteudo(indiceAtual);
});






