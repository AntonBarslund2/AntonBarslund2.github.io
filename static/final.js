function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
function redirectToInstagram() {

    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.instagram.com/brorbruland/", '_blank');
}

function redirectToThreads() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.threads.net/@brorbruland", '_blank');
}

function redirectToX() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://www.instagram.com/brorbruland/", '_blank');
}

function redirectToLinkedIn() {
    // Change the Instagram URL to your actual Instagram profile URL
    window.open("https://dk.linkedin.com/in/bror-bruland-4528ab221", '_blank');
}

document.getElementById('contactme').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    

    const firstNameInput = document.getElementById('firstname');
    const sureNameInput = document.getElementById('surename');
    const emailInput = document.getElementById('email');
    const phoneNr = document.getElementById('phonenr');
    const courseInput = document.getElementById('course');
    const experienceInput = document.getElementById('experience');
    const messageInput = document.getElementById('message');
    const btn = document.getElementById('signup');

    
    const name = firstNameInput.value + " " + sureNameInput.value;
    const email = emailInput.value;
    const phone = phoneNr.value;
    const course = courseInput.value;
    const experience = experienceInput.value;
    const message = messageInput.value;

    console.log(name, email, phone, course, experience, message);

    if (!name || !email || !message || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    if (course === "placeholder"){
        alert("vælg forløb")
        return;
    }
    if (experience === "placeholder"){
        alert("vælg erfaring")
        return;
    }

    //email.js
    // default mail set in email.js

    const serviceID = 'default_service';
    const templateID = 'template_ghk032p';

    btn.textContent = "Sending...";

    var courseOption = document.getElementById("course").value;
    var experienceOption = document.getElementById("experience").value;

    var contactform = {
        name: name,
        email: email,
        phone: phone,
        course: courseOption,
        experience: experienceOption,
        message: message,
      };

    console.log(contactform);


    emailjs.send(serviceID, templateID, contactform)
        .then(() => {
            btn.textContent = 'Email sendt';
            alert('Sent!');
        }, (err) => {
            btn.textContent = 'Send Email';
            alert(JSON.stringify(err));
    });


  });