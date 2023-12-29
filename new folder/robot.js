const request = require('request');

function verifyRecaptcha(token) {
    return new Promise((resolve, reject) => {
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=your_secret_key&response=${token}`;

        request(verificationUrl, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const result = JSON.parse(body);
                resolve(result.success);
            }
        });
    });
}

// In your POST request handler:
const recaptchaToken = req.body['g-recaptcha-response'];
const isCaptchaValid = await verifyRecaptcha(recaptchaToken);

if (isCaptchaValid) {
    // User is verified as "not a robot"
    // Proceed with your code logic
} else {
    // User failed the captcha verification
    // Handle accordingly
}
