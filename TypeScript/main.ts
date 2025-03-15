namespace empresa{

const calcularIdade = document.getElementById("calc") as HTMLButtonElement;
const campoNome = document.getElementById("nome") as HTMLButtonElement;
const campoIdade = document.getElementById("idade") as HTMLButtonElement;

calcularIdade.addEventListener("click", ()=>{
     let p = new Cliente();
    p.nome = "Maria"
    p.anoNasc = 2005;
    p.codigo = 90;
    p.saldo =100;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    document.getElementById("codigo").textContent = p.codigo.toString();
    document.getElementById("saldo").textContent = p.saldo.toString();
})
}
