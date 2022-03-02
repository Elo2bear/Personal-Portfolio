const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');



menuBtn.addEventListener('click', () => {
 menu.style.display = 'block';
 menuBtn.style.display = 'none';
 closeBtn.style.display = 'inline-block';
})


closeBtn.addEventListener('click', () => {
 menu.style.display = 'none';
 menuBtn.style.display = 'inline-block';
 closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

// Expand section trail: Still working on functionality. 

// const skillItems = document.querySelectorAll('section.skills .skill');

// skillItems.forEach(skill => {
//     skill.querySelector('.head').addEventListener('click', () => {
//         skill.querySelector('.items').classList.toggle('show-items');
//     })
// })


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})