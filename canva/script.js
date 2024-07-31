
    document.addEventListener("DOMContentLoaded", function() {
        const menuIcon = document.getElementById('menu-icon');
        const sidebar = document.getElementById('sidebar');

        menuIcon.addEventListener('click', function() {
            sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
        });
    });

