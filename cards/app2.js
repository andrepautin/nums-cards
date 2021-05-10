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
