//Get Elements From the DOM


const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobilr');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-menu');


//Initialize on scroll anmations
AOS.init();


//Add menu click events

menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);


/*Open sidebar function*/
function sidebar(){
    //Change sidebar position
    sidebar.style.right = "0";
    //Show backdrop
    backdrop.style.display = "block";
    //Show backdrop through a smooth transition
    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 50);
    //Disable scroll on body
    document.body.classList.add('sideabr-open-body');
    //Add the close button click event
    closeBtn.addEventListener('click',() =>{
        //Change sidebar position
        sidebar.style.right = "-20em";
        //Hide backdrop with a smooth transition
        backdrop.style.opacity = "0";
        //Hide backdrop after the transition is done
        setTimeout (() =>{
        backdrop.style.display = "none";
        }, 300);
        document.body.classList.remove('sidebar-open-body');
    });
}