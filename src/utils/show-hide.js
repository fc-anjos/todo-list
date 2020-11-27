const showEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'block';
};

const hideEl = targetID => {
  const el = document.getElementById(targetID);
  el.style.display = 'none';
};

const toggleVisibilityButton = ({
  showBtnId,
  hideBtnId,
  targetId,
}) => {
  const showBtn = document.getElementById(showBtnId);
  showBtn.addEventListener('click', () => {
    showEl(targetId);
    showEl(hideBtnId);
    hideEl(showBtnId);
  });

  const hideBtn = document.getElementById(hideBtnId);
  hideBtn.addEventListener('click', () => {
    hideEl(targetId);
    hideEl(hideBtnId);
    showEl(showBtnId);
  });
};

export { showEl, hideEl, toggleVisibilityButton };
