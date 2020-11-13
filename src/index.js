import inputBook from './components/input_book';


const handleForm = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  console.log(object);
};

const formFunctionality = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', e => handleForm(e));
};

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = inputBook();
};


window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  formFunctionality();
});
