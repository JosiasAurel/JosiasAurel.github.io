
const toggle = document.getElementById("toggle")

let isDark = false

function toggleColorMode() {
    if (isDark) {
        document.body.classList.remove("dark")
        isDark = false
        toggle.innerText = "Dark"
    } else {
        document.body.classList.add("dark")
        isDark = true
        toggle.innerText = "Light"
    }
}

toggle.addEventListener("click", toggleColorMode)

// Draggable disturbance XD
const box = document.getElementById("box")

let active = false
let initialX
let initialY
let currentX
let currentY
let xOffset = 0
let yOffset = 0

box.addEventListener("touchstart", dragStart, false)
box.addEventListener("touchmove", drag, false)
box.addEventListener("touchend", dragEnd, false)

box.addEventListener("mousedown", dragStart, false)
box.addEventListener("mouseup", dragEnd, false)
box.addEventListener("mousemove", drag, false)

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset
        initialY = e.touches[0].clientY - yOffset
    } else {
        initialX = e.clientX - xOffset
        initialY = e.clientY - yOffset
    }

    if (e.target === box) {
        active = true
    }
}

function dragEnd(e) {
    initialX = currentX
    initialY = currentY
    active = false
}

function drag(e) {
    if (active) {
        if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX
        currentY = e.touches[0].clientY - initialY
    } else {
        currentX = e.clientX - initialX
        currentY = e.clientY - initialY
    }

    xOffset = currentX
    yOffset = currentY

    setPosition(currentX, currentY)
    }
}

function setPosition(x, y) {
    box.style.transform = `translate3d(${x}px, ${y}px, 0)`
}
