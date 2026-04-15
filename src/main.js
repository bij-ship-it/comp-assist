import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
  }

  // Mobile services dropdown
  const mobileServicesBtn = document.getElementById("mobile-services-btn");
  const mobileServicesMenu = document.getElementById("mobile-services-menu");

  if (mobileServicesBtn && mobileServicesMenu) {
    mobileServicesBtn.addEventListener("click", () => {
      mobileServicesMenu.classList.toggle("hidden");
      const arrow = mobileServicesBtn.querySelector("svg");
      if (arrow) arrow.classList.toggle("rotate-180");
    });
  }

  // Desktop services dropdown
  const servicesDropdown = document.getElementById("services-dropdown");
  const servicesMenu = document.getElementById("services-menu");

  if (servicesDropdown && servicesMenu) {
    let timeout;
    servicesDropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      servicesMenu.classList.remove("hidden", "opacity-0");
      servicesMenu.classList.add("opacity-100");
    });
    servicesDropdown.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        servicesMenu.classList.add("hidden", "opacity-0");
        servicesMenu.classList.remove("opacity-100");
      }, 150);
    });
  }

  // Scroll-based navbar background
  const nav = document.getElementById("main-nav");
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add("bg-white", "shadow-md");
        nav.classList.remove("bg-white/95");
      } else {
        nav.classList.remove("shadow-md");
        nav.classList.add("bg-white/95");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // Intersection observer for scroll animations
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-animate]").forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });

  // Form handling
  const forms = document.querySelectorAll("form[data-contact-form]");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = "Sent! We'll be in touch.";
      btn.disabled = true;
      btn.classList.add("bg-green-600");
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.classList.remove("bg-green-600");
        form.reset();
      }, 3000);
    });
  });
});
