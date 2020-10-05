import { postData } from "../common/api";
import { closeModal } from "../common/modal";

function submitFormData(props) {
  const {
    formSelector,
    url,
    modalSelector,
    showClass,
    intervalsToClear,
    modalsToClose = []
  } = props;

  const forms = document.querySelectorAll(formSelector);
  const modal = document.querySelector(modalSelector);
  const modalMessage = modal.querySelector('.message');

  modal.addEventListener('click', e => {
    if (e && e.target === modal) {
      modal.classList.remove(showClass);
    }
  })

  forms.forEach(form => {
    const button = form.querySelector('button');
    intervalsToClear.forEach(item => clearInterval(item));

    form.addEventListener('submit', e => {
      e.preventDefault();
      button.setAttribute('disabled', 'true');
    
      const formData = new FormData(form);
      const jsonData = {};

      formData.forEach((value, key) => jsonData[key] = value);

      postData(url, jsonData)
        .then(() => {
          modalMessage.textContent = "Спасибо. Мы скоро с вами свяжемся!";
        })
        .catch(() => {
          modalMessage.textContent = "Что-то пошло не так...";
        })
        .finally(() => {
          modal.classList.add(showClass);
          modalsToClose.forEach(item => closeModal(item, showClass));
          button.removeAttribute('disabled');

          setTimeout(() => {
            modal.classList.remove(showClass)
          }, 2000);  
        })
      
      form.reset();
    })
  })
}

export default submitFormData;