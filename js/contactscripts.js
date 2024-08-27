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