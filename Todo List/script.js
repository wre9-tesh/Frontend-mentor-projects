//DarkMode here
let darkMode = localStorage.getItem('darkMode');
const modeEl = document.getElementById('mode');
const imgEl = document.querySelector('.desktop');


const enableDarkmode = () =>{

    document.body.classList.add("darkMode");

    localStorage.setItem('darkMode','enabled');

    if(window.innerWidth > 800) {
        imgEl.innerHTML = ` <img class="img-style" src="./images/bg-desktop-dark.jpg" alt="">`;
    }
    else{
        imgEl.innerHTML = ` <img class="img-style" src="./images/bg-mobile-dark.jpg" alt="">`;
    }
    modeEl.innerHTML =` <img src="./images/icon-sun.svg" alt="light mode">`
};

const disableDarkmode = () =>{

    document.body.classList.remove("darkMode");

    localStorage.setItem('darkMode','disabled');
    if(window.innerWidth > 800) {
        imgEl.innerHTML = ` <img class="img-style" src="./images/bg-desktop-light.jpg" alt="">`;
    }
    else{
        imgEl.innerHTML = ` <img class="img-style" src="./images/bg-mobile-light.jpg" alt="">`;
    }


    modeEl.innerHTML =` <img src="./images/icon-moon.svg" alt="light mode">`

};

modeEl.addEventListener('click',()=>{

    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled') {
        enableDarkmode();
    }
    else{
        disableDarkmode();
    }
})
//dark mode till here

//Adding tasks
let count = 0;
let countEL = document.getElementById('countLeft');

const addBtnEl =  document.getElementById('addBtn');
const newTaskContainer = document.querySelector('.tasks');
const taskConatiner = document.getElementById('todo-input');


addBtnEl.addEventListener('click', () =>{

    if (taskConatiner.value === "") {
        alert("Please enter a task first");
    }
    else {
        count++
    countEL.innerText =count  + ' ' ;

        let mainConatiner = document.createElement('div');
        mainConatiner.classList.add('adding-container');
        newTaskContainer.appendChild(mainConatiner);

// Adding check buttons
        let checkBtn = document.createElement("button");

        checkBtn.classList.add("checkBtn");

        mainConatiner.appendChild(checkBtn);

        //Adding text
        let taskText = document.createElement('div');
        taskText.classList.add('text-style');

        taskText.textContent = `${taskConatiner.value}`;

        mainConatiner.appendChild(taskText);

        taskConatiner.value = "";

        // to display task as completed
        let strike = 'disable';

        checkBtn.addEventListener('click', () => {
            if (strike === 'disable') {
                checkBtn.parentElement.classList.add('strike-through');

                count--;
                countEL.innerText =count  + ' ' ;

                strike = 'enable';
                taskText.style.color = "var(--placeholder-text-color)";
                checkBtn.innerHTML = `<img src="./images/icon-check.svg" alt="">`
                checkBtn.style.background ='linear-gradient(135deg,var(--gradient-1),var(--gradient-2))';


            } else {

                checkBtn.parentElement.classList.remove('strike-through');
                strike = 'disable';
                taskText.style.color = "var(--pannel-active-text)";
                checkBtn.innerHTML =``;
                checkBtn.style.background =`none`;

                count++;
                countEL.innerText =count  + ' ' ;
            }
        })

    //    delete btn here
        taskText.addEventListener('click',()=>{

            if(taskText.parentElement.classList.contains('strike-through')) {
                taskText.parentElement.remove();
                count--;
                countEL.innerText =count  + ' ' ;
            }
        })

    //    delete all btn

        let deleteAll = document.querySelector('.complete-state');

            deleteAll.addEventListener('click',()=>{

                   let completeTask = document.getElementsByClassName('strike-through');

                   for (let i=0;i<completeTask.length;i++){
                       completeTask[i].remove();

                   }
            })

    //three states

            //Active state
            let activeEl = document.querySelector('.Active');


            activeEl.addEventListener('click',()=>{
                let completeTask = document.getElementsByClassName('strike-through');

                for (let i=0;i<completeTask.length;i++){
                    completeTask[i].style.display='none';
                }


            })

    //  All state
        let allEl = document.querySelector('.all');


        allEl.addEventListener('click',()=>{
            let completeTask = document.getElementsByClassName('adding-container');

            for (let i=0;i<completeTask.length;i++){
                completeTask[i].style.display='flex';
            }


        })

    //    complete state
        let completeEl = document.querySelector('.completed');

        completeEl.addEventListener('click',()=>{
            let completeTask = document.getElementsByClassName('adding-container');


            for (let i=0;i<completeTask.length;i++) {
                if (completeTask[i].classList.contains('strike-through')) {
                    completeTask[i].style.display = 'flex';
                } else {
                    completeTask[i].style.display = 'none';
                }
            }
        })


    }
})




//shall be updated after above code is complete.
window.addEventListener('keydown',(e)=>{
    if(e.code === 'Enter' || e.code === 'NumpadEnter') {

        if (taskConatiner.value === "") {
            alert("Please enter a task first");
        } else {
            let mainConatiner = document.createElement('div');
            mainConatiner.classList.add('adding-container');
            newTaskContainer.appendChild(mainConatiner);

// Adding check buttons
            let checkBtn = document.createElement("button");

            checkBtn.classList.add("checkBtn");

            mainConatiner.appendChild(checkBtn);

            //Adding text
            let taskText = document.createElement('div');
            taskText.classList.add('text-style');

            taskText.textContent = `${taskConatiner.value}`;

            mainConatiner.appendChild(taskText);


            taskConatiner.value = "";

            // to display task as completed
            let strike = 'disable';

            checkBtn.addEventListener('click', () => {
                if (strike === 'disable') {
                    checkBtn.parentElement.classList.add('strike-through');
                    console.log(checkBtn)
                    strike = 'enable';
                } else {
                    checkBtn.parentElement.classList.remove('strike-through');
                    strike = 'disable';
                }
            })

        }

    }})

