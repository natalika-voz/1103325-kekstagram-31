export const addComments = (container, comments) => {
  const socialCommentTemplate = container.querySelector('.social__comment');
  const socialCommentsFragment = document.createDocumentFragment();

  container.innerHTML = '';

  comments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialComment);
  });

  container.appendChild(socialCommentsFragment);
};
