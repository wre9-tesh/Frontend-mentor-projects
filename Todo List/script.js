//DarkMode here
let darkMode = localStorage.getItem('darkMode');
const modeEl = document.getElementById('mode');
const imgEl = document.querySelector('.desktop');


const enableDarkmode = () =>{

    document.body.classList.add("darkMode");

    localStorage.setItem('darkMode','enabled');

   imgEl.innerHTML = ` <img class="img-style" src="./images/bg-desktop-dark.jpg" alt="">`;

    modeEl.innerHTML =` <img src="./images/icon-sun.svg" alt="light mode">`
};

const disableDarkmode = () =>{

    document.body.classList.remove("darkMode");

    localStorage.setItem('darkMode','disabled');

    imgEl.innerHTML = ` <img class="img-style" src="./images/bg-desktop-light.jpg" alt="">`;

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
const addBtnEl =  document.getElementById('addBtn');
const newTaskContainer = document.querySelector('.tasks');
const taskConatiner = document.getElementById('todo-input');


addBtnEl.addEventListener('click', () =>{

    if (taskConatiner.value === "") {
        alert("Please enter a task first");
    }
    else {
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
                taskText.style.color = "var(--placeholder-text-color)";
                checkBtn.innerHTML = `<img src="./images/icon-check.svg" alt="">`
                checkBtn.style.background ='linear-gradient(135deg,var(--gradient-1),var(--gradient-2))';
            } else {
                checkBtn.parentElement.classList.remove('strike-through');
                strike = 'disable';
                taskText.style.color = "var(--pannel-active-text)";
                checkBtn.innerHTML =``;
                checkBtn.style.background =`none`;
            }
        })

    //    delete btn here



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

