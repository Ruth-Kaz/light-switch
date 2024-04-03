const btn = document.getElementById("toggleBtn");
let isDark = false;

function render() {
  if (isDark) {
    document.body.classList.add("dark");
    document.title = "Good Night";
    btn.textContent = "Lights on!";
  } else {
    document.body.classList.remove("dark"); // Ensure removing dark mode class
    document.title = "Good Morning";
    btn.textContent = "Lights off!";
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
