'use strict';


fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById('staticdiv').addEventListener()
});

const pokeDisplay = {
    renderPokes(){
        const box = document.getElementById('staticDiv');
        box.innerHTML = "";
        data.forEach(function(item){
            const newField = `<div class="staticDiv">`
        })
    }
}