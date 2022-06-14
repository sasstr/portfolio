const siteList = document.querySelector('.site-list');
const specialistWrapper = document.querySelector('.specialist-wrapper');
const alibraWrapper = document.querySelector('.alibra-wrapper');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('.modal-content');
const captionText = modal.querySelector('#caption');
const closeBtn = modal.querySelector('.close');
const navigationList = document.querySelector('.navigation-list'); 

navigationList.addEventListener('click', function(evt) {
  link = evt.target;
  if(link.classList.contains('navigation-link')){
    evt.preventDefault();
    target = document.querySelector(link.hash);
    let position = target.offsetTop -30;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }
});
/** Функция показывает модальное окно и помещает в него картинку, по которой кликает пользователь.
 * 
 * @param {string} event 
 * @param {string} className 
 * @param {number} widthImage 
 * @returns {void}
 */
const showModal = function (event, className, widthImage = 500) {
  
  if(event.target.classList.contains(className)){
    event.preventDefault();
    modal.style.display = "block";
    modalImg.width = widthImage;
    modalImg.src = event.target.src;
    captionText.textContent = event.target.alt;
  }
}

siteList.onclick = function (evt) {
  showModal(evt, 'card-image') 
}

specialistWrapper.onclick = function (evt) {
  showModal(evt, 'specialist-image', 1000) 
}

alibraWrapper.onclick = function (evt) {
  showModal(evt, 'alibra-image') 
}

/** Функция скрывает модальное окно
 * 
 * @param {*} evt 
 * @returns {void}
 */
const closeModal = function (evt) {
  evt.preventDefault();
  modal.style.display = "none";
  
}

const clickBtnHandler = function (e) {
  closeModal(e)
};

const modalContainerClickHandler = function (evt) {
  if(evt.target.classList.contains('modal')){
    closeModal(evt)
  }
};

const btnKeyupHandler = function  (evt) {
  if (evt.keyCode == 27){
    closeModal(evt)
  }
};

document.addEventListener('keyup', btnKeyupHandler);
document.addEventListener('click', modalContainerClickHandler);
closeBtn.addEventListener('click', clickBtnHandler);
