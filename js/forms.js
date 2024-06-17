
import { isEscapeKey } from './utils';


const closeFormBtn = document.querySelector('#upload-cancel');

const onCloseFormBtnClick = () => closeForm();

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
    // if(document.activeElement === hashtagInput || document.activeElement === commentInput){
    //   evt.stopPropagation();
    // } else {
    //   form.reset();
  }
};

function closeForm () {
  overlayForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeFormBtn.removeEventListener('click', onCloseFormBtnClick);
  uploadFileControl.value = '';
}


// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();

//   if (isValid) {
//     console.log('Можно отправлять');
//   } else {
//     console.log('Форма невалидна');
//   }
// });

