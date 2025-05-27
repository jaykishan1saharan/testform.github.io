document.getElementById("test_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let uname = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Fetch selected radio button values
    let age = document.querySelector("input[name='age']:checked")?.value || "Not selected";
    let education = document.querySelector("input[name='education']:checked")?.value || "Not selected";

    // Fetch selected radio button values
    let subject = document.querySelector("input[name='subject']:checked")?.value || "Not selected";

    let message = `Full Name: ${uname}%0AEmail: ${email}%0APhone: ${phone}%0AAge: ${age}%0AEducation: ${education}%0ASubjects: ${subject}`;

    let whatsappNumber = "919881900876"; // Replace with your number

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
});
