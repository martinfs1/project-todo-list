import './styles.css'
import { Header, Footer } from './page-load'
import Section from './section';
import Main from './main';
import CreateTask from './createTask';

CreateTask()
const SectionMain = () => {
  const divSectionMain = document.createElement('div');
  divSectionMain.classList.add('divSectionMain');

  divSectionMain.appendChild(Section())
  divSectionMain.appendChild(Main())

  return divSectionMain
}

const pageLoad = () => {

  const refContentDiv = document.querySelector('#content');

  refContentDiv.classList.add('content')
  refContentDiv.appendChild(Header())
  refContentDiv.appendChild(SectionMain())

  refContentDiv.appendChild(Footer())

}

pageLoad()
