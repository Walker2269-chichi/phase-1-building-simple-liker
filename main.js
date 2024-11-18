// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Adding the hidden class to the error modal initially
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Select all the heart icons
  const hearts = document.querySelectorAll(".like-glyph");

  // Add event listeners to each heart
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Simulate a server call
      mimicServerCall()
        .then(() => {
          // Toggle heart state if the server call succeeds
          if (heart.textContent === "♡") {
            heart.textContent = "♥";
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = "♡";
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Handle errors by displaying the modal and error message
          const modalMessage = document.getElementById("modal-message");
          modalMessage.textContent = error;
          errorModal.classList.remove("hidden");

          // Hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

// Provided mimicServerCall function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly simulate success or failure
      const isRandomSuccess = Math.random() < 0.7;
      if (isRandomSuccess) {
        resolve("Pretend remote server notified of action!");
      } else {
        reject("Random server error. Try again.");
      }
    }, 300);
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
