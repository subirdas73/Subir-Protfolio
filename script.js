// Loader

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";
    }, 1200);
});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if(nav.style.display === "block"){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }

});


// Header Background Change

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(11,17,32,0.95)";
        header.style.backdropFilter = "blur(20px)";
    }else{
        header.style.background = "rgba(255,255,255,0.05)";
    }

});


// Reveal Animation

const revealElements = document.querySelectorAll(
    ".card, .skill, .project-card, .section-title"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Typing Effect

const roles = [
    "Freelancer",
    "PF Consultant",
    "Data Entry Operator",
    "Customer Support"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-content h2");

function typeEffect(){

    if(!typingElement) return;

    let currentRole = roles[roleIndex];

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    charIndex++;

    if(charIndex <= currentRole.length){

        setTimeout(typeEffect, 100);

    }else{

        setTimeout(() => {

            charIndex = 0;
            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

            typeEffect();

        }, 1500);

    }

}

typeEffect();


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#3b82f6";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const whatsappForm =
document.getElementById("whatsapp-form");

if(whatsappForm){

    whatsappForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const name =
            document.getElementById("name").value;

            const email =
            document.getElementById("email").value;

            const message =
            document.getElementById("message").value;

            const text =
`Hello Subir,

Name: ${name}
Email: ${email}

Message:
${message}`;

            const whatsappURL =
`https://wa.me/917365996618?text=${encodeURIComponent(text)}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}