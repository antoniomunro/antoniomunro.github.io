// Store the mapping of button IDs to their original texts
const navButtonTexts = {
    'btnProjects': 'Projects',
    'btnInfo': 'Info',
    'btnContact': 'Contact'
};

let lastClickedNavButtonId = 'btnProjects';

document.addEventListener('DOMContentLoaded', function() {
    const projectButton = document.getElementById('btnProjects');
    if (projectButton) {
        projectButton.textContent = '•';
        projectButton.classList.add('dot');
    }
});

let lastClickedButton = '';

function changeContent(section) {
    lastClickedButton = section;

    const sectionToButtonId = {
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

    switch (section) {
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
            myProjects();
    }
}

function myInfo() {

    var leftText = document.querySelector('.left-text');
    leftText.innerHTML = `
    

    `;

    var centerText = document.querySelector('.center-text');
    centerText.innerHTML=`
    

    `;
    
    var body = document.getElementById("body");
    var currentClass = body.className;
    var listContent = `
        <ul class="info-list">
        <p>This portfolio was created and is<br>
        hosted freely using <a href="https://pages.github.com/" target="_blank">Git Hub Pages.</p></a>
        </ul>`;

    leftText.innerHTML = listContent;

    var buttonsContainer = document.getElementById('info-buttons-container');
    var buttonContent = `
        <button class="image-button" id="githubButton" style="background-image: url('./images/github-mark${currentClass === "dark-mode" ? "-white" : ""}.svg');"></button>
        <button class="image-button" id="vardevsButton" style="background-image: url('./images/vardevs-mark${currentClass === "dark-mode" ? "" : ""}.png');"></button>
        <button class="image-button" id="linkedInButton" style="background-image: url('./images/linkedin-mark${currentClass === "dark-mode" ? "-white" : ""}.svg');"></button>
    `;
    buttonsContainer.innerHTML = buttonContent;

    document.getElementById('githubButton').onclick = function() {
        window.open('https://www.github.com/antoniomunro/', '_blank');
    };

    document.getElementById('linkedInButton').onclick = function() {
        window.open('https://www.linkedin.com/in/antoniomunro/', '_blank');
    };

    document.getElementById('vardevsButton').onclick = function() {
        window.open('https://vardevs.com/', '_blank');
    };

    var rightText = document.querySelector('.right-text');
    rightText.innerHTML = ``;
}

function myProjects() {

    var leftText = document.querySelector('.left-text');
    leftText.innerHTML = `
    
    `;

    var centerText = document.querySelector('.center-text');
    centerText.innerHTML = `
    
                    <i>
                        <p>
                            My <a href="https://www.github.com/antoniomunro" target="_blank">GitHub ⤼</a>
                        </p>
                    </i>
    
    `;

    var rightText = document.querySelector('.right-text');
    rightText.innerHTML = `

    `;
}

function myContact() {

    var leftText = document.querySelector('.left-text');
    leftText.innerHTML = `
        `;

    var centerText = document.querySelector('.center-text');
    centerText.innerHTML = `
    `;

    var rightText = document.querySelector('.right-text');
    rightText.innerHTML = `
                <ul class= "contact-list">
        <p>
        Personal Enquiries:<br>
        <a href="mailto:antoniomunro@protonmail.com" style="text-decoration: none;">
            <i>antoniomunro@protonmail.com</i><br>
        <a href="mailto:info@vardevs.com" style="text-decoration: none;">
            <i>info@vardevs.com </i>
        </p>
        </a>
        </ul>
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
        subHeader.textContent = 'Developer & Designer';
    } else {
        body.className = "dark-mode";
        button.innerHTML = "𖤓";
        subHeader.textContent = 'Designer & Developer';
    }

    // Update image button backgrounds dynamically
    const githubButton = document.getElementById('githubButton');
    const linkedInButton = document.getElementById('linkedInButton');
    const vardevsButton = document.getElementById('vardevsButton');

    if (githubButton) {
        githubButton.style.backgroundImage = `url('./images/github-mark${body.className === "dark-mode" ? "-white" : ""}.svg')`;
    }
    if (linkedInButton) {
        linkedInButton.style.backgroundImage = `url('./images/linkedin-mark${body.className === "dark-mode" ? "-white" : ""}.svg')`;
    }
    if (vardevsButton) {
        vardevsButton.style.backgroundImage = `url('./images/vardevs-mark${body.className === "dark-mode" ? "" : ""}.png')`;
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
        hour12: false 
    };
    var datetime = now.toLocaleString('en-NZ', options);
    document.getElementById("datetime").innerHTML = datetime + ' (NZ)';
}
setInterval(updateTime, 1000);

function currentYear() {
    
    document.write(new Date().getFullYear())
}
function toggleMenu() {
    const navLinks = document.querySelector('.top-nav ul.nav-links');
    navLinks.classList.toggle('show');
}

