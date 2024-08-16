
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneNr = document.getElementById('phonenr');
    const courseInput = document.getElementById('course');
    const messageInput = document.getElementById('message');
    const btn = document.getElementById('send');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneNr.value;
    const course = courseInput.value;
    const message = messageInput.value;



    if (!name || !email || !message || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    if (course === "placeholder"){
        alert("vælg forløb")
    }

    //email.js
    // default mail set in email.js

    const serviceID = 'default_service';
    const templateID = 'template_ghk032p';

    btn.textContent = "Sending...";

    var selectedOption = document.getElementById("course").value;

    var contactform = {
        name: name,
        email: email,
        phone: phone,
        course: selectedOption,
        message: message,
      };

    emailjs.send(serviceID, templateID, contactform)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
    });

    btn.textContent = "Sendt";


  });