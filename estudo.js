let tabuada = 111;

function escreva() {
  document.write(" Tabuada do " + tabuada + "<br>");
  document.write(tabuada + " X 1 = " + (tabuada * 1) + "<br>");
  document.write(tabuada + " x 2 = " + (tabuada * 2) + "<br>");
  document.write(tabuada + " x 3 = " + (tabuada * 3) + "<br>");
  document.write(tabuada + " x 4 = " + (tabuada * 4) + "<br>");
  document.write(tabuada + " x 5 = " + (tabuada * 5) + "<br>");
  document.write(tabuada + " x 6 = " + (tabuada * 6) + "<br>");
  document.write(tabuada + " x 7 = " + (tabuada * 7) + "<br>");
  document.write(tabuada + " x 8 = " + (tabuada * 8) + "<br>");
  document.write(tabuada + " x 9 = " + (tabuada * 9) + "<br>");
  document.write(tabuada + " x 10 = " + (tabuada * 10) + "<br>");
}

let lista = ["gilzinho", "spessato", "neuza", "jesus", "Duarte"];

function mostraLista() {
  document.write("tamanho da lista: " + lista.length + "<br>");
  for (let i = 0; i < lista.length; i++) {
    document.write("professores: " + lista[i] + "<br>")
  }
}

function multiplica() {
  for (let i = 1; i <= 10; i++) {
    document.write("Taboada do = " + i + "<br>");
    for (let j = 1; j <= 10; j++) {
      document.write(i + " x" + j + " = " + (i * j) + "<br>");

    }
    document.write("<br>")
  }
}
function moeda(atual) {
  return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

}

function total() {
  let v = document.getElementById("Valor").value;
  let j = document.getElementById("Juros").value;
  let t = document.getElementById("Meses").value;

  if (!Number(v)) {
    alert("O valor deve ser numérico.");
    document.getElementById("Valor").value = "";
    document.getElementById("Valor").focus();
    return
  }
  if (!Number(j)) {
    alert("O juros deve ser numérico.");
    document.getElementById("Juros").value = "";
    document.getElementById("Juros").focus();
    return
  }

  if (!Number(t)) {
    alert("O valor dos meses deve ser numérico.");
    document.getElementById("Meses").value = "";
    document.getElementById("Meses").focus();
    return
  }
let texto= "";
  let r = 0;
  for (let i = 1; i <= t; i++) {
    r = v * (1 + (j / 100));
    texto += "Mês" + i + "valor: " + moeda(r) + "<br>";
    //document.write("Mês " + i + "valor: " + moeda(r) + "<br>");
    v = r;

  }
  document.getElementById("mes").innerHTML= texto;
  document.getElementById("totalgeral").innerHTML= "Total: "+moeda(r);
  //document.write("Resultado: " + moeda(r));
}
function media() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;
  document.getElementById("resul").innerHTML = "Media:" + r;
}

function somar() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1) + Number(n2) + Number(n3) + Number(n4));
  document.getElementById("resul").innerHTML = "Soma:" + r;
}

function diminuir() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1) - Number(n2) - Number(n3) - Number(n4));
  document.getElementById("resul").innerHTML = "Diminuição:" + r;
}

function multiplicar() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;

  let r = (Number(n1) * Number(n2) * Number(n3) * Number(n4));
  document.getElementById("resul").innerHTML = "Multiplicação:" + r;
}



Footer
