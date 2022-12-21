let guestCountEl = document.getElementById("guest-count")
let homeCountEl = document.getElementById("home-count")
let resetEl = document.getElementById("reset-button")

let guestCount = 0;
let homeCount = 0;

function plus1Home() {
    homeCount += 1;
    homeCountEl.innerText = homeCount;
}

function plus2Home() {
    homeCount += 2;
    homeCountEl.innerText = homeCount;
}

function plus3Home() {
    homeCount += 3;
    homeCountEl.innerText = homeCount;
}

function plus1Guest() {
    guestCount += 1;
    guestCountEl.innerText = guestCount;
}

function plus2Guest() {
    guestCount += 2;
    guestCountEl.innerText = guestCount;
}

function plus3Guest() {
    guestCount += 3;
    guestCountEl.innerText = guestCount;
}

function reset() {
    guestCountEl.innerText = 0;
    homeCountEl.innerText = 0;
    guestCount = 0;
    homeCount = 0;
}