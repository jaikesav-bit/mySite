const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = input.value;
    output.innerHTML += `<div><span class="prompt">$</span> ${command}</div>`;
    
    // Respond to commands
    if (command === "help") {
      output.innerHTML += "<div>Available commands: help, about, clear</div>";
    } else if (command === "about") {
      output.innerHTML += "<div>This is a terminal-style website.</div>";
    } else if (command === "clear") {
      output.innerHTML = "";
    } else if (command === "ls"){
      output.innerHTML = "";
    }else {
      output.innerHTML += "<div>Command not found</div>";
    }

    input.value = ""; // clear input
    window.scrollTo(0, document.body.scrollHeight); // scroll down
  }
});
