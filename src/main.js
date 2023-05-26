
const Main = () => {
  const divMain = document.createElement('element');
  divMain.classList.add('divMain')
  const h2Main = document.createElement('h2')
  h2Main.innerText = 'Main'

  divMain.appendChild(h2Main);

  return divMain;

}

export default Main;