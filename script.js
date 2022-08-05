const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-model');
const btnsOpenModel = document.querySelectorAll('.show-model');

const openModel = function () {
  console.log('Button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const CloseModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', CloseModel);
overlay.addEventListener('click', CloseModel);
