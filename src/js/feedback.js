export default function submitForm() {
  const feedbackForm = document.querySelector('.feedback__form');
  const inputs = feedbackForm.querySelectorAll('input');
  const submitBtn = feedbackForm.querySelector('button');

  inputs.forEach(element => {
    element.addEventListener('change', () => {
      if (element.validity.patternMismatch) {
        element.style.border = '2px solid red'
      }

      if (feedbackForm.checkValidity()) {
        submitBtn.disabled = false;
        submitBtn.addEventListener('click', () => {})
        $('.feedback__success').fancybox({});
      } else {
        submitBtn.disabled = true;
      }
    })
  });
}
