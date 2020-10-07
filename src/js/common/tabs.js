export function setActiveElement(selector, index, activeClass) {
  const items = document.querySelectorAll(selector);
  
  items.forEach((item, i) => {
    item.classList.remove(activeClass);

    if (i === index) {
      item.classList.add(activeClass)
    }
  })
}

export function displayOnlyOne(selector, index) {
  const items = document.querySelectorAll(selector);

  items.forEach((item, i) => {
    item.style.display = 'none';
    
    if (i === index) {
      item.style.display = '';
    }
  })
}