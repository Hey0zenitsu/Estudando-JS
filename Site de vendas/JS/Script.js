let pessoa = {
    nome:"Bruno",
    idade:20,
    ativo:true,
    dinheiro:100,
    Bucks:0
};
let fornecedor= {
    estoque: true,
    quantidade:5000
};

function value1(pessoa){
    let msg = document.getElementById('msg');
    msg.style.display = 'none';
    if (pessoa.dinheiro >= 10){
        pessoa.dinheiro -= 10;
        pessoa.Bucks += 2500;
        document.getElementById('money-V').innerHTML = `: ${pessoa.Bucks}`;
        document.getElementById('money_R').innerHTML = `: ${pessoa.dinheiro}`; 
    } else {
        alert('Saldo insuficiente')
    }
}
function value2(pessoa){
    let msg = document.getElementById('msg');
    msg.style.display = 'none';
    if (pessoa.dinheiro >= 20){
        pessoa.dinheiro -= 20;
        pessoa.Bucks += 5000;
        document.getElementById('money-V').innerHTML = `: ${pessoa.Bucks}`;
        document.getElementById('money_R').innerHTML = `: ${pessoa.dinheiro}`; 
    } else {
        alert('Saldo insuficiente')
    }
}

function value3(pessoa){
    let msg = document.getElementById('msg');
    msg.style.display = 'none';
    if (pessoa.dinheiro >= 30){
        pessoa.dinheiro -= 30;
        pessoa.Bucks += 10000;
        document.getElementById('money-V').innerHTML = `: ${pessoa.Bucks}`;
        document.getElementById('money_R').innerHTML = `: ${pessoa.dinheiro}`;
    } else {
        alert('Saldo insuficiente')
    }
}
function msg1(){
    let msg = document.getElementById('msg');
    let btn = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    btn.style.display = 'flex';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    msg.style.display = 'flex';
 }
 function msg2(){
    let msg = document.getElementById('msg');
   let btn = document.getElementById("btn1");
   let btn2 = document.getElementById("btn2");
   let btn3 = document.getElementById("btn3");
   btn.style.display = 'none';
   btn2.style.display = 'flex';
   btn3.style.display = 'none';
    msg.style.display = 'flex';
  }
  function msg3(){
    let msg = document.getElementById('msg');
   let btn = document.getElementById("btn1");
   let btn2 = document.getElementById("btn2");
   let btn3 = document.getElementById("btn3");
   btn.style.display = 'none';
   btn2.style.display = 'none';
   btn3.style.display = 'flex';
    msg.style.display = 'flex';
  }

  function não(){
    let msg = document.getElementById('msg');
    msg.style.display = 'none';
  }