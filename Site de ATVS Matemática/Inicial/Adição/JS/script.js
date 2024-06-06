    let R = 0;
    function teste(){
        let numatvs = Number(document.getElementById('numatv').value);
        let numalg = Number(document.getElementById('numalg').value);
        for(let base = 0; base < (numatvs * 40); base++){
    let num1 = Math.floor(Math.random() * numalg) + ((numalg - 3) / 10);
    let num2 = Math.floor(Math.random() * numalg) + ((numalg - 3) / 10);
        document.getElementById('ex').innerHTML += `<div class="atts"><p id="space"> ${num1.toFixed(0)}</p><p>${num2.toFixed(0)} +</p><hr></div>`
        R ++
        console.log(num1,num2)
}};
function imprimir(){
    let sumir = document.getElementById('container');
    sumir.style.display = 'none';
    window.print()
    sumir.style.display = 'flex';
};
