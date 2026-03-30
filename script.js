// FORCE LOADER HILANG (ANTI BLANK)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }
});

// BACKUP (kalau error tetap hilang)
setTimeout(() => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.display = "none";
  }
}, 3000);

// GSAP SAFE MODE
window.addEventListener("DOMContentLoaded", () => {

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1", {
      y:50,
      opacity:0,
      duration:1
    });

    gsap.from(".hero p", {
      y:30,
      opacity:0,
      duration:1,
      delay:0.2
    });

    document.querySelectorAll(".grid").forEach(grid => {
      gsap.from(grid.children, {
        opacity:0,
        y:40,
        stagger:0.2,
        duration:0.8,
        scrollTrigger:{
          trigger:grid,
          start:"top 85%"
        }
      });
    });

  } else {
    console.log("GSAP tidak load (aman)");
  }

});

// PROGRESS BAR
window.addEventListener("scroll", () => {
  const progress = document.getElementById("progress");
  if(progress){
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    progress.style.width = (scrollTop / height) * 100 + "%";
  }
});
