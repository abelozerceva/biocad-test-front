'use strict';

function DropBlock(val) {
  return `<div class="elem" id="${val}">${val}</div>`;
}

function DropMenu() {
  let peoples = ['1 week', '1 month', '3 month'];
  return `<div class="title-dropmenu"> <span class="start-text "> 1 month </span>
              <div>
                <svg class="icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0H0L5.15152 6.3L10 0Z" fill="#8C8C8C"/>
                </svg>
              </div>
            </div>
            <div class="dropmenu">
              ${peoples.map((el) => DropBlock(el)).join('')} `;
};

let drop = $('.report-filters form .dropdown');

drop[0].innerHTML = DropMenu();

$('.report-filters form .dropmenu')[0].style.display = 'none';

let list = $('.report-filters form .dropdown .dropmenu');
let startText = $('.report-filters form .dropdown .start-text');
let icon = $('.report-filters form .dropdown .icon');
let titleDrop  = $('.report-filters form .dropdown .title-dropmenu'); 

titleDrop.click((el) => {
    list.slideToggle();
    if (list[0].style.display == 'none') {
      icon.toggleClass('active');
    }
    else {
      icon.toggleClass('active');
    }
});

list.click((el) => {
  if (!(el.target.classList[0] === 'dropdown' || el.target.classList[0] === 'dropmenu')) {
    list.slideToggle();
    startText[0].textContent = `${el.target.id}`;
    icon.removeClass('active');
  }
});

$('body').click((el) => {
  console.log(el);
  if (!(el.target.classList[0] === 'dropdown' || el.target.classList[0] === 'dropmenu' 
    || el.target.classList[0] === 'start-text'|| el.target.classList[0] === 'icon' 
    || el.target.classList[0] === 'title-dropmenu')) {
    list.slideUp();
    icon.removeClass('active');
  }
});