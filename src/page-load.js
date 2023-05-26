
const Header = () => {

  const divHeader = document.createElement('div');
  divHeader.classList.add('divHeader');
  const h1 = document.createElement('h1');

  h1.innerText = 'Todo List App';
  divHeader.appendChild(h1);

  return divHeader;

}

const Footer = () => {
  const divFooter = document.createElement('div');
  divFooter.classList.add('divFooter');

  const footerParagraph = document.createElement('p');
  footerParagraph.innerText = 'crafted by Martin Sandander';
  divFooter.appendChild(footerParagraph);

  return divFooter;
}
export { Header, Footer };