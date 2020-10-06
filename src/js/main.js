import { openModal } from './common/modal';
import { validateInputs } from './common/validation';
import submitFormData from './jsmodules/formSubmit';
import previewImage from './jsmodules/imagePreview';
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

  const popupFormsConfig = {
      formSelector: '.popup_form form',
      url: 'http://localhost:3000/requests',
      modalSelector: '.popup_result',
      showClass: 'show',
      intervalsToClear: [modalAutoTrigger],
      modalsToClose: ['.popup','.popup_calc_end', '.popup_engineer'],
    };

  submitFormData(pageFormsConfig);
  submitFormData(popupFormsConfig);

  // forms validation
  // timer
  // preview for gallery

  validateInputs('input[name="user_phone"]', /^[0-9+() ]+$/)
  configureTimer('.sale', '2020-10-07T00:00');
  previewImage('.preview_images div');
  
});