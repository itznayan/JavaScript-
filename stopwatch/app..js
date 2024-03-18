const display = document.getElementById("para")
let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true

        
    }
}
        
function stop() { 
    if (isRunning) {
        clearInterval(timer)
        elapsedTime=Date.now()-startTime
        isRunning=false
    }
}


function reset() {
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRunning = false
    para.textContent="00:00:00:00"
 }


function update() { 
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minute = Math.floor(elapsedTime / (1000 * 60) % 60  )
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let miliseconds = Math.floor(elapsedTime % 1000 / 10)
    hours = String(hours).padStart(2, "0")
    minute = String(minute).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    miliseconds = String(miliseconds).padStart(2, "0")
    
    para.textContent=`${hours}:${minute}:${seconds}:${miliseconds}` 
}

