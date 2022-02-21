// Contact form submition
const scriptURL = "https://script.google.com/macros/s/AKfycbzNElDnUApbtgdZJ_fqfRT4_Z74XZ8rF8aqaly_5rwXr6Xg5_afuUkeDhwO66OTXaX04w/exec";
const form = document.forms["portfolio-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // When message is sending, btn-loading will appear while btn-send will be hidden
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // When message is sent, btn-send will appear while btn-loading will be hidden
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // Show alert when sending is success
      myAlert.classList.toggle("d-none");
      // Reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
