
// Media Com duas notas
function media(){
    var notas = [];
    var valor1 = Number(document.getElementById('nota1.1').value);
    var valor2 = Number(document.getElementById('nota1.2').value);
    notas.push(valor1, valor2)
    var soma = notas.reduce((ac,nota) =>{return  ac += nota;},0)
    var aritimetica = soma / notas.length;
    document.getElementById('media').innerHTML = `<p id="media">Somativa é De : ${soma.toFixed(1)}</p>`
    document.getElementById('ari').innerHTML = `<p id="ari">Aritmética é De : ${aritimetica.toFixed(1)}</p>`
}
// Media Com Três notas
function media2(){
    var notas = [];
    var valor1 = Number(document.getElementById('nota2.1').value);
    var valor2 = Number(document.getElementById('nota2.2').value);
    var valor3 = Number(document.getElementById('nota2.3').value);
    notas.push(valor1, valor2, valor3)
    var soma = notas.reduce((ac,nota) =>{return  ac += nota;},0)
    var aritimetica = soma / notas.length;
    document.getElementById('media2').innerHTML = `<p id="media2">Somativa é De : ${soma.toFixed(1)}</p>`
    document.getElementById('ari2').innerHTML = `<p id="ari2">Aritmética é De : ${aritimetica.toFixed(1)}</p>`
}
// Media Com quatro notas
function media3(){
    var notas = [];
    var valor1 = Number(document.getElementById('nota3.1').value);
    var valor2 = Number(document.getElementById('nota3.2').value);
    var valor3 = Number(document.getElementById('nota3.3').value);
    var valor4 = Number(document.getElementById('nota3.3').value);
    notas.push(valor1, valor2, valor3, valor4)
    var soma = notas.reduce((ac,nota) =>{return  ac += nota;},0)
    var aritimetica = soma / notas.length;
    document.getElementById('media3').innerHTML = `<p id="media3">Somativa é De : ${soma.toFixed(1)}</p>`
    document.getElementById('ari3').innerHTML = `<p id="ari3">Aritmética é De : ${aritimetica.toFixed(1)}</p>`
}

