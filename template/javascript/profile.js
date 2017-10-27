const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const headMain = accordion.querySelectorAll('.head-main');

headMain.forEach(head => head.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const thisItem = this.parentNode;
    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }
        items.classList.remove('open');
    })
}