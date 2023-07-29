let board = document.querySelector('div.wrapper')

let arrIds = ['one','two','three','four','five','six','seven','eight','nine']

function clickHandler(id){
    document.getElementById(id).innerHTML = `<img id='cross-img' src="./cross-img.png" alt="cross-image" />`
    arrIds = arrIds.filter((ele)=> ele !== id)
    addZero(arrIds);
}

function addZero(arrIds){

    randomEle = arrIds[Math.floor(Math.random() * arrIds.length)]
    arrIds = arrIds.filter((ele)=> ele !== randomEle)
    document.getElementById(randomEle).innerHTML = `<img id='cross-img' src="./zero-img.png" alt="zero-image" />`
    console.log(randomEle)
}

