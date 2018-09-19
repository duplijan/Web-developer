
const nav = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
const header = document.querySelector('header');
let navHeight = nav.offsetHeight;
let i = 0;

function toggleNav(){
    if(i === 0){
      header.style.paddingTop = navHeight + 'px';
      i++;
    } else if(i != 0){
      header.style.paddingTop =  0;
      i--;
    }
}

toggle.addEventListener('click', toggleNav);
