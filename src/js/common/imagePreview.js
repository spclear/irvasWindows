export function createPreview() {
  const preview = document.createElement('div');
  const previewImage = document.createElement('img');

  preview.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .85);
  `;

  preview.style.display = 'none';
  previewImage.style.maxHeight = '80vh';
  previewImage.style.maxWidth = '80vw';

  preview.appendChild(previewImage);

  preview.addEventListener('click', (e) => {
    if (e.target && e.target === preview) {
      preview.style.display = 'none';
    }
  })

  return preview;
}