function getPasswordStrength(passwords, common_words) {
  // Write your code here
  const commonWords = new Set(common_words);
  const result = passwords.map((password) => {
    if (commonWords.has(password)) {
      return "weak";
    }
    for (let i = 0; i < password.length; i++) {
      for (let j = i + 1; j <= password.length; j++) {
        if (commonWords.has(password.slice(i, j))) {
          return "weak";
        }
      }
    }
    if (password.match(/^[0-9]+$/)) {
      return "weak";
    }
    if (
      password == password.toUpperCase() ||
      password == password.toLowerCase()
    ) {
      return "weak";
    }
    if (password.length < 6) {
      return "weak";
    }
    return "strong";
  });
  return result;
}
