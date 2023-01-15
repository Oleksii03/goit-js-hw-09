import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

let delayInput = null;
let stepInput = null;
let amountInput = null;

// console.log(formEl);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    }, delay);
  });
};
