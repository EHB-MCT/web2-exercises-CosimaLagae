'use strict';

import Team from "Team.js";


/*fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
}*/

let list = [];
let pokemon = [];

function getData(){
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json()
    }).then(data => {
        list = data.result;
        //console.log(result);

        //loop over the list to get each pokemon
        for(let element of list){
            fetch(element.url).then(response =>{
                return response.json();
            }).then(data => {
                pokemon.push(data);
            })
        }
    });
}

window.onload = function(){
    getData();

    setTimeout(buildList, 3000);

    function  buildList(){
        let html = "";
        for(let p of pokemon){
            html += 
            `<div id="staticdiv">
            <img src="" alt="">
            <h1>name</h1>
            <h2>${p.name}</h2>
            <button>chose me</button>
            </div>`
        }
        document.getElementById('list').innerHTML=html;
    }
}
getData();