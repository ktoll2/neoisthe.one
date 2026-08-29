const bootLines = document.querySelectorAll("[data-boot-line]");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const originalTitle = document.title;
const konamiCode = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];
let enteredKeys = [];
let overdriveTimeout;

console.info("Knock, knock, Neo.");
document.title = "Wake up, Neo...";

function transitionToPage() {
  dispatchEvent(new Event("bootcomplete"));
  document.body.classList.add("rain-over-boot");

  setTimeout(() => {
    document.body.classList.remove("rain-over-boot");
    document.body.classList.add("boot-fading");
    setTimeout(() => {
      document.body.classList.add("boot-complete");
      document.title = originalTitle;
    }, 1500);
  }, 3000);
}

addEventListener("keydown", (event) => {
  enteredKeys = [...enteredKeys, event.key.toLowerCase()].slice(-konamiCode.length);

  if (enteredKeys.join() !== konamiCode.join()) {
    return;
  }

  clearTimeout(overdriveTimeout);
  document.body.classList.add("matrix-overdrive");
  overdriveTimeout = setTimeout(() => document.body.classList.remove("matrix-overdrive"), 3000);
  enteredKeys = [];
});

function typeLine(line, text) {
  return new Promise((resolve) => {
    let index = 0;
    const timer = setInterval(() => {
      line.textContent += text[index];
      index += 1;

      if (index === text.length) {
        clearInterval(timer);
        resolve();
      }
    }, 150);
  });
}

async function runBootSequence() {
  if (reducedMotion) {
    bootLines.forEach((line) => {
      line.textContent = line.dataset.bootLine;
    });
    setTimeout(transitionToPage, 250);
    return;
  }

  for (const line of bootLines) {
    line.classList.add("is-active");

    if (line === bootLines[0]) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await typeLine(line, line.dataset.bootLine);

    if (line === bootLines[bootLines.length - 1]) {
      await new Promise((resolve) => setTimeout(resolve, 3500));
      transitionToPage();
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));
    line.classList.remove("is-active");
  }
}

runBootSequence();
