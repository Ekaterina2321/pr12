
let lastActiveItem = null;

document.querySelector('.faq').addEventListener('click', function (event) {
    let target = event.target.closest('.faq-item');
    if (!target) return;

    
    if (lastActiveItem && lastActiveItem !== target) {
        lastActiveItem.classList.remove('active');
        let p = lastActiveItem.querySelector('p');
        p.style.height = '';
        lastActiveItem.classList.remove('active-color'); 
    }

    target.classList.toggle('active');
    let p = target.querySelector('p');
    if (target.classList.contains('active')) {
        p.style.height = p.scrollHeight + 'px';
        target.classList.add('active-color'); 
    } else {
        p.style.height = '';
        target.classList.remove('active-color'); 
    }

    lastActiveItem = target.classList.contains('active') ? target : null;
});