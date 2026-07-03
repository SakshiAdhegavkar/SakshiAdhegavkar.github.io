/* =====================================
   PORTFOLIO JAVASCRIPT
   PART 1
===================================== */

// Smooth Navigation

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

window.scrollTo({

top:target.offsetTop-80,

behavior:'smooth'

});

});

});



// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-120){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// Scroll Reveal

const revealElements=document.querySelectorAll(

'.card,.project-card,.certificate-card,.hero-text,.hero-image'

);

function reveal(){

revealElements.forEach(element=>{

const windowHeight=window.innerHeight;

const revealTop=element.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

element.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
/* =====================================
   PART 2
===================================== */

// Typing Animation

const typingElement = document.querySelector(".hero-text h2");

const words = [

"Aspiring VLSI Engineer",

"Digital Electronics Enthusiast",

"Verilog HDL Learner",

"Semiconductor Technology"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typingElement.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typingElement.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();



// Hover Animation for Cards

const cards = document.querySelectorAll(

'.card,.project-card,.certificate-card'

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});



// Image Hover

const profile=document.querySelector(".hero-image img");

profile.addEventListener("mousemove",()=>{

profile.style.transform="scale(1.05)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

});



// Social Icons

const icons=document.querySelectorAll(".social a");

icons.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0px)";

});

});
/* =====================================
   PART 3
===================================== */

// Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 20px rgba(56,189,248,.5)";
topButton.style.transition = ".3s";
topButton.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// Button Hover Effect

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});



// Fade Animation While Scrolling

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s ease";

observer.observe(section);

});



// Hero Image Glow

setInterval(()=>{

profile.style.boxShadow=

"0 0 30px #38bdf8,0 0 60px rgba(56,189,248,.6)";

setTimeout(()=>{

profile.style.boxShadow=

"0 0 20px #38bdf8";

},1000);

},2000);
/* =====================================
   PART 4
===================================== */

// Navbar Background on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(5,15,30,.98)";
header.style.padding="16px 8%";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.35)";

}
else{

header.style.background="rgba(7,17,31,.95)";
header.style.padding="22px 8%";
header.style.boxShadow="none";

}

});



// Mouse Glow Effect

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="#38bdf8";
glow.style.pointerEvents="none";
glow.style.opacity=".45";
glow.style.filter="blur(10px)";
glow.style.zIndex="9999";

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});



// Hero Buttons Ripple

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;
const y=e.offsetY;

ripple.style.position="absolute";
ripple.style.left=x+"px";
ripple.style.top=y+"px";
ripple.style.width="10px";
ripple.style.height="10px";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.5)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});



// Dynamic Footer Year

const footer=document.querySelector("footer");

const year=document.createElement("p");

year.style.marginTop="15px";

year.innerHTML="© "+new Date().getFullYear()+" Sakshi Adhegavkar";

footer.appendChild(year);



// Console Message

console.log("Portfolio Loaded Successfully");



// Welcome Message

setTimeout(()=>{

console.log("Welcome Recruiter 👋");

},1200);



// Performance

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});



// Prevent Image Drag

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});



// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});



// End

console.log("VLSI Portfolio Ready 🚀");
