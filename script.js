const btn = document.getElementById("toggleBtn");
const introhead = document.querySelector("#intro h1");
const introsub = document.querySelector("#intro p");

let isDark = false;

function render() {
  if (isDark) {
    document.body.classList.add("dark");
    document.title = "Good Night";
    btn.textContent = "Lights on!";
    introhead.textContent = "You See? That was easy! 😴";
    introsub.textContent = "This dark mode is easy on the eyes. Enjoy!";
  } else {
    document.body.classList.remove("dark"); // Ensure removing dark mode class
    document.title = "Good Morning";
    btn.textContent = "Lights off!";
    introhead.textContent = "This Is My First Toggle Button! 🧚🏾‍♀️";
    introsub.textContent =
      "To use the toggle button, simply click on it. Each click will switch between light and dark mode!";
  }
}

// Smooth transition for mode switch
document.body.style.transition = "background-color 1s, color 0.3s";
btn.style.transition = "background-color 0.3s, color 0.3s";

btn.addEventListener("click", function () {
  isDark = !isDark; // Toggle the dark mode state
  document.body.style.transition = "background-color 1s, color 0.3s"; // Set transition for mode switch
  btn.style.transition = "background-color 0.3s, color 0.3s";
  render(); // Call the render function to update the UI
});

// Call render function initially to set initial UI state
render();
