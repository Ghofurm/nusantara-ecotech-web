document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 1. Logic Greeting Waktu
    const greetingElement =
      document.getElementById("greeting");
    if (greetingElement) {
      const now = new Date();
      const hour = now.getHours();
      let greetingText = "";

      if (hour >= 5 && hour <= 10)
        greetingText = "Selamat Pagi";
      else if (hour >= 11 && hour <= 14)
        greetingText = "Selamat Siang";
      else if (hour >= 15 && hour <= 17)
        greetingText = "Selamat Sore";
      else greetingText = "Selamat Malam";

      greetingElement.textContent = greetingText;
    }

    // 2. Logic Navbar Scroll Effect
    const navbar =
      document.querySelector(".navbar");

    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar-scrolled");
          navbar.classList.remove("navbar-dark");
          navbar.classList.add("navbar-light");
        } else {
          navbar.classList.remove(
            "navbar-scrolled"
          );
          navbar.classList.add("navbar-dark");
          navbar.classList.remove("navbar-light");
        }
      }
    );
  }
);
