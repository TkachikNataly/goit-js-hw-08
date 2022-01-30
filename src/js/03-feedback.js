import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const localObject = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', FormSubmit);
refs.form.addEventListener('input', throttle(FormInput, 500));

populateTextArea();

function FormSubmit(event) {
  event.preventDefault();
  console.log('отправка формы');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  // console.log(localObject);
}

function FormInput(event) {
  localObject[event.target.name] = event.target.value;
  // console.log('~ message', localObject);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localObject));
}

function populateTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage) {
    refs.email.value = saveMessage.email;
    refs.textarea.value = saveMessage.message;
  }
}