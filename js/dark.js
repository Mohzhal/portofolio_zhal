const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        // Dark mode enabled
        document.body.classList.add('dark-mode');
    } else {
        // Dark mode disabled
        document.body.classList.remove('dark-mode');
    }
});