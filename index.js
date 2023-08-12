// Image change

let element = document.querySelector('#image-carousel')

let imageIndex = 0;
const imageSources = ['media/dhoni-family.jpg', 'media/dhoni-family-3.jpg', 'media/dhoni-family-4.png', 'media/movie-poster.webp'];

function changeImage(){
    element.src = imageSources[imageIndex];
    imageIndex = (imageIndex + 1) % imageSources.length;
}

setInterval(changeImage, 3500);


// Qoutes change
let qouteElement = document.querySelector('#quotes')
let qouteIndex = 0;
let qoute1 = "Dhoni is my hero. We talk a lot about Sachin Tendulkar, Virender Sehwag, but this boy has as much as talent as anyone in the game.<br><br> - Kapil Dev"
let qoute2 = "I don't think one can question MS' leadership<br><br> - Virat Kohli"
let qoute3 = "If 15 runs are needed off the last over, the pressure is on the bowler not on MS Dhoni.<br><br> - Ian Bishop"
let qoute4 = "Someone whom I have always admired for his ability to remain balanced and have the sense of equanimity about his captaincy.<br><br> - Rahul dravid"
let qoute5 = "Dhoni is the best captain I have played under.<br><br> - Sachin Tendulkar"
let qoute6 = "When I die, the last thing I want to see is the six that Dhoni hit in the 2011 World Cup final.<br><br> - Sunil Gavaskar"

let qouteSources = [qoute1, qoute2, qoute3, qoute4, qoute5, qoute6]

function changeText(){
    qouteElement.innerHTML = qouteSources[qouteIndex];
    qouteIndex = (qouteIndex + 1) % qouteSources.length;
}

setInterval(changeText, 10000)

gsap.from("#colon1",{
    y: -70,
    x: -70,
    opacity: 0,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        delay: 0.6,
        scrub: 1
    }
})

gsap.from("#colon2",{
    y: -70,
    x: -70,
    opacity: 0,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        delay: 0.6,
        scrub: 1
    }
})

gsap.from("#quotes",{
    y: -70,
    x: -70,
    opacity: 0,
    scrollTrigger:{
        trigger: "#quotes",
        scroller: "body",
        delay: 1,
        scrub: 1
    }
})


gsap.from("#awards-h1",{
    y: -30,
    stagger: 0.5,
    scrollTrigger:{
        trigger: ".page4",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 1,
    }
})

gsap.from(".page4",{
    y: 80,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
        trigger: ".page4",
        scroller: "body",
        start: "top 79%",
        end: "top 70%",
        delay: 2,
        scrub: 2,
    }
})