import { openModal } from './common/modal';
import submitFormData from './jsmodules/formSubmit';
import configureModal from './jsmodules/modal';
import configureTimer from './jsmodules/timer';

document.addEventListener('DOMContentLoaded', () => {
  // modals

  const modalAutoTrigger = setTimeout(() => {
    openModal('.popup_engineer', 'show')
  }, 60000);

  const firstModal = {
    modalSelector: '.popup_engineer',
    selectorsToOpen: ['.popup_engineer_btn'],
    selectorsToClose: ['.popup_close'],
    showClass: 'show',
    intervalsToClear: [modalAutoTrigger],
  }

  const secondModal = {
    modalSelector: '.popup',
    selectorsToOpen: ['.phone_link', '.phone_popup'],
    selectorsToClose: ['.popup_close'],
    showClass: 'show',
    intervalsToClear: [modalAutoTrigger]
  }

  configureModal(firstModal);
  configureModal(secondModal);

  // forms

  const pageFormsConfig = {
      formSelector: '.main_form',
      url: 'http://localhost:3000/requests',
      modalSelector: '.popup_result',
      showClass: 'show',
      intervalsToClear: [modalAutoTrigger],
  };

  submitFormData(pageFormsConfig);

  const popupFormsConfig = {
      formSelector: '.popup_form form',
      url: 'http://localhost:3000/requests',
      modalSelector: '.popup_result',
      showClass: 'show',
      intervalsToClear: [modalAutoTrigger],
      modalsToClose: ['.popup','.popup_calc_end', '.popup_engineer'],
    };

  submitFormData(popupFormsConfig);

  // forms validation

  const numberInputs = document.querySelectorAll('input[name="user_phone"');

  numberInputs.forEach(item => {
    const pattern = /^[0-9+() ]+$/;;

    item.addEventListener('input', () => {
      if (item.value && !pattern.test(item.value)) {
        item.style.borderColor = 'red';
        item.style.background = 'rgba(255, 0, 0, .1)';
      } else {
        item.style.borderColor = '';
        item.style.background = '';
      }
    })
  })

  // timer 

  configureTimer('.sale', '2020-10-07T00:00');

  // images preview

  
});