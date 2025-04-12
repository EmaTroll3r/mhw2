
const navItems = document.querySelectorAll('.nav-links-item');
const navMenu = document.querySelector('#nav-menu-container');
const quickbar = document.querySelector('#quickbar');
const usernameContainer = document.querySelector('#nav-username-container');
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

if (!usernameContainer.dataset.username) {
    usernameContainer.dataset.username = "Sign In";
}
usernameContent.textContent = usernameContainer.dataset.username;




document.addEventListener('click', hideAllSubMenu,{ capture: true});
navMenu.addEventListener('click', toggleQuickbar);
    
