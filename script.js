//your code here
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".dog-adoption");

    form.addEventListener("submit", (event) => {
        // Prevent default browser refresh on form submit
        event.preventDefault();

        // Extract input values
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const hasDogBefore = document.getElementById("checkbox").checked;
        const selectedBreed = document.getElementById("multiSelect").value;

        // Custom validation check
        if (name === "" || phone === "" || address === "") {
            alert("Please fill out all required fields.");
            return;
        }

        // Basic phone structure validation (minimum 10 digits)
        if (phone.replace(/\D/g, "").length < 10) {
            alert("Please enter a valid phone number with at least 10 digits.");
            return;
        }

        // Successfully gathered data structure 
        const formData = {
            applicantName: name,
            phoneNumber: phone,
            homeAddress: address,
            experiencedOwner: hasDogBefore,
            preferredBreed: selectedBreed
        };

        console.log("Form Submitted Successfully!", formData);
        alert(`Thank you, ${name}! Your dog adoption application has been submitted.`);
        
        // Optional: Reset form fields after successful entry
        form.reset();
    });
});