
const navItems = document.querySelectorAll('.nav-links-item');
const navMenu = document.querySelector('#nav-menu-container');
const quickbar = document.querySelector('#quickbar');
const usernameContent = document.querySelector('#nav-username-content');


function showSubmenu(event) {
    event.currentTarget.classList.toggle('nav-show-Submenu');
}

function hideAllSubMenu() {
    for (let item of navItems) {
        item.classList.remove('nav-show-Submenu');
    }
}

function toggleQuickbar() {
    quickbar.classList.toggle('quickbar-show');
}




for(let item of navItems) {
    item.addEventListener('click', showSubmenu);
}

usernameContent.dataset.username = userData.username || "Sign In";
usernameContent.dataset.userId = userData.userId || "0000";



document.addEventListener('click', hideAllSubMenu,{ capture: true});
navMenu.addEventListener('click', toggleQuickbar);
    
