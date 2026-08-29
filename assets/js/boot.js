const bootLines = document.querySelectorAll("[data-boot-line]");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function revealPage() {
  document.body.classList.add("boot-complete");
  dispatchEvent(new Event("bootcomplete"));
}

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
    }, 65);
  });
}

async function runBootSequence() {
  if (reducedMotion) {
    bootLines.forEach((line) => {
      line.textContent = line.dataset.bootLine;
    });
    setTimeout(revealPage, 250);
    return;
  }

  for (const line of bootLines) {
    line.classList.add("is-active");

    if (line === bootLines[0]) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await typeLine(line, line.dataset.bootLine);

    if (line === bootLines[bootLines.length - 1]) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      revealPage();
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    line.classList.remove("is-active");
  }
}

runBootSequence();
