gsap.registerPlugin(ScrollTrigger);

/* LOADER */
gsap.to(".loader-text", {
opacity:1,
duration:1
});

gsap.to("#loader", {
opacity:0,
duration:1,
delay:1.5,
onComplete: () => {
document.getElementById("loader").style.display = "none";
}
});

/* HERO */
gsap.from(".hero h1", {
y:100,
opacity:0,
duration:1.2,
ease:"power4.out"
});

gsap.from(".hero p", {
y:80,
opacity:0,
duration:1,
delay:0.2
});

gsap.from(".hero .btn", {
scale:0.8,
opacity:0,
duration:0.8,
delay:0.4,
ease:"back.out(1.7)"
});

/* REVEAL */
gsap.utils.toArray(".reveal").forEach(section => {
gsap.to(section, {
opacity:1,
y:0,
duration:1,
scrollTrigger:{
trigger:section,
start:"top 85%"
}
});
});

/* STAGGER */
gsap.utils.toArray(".grid").forEach(grid => {
gsap.from(grid.children, {
opacity:0,
y:60,
duration:0.8,
stagger:0.15,
scrollTrigger:{
trigger:grid,
start:"top 85%"
}
});
});

/* PROGRESS */
window.addEventListener("scroll", () => {
const scrollTop = window.scrollY;
const height = document.body.scrollHeight - window.innerHeight;
const progress = (scrollTop / height) * 100;
document.getElementById("progress").style.width = progress + "%";
});

/* MAGNETIC */
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mousemove",e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{x:x*0.2,y:y*0.2,duration:0.3});
});

btn.addEventListener("mouseleave",()=>{
gsap.to(btn,{x:0,y:0,duration:0.3});
});
});
