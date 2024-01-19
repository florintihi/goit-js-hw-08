const _ = require('lodash');
const formFeedback = document.querySelector('.feedback-form');

formFeedback.addEventListener(
  'input',
  _.throttle(() => {
    const formInfo = {
      email: formFeedback.elements.email.value,
      message: formFeedback.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
  }, 500)
);

const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));

if (!parsedInfo) {
  formFeedback.elements.email.value = '';
  formFeedback.elements.message.value = '';
} else if (parsedInfo) {
  formFeedback.elements.email.value = parsedInfo.email;
  formFeedback.elements.message.value = parsedInfo.message;
}

formFeedback.addEventListener('submit', e => {
  const parsedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formFeedback.reset();
  console.log(parsedInfo);
});
