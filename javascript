// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Welcome message in console

console.log(
    "Welcome to Chaithanya M Portfolio Website"
);



// Add animation when scrolling

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position = section.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.3;


        if(position < screenPosition){

            section.classList.add("show");

        }


    });


});