const ContentLogin = document.querySelector('.content');
const userName = document.querySelector('#userName');


if (ContentLogin && userName) {
    ContentLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('user', userName.value);
        window.location.href = 'dashboard/Dashboard.html';
    });
}

const paracontent = document.querySelector('.name');
const savedUser = localStorage.getItem('user');

if (paracontent && savedUser) {
    paracontent.textContent = savedUser;
}

const panels = document.querySelector('#panels');
if (panels) {
    panels.addEventListener('click', () => {
        window.location.href = '../panels/panels.html';
    });
}

const Rooms = document.querySelector('#rooms');
if (Rooms) {
    Rooms.addEventListener('click', () => {
        window.location.href = '../rooms/rooms.html';
    });
}

const schedule = document.querySelector('#scheduls');
if (schedule) {
    schedule.addEventListener('click', () => {
        window.location.href = '../scheduls/scheduls.html';
    });
}

const controlRoom = document.querySelector('#controlRoom');
if (controlRoom) {
    controlRoom.addEventListener('click', () => {
        window.location.href = '../control/controlRoom.html';
    });
}