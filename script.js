const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  let userData = {
    name,
    email,
  }

  let convertData = JSON.stringify(userData);

  localStorage.setItem('userData', convertData)

  let content = document.getElementById(content)

  let carregando = `<p>CARREGANDO...</p>`
  let pronto = `<p>PRONTO</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})