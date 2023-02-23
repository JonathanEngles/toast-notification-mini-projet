// je sélectionne et je stocke le bouton
const btn = document.querySelector('.btn');

// console.log(btn);

// je sélectionne et je stocke la dic qui va contenir la notification
const contNot = document.querySelector('.container__notification');
// console.log(contNot);

btn.addEventListener('click', () => {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.textContent = 'Vous avez bien cliqué!';
    contNot.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('hide');
    }, 1000);
    // ajout du timer pour faire disparaitre la notification
    setTimeout(() => {
        notification.remove();
    }, 2000);
});
