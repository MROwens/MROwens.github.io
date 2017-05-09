const mtg = require('mtgsdk')

function cardSearch(){
  const search = document.getElementById('cardName').value;
  let cardName = search;

  mtg.card.all({ name: cardName })
  .on('data', function (card) {
      //console.log(card.name, card.text)
      document.getElementById('cardOutput').innerHTML = "<img src='"+card.imageUrl+"'/>'";
  });
}

window.onload = function(){
const enter = document.getElementById('search');
enter.addEventListener('click', cardSearch, false);
}
