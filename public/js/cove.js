
/* Scroll tick */
window.onscroll = () =>{

    if(window.scrollY >50){
        document.querySelector('.ticket').classList.add('active');
    }else{
        document.querySelector('.ticket').classList.remove('active');
    }
}

window.onload = () =>{

    if(window.scrollY >50){
        document.querySelector('.ticket').classList.add('active');
    }
}

// page up scroll
function reloadAndScroll() {
    window.scrollTo(0,0);
}

