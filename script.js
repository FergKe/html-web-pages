

// ----> Loading varibles 

const testimonialsPara = document.getElementById("para");
const testimonialsName = document.getElementById("testimonials-name");
const testimonialsJobTitle = document.getElementById("job-title");
const testimonialsProfilePic = document.getElementById("profile-pic");
const testimonialsArrowLeft = document.getElementById("arrow-left");
const testimonialsArrowRight = document.getElementById("arrow-right");
const dots = document.querySelectorAll(".dot");
let testimonialsCount = 0;

const footerDate = document.getElementById("copyright-date");
const date = new Date();

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactMessage = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// ----> Testimonials animation function 

const testimonials = [
    {
        theName: "June Cha",
        position: "Software Engineer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
        isActive: false
    },
    {
        theName: "Iida Niskanen",
        position: "Data Engineer",
        photo: "https://randomuser.me/api/portraits/women/67.jpg",
        text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
        isActive: false
    },
    {
        theName: "Renee Sims",
        position: "Cloud engineer",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
        isActive: false
    },
    {
        theName: "Sasha Ho",
        position: "Phd student",
        photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
        isActive: false
    },
    {
        theName: "Veeti Seppanen",
        position: "Frontend developer",
        photo: "https://randomuser.me/api/portraits/men/97.jpg",
        text: "As a seasoned programmer, I'm always on the lookout forplatforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
        isActive: false
    }
]

const change = () => {
    testimonialsCount++
    if (testimonialsCount > 4) {
        testimonialsCount = 0
    };

    testimonialsName.innerHTML = testimonials[testimonialsCount].theName;
    testimonialsName.classList.toggle("fade")
    testimonialsPara.innerHTML = testimonials[testimonialsCount].text;
    testimonialsJobTitle.innerHTML = testimonials[testimonialsCount].position;
    testimonialsProfilePic.src = testimonials[testimonialsCount].photo;
    dots[testimonialsCount].classList.add("active");

    if ( testimonialsCount === 0 ) {
        dots[4].classList.remove("active")
    } else {
        dots[testimonialsCount - 1].classList.remove("active")
    }
}

const nextTestimonial = () => {
    testimonialsCount++
    if (testimonialsCount > 4) {
        testimonialsCount = 0
    };
    testimonialsName.innerHTML = testimonials[testimonialsCount].theName;
    testimonialsPara.innerHTML = testimonials[testimonialsCount].text;
    testimonialsJobTitle.innerHTML = testimonials[testimonialsCount].position;
    testimonialsProfilePic.src = testimonials[testimonialsCount].photo;
    dots[testimonialsCount].classList.add("active");

    if ( testimonialsCount === 0 ) {
        dots[4].classList.remove("active")
    } else {
        dots[testimonialsCount - 1].classList.remove("active")
    }

}

const previousTestimonial = () => {
    testimonialsCount--
        if (testimonialsCount < 0) {
        testimonialsCount = 4
    };
    testimonialsName.innerHTML = testimonials[testimonialsCount].theName;
    testimonialsPara.innerHTML = testimonials[testimonialsCount].text;
    testimonialsJobTitle.innerHTML = testimonials[testimonialsCount].position;
    testimonialsProfilePic.src = testimonials[testimonialsCount].photo;
    dots[testimonialsCount].classList.add("active");

    if ( testimonialsCount === 4 ) {
        dots[0].classList.remove("active")
    } else {
        dots[testimonialsCount + 1].classList.remove("active")
    }


}

// ----> Seting footer date

footerDate.innerHTML = `&#169; ${date.getFullYear()} Your Competitive Programming Platform. All Rights Reserved`

// ----> Testimonials event listeners 

setInterval(change, 3000);
testimonialsArrowRight.addEventListener("click", nextTestimonial);
testimonialsArrowLeft.addEventListener("click", previousTestimonial);

// ----> Contact Us Event Listnerers
contactForm.addEventListener("submit", (event) => {
    console.log("here")
    event.preventDefault();

    nameError.classList.add("hidden")
    emailError.classList.add("hidden")
    messageError.classList.add("hidden")
    
    if (contactName.value === "") {
        nameError.classList.remove("hidden");
    }
    if (contactEmail.value === "") {
        emailError.classList.remove("hidden");
    }
    if (contactMessage.value === "") {
        messageError.classList.remove("hidden");
    }

    if ( contactName === "" || contactEmail === "" || contactMessage === "" ) {
        return
    } else {
        //event.target.submit();
        Swal.fire({
            icon: "success",
            title: "Thank you for reaching out!",
            text: "Form Submitted Successfully!"
        })
    }
});

contactName.addEventListener("focus", () => {
    nameError.classList.add("hidden")
});
contactEmail.addEventListener("focus", () => {
    emailError.classList.add("hidden")
});
contactMessage.addEventListener("focus", () => {
    messageError.classList.add("hidden")
});




