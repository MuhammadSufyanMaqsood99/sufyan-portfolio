/* =====================================================
   MANHOOD PORTFOLIO
   JAVASCRIPT
   ===================================================== */

   const themeToggle = document.getElementById("themeToggle");
   const menuToggle = document.getElementById("menuToggle");
   const navMenu = document.getElementById("navMenu");
   
   
   // =====================================================
   // THEME TOGGLE
   // =====================================================
   
   themeToggle.addEventListener("click", () => {
   
       document.body.classList.toggle("light-theme");
   
       if (document.body.classList.contains("light-theme")) {
           themeToggle.textContent = "☾";
           localStorage.setItem("theme", "light");
       } else {
           themeToggle.textContent = "☀";
           localStorage.setItem("theme", "dark");
       }
   
   });
   
   
   // =====================================================
   // LOAD SAVED THEME
   // =====================================================
   
   const savedTheme = localStorage.getItem("theme");
   
   if (savedTheme === "light") {
       document.body.classList.add("light-theme");
       themeToggle.textContent = "☾";
   }
   
   
   // =====================================================
   // MOBILE MENU
   // =====================================================
   
   menuToggle.addEventListener("click", () => {
   
       navMenu.classList.toggle("active");
   
       if (navMenu.classList.contains("active")) {
           menuToggle.textContent = "✕";
       } else {
           menuToggle.textContent = "☰";
       }
   
   });
   
   
   // =====================================================
   // CLOSE MENU AFTER CLICK
   // =====================================================
   
   document.querySelectorAll("nav a").forEach(link => {
   
       link.addEventListener("click", () => {
   
           navMenu.classList.remove("active");
           menuToggle.textContent = "☰";
   
       });
   
   });
   
   
   // =====================================================
   // SIMPLE SCROLL REVEAL
   // =====================================================
   
   const revealElements = document.querySelectorAll(
       ".section-heading, .about-card, .info-box, .skill-card, .project-card, .contact-box"
   );
   
   const observer = new IntersectionObserver(
       (entries) => {
   
           entries.forEach(entry => {
   
               if (entry.isIntersecting) {
   
                   entry.target.style.opacity = "1";
                   entry.target.style.transform = "translateY(0)";
   
               }
   
           });
   
       },
       {
           threshold: 0.1
       }
   );
   
   
   revealElements.forEach(element => {
   
       element.style.opacity = "0";
       element.style.transform = "translateY(30px)";
       element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
   
       observer.observe(element);
   
   });