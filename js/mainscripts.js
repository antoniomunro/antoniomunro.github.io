// mainscripts.js
let lastClickedButton = '';

// Function to change content based on the selected section
function changeContent(section) {

    lastClickedButton = section;

    switch(section) {
        case 'home':
            myHome();
            break;
        case 'projects':
            myProjects();
            break;
        case 'info':
            myInfo();
            break;
        case 'contact':
            myContact();
            break;
        default:
            myHome();
    }
}

// Function to display Home content
function myHome() {
    var centerText = document.querySelector('.center-text');

    centerText.innerHTML = `
        <p>
            Born in Wellington New Zealand, <br>
            I believe in merging logic with creativity to <br>
            develop impactful digital solutions.
        </p>
    `;
}

// Function to display Info content
function myInfo() {
    var centerText = document.querySelector('.center-text');
    var body = document.getElementById("body");
    var currentClass = body.className;

    if (currentClass === "dark-mode") {
        centerText.innerHTML = 
            '<button class="image-button" id="githubButton" style="background-image: url(\'./images/github-mark-white.svg\');"></button>' +
            '<button class="image-button" id="linkedInButton" style="background-image: url(\'./images/linkedin-mark-white.svg\');"></button>' +
            '<button class="image-button" id="leetCodeButton" style="background-image: url(\'./images/leetcode-mark-white.svg\');"></button>';
    } else {
        centerText.innerHTML = 
            '<button class="image-button" id="githubButton" style="background-image: url(\'./images/github-mark.svg\');"></button>' +
            '<button class="image-button" id="linkedInButton" style="background-image: url(\'./images/linkedin-mark.svg\');"></button>' +
            '<button class="image-button" id="leetCodeButton" style="background-image: url(\'./images/leetcode-mark.svg\');"></button>';
    }

    // Add event listeners to the buttons
    document.getElementById('githubButton').onclick = function() {
        window.open('https://www.github.com/antoniomunro/', '_blank');
    };

    document.getElementById('linkedInButton').onclick = function() {
        window.open('https://www.linkedin.com/in/antoniomunro/', '_blank');
    };

    document.getElementById('leetCodeButton').onclick = function() {
        window.open('https://leetcode.com/u/antonio_munro/', '_blank');
    };
}

// Placeholder functions for Projects and Contact
function myProjects() {
    var centerText = document.querySelector('.center-text');
    centerText.innerHTML = `<p>You can find out more on what<br>i'm current working on in my GitHub repo.</p>`;
}

function myContact() {
    // Get the right-container div
    var centerText = document.querySelector('.center-text');
    // Change the text inside the right-container div
    centerText.innerHTML = `
    <p>Want to know more?</p><ul>
    <a href="mailto:antoniomunro@protonmail.com" style="text-decoration: none;">
    <p><i>Send me a message.<i/></a></p>
    `
}

function toggleDarkLight() {
    var body = document.getElementById("body");
    var button = document.getElementsByName("dark-light")[0];
    var currentClass = body.className;
    const subHeader = document.querySelector('.sub-header');

    if (currentClass === "dark-mode") {
        body.className = "light-mode";
        button.innerHTML = "☾";
        subHeader.textContent = 'Debugger & Code Breaker';
        updateTheme('light');  // Update Three.js to light mode

    } else {
        body.className = "dark-mode";
        button.innerHTML = "𖤓";
        subHeader.textContent = 'Designer & Developer';
        updateTheme('dark');  // Update Three.js to dark mode

    }

    // Check if the last clicked button was 'info'
    if (lastClickedButton === 'info') {
        const centerText = document.querySelector('.center-text');
        if (currentClass === "dark-mode") {
            // If switching to light mode
            centerText.innerHTML = 
                '<button class="image-button" id="githubButton" style="background-image: url(\'./images/github-mark.svg\');"></button>' +
                '<button class="image-button" id="linkedInButton" style="background-image: url(\'./images/linkedin-mark.svg\');"></button>' +
                '<button class="image-button" id="leetCodeButton" style="background-image: url(\'./images/leetcode-mark.svg\');"></button>';
        } else {
            // If switching to dark mode
            centerText.innerHTML = 
                '<button class="image-button" id="githubButton" style="background-image: url(\'./images/github-mark-white.svg\');"></button>' +
                '<button class="image-button" id="linkedInButton" style="background-image: url(\'./images/linkedin-mark-white.svg\');"></button>' +
                '<button class="image-button" id="leetCodeButton" style="background-image: url(\'./images/leetcode-mark-white.svg\');"></button>';
        }

        // Re-attach the event listeners for the buttons
        document.getElementById('githubButton').onclick = function() {
            window.open('https://www.github.com/antoniomunro/', '_blank');
        };

        document.getElementById('linkedInButton').onclick = function() {
            window.open('https://www.linkedin.com/in/antoniomunro/', '_blank');
        };

        document.getElementById('leetCodeButton').onclick = function() {
            window.open('https://leetcode.com/u/antonio_munro/', '_blank');
        };
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

  function toggleMenu() {
    const navLinks = document.querySelector('.top-nav ul.nav-links');
    navLinks.classList.toggle('show');
}
