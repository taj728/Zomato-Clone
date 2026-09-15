const acc = document.querySelectorAll(".accordion-container");

acc.forEach((x) => {
  x.addEventListener("click", (e) => {
    const data = x.nextElementSibling;
    const chevron = x.querySelector("svg");
    if (data.style.display == "block") {
      data.style.display = "none";
      chevron.classList.remove("animate");
    } else {
      data.style.display = "block";
      chevron.classList.add("animate");
    }
  });
});
