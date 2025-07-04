let display = document.getElementById("display");

// Button Click Functions
function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  let last = display.value.slice(-1);
  if ("+-*/".includes(last)) return;
  display.value += op;
}

function appendDot() {
  let lastSegment = display.value.split(/[\+\-\*\/]/).pop();
  if (!lastSegment.includes('.')) display.value += '.';
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;
const label = document.getElementById("themeLabel");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  label.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
});
