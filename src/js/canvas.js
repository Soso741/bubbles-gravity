import { randomIntFromRange, randomColor, distance } from "./utils";
import mouseGif from "../public/mouse.gif";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
const gravity = 1;
const friction = 0.99;
let objects = [];
let initiateTutorial = false;
let tutorialDiv = null;

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  if (objects.length < 600) {
    init();
  }
});

addEventListener("click", () => {
  objects = [];
  init();
});

addEventListener("click", () => {
  if (tutorialDiv) {
    tutorialDiv.classList.remove("tutorialActive");
    setTimeout(() => {
      tutorialDiv.style.visibility = "hidden"; // Ensures it's unclickable
    }, 400);
  }
});

function showTutorial() {
  // Ensure we create it only once ,Prevents duplicate tutorial creation
  const tutorialText = `<h1 class="titleText">Click on screen to reset</h1>`;

  tutorialDiv = document.createElement("div");
  const animationCont = document.createElement("div");
  const mouseGIF = document.createElement("img");

  tutorialDiv.classList.add("tutorialBg");
  animationCont.classList.add("animationCont");
  tutorialDiv.innerHTML = tutorialText;

  mouseGIF.src = mouseGif;
  mouseGIF.alt = "Mouse clicking tutorial";
  mouseGIF.classList.add("mouseGIF");

  document.body.appendChild(tutorialDiv);
  tutorialDiv.appendChild(animationCont);
  animationCont.appendChild(mouseGIF);

  setTimeout(() => {
    tutorialDiv.classList.add("tutorialActive");
  }, 500);
}

// Objects
class Circle {
  constructor(x, y, dx, dy, r, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  update() {
    //this.y + this.r >= screenHeight
    if (this.y + this.r + this.dy >= innerHeight || this.y - this.r <= 0) {
      this.dy = -this.dy * friction;
      this.dx *= friction;

      if (Math.abs(this.dy) < 0.5) this.dy = 0;
      if (Math.abs(this.dx) < 0.5) this.dx = 0;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.r + this.dx >= innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
      this.dy = this.dy * friction;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// Implementation
function init() {
  for (let i = 0; i < 500; i++) {
    const randRadius = randomIntFromRange(8, 40);
    objects.push(
      new Circle(
        randomIntFromRange(randRadius, innerWidth - randRadius),
        randomIntFromRange(randRadius * 2, innerHeight - randRadius),
        randomIntFromRange(-5, 5),
        randomIntFromRange(-5, 5),
        randRadius,
        randomColor(colors)
      )
    );
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  objects.forEach((elm) => {
    elm.draw();
    elm.update();

    if (!objects.some((circle) => circle.dy) > 0 && !initiateTutorial) {
      initiateTutorial = true;
      showTutorial();
    }
  });
}

init();
animate();
