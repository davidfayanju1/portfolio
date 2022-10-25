// cursor functionality

const cursor = document.querySelector('.cursor');
const secondCursor = document.querySelector('.cursor-2');
const pointer = document.querySelector('.my-name');
const namePointer = document.querySelector('#myName');

const moveCursor = (e) => {
    const mouseY = e.pageY;
    const mouseX = e.pageX;

    cursor.style.top = `${ mouseY }px`;
    cursor.style.left = `${ mouseX}px`;

    secondCursor.style.top = `${ mouseY }px`;
    secondCursor.style.left = `${ mouseX }px`;
    
};

window.addEventListener('mousemove', moveCursor);

// extra hover
pointer.addEventListener('mousemove', () =>{

    cursor.classList.add('cursor-grow');

})

pointer.addEventListener('mouseleave', () =>{

    cursor.classList.remove('cursor-grow');

})

namePointer.addEventListener('mousemove', () =>{

    cursor.classList.add('cursor-grow');

})

namePointer.addEventListener('mouseleave', () =>{

    cursor.classList.remove('cursor-grow');

})

// nav 
const icons = document.querySelector('.icons');
const nav = document.querySelector('.mobile-nav-container');
const burger = document.querySelector('#burger');
const times = document.querySelector('#times')
const body = document.querySelector('#body');

icons.addEventListener('click', () => {


    if(icons.classList.contains('is-active') ) {
        
        icons.classList.remove('is-active')
        nav.classList.remove('active') 

        body.style.overflowY = 'scroll'
        
    }else{

        icons.classList.add('is-active')
        nav.classList.add('active')

        body.style.overflow = 'hidden'

    }        
})


const navList = document.querySelectorAll('#navItem');

navList.forEach((item) => {
    item.addEventListener('click', () => {

        icons.classList.remove('is-active');
        nav.classList.remove('active')
        body.style.overflowY = 'scroll';

    })
})





// scroll animation
const faders = document.querySelectorAll('.section');

const myOptions = {
    threshold: 1
}

const observerFunc = (entries, observer) => {

    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)    
        }
    })


}


const observer = new IntersectionObserver(observerFunc, myOptions);

faders.forEach((fader) => {
    observer.observe(fader)
})
