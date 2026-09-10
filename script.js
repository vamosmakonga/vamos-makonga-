document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("navLinks");

  // Etat fermé au début
  menu.style.transform = "translateX(100%)";
  menu.style.transition = "0.3s ease";
  
  btn.onclick = () => {
    const isOpen = menu.classList.contains("active");
    if(!isOpen){
      menu.classList.add("active");
      menu.style.display = "flex";
      setTimeout(()=> menu.style.transform = "translateX(0)", 10);
      btn.textContent = "✕";
      document.body.style.overflow = "hidden"; // bloque le scroll
    } else {
      menu.style.transform = "translateX(100%)";
      setTimeout(()=> {
        menu.classList.remove("active");
        menu.style.display = "none";
      }, 300);
      btn.textContent = "☰";
      document.body.style.overflow = "";
    }
  };

  // Ferme si on clique sur un lien
  document.querySelectorAll("#navLinks a").forEach(a => {
    a.onclick = () => {
      menu.style.transform = "translateX(100%)";
      setTimeout(()=> {
        menu.classList.remove("active");
        menu.style.display = "none";
      }, 300);
      btn.textContent = "☰";
      document.body.style.overflow = "";
    }
  });
});