const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "RAWR";

  // Open a new window with a funny photo
  window.open("https://i.pinimg.com/736x/97/97/1c/97971c41e12102aef12837761324ff0c.jpg", "FunnyPhoto", "width=100%,height=100%");
});

noBtn.addEventListener("click", () => {
  noBtn.style.transition = "all 0.5s ease";
  noBtn.style.transform = "scale(0)";
  noBtn.style.opacity = "0";

  setTimeout(() => {
    noBtn.style.display = "none";
  }, 500);
});


