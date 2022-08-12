
const faqEl = document.getElementsByClassName('content-container');

for (let i = 0; i < faqEl.length; i++) {

    faqEl[i].addEventListener('click', function (){
            this.classList.toggle("active");
            console.log(this)
    })

}