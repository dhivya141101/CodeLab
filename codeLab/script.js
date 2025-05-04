// Select the video element
var video = document.getElementById('heroVideo');

// Set the desired start and end time in seconds
var startTime = 7;    // 7 seconds
var endTime = 30;     // 30 seconds

// When metadata is loaded, set video to startTime
video.addEventListener('loadedmetadata', function() {
  video.currentTime = startTime;
});

// Continuously check video time
video.addEventListener('timeupdate', function() {
  if (video.currentTime >= endTime) {
    video.currentTime = startTime; // loop it back to startTime
  }
});

// Form Validation Function
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill in all the fields correctly!');
    return false; // prevent form submission
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address!');
    return false;
  }

  alert('Message sent successfully! 🚀');
  return true;
}

// Simple email validation
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


// Add event listener for Resume download button
document.getElementById("downloadResume").addEventListener("click", function() {
  const resumeLink = "resume.pdf"; // Path to the actual resume PDF file

  // Check if the resume file exists (simulate a check here for example)
  if (resumeLink) {
    const messageElement = document.getElementById("downloadMessage");
    messageElement.style.color = "green";
    messageElement.textContent = "Resume downloading... 🚀";

    // Simulate file download action (real file download)
    window.location.href = resumeLink; // This triggers the download of the file

    setTimeout(() => {
      messageElement.textContent = "Download started! 🎉"; // Confirmation Message
    }, 1000);
  } else {
    const messageElement = document.getElementById("downloadMessage");
    messageElement.style.color = "red";
    messageElement.textContent = "Error: Resume not found! Please try again later.";
  }
});


// Adding form data to localStorage
document.getElementById("submitButton").addEventListener("click", function() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if fields are filled out
  if (name && email && subject && message) {
    // Save form data in localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactSubject", subject);
    localStorage.setItem("contactMessage", message);

    // Show confirmation message
    document.getElementById("formMessage").textContent = "Thank you! Your message has been saved.";
  } else {
    document.getElementById("formMessage").textContent = "Please fill out all fields.";
  }
});
