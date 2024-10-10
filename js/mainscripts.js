const navButtonTexts = {
    'btnHome': 'Home',
    'btnProjects': 'Projects',
    'btnInfo': 'Info',
    'btnContact': 'Contact'
};

let lastClickedNavButtonId = 'btnHome';

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('btnHome');
    if (homeButton) {
        homeButton.textContent = '•';
        homeButton.classList.add('dot');
    }
});

let lastClickedButton = '';

function changeContent(section) {
    lastClickedButton = section;

    const sectionToButtonId = {
        'home': 'btnHome',
        'projects': 'btnProjects',
        'info': 'btnInfo',
        'contact': 'btnContact'
    };

    const currentButtonId = sectionToButtonId[section];

    if (lastClickedNavButtonId && lastClickedNavButtonId !== currentButtonId) {
        const prevButton = document.getElementById(lastClickedNavButtonId);
        if (prevButton) {
            prevButton.textContent = navButtonTexts[lastClickedNavButtonId];
            prevButton.classList.remove('dot');
        }
    }

    const currentButton = document.getElementById(currentButtonId);
    if (currentButton) {
        currentButton.textContent = '•';
        currentButton.classList.add('dot');
    }

    lastClickedNavButtonId = currentButtonId;

    if (section !== 'info') {
        var buttonsContainer = document.getElementById('info-buttons-container');
        buttonsContainer.innerHTML = '';
    }

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

function myInfo() {
    var centerText = document.querySelector('.center-text');
    var body = document.getElementById("body");
    var currentClass = body.className;

    var listContent = `
        <h1>FAQs:</h1>
        <ul class="faqs-list">
            <li>
                <b><i>How did you make this site?</b></i><br>
                It was built using vanilla HTML, CSS and JavaScript for functionality.<br>
                I decided to build this SPA with no framework to challenge myself and<br>
                learn more about backend development.<br>
                Additionally, this portfolio is hosted freely using <a href="https://pages.github.com/">Git Hub Pages.</a><br>
            </li>
            <li>
                <b><i>How did you make the background animation?</b></i><br>
                This was made using the <a href="https://threejs.org/">Three.js library </a>
                and <a href="https://greensock.com/">GSAP.</a>.<br>
                If you would like to learn more about Front End design and web<br>
                animations, I recommend checking out the resources below:
                </li>
                <li>
                <a href="https://threejs.org/manual/#en/fundamentals">Three JS Fundamentals</a><br>
                <a href="https://codepen.io/trending">Code Pen Trending</a><br>
                <a href="https://greensock.com/get-started/">GSAP: Get Started</a>
            </li>
        </ul>
    `;

    centerText.innerHTML = listContent;

    var buttonsContainer = document.getElementById('info-buttons-container');

    var buttonContent = `
        <button class="image-button" id="githubButton" style="background-image: url('./images/github-mark${currentClass === "dark-mode" ? "-white" : ""}.svg');"></button>
        <button class="image-button" id="linkedInButton" style="background-image: url('./images/linkedin-mark${currentClass === "dark-mode" ? "-white" : ""}.svg');"></button>
        <button class="image-button" id="leetCodeButton" style="background-image: url('./images/leetcode-mark${currentClass === "dark-mode" ? "-white" : ""}.svg');"></button>
    `;

    buttonsContainer.innerHTML = buttonContent;

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

function myProjects() {
    var centerText = document.querySelector('.center-text');
    centerText.innerHTML = `<p>You can find out more on what<br>I'm currently working on in my GitHub repo.</p>`;
}

function myContact() {
    var centerText = document.querySelector('.center-text');
    centerText.innerHTML = `
        <p>Want to know more?</p>
        <a href="mailto:antoniomunro@protonmail.com" style="text-decoration: none;">
            <p><i>Send me a message.</i></p>
        </a>
    `;
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
        updateTheme('light');
    } else {
        body.className = "dark-mode";
        button.innerHTML = "𖤓";
        subHeader.textContent = 'Designer & Developer';
        updateTheme('dark');
    }

    if (lastClickedButton === 'info') {
        myInfo();
    }

    if (lastClickedNavButtonId) {
        const activeButton = document.getElementById(lastClickedNavButtonId);
        if (activeButton) {
            activeButton.textContent = '•';
        }
    }
}

function updateTime() {
    var now = new Date();
    var options = { 
        timeZone: 'Pacific/Auckland', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };
    var datetime = now.toLocaleString('en-NZ', options);
    document.getElementById("datetime").innerHTML = datetime;
}

setInterval(updateTime, 1000);

function toggleMenu() {
    const navLinks = document.querySelector('.top-nav ul.nav-links');
    navLinks.classList.toggle('show');
}
