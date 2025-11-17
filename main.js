document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector('#imageAoocordion');
  const panels = accordion.querySelectorAll(".panel");

  // 1st panel active initially
  panels[0].classList.add("active");

  panels.forEach(panel => {
    panel.addEventListener("mouseenter", () => {
      
      // remove active from all panels
      panels.forEach(p => p.classList.remove("active"));

      // add active to clicked one
      panel.classList.add("active");
    });
  });
});
