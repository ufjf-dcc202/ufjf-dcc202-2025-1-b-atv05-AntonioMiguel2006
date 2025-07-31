const tabuleiroo = [
  "preto",
  "preto",
  "preto",
  "transparente",
  "branco",
  "branco",
  "branco",
];

let selecionado = null;

export function seleciona(posicao) {
  if (selecionado === null) {
    selecionado = posicao;
  } else if (selecionado === posicao) {
    selecionado = null;
  } else {
    mover(selecionado, posicao);
    selecionado = null;
  }
}

export function getT() {
  return [...tabuleiroo];
}

function mover(antes, depois) {
  if (tabuleiroo[depois] !== "transparente") return;
  if (Math.abs(depois - antes) > 2) return;

  if (depois - antes === 2 && tabuleiroo[antes + 1] === "transparente") return;
  if (depois - antes === -2 && tabuleiroo[antes - 1] === "transparente") return;

  tabuleiroo[depois] = tabuleiroo[antes];
  tabuleiroo[antes] = "transparente";
}
