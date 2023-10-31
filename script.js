function toggleMenu() {
  console.log('toggleMenu function called');
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

function toggleVersionDropdown() {
  var dropdown = document.getElementById("version-dropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function downloadVersion(version) {
  var downloadAlert = document.getElementById("download-alert");
  var downloadedVersion = document.getElementById("downloaded-version");

  downloadedVersion.textContent = version;
  downloadAlert.style.display = "block";

  event.stopPropagation();
}

function showContactForm() {
  document.getElementById("download-alert").style.display = "none";
  var contactForm = document.getElementById("contact-form");
  contactForm.style.display = "block";
}

function submitFeedback() {
  var name = document.getElementById("name").value;
  var feedback = document.getElementById("feedback").value;

  var thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.innerHTML = "Thank you, " + name + "!";
  thankYouMessage.style.display = "block";

  document.getElementById("name").value = "";
  document.getElementById("feedback").value = "";

  var contactForm = document.getElementById("contact-form");
  contactForm.style.display = "none";
}

document.addEventListener('click', function (event) {
  var downloadAlert = document.getElementById("download-alert");
  var downloadButton = document.getElementById("download-btn");
  var contactForm = document.getElementById("contact-form");
  var thankYouMessage = document.getElementById("thank-you-message");
  var dropdown = document.getElementById("version-dropdown");

  if (downloadAlert.style.display === "block" && event.target !== downloadAlert && event.target !== downloadButton) {
    downloadAlert.style.display = "none";
    dropdown.style.display = "none";
  }

  if (event.target !== contactForm && !contactForm.contains(event.target)) {
    thankYouMessage.style.display = "none";
  }
});