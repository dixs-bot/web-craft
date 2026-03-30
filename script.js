// loader
window.addEventListener("load",()=>{
const loader=document.getElementById("loader");
loader.style.opacity="0";
setTimeout(()=>loader.style.display="none",500);
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1",{y:60,opacity:0,duration:1});
gsap.from(".hero p",{y:40,opacity:0,duration:1,delay:0.2});

gsap.utils.toArray(".grid").forEach(grid=>{
gsap.from(grid.children,{
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

// progress
window.addEventListener("scroll",()=>{
const scrollTop=window.scrollY;
const height=document.body.scrollHeight-window.innerHeight;
document.getElementById("progress").style.width=(scrollTop/height)*100+"%";
});
