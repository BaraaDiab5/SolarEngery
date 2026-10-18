const backbutton = document.querySelector('.back');

backbutton.addEventListener('click' , () =>{
    window.location.href = '../dashboard/Dashboard.html';
})

const btnback = document.querySelector('.btnback');
const btnsave = document.querySelector('.btnsave')
const message = document.querySelector('.message');

const messageDone = () =>{
    message.style.display = 'block';

    setTimeout(() =>{
        message.style.opacity = '0';
        
        setTimeout(() => {
            message.style.display = 'none';
        }, 500)

    }, 2000)
}

btnback.addEventListener('click', messageDone);
btnsave.addEventListener('click', messageDone);


const start = document.querySelector('.start');
const end = document.querySelector('.end');
const select = document.querySelector('.listSelect');

let room;
btnsave.addEventListener('click' , () => {
    room = {
        name:select.value ,
        start: start.value ,
        end: end.value ,
        ischeck: 'true'};
    localStorage.setItem('manualRoom', JSON.stringify(room));

})

console.log(JSON.parse(localStorage.getItem('manualRoom')));