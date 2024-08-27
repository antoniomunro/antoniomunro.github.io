function myHome() {
    var centerText = document.querySelector('.center-text');
    var currentMode = document.getElementById("body").className;

        centerText.innerHTML = `
                        <p>
                            Born in Wellington New Zealand, <br>
                            I believe in merging logic with creativity to <br>
                            develop impactful digital solutions.
                        </p>          `;
    }

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