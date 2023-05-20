
const {hash} = window.location;

const message = atob(hash.replace('#',''));

if (message) {
  document.querySelector('#share').classList.remove('hide');
  document.querySelector('#message').classList.add('hide');

  document.querySelector('h1').innerHTML = message;
}

document.addEventListener('submit', event =>{
  event.preventDefault();
  document.querySelector('#link').classList.remove('hide');
  document.querySelector('#message').classList.add('hide');
  const inputMessage = document.querySelector("#input-value");
  const secretMessage = btoa(inputMessage.value);
  const linkMessage = document.querySelector("#link-value");
  linkMessage.value = `${window.location}#${secretMessage}`;
  linkMessage.select();
})
