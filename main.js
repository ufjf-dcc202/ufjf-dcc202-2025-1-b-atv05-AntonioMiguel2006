const Tabuleiro = criaT();
document.body.append(Tabuleiro);

function criaT() {
  const novoT = document.createElement("div");
  novoT.classList.add("tabuleiro");
  return novoT;
}

for (let i = 0; i <= 6; i++) {
  const Disco = criaD();
  Tabuleiro.append(Disco);

  if (i < 3) {
    Disco.dataset.cor = "preto";
  } else if (i > 3) {
    Disco.dataset.cor = "branco";
  } else {
    Disco.dataset.cor = "transparente";
  }
}

function criaD() {
  const novoD = document.createElement("div");
  novoD.classList.add("disco");
  return novoD;
}
