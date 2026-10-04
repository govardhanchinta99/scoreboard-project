let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function add1home() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function add2home() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function add3home() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function add1guest() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function add2guest() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function add3guest() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}