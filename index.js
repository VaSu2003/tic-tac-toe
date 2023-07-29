let board = document.querySelector('div.wrapper')

let arrIds = ['one','two','three','four','five','six','seven','eight','nine']
let crossed = []
let circled = []

function clickHandler(id){
    crossed.push(id)
    document.getElementById(id).innerHTML = `<img id='cross-img' src="./cross-img.png" alt="cross-image" />`
    document.getElementById(id).classList.add('cross-selected')
    arrIds = arrIds.filter((ele)=> ele !== id)
    if(arrIds.length !== 0 ){
        addZero();
    }
    
}

//add a zero after first player move complete
function addZero(){

    randomEle = arrIds[Math.floor(Math.random() * arrIds.length)]
    circled.push(randomEle)
    document.getElementById(randomEle).innerHTML = `<img id='cross-img' src="./zero-img.png" alt="zero-image" />`
    document.getElementById(randomEle).classList.add('zero-selected')
    arrIds = arrIds.filter((ele)=> ele !== randomEle)
    // console.log(randomEle)
}

//check for win
function checkforWin(){
    // console.log(document.getElementsByClassName('cross-selected')[0].id)
    // console.log('circled :' + circled)
    // console.log('crossed :'+ crossed)
    if(document.getElementById('one').classList == 'cross-selected' && document.getElementById('four').classList == 'cross-selected' && document.getElementById('seven').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('one').classList == 'cross-selected' && document.getElementById('two').classList == 'cross-selected' && document.getElementById('three').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('three').classList == 'cross-selected' && document.getElementById('six').classList == 'cross-selected' && document.getElementById('nine').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('seven').classList == 'cross-selected' && document.getElementById('eight').classList == 'cross-selected' && document.getElementById('nine').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('three').classList == 'cross-selected' && document.getElementById('five').classList == 'cross-selected' && document.getElementById('seven').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('one').classList == 'cross-selected' && document.getElementById('five').classList == 'cross-selected' && document.getElementById('nine').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('four').classList == 'cross-selected' && document.getElementById('five').classList == 'cross-selected' && document.getElementById('six').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('two').classList == 'cross-selected' && document.getElementById('five').classList == 'cross-selected' && document.getElementById('eight').classList == 'cross-selected'){
        console.log('cross YOu won')
        clearInterval(timeId)
    }


    //check for zero win 

    if(document.getElementById('one').classList == 'zero-selected' && document.getElementById('four').classList == 'zero-selected' && document.getElementById('seven').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('one').classList == 'zero-selected' && document.getElementById('two').classList == 'zero-selected' && document.getElementById('three').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('three').classList == 'zero-selected' && document.getElementById('six').classList == 'zero-selected' && document.getElementById('nine').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('seven').classList == 'zero-selected' && document.getElementById('eight').classList == 'zero-selected' && document.getElementById('nine').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('three').classList == 'zero-selected' && document.getElementById('five').classList == 'zero-selected' && document.getElementById('seven').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('one').classList == 'zero-selected' && document.getElementById('five').classList == 'zero-selected' && document.getElementById('nine').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('four').classList == 'zero-selected' && document.getElementById('five').classList == 'zero-selected' && document.getElementById('six').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }
    if(document.getElementById('two').classList == 'zero-selected' && document.getElementById('five').classList == 'zero-selected' && document.getElementById('eight').classList == 'zero-selected'){
        console.log('zero YOu won')
        clearInterval(timeId)
    }

}

let timeId = setInterval(()=>{
    // if(arrIds.length === 0){
        checkforWin()
        
    // }
},30)


