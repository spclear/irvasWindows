export function validateInputs(inputSelector, pattern) {
  const inputs = document.querySelectorAll(inputSelector);

  inputs.forEach(item => {
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
}

