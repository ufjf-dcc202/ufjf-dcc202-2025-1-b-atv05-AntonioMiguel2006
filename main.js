const Tabuleiro = criaT();
document.body.append(Tabuleiro);

function criaT(){
    const novoT = document.createElement("div");
    novoT.classList.add("tabuleiro");
    return novoT;
}