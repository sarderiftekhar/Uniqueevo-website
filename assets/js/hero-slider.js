(function () {
  var slides = document.querySelectorAll(".hero-slide");
  var dots = document.querySelectorAll(".slide-dot");
  var textSlides = document.querySelectorAll(".hero-text-slide");
  var current = 0;
  var interval = 5000;
  var timer;

  if (slides.length === 0) return;

  function goToSlide(index) {
    // Remove active from current
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    if (textSlides[current]) textSlides[current].classList.remove("active");

    current = index;
    if (current >= slides.length) current = 0;
    if (current < 0) current = slides.length - 1;

    // Add active to new
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");

    // Re-trigger text animation by cloning and replacing
    if (textSlides[current]) {
      var el = textSlides[current];
      el.classList.remove("active");
      // Force reflow to restart CSS animation
      void el.offsetWidth;
      el.classList.add("active");
    }
  }

  function nextSlide() {
    goToSlide(current + 1);
  }

  function startTimer() {
    timer = setInterval(nextSlide, interval);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // Dot click handlers
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      goToSlide(i);
      resetTimer();
    });
  });

  startTimer();
})();
