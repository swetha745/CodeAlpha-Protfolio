// Typing Animation

const texts = [
    "Frontend Developer",
    "UI/UX Designer",
    "Java Programmer",
    "Tech Enthusiast",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type, 1500);

    }else{

        setTimeout(type, 100);

    }

})();

// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");
        themeBtn.textContent = "☀️";

    }else{

        localStorage.setItem("theme","dark");
        themeBtn.textContent = "🌙";

    }

});

// Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".glass, .project-card, .stat-card"
);

function reveal(){

    revealElements.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// Contact Form

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Message sent successfully!"
    );

    form.reset();

});

// Smooth Navbar Highlight

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === "#" + current
        ){
            link.classList.add("active");
        }

    });

});

// Welcome Message

window.addEventListener("load",()=>{

    console.log(
        "Professional Portfolio Loaded Successfully 🚀"
    );

});