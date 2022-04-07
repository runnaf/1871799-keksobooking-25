const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const NUMBER_OF_HOUSING_PHOTOS = 9;
const fileChooser = document.querySelector('.ad-form__input-picture--housing');
const preview = document.querySelector('.ad-form__photo--container');

document.querySelector('.ad-form__upload').addEventListener('mouseover', () => {
  document.querySelector('.ad-form__drop-zone').innerHTML = 'Можно загрузить не более 9 фото...';
});

document.querySelector('.ad-form__upload').addEventListener('mouseout', () => {
  document.querySelector('.ad-form__drop-zone').innerHTML = 'Загрузить<br>фото...';
});

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.style.display = 'grid';
    preview.style.gridTemplateColumns = '70px 70px 70px';
    preview.style.gap = '10px';
    const newImg = document.createElement('img');
    newImg.classList.add('ad-form-header__img');
    newImg.width = '70';
    newImg.height = '70';
    newImg.src = URL.createObjectURL(file);
    if (preview.querySelectorAll('img').length < NUMBER_OF_HOUSING_PHOTOS) {
      preview.append(newImg);
    }
  }
});
