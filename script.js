const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.textContent = "Tem certeza?";
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.style.transform = "scale(1.2)";
});

noBtn.addEventListener("mouseout", () => {
  noBtn.textContent = "Não";
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.style.transform = "scale(1)";
});
