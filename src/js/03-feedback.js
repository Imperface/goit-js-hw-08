import throttle from 'lodash.throttle';
const REVIEW_DATA = 'formData';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};
const parsedData = JSON.parse(localStorage.getItem(REVIEW_DATA));
const checkLocalStorage = () => {
  if (!parsedData) {
    console.log('local storage is empty');
    return;
  }
  refs.input.value = parsedData.email || '';
  console.log('input updated successfully');
  refs.textArea.value = parsedData.message || '';
  console.log('textarea updated successfully ');
};

const ofFormSubmit = e => {
  console.log('submit successfully');
  e.preventDefault();
  console.log(formData);
  console.log(`user email: ${formData.email}`);
  console.log(`user message: ${formData.message}`);
  localStorage.removeItem(REVIEW_DATA);
  refs.form.reset();
  console.log('localStorage clearing');
};
const onFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(REVIEW_DATA, JSON.stringify(formData));
};
checkLocalStorage();
refs.form.addEventListener('submit', ofFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
