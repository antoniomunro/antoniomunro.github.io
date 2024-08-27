function toggleDarkLight() {
  var body = document.getElementById("body");
  var button = document.getElementsByName("dark-light")[0];
  var currentClass = body.className;
  const subHeader = document.querySelector('.sub-header');
  const centerText = document.querySelector('.center-text');
  const githubButton = document.getElementById('githubButton');
  const linkedInButton = document.getElementById('linkedInButton');
  const leetCodeButton = document.getElementById('leetCodeButton');

  if (currentClass === "dark-mode") {
      body.className = "light-mode";
      button.innerHTML = "☾";
      subHeader.textContent = 'Developer';
      

  } else {
      body.className = "dark-mode";
      button.innerHTML = "𖤓";
      subHeader.textContent = 'Designer';
  }
}

function updateTime() {
  // Get the current date and time
  var now = new Date();
  
  // Convert to New Zealand local time (NZST/NZDT)
  var options = { 
    timeZone: 'Pacific/Auckland', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true 
  };
  var datetime = now.toLocaleString('en-NZ', options);
  
  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;
}

// Update time every second
setInterval(updateTime, 1000);