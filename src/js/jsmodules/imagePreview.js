import { createPreview } from "../common/imagePreview";

function previewImage(divSelector) {
  const divs = document.querySelectorAll(divSelector);
  const preview = createPreview();

  divs.forEach(div => {
    const link = div.querySelector('a');
    const src = link.getAttribute('href');

    document.querySelector('body').appendChild(preview);

    link.addEventListener('click', e => {
      e.preventDefault();
      preview.querySelector('img').src = src;
      preview.style.display = 'flex';
    });
  })
}

export default previewImage