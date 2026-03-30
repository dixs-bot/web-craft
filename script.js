gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {y:80, opacity:0, duration:1});
gsap.from(".hero p", {y:60, opacity:0, duration:1, delay:0.2});
gsap.from(".hero .btn", {scale:0.8, opacity:0, duration:0.8, delay:0.4});

// SECTION REVEAL
gsap.utils.toArray(".reveal").forEach(section => {
gsap.from(section, {
opacity:0,
y:80,
duration:1,
scrollTrigger:{
trigger:section,
start:"top 85%"
}
});
});

// CARD STAGGER
gsap.utils.toArray(".grid").forEach(grid => {
gsap.from(grid.children, {
opacity:0,
y:50,
duration:0.8,
stagger:0.2,
scrollTrigger:{
trigger:grid,
start:"top 85%"
}
});
});

// MAGNETIC BUTTON
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
