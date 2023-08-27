import throttle from 'lodash.throttle';
const REVIEW_DATA = 'formData';
const parsedData = JSON.parse(localStorage.getItem(REVIEW_DATA));

let formData = parsedData ? { ...parsedData } : {};
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};
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
  localStorage.removeItem(REVIEW_DATA);
  formData = {};
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
