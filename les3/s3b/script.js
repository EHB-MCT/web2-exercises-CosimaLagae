"use strict!"


async function getData(){
    let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c4255158');
    console.log("response");
    return await response.json();
}


/*window.onload = function(){
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

}*/