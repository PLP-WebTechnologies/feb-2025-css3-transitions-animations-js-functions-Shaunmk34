function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Example usage
savePreference('theme', 'dark');
console.log(getPreference('theme')); // Output: "dark"

  document.getElementById('animateButton').addEventListener('click', function() {
    this.classList.add('animated');
  });
  
  // CSS for triggered animation
  .animated {
    animation: bounce 0.5s ease-in-out infinite;
  }

