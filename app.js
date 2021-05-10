FAVORITE_NUM = 5;
FAV_NUMS = [1,2,3,4]
BASE_URL = "http://numbersapi.com/"


async function getNumFacts(){
    res = await axios.get(`${BASE_URL}${FAVORITE_NUM}?json`);
    return res.data.text
}

async function getManyNumsFacts(){
    res = await axios.get(`${BASE_URL}${FAV_NUMS}?json`);
    let $list = $('#ul')
    for(num of FAV_NUMS) {
        $list.append(`<li>${res.data[num]}</li>`)
    }
}
