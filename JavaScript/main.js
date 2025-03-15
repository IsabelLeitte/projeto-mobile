"use strict";
var empresa;
(function (empresa) {
    const calcularIdade = document.getElementById("calc");
    const campoNome = document.getElementById("nome");
    const campoIdade = document.getElementById("idade");
    calcularIdade.addEventListener("click", () => {
        let p = new empresa.Cliente();
        p.nome = "Maria";
        p.anoNasc = 2005;
        p.codigo = 90;
        p.saldo = 100;
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
})(empresa || (empresa = {}));
