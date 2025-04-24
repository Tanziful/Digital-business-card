// ===== SELECTING ELEMENTS =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// ===== CHECKING LOCAL STORAGE FOR SAVED THEME =====
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateToggleButton();
}

// ===== TOGGLE DARK MODE ON BUTTON CLICK =====
themeToggle.addEventListener('click', () => {
    // Toggle dark-mode class on body
    body.classList.toggle('dark-mode');

    // Save user preference to localStorage
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update button icon and text
    updateToggleButton();
});

// ===== FUNCTION TO UPDATE BUTTON TEXT & ICON =====
function updateToggleButton() {
    const isDark = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
}
