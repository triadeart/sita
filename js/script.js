(function () {
  "use strict";

  // ---- WhatsApp links ----
  var WHATSAPP_NUMBER = "556196935858"; // +55 61 9693-5858 — confirme o formato (DDD + número) antes de publicar
  var WHATSAPP_MESSAGE = "Olá! Quero confirmar minha presença na celebração dos 59 anos da Sita Madhu, no dia 01/08. 🎉";

  var waHref = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  document.querySelectorAll(".js-whatsapp").forEach(function (el) {
    el.setAttribute("href", waHref);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Carousels (photo break + local drone shots) ----
  document.querySelectorAll(".carousel").forEach(function (carousel) {
    var slides = carousel.querySelectorAll(".carousel-slide");
    var dots = carousel.querySelectorAll(".carousel-dot");
    var prevBtn = carousel.querySelector(".carousel-arrow--prev");
    var nextBtn = carousel.querySelector(".carousel-arrow--next");
    var interval = parseInt(carousel.getAttribute("data-interval"), 10) || 5000;
    var current = 0;
    var timer = null;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) { slide.classList.toggle("is-active", i === current); });
      dots.forEach(function (dot, i) { dot.classList.toggle("is-active", i === current); });
    }

    function restartTimer() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, interval);
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); restartTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); restartTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); restartTimer(); });
    });

    carousel.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    carousel.addEventListener("mouseleave", restartTimer);

    if (slides.length > 1) restartTimer();
  });

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
