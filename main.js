import { getT, seleciona } from "./discos.js";

const tabuleiroo = getT();

const Tabuleiro = criaT();
document.body.append(Tabuleiro);

function criaT() {
  const novoT = document.createElement("div");
  novoT.classList.add("tabuleiro");

  return novoT;
}

for (let i = 0; i <= 6; i++) {
  const Disco = criaD(tabuleiroo[i], i);

  Tabuleiro.append(Disco);
}

function criaD(cor, posicao) {
  const novoD = document.createElement("div");
  novoD.classList.add("disco");
  novoD.dataset.cor = cor;
  novoD.dataset.posicao = posicao;

  novoD.addEventListener("click", discoClick);

  return novoD;
}

function discoClick(evento) {
  const posicao = Number(evento.target.dataset.posicao);
  seleciona(posicao);
  atualizaD();
}

function atualizaD() {
  const tabuleiro = getT();

  for (let i = 0; i < Tabuleiro.children.length; i++) {
    const discoo = Tabuleiro.children[i];
    discoo.dataset.cor = tabuleiro[discoo.dataset.posicao];
  }
}
