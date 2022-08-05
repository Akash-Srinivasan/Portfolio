let isModalOpen = false;
let isDarkMode = false;
const scaleFactor = 1/20;
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX*scaleFactor;
    const y = event.clientY*scaleFactor;

    for (let i =0; i < shapes.length; ++i){
        const isOdd = i % 2 !==0;
        const oddInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInt}px, ${x * oddInt}px)`
    }
}


function toggleContrast() {
    isDarkMode = !isDarkMode
    if (isDarkMode){
    document.body.classList += " dark-theme"}
    else{
        document.body.classList.remove("dark-theme")
    }
}

 function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_hvowl6u',
            'template_b657rsi',
            event.target,
            '0dRY-df9fxhkNeQ4I'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is temporarily unavailable. Please contact me through: Akashsrinivasan70@gmail.com")
    })
 
}
function toggleModal() {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open"
}
