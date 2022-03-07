const Element = document.getElementsByTagName("h1")[0]

let min = 10
let sec = min*60

function num_to_text(n){
    return `${n}`
}

function update(){
    if (sec>0){
        sec--
        let min = Math.floor(sec/60)
        let remaining_sec = num_to_text(sec%60)

        if(remaining_sec.length === 2){
            Element.innerHTML = `${min}:${remaining_sec}`
        }else{
            remaining_sec = `0${remaining_sec}`
            Element.innerHTML = `${min}:${remaining_sec}`
        }

    }
}

setInterval(update, 1000)