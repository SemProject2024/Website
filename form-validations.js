function validateForm(signUpEmailAddress, signUpPassword, confirmPassword) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpEmailAddress)) {
        window.alert('Invalid Email ID')
        return false;
    }
    if (signUpPassword.length < 6) {
        window.alert('Password length must be > 6 characters.');
        return false;
    }    
    // Validate confirmPassword
    if (confirmPassword != signUpPassword) {
        window.alert('Passwords do not match.');
        return false;
    }
    console.log(signUpEmailAddress);
    return true;
}