document.addEventListener("DOMContentLoaded", () => {
  console.log("Halaman Service Gratis 2025 dimuat.");

  // Scroll ke atas saat klik judul
  document.querySelectorAll("h1, h2").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  });

  // Animasi saat scroll (lazy reveal)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".section, .card").forEach(el => {
    observer.observe(el);
  });
});
