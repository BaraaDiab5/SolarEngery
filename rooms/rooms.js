const backbutton = document.querySelector('.back');

backbutton.addEventListener('click' , () =>{
    console.log('yes');
    window.location.href = '../dashboard/Dashboard.html';
})

const list = JSON.parse(localStorage.getItem('rooms')) || [];
const listRoom = document.querySelector('.listRoom');

listRoom.innerHTML = '';

if(list.length == 0)
    listRoom.innerHTML = '<p>لاتوجد غرف شاغرة حالياً</p>'
else{
    list.forEach(element => {
        {
            const divParent = document.createElement('div');
            divParent.innerHTML = `
                <div></div>
                <p>${element.name}</p>
        `;
        listRoom.appendChild(divParent);
    }
    });
    
}
