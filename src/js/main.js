import { openModal } from './common/modal';
import submitFormData from './jsmodules/formSubmit';
import configureModal from './jsmodules/modal';

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
  

  // form 

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

});