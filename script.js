document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('active');
});

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown a')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};

var dropdownToggle = document.querySelector('.dropdown > a');
dropdownToggle.addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
