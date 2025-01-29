function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.classList.add("floating-heart")
  heart.innerHTML = "❤️"
  heart.style.left = Math.random() * 100 + "vw"
  heart.style.animationDuration = Math.random() * 5 + 5 + "s"
  document.getElementById("floating-hearts").appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 10000)
}

function createCloud() {
  const cloud = document.createElement("div")
  cloud.classList.add("cloud")
  cloud.style.left = Math.random() * 100 + "vw"
  cloud.style.top = Math.random() * 50 + "vh"
  cloud.style.width = Math.random() * 100 + 50 + "px"
  cloud.style.height = cloud.style.width
  cloud.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`
  document.getElementById("clouds").appendChild(cloud)
}

function createStar() {
  const star = document.createElement("div")
  star.classList.add("star")
  star.style.left = Math.random() * 100 + "vw"
  star.style.top = Math.random() * 100 + "vh"
  star.style.width = Math.random() * 4 + 2 + "px"
  star.style.height = star.style.width
  star.style.animationDuration = Math.random() * 2 + 1 + "s"
  document.getElementById("stars").appendChild(star)
}

function shootConfetti() {
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
  }

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      }),
    )
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}

setInterval(createFloatingHeart, 300)
for (let i = 0; i < 10; i++) {
  createCloud()
}
for (let i = 0; i < 50; i++) {
  createStar()
}

const image = document.getElementById("congoImage")
image.addEventListener("mouseover", () => {
  image.style.transform = "scale(1.1) rotate(5deg)"
})
image.addEventListener("mouseout", () => {
  image.style.transform = "scale(1) rotate(0deg)"
})
image.addEventListener("click", () => {
  shootConfetti()
})

window.addEventListener("load", shootConfetti)

// Add romantic messages
const romanticMessages = [
  "You're my sunshine on a cloudy day!",
  "Every moment with you is magical!",
  "You make my heart skip a beat!",
  "I'm head over heels for you!",
  "You're the missing piece to my puzzle!",
]

function displayRandomMessage() {
  const messageElement = document.createElement("div")
  messageElement.textContent = romanticMessages[Math.floor(Math.random() * romanticMessages.length)]
  messageElement.style.position = "fixed"
  messageElement.style.bottom = "20px"
  messageElement.style.left = "50%"
  messageElement.style.transform = "translateX(-50%)"
  messageElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
  messageElement.style.padding = "10px"
  messageElement.style.borderRadius = "5px"
  messageElement.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)"
  messageElement.style.animation = "fadeInOut 5s forwards"
  document.body.appendChild(messageElement)

  setTimeout(() => {
    messageElement.remove()
  }, 5000)
}

setInterval(displayRandomMessage, 10000)

// Add keyframe animation for fadeInOut
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
    }
`
document.head.appendChild(style)

//Import confetti library.  This needs to be done before the shootConfetti function is called.
import confetti from "https://cdn.skypack.dev/canvas-confetti"

function createCat() {
  const cat = document.createElement("div")
  cat.classList.add("cat")
  cat.style.bottom = `${Math.random() * 80}vh`
  cat.style.animation = `run ${Math.random() * 5 + 5}s linear infinite`

  document.getElementById("cats-container").appendChild(cat)

  cat.addEventListener("click", () => {
    cat.style.transform = "scale(1.2)"
    setTimeout(() => {
      cat.style.transform = "scale(1)"
    }, 300)
  })
}

// Create 5 cats
for (let i = 0; i < 5; i++) {
  createCat()
}

// Create a new cat every 10 seconds
setInterval(createCat, 10000)

