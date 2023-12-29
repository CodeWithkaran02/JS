function generateCaptcha() {
    var captchaContainer = document.querySelector('.captcha-container');

    // Array of possible characters in the captcha
    var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var captchaText = '';
    for (var i = 0; i < 6; i++) { // Generate a 6 character captcha
        captchaText += chars[Math.floor(Math.random() * chars.length)];
    }

    captchaContainer.textContent = captchaText;
}

function verifyCaptcha() {
    var captchaContainer = document.querySelector('.captcha-container');
    var userInput = prompt('Enter the characters shown in the captcha:');

    if (userInput === captchaContainer.textContent)
        alert('Captcha verified!');
    else
        alert('Invalid captcha!');
}

// Generate initial captcha
generateCaptcha();
