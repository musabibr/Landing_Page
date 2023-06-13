const menuicon = document.querySelector('.menu_icon');
const clos= document.querySelector('close_icon');
const nav = document.querySelector('nav');
const nav_list = document.querySelector('.nav-list');

menuicon.addEventListener('click',()=>{
    
    nav_list.classList.toggle('nav-list-responsive')
    nav.classList.toggle('nav-responsive')

})

