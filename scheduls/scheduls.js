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

const scheduleData = {
    sunday: [
        { name: "القاعة 1", lectures: [true, true, true, false, false] },
        { name: "القاعة 2", lectures: [true, true, true, true, false] },
        { name: "القاعة3", lectures: [true, true, true, false, false] },
        { name: "المدرج 1", lectures: [true, true, true, false, false] },
        { name: "القاعة 4", lectures: [true, false, false, false, false] },     
        { name: "القاعة 5 ب", lectures: [false, false, false, true, false] }, 
        { name: "مخبر الرؤية الحاسوبية", lectures: [false, true, true, false, false] },
        { name: "icdl مخبر", lectures: [true, true, true, false, false] },
        { name: "مخبر البنية", lectures: [false, true, false, false, false] },
        { name: "مخبر الاتصالات", lectures: [true, true, true, false, false] },
        { name: "القاعة 6", lectures: [true, true, true, true, false] },  
        { name: "مخبر هندسة البرمجيات", lectures: [false, false, false, true, false] },  
        { name: "مخبر الدارات", lectures: [true, true, true, true, false] },  
        { name: "مخبر الدارات المنطقية", lectures: [true, true, false, false, false] },  
        { name: "مخبر الشبكات الحاسوبية", lectures: [false, false, false, true, false] }, 
        { name: "مخبر المترجمات", lectures: [true, true, false, false, false] },  
        { name: "مخبر نظم التشغيل", lectures: [ false, false,true,true, false] }, 
        { name: "مخبر البرمجة", lectures: [true, true, true, true, true] },
        { name: "مخبر قواعد المعطيات", lectures: [true, true, true, false, false] },
        { name: "plc مخبر", lectures: [true, true, false, false, false] },  
        { name: "البحث العلمي", lectures: [false, false, true, false, false] },
    ],
    monday: [
        { name: "القاعة 1", lectures: [false, true, true, false, false] },
        { name: "القاعة 2", lectures: [true, true, true, true, false] },
        { name: "القاعة3", lectures: [true, true, true, false, false] },
        { name: "المدرج 1", lectures: [true, true, true, false, false] },
        { name: "القاعة 4", lectures: [true, true, true, true, false] },  
        { name: "مخبر الفيزياء", lectures: [true, true, true, true, true] },
        { name: "icdl مخبر", lectures: [true, true, true, false, false] },
        { name: "القاعة 5أ", lectures: [true, true, false, false, false] }, 
        { name: "القاعة 5 ب", lectures: [true, true, false, true, false] }, 
        { name: "مخبر الرؤية الحاسوبية", lectures: [true, true, true, false, false] },
        { name: "مخبر البنية", lectures: [false, false, true, true, false] },
        { name: "مخبر الاتصالات", lectures: [true, true, false, false, false] },
        { name: "القاعة 6", lectures: [true, true, true, true, false] },  
        { name: "مخبر هندسة البرمجيات", lectures: [true, true, false, false, false] },  
        { name: "مخبر الدارات", lectures: [true, true, false, false, false] },  
        { name: "مخبر الدارات المنطقية", lectures: [true, false, true, true, false] },  
        { name: "مخبر الذكاء الصنعي", lectures: [false, true, false, true, false] },  
        { name: "مخبر المترجمات", lectures: [true, true, false, false, false] },  
        { name: "مخبر نظم التشغيل", lectures: [ true, true,false,false, false] }, 
        { name: "مخبر قواعد المعطيات", lectures: [true, true,false, false, false] },
        { name: "مخبر قواعد معطيات موزعة", lectures: [false, false, true, false, false] },  
        { name: "plc مخبر", lectures: [true, true, false, false, false] },  
        { name: "مطالعة", lectures: [true, false, false, false, false] },
        { name: "البحث العلمي", lectures: [false, false, true, true, false] }
    ],
    tuesday: [
        { name: "القاعة 1", lectures: [true, true, true, true, false] },
        { name: "القاعة 2", lectures: [true, true, true, false, false] },
        { name: "القاعة3", lectures: [true, true, true, true, true] },
        { name: "المدرج 1", lectures: [true, true, true, false, false] },
        { name: "مخبر الفيزياء", lectures: [true, true, true, true, true] },
        { name: "icdl مخبر", lectures: [true, true, true, false, false] },
        { name: "القاعة 5 ب", lectures: [false, true, true, false, false] }, 
        { name: "مخبر الاتصالات", lectures: [false, false, false, true, false] },
        { name: "القاعة 6", lectures: [true, true, true, true, false] },  
        { name: "مخبر هندسة البرمجيات", lectures: [false, true, false, false, false] },  
        { name: "مخبر الشبكات الحاسوبية", lectures: [true, false, false, false, false] }, 
        { name: "مخبر البيانات والرسم الهندسي", lectures: [true, true, false, false, false] },
        { name: "مخبر الدارات المنطقية", lectures: [true, false, false, false, false] },  
        { name: "مخبر نظم التشغيل", lectures: [ true, true,true,false, false] }, 
        { name: "مخبر قواعد المعطيات", lectures: [false, true,false, false, false] },
        { name: "مخبر قواعد معطيات موزعة", lectures: [false, true, false, true, false] },  
        { name: "مخبر البرمجة", lectures: [false, true, true, true, false] },
        { name: "مطالعة", lectures: [false, false, true, true, false] },
        { name: "البحث العلمي", lectures: [true, true, true, true, false] }
    ],
    wednesday: [
        { name: "القاعة 1", lectures: [true, true, true, false, false] },
        { name: "القاعة 2", lectures: [true, true, true, true, false] },
        { name: "القاعة3", lectures: [true, true, true, true, false] },
        { name: "المدرج 1", lectures: [false, true, true, false, false] },
        { name: "القاعة 4", lectures: [true, true, true, true, false] },  
        { name: "icdl مخبر", lectures: [true, true, true, false, false] },
        { name: "القاعة 5أ", lectures: [true, true, true, false, false] }, 
        { name: "القاعة 5 ب", lectures: [false, true, true, true, false] }, 
        { name: "مخبر الرؤية الحاسوبية", lectures: [false, false, true, false, false] },
        { name: "مخبر البنية", lectures: [false, true, true, true, false] },
        { name: "مخبر الاتصالات", lectures: [false, true, true, true, false] },
        { name: "القاعة 6", lectures: [true, true, false, true, false] },  
        { name: "مخبر الدارات المنطقية", lectures: [false, false, true, true, false] },  
        { name: "مخبر البيانات والرسم الهندسي", lectures: [false, true, true, true, false] },
        { name: "مخبر قواعد المعطيات", lectures: [false, true,true, true, false] },
        { name: "مخبر قواعد معطيات موزعة", lectures: [false, true, true, true, false] },  
        { name: "مطالعة", lectures: [true, true, true, true, false] },
        { name: "البحث العلمي", lectures: [true, true, true, true, false] }
    ],
    thursday: [
        { name: "القاعة 1", lectures: [true, true, true, false, false] },
        { name: "القاعة 2", lectures: [true, true, true, true, false] },
        { name: "القاعة3", lectures: [true, true, true, true, false] },
        { name: "المدرج 1", lectures: [true, true, true, true, false] },
        { name: "القاعة 4", lectures: [true, false, true, true, false] },  
        { name: "icdl مخبر", lectures: [true, true, true, false, false] },
        { name: "القاعة 5أ", lectures: [true, true, false, false, false] }, 
        { name: "القاعة 5 ب", lectures: [true, true, true, true, false] }, 
        { name: "مخبر الرؤية الحاسوبية", lectures: [true, true, true, false, false] },
        { name: "القاعة 6", lectures: [true, true, false, true, false] },  
        { name: "مخبر الدارات", lectures: [true, true, true, true, false] },  
        { name: "مخبر الدارات المنطقية", lectures: [true, true, false, false, false] },  
        { name: "مخبر الذكاء الصنعي", lectures: [true, true, true, false, false] },  
        { name: "مخبر نظم التشغيل", lectures: [ true, true,false,false, false] }, 
        { name: "مخبر قواعد المعطيات", lectures: [true, true,false, false, false] },
        { name: "مخبر قواعد معطيات موزعة", lectures: [true, true, false, true, false] },  
        { name: "plc مخبر", lectures: [true, true, true, true, false] },  
        { name: "مطالعة", lectures: [true, true, true, false, false] }
    ],
    saturday: []
};

const now = new Date();
const dayIndex = now.getDay();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const currentDay = days[dayIndex]; 
const currentHour = now.getHours();
const currentMinutes = now.getMinutes();

const currentTime = ( currentHour * 60 ) + currentMinutes;
const allPlaces = [
    "غرفة الاجتماعات","العميد","أمين المستودع","شعبة الامتحانات","الذاتية","رئيس شؤون الطلاب",
    "ارشفة حاسوبية","الامتحانات","التصوير والسحب","شؤون الطلاب","رئيس شعبة الدراسات العليا",
    "مدير الدائرة","مدير الديوان","مدرج الخوارزمي","المدرج 1","القاعة 1","القاعة 2",
    "القاعة3","القاعة 4","القاعة 5أ","القاعة 5 ب","القاعة 6","الهيئة الطلابية","المكتبة"
    ,"Hyper","مراقب الدوام","مخبر الرؤية الحاسوبية","مخبر الفيزياء","مخبر icdl","مخبر البنية",
    "مخبر الاتصالات","غرف خاصة للدكاترة", "قاعة المطالعة","مكتب الهيئة الفنية","الهيئة المخبرية",
    "معتمد الرسوم","مخبر هندسة برمجيات","مخبر الدارات","مخبر الدارات المنطقية","مخبر الشبكات الحاسوبية",
    "مخبر البيانات والرسم الهندسي","مخبر الذكاء الصنعي","مخبر المترجمات","مخبر نظم التشغيل","مخبر قواعد المعطيات",
    "مخبر قواعد معطيات موزعة","مخبر البرمجة","مخبر plc المتحكم المنطقي المبرمج","مخبر البحث العلمي","الممرات","الحمامات"
];
let roomAvailable = [];

scheduleData[currentDay].forEach( room =>{
    if(currentTime >= 540 && currentTime <=630) {
        if(room.lectures[0] == false ) roomAvailable.push({name : room.name})
    }
    else if(currentTime >= 645 && currentTime <= 735 ) {
        if(room.lectures[1] == false ) roomAvailable.push({name : room.name})
    }
    else if(currentTime >= 750 && currentTime <= 840) {
        if(room.lectures[2] == false ) roomAvailable.push({name : room.name})
    }
    else if(currentTime >= 855 && currentTime <= 945) {
        if(room.lectures[3] == false ) roomAvailable.push({name : room.name})
    }
    else if(currentTime >= 960 && currentTime <= 1050) {
        if(room.lectures[4] == false ) roomAvailable.push({name : room.name})
    }
})

allPlaces.forEach(room =>{
    const exists = scheduleData[currentDay].some(r => r.name === room);
    if(!exists) roomAvailable.push({name : room})
})
localStorage.setItem('rooms',JSON.stringify(roomAvailable));


const listDays = document.querySelector('.listDays');
const span = document.querySelectorAll('span');

span.forEach(span =>{
    span.addEventListener('click' , () =>{
        if(span.classList.contains('active')) span.classList.remove('active');
        else span.className = 'active';
    })
})

const renderSchedule = () => {
    const currentDayData = scheduleData[listDays.value];
    const nameHeadCol = document.querySelector('.table-head .column.name-head');
    const lectureColumns = document.querySelectorAll('.table-head .column:not(.name-head)');
    const tableContainer = document.querySelector('.table');

    document.querySelectorAll('.table-head .column').forEach(col => {
        const title = col.querySelector('.column-title');
        col.innerHTML = '';
        if (title) col.appendChild(title);
    });

    const existingNull = document.querySelector('.divNull');
    if (existingNull) existingNull.remove();

    if (listDays.value === 'saturday') {
        const divNull = document.createElement('div');
        divNull.innerHTML = `<p>لاتوجد محاضرات اليوم</p>`;
        divNull.className = 'divNull';
        tableContainer.appendChild(divNull);
        return;
    }

    if (currentDayData) {
        currentDayData.forEach(room => {
            if (!room.lectures || !room.lectures.includes(true)) return;

            const divName = document.createElement('p');
            divName.className = 'name';
            divName.textContent = room.name;
            nameHeadCol.appendChild(divName);

            room.lectures.forEach((isActive, index) => {
                if (lectureColumns[index]) {
                    const spanRow = document.createElement('span');
                    if (isActive === true) {
                        spanRow.className = 'active';
                    }
                    lectureColumns[index].appendChild(spanRow);
                }
            });
        });
    }
};
listDays.addEventListener('change', renderSchedule);
renderSchedule();