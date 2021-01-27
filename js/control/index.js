function numberOfGameCards(gameNumMax){

    arrayTittles = ["Cyberpunk 2077 (PC) - GOG.COM Key - GLOBAL", 
    "Battlefield 1 (PC) - GOG.COM Key - GLOBAL", 
    "FarCry 3 (PC) - GOG.COM Key - GLOBAL", 
    "Assassins Creed 3 (PC) - GOG.COM Key - GLOBAL",
    "DAYS GONE (PC) - GOG.COM Key - GLOBAL",
    "MAFIA 2 (PC) - GOG.COM Key - GLOBAL",
    "RED DEAD REDEMPTION (PC) - GOG.COM Key - GLOBAL"]

    arrayPrices = [40.00, 45.00, 43.40, 32.20, 38.00, 49.99, 40.90];

    var arrayDisc = arrayPrices.map(function(x) {
        return x - x * 0.10;
     });

    for (let index = 1; index < gameNumMax; index++) {
        createGameCard(index, arrayTittles[index-1], arrayPrices[index-1], arrayDisc[index-1]);
    }
}



function createGameCard(gameNum, title, price, priceDis ){
    var gameCard = document.createElement('div');
    var gameImg = document.createElement('img');
    var gameP = document.createElement('p');
    var gameS = document.createElement('span');
    var br = document.createElement('br');
    var gameS2 = document.createElement('span');
    gameImg.src = "images/g"+gameNum+".jpg";
    gameCard.className = 'game-card';
    gameP.innerText = title;
    gameS.innerText = parseFloat(price).toFixed(2) + " EUR";
    gameS2.innerText = parseFloat(priceDis).toFixed(2) + " EUR";
    br.innerHTML = '<br>';
    
    gameCard.appendChild(gameImg)
    gameCard.appendChild(gameP)
    gameCard.appendChild(gameS)
    gameCard.appendChild(br)
    gameCard.appendChild(gameS2)

    document.getElementsByClassName('game-cards')[0].appendChild(gameCard);

}


window.onload = function (){
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav-ul");
    const categories = document.getElementById("th-cat");
    const rows = Array.from(document.querySelectorAll('tr.hide'));
    const rowsWrite = Array.from(document.querySelectorAll('td.writter'));

    const catArray = ["Video Games", "Gaming Hardware", "Electronics", "Tabletop Games", "Gaming gift cards", "Top-up cards", "Subcriptions", "Hearsthone Decks", "Merchandise"]

    for (let index = 0; index < rowsWrite.length; index++) {
        rowsWrite[index].innerHTML = "<a href="+catArray[index]+">"+catArray[index]+"</a>";
    }

    numberOfGameCards(8)

    burger.addEventListener('click', () => {
        burger.classList.toggle('color');
        nav.classList.toggle('hide')
        //nav.classList.toggle('show')
    })

    categories.addEventListener('click', () => {
        /*categories.classList.toggle('color')*/
        rows.forEach(tr => {
            tr.classList.toggle('hide')
        });
    })
}