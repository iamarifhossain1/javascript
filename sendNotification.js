function sendNotification  (email) {
    const userMail = 'zihad.ph@gmail.com';
    const userName = 'zihad.ph';
    const domainName = 'gmail.com';
    if (!userMail.includes('@')) {
        return 'Please enter valid email';
    }
    const fullMail = userName.concat('@') + domainName;
    if (fullMail === userMail) {
        return 'Zihad sent you an email from gmail.com';
    }
    
}

const result = sendNotification();
console.log (result);