const ContentLogin = document.querySelector('.content');
const userName = document.querySelector('#userName');

ContentLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('user', userName.value);
    window.location.href = 'dashboard/Dashboard.html';
});

const paracontent = document.querySelector('.name');
const savedUser = localStorage.getItem('user');

paracontent.textContent = savedUser;

const panels = document.querySelector('#panels');

panels.addEventListener('click' , () =>{
    window.location.href = '../panels/panels.html';
})

const Rooms = document.querySelector('#rooms');

Rooms.addEventListener('click' , () =>{
    window.location.href = '../rooms/rooms.html';
})

const schedule = document.querySelector('#scheduls');

schedule.addEventListener('click' ,() =>{
    window.location.href = '../scheduls/scheduls.html';
})

const controlRoom = document.querySelector('#controlRoom');

controlRoom.addEventListener('click' , () =>{
    window.location.href = '../control/controlRoom.html'
})