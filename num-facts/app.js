"use strict";
const FAVORITE_NUM = 5;
const FAV_NUMS = [1,2,3,4]
const BASE_URL = "http://numbersapi.com/"

// need dosctrings!
async function getNumFacts(){
    let res = await axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);
    return res.data.text;
}
getNumFacts();

async function getManyNumsFacts(){
    let res = await axios.get(`${BASE_URL}${FAV_NUMS}?json`);
    let $list = $('#ul');
    for(let num of FAV_NUMS) {
        $list.append(`<li>${res.data[num]}</li>`)
    }
}
getManyNumsFacts();

async function getMultipleFacts() {
    let firstFactPromise = axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);
    let secondFactPromise = axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);
    let thirdFactPromise = axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);
    let fourthFactPromise = axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);

    let facts = await Promise.all([firstFactPromise, secondFactPromise, thirdFactPromise, fourthFactPromise]);

    let $list = $('#ul')
    for(let fact of facts) {
        $list.append(`<li>${fact.data.text}</li>`)
    }
}
getMultipleFacts();
