"use strict";

const BASE_URL = "https://deckofcardsapi.com/api/deck";



async function getCardValueAndSuit() {
    let response = await axios.get(`${BASE_URL}/new/draw/?count=1`);
    let value = response.data.cards[0].value;
    let suit = response.data.cards[0].suit;
    console.log(value, "of", suit);
}

async function getTwoCardsSameDeck() {
    let firstCard = await axios.get(`${BASE_URL}/new/draw/?count=1`);
    let deckId = firstCard.data.deck_id;
    // console.log(deckId)
    let secondCard = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`)

    for (let data of [firstCard, secondCard]) {
        let value = data.data.cards[0].value;
        let suit = data.data.cards[0].suit;
        console.log(value, "of", suit);
    }
}
let deckId;
async function onStart(){
    let deck = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
    deckId = deck.data.deck_id;
    // console.log(deckId)
    return deckId
}

async function createNewCard(){
    console.log('hi')
    let deckId = await onStart()
    // console.log(deckId)
    let firstCard = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
    let imgSrc = firstCard.data.cards[0].image
    $('#img').attr('src', imgSrc)
}


$('button').on('click', createNewCard)
console.log($('button'))