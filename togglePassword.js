function togglePassword() {
    event.preventDefault();
    if (passwordRevealed) {
      passwordInput.type = 'password';
      passwordRevealed = false;

      //toggleButton.textContent = 'Show Password';
      passwordInput.classList.remove('revealed');
    } else {
      passwordInput.type = 'text';
      passwordRevealed = true;
      //toggleButton.textContent = 'Hide Password';
      passwordInput.classList.add('revealed');
    }
  }