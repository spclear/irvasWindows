export const openModal = (modalSelector, showClass) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.add(showClass);
}

export const closeModal = (modalSelector, showClass) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove(showClass);
}

export const addListenersToArr = (arr, callback) => {
  arr.forEach(item => {
    const triggers = document.querySelectorAll(item);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', callback);
    });
  });
}