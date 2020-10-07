export const openModal = (modalSelector, showClass) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.add(showClass);
}

export const closeModal = (modalSelector, showClass) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove(showClass);
}

export const addListeners = (selector, callback, event = 'click') => {
  const triggers = document.querySelectorAll(selector);

  triggers.forEach(trigger => {
    trigger.addEventListener(event, callback);
  });
}

export const addListenersToArr = (arr, callback, event = 'click') => {
  arr.forEach(item => {
    addListeners(item, callback, event);
  });
}