'use strict';

import Team from "./team.js";

let list = [];
let pokemon = [];

function getData(){
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json()
    }).then(data => {
        list = data.results;

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
            `<div id="list">
            <img src="${p.sprites.front_default}" alt="">
            <div >
            <h1>${p.name}</h1>
            <h2>${p.types}</h2>
            <button>Add to team</button>
            </div>`
        }
        document.getElementById('list').innerHTML=html;
    }

    let team1 = new Team();

}


getData();


/*
<div class="card">
<img class="card-img-top" scr="${p.sprites.front_default}">
*/