import { openModal, closeModal, addListenersToArr } from '../common/modal';

function configureModal(props) {
  const {
    modalSelector,
    openTriggers,
    closeTriggers,
    showClass,
    intervalsToClear = []
  } = props;
  const modal = document.querySelector(modalSelector);
  
  addListenersToArr(openTriggers, open);
  addListenersToArr(closeTriggers, close);

  modal.addEventListener('click', (e) => {
    if (e.target && e.target === modal) {
      close();
    }
  });

  function open() {
    openModal(modalSelector, showClass);
    intervalsToClear.forEach(item => clearInterval(item));
  }

  function close() {
    closeModal(modalSelector, showClass);
  }
}

export default configureModal;