var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    autorization();
});
var logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click', function(event) {
    exit();
});

function autorization() {
    var log = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    if (!log || !pass) {
        return;
    }
    if (log == 'Username' && pass == 'pass123') {
        document.querySelector('#logout').innerHTML = 'Logout';
        document.querySelector('.user-login').innerHTML = 'Username';
        document.querySelector('.container-form').style.display = 'none';
        document.querySelector('.user-login').style.opacity = '1';
    } else {
        document.getElementById('text-block').innerHTML = 'Wrong login or password';
        document.getElementById('login').value = '';
        document.getElementById('pass').value = '';
    }
}

function exit() {
    window.location.reload();
}

