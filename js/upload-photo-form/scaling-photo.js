export function initScalingPhoto(formEl) {
  if (formEl === null) {
    return;
  }

  const smallerButtonEl = formEl.querySelector('.scale__control--smaller');
  const biggerButtonEl = formEl.querySelector('.scale__control--bigger');
  const imgPhotoEl = formEl.querySelector('.img-upload__preview img');
  const scaleControl = formEl.querySelector('.scale__control--value');

  let scale = 1;
  const scaleStep = 0.25;

  function updateScaleDisplay() {
    scaleControl.value = `${(scale * 100).toFixed(0)}%`;
  }

  smallerButtonEl.addEventListener('click', () => {
    if(scale > scaleStep) {
      scale -= scaleStep;
      imgPhotoEl.style.transform = `scale(${scale})`;
      scaleControl.value = `${scale * 100}%`;
      updateScaleDisplay();
    }
  });

  biggerButtonEl.addEventListener('click', () => {
    if (scale < 1) {
      scale += scaleStep;
      imgPhotoEl.style.transform = `scale(${scale})`;
      scaleControl.value = `${scale * 100}%`;
      updateScaleDisplay();
    }
  });
}
