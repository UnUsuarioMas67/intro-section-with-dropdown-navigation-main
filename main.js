const navContainer = document.querySelector('.nav-container');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.onclick = () => {
    navContainer.dataset.mobileActive = true;
    console.log(navContainer);
}

closeBtn.onclick = () => {
    delete navContainer.dataset.mobileActive;
    console.log(navContainer);
}