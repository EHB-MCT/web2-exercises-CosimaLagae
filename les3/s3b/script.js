"use strict!"

let baseurl = "http://www.omdbapi.com/?apikey=c4255158&";


window.onload = function(){
    console.log("loaded");

    let url = baseurl + 't=parasite';

    getData(url).then(result => {
        console.log(result);
    });

    setTimeout(buildCard, 3000);

    function  buildCard(){
        let html = `
            <div class="card-body">
                <h5 class="card-title">${url.Title}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>`
        document.getElementById('card-body').innerHTML=html;
    }
}

async function getData(url){
    let response = await fetch(url);
    return await response.json();
}





// c4255158
//10531ad7&





/*async function getData(){
    let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c4255158');
    return await response.json();
}

getData().then(data => {
    console.log(data);
})

window.onload = function(){
   document.getElementById('movieField').value 
 

}*/