let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")

let scoreH = 0
let scoreG =0

function addHomeone(){
    scoreH = scoreH + 1
    homeEl.textContent = scoreH
}

function addHometwo(){
    scoreH = scoreH + 2
    homeEl.textContent = scoreH
}

function addHomethree(){
    scoreH = scoreH + 3
    homeEl.textContent = scoreH
}

function addGuestone(){
    scoreG = scoreG + 1
    guestEl.textContent = scoreG
}

function addGuesttwo(){
    scoreG = scoreG + 2
    guestEl.textContent = scoreG
}

function addGuestthree(){
    scoreG = scoreG + 3
    guestEl.textContent = scoreG
}