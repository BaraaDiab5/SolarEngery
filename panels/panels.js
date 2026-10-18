const backbutton = document.querySelector('.back');

backbutton.addEventListener('click' , () =>{
    window.location.href = '../dashboard/Dashboard.html';
})

const cycle = document.querySelector('.cycle');
const childCycle = document.querySelectorAll('.child-cycle');

let radius= 130;
let total = 30;
let j=1 ;
childCycle.forEach( i =>{
    let angle = -90 + (180 / (total -1 ) ) * j;
    i.style.transform = `translate(-50% , -50%) rotate(${angle}deg) translate(-${radius}px)`;
    j++;
})

const textLabels = document.querySelectorAll('.text-labels');
const cycleConBar = document.querySelector('.cycle-con-bar');
const contentPart1 = document.querySelector('.content-part1');


textLabels.forEach( (label , index) => {
    label.addEventListener('click' , () =>{
        console.log('yes')
        textLabels.forEach(l => l.classList.remove('active'));
        label.classList.add('active');
        if(index === 0){
        cycleConBar.style.right ='4px';
            contentPart1.innerHTML = `<p class="number">0KW</p>
                <div>
                    <p>26KW</p>
                    <p>الاستطاعة الواردة من الألواح</p>
                </div>
                <P class="number">295KW</P>`
        }
        else if(index === 1){
        cycleConBar.style.right ='45%';
            contentPart1.innerHTML = `<p class="number">0V</p>
                <div>
                    <p>215V</p>
                    <p>الجهد الوارد من الألواح</p>
                </div>
                <P class="number">220V</P>`
        }
        else {
        cycleConBar.style.right ='75%';
            contentPart1.innerHTML = `<p class="number">0AM</p>
                <div>
                    <p>35AM</p>
                    <p>التيار الوارد من الألواح</p>
                </div>
                <P class="number">50AM</P>`
        }
    })
})