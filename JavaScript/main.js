"use strict";
var empresa;
(function (empresa) {
    let p = new empresa.Pessoa();
    p.nome = "Maria";
    p.anoNasc = 2005;
    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
})(empresa || (empresa = {}));
