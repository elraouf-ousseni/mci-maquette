const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -48px 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const switches = document.querySelectorAll(".switch");
const projectGroups = document.querySelectorAll(".project-group");

switches.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    switches.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectGroups.forEach((group) => {
      group.classList.toggle("is-active", group.dataset.group === target);
    });
  });
});

const parallaxNodes = document.querySelectorAll("[data-parallax]");

if (parallaxNodes.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight;

    parallaxNodes.forEach((node) => {
      const speed = Number(node.dataset.parallax || 0);
      const rect = node.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const offset = progress * speed * -120;
      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });

    ticking = false;
  };

  const requestParallax = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  updateParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
}

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

if (heroSlides.length > 1) {
  let activeSlide = 0;

  const setActiveSlide = (nextIndex) => {
    heroSlides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === nextIndex);
    });

    heroDots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === nextIndex);
    });
  };

  window.setInterval(() => {
    activeSlide = (activeSlide + 1) % heroSlides.length;
    setActiveSlide(activeSlide);
  }, 4200);
}
