let historyStack = [];

/* ── PAGE NAVIGATION ── */
function show(id) {
  let current = document.querySelector('.page.active');
  if (current) {
    historyStack.push(current.id);
    current.classList.remove('active');
  }
  let next = document.getElementById(id);
  if (next) {
    next.classList.add('active');
    next.querySelectorAll('.line').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
    window.scrollTo(0, 0);
  }
}

function goBack() {
  if (historyStack.length > 0) {
    let prev = historyStack.pop();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    let prevPage = document.getElementById(prev);
    if (prevPage) {
      prevPage.classList.add('active');
      window.scrollTo(0, 0);
    }
  }
}

/* ── LOGINS ── */
function login1() {
  let name = document.getElementById('name1').value.trim();
  let pass = document.getElementById('pass1').value.trim();
  if (name === "HUSNA FATHIMA" && pass === "72277207") {
    startFireworks();
    startHearts();
    show('story1');
  } else {
    alert("Wrong! Try again 💖");
  }
}

function login2() {
  let val = document.getElementById('pass2').value.trim();
  if (val === "Warda") {
    show('story2');
  } else {
    alert("Wrong! Try again 🌸");
  }
}

function login3() {
  let char = document.getElementById('char3').value.trim();
  let pass = document.getElementById('pass3').value.trim();
  if (char === "Amarati" && pass === "Husni") {
    show('story3');
  } else {
    alert("Wrong! Try again 👸");
  }
}

function login4() {
  let val = document.getElementById('pers4').value.trim();
  if (val === "Qamar") {
    show('story4');
  } else {
    alert("Wrong! Try again 🌙");
  }
}

function nextPage(id) { show(id); }
function yes() { show('dua'); }

/* ── FLOATING HEARTS ── */
function startHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 25 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
  }, 300);
}

/* ── FIREWORKS ── */
var canvas = document.getElementById("fireworks");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

var particles = [];
var fireworksRunning = false;

function startFireworks() {
  if (fireworksRunning) return;
  fireworksRunning = true;

  setInterval(() => {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height * 0.6;
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: x, y: y,
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
        life: 80,
        hue: Math.random() * 360
      });
    }
  }, 800);

  animateFireworks();
}

function animateFireworks() {
  requestAnimationFrame(animateFireworks);
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.fillStyle = `hsl(${p.hue},100%,60%)`;
    ctx.fillRect(p.x, p.y, 3, 3);
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  });
}
