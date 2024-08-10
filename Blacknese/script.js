document.getElementById('menu-icon').addEventListener('click', function() {
    var sideNav = document.getElementById('side-nav');
    sideNav.style.width = '250px';
    document.getElementById('menu-icon').style.display = 'none';
});

document.getElementById('close-icon').addEventListener('click', function() {
    var sideNav = document.getElementById('side-nav');
    sideNav.style.width = '0';
    document.getElementById('menu-icon').style.display = 'block';
});
