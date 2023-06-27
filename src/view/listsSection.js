import { id } from 'date-fns/locale';
import { CreateList, defaultProject } from '../model/createListsAndTasks';
import { mainSection, listToshowDiv } from './mainSection';

const titleDom = document.getElementById('titleList');
const listsDiv = document.querySelector('.container-lists');
const listsToshow = [defaultProject];
let cardList;
let btnListToRemove;
const resetInput = () => {
  titleDom.value = ' ';
};

const addListToLists = () => {
  const title = titleDom.value;
  if (title) {
    const list = CreateList(title);
    listsToshow.push(list);
  }
};

const displayLists = (array) => {
  array.forEach((element) => {
    cardList = `
    <div class="list" data-id=${element.id}>
    <h2 class="tittleProject">Tittle:${element.title}</h2> 
    <button class="remove-btn" type="button" data-id=${element.id}>Remove</button>
    </div>
    `;
  });
  listsDiv.innerHTML += cardList;
};

const removeList = () => {
  btnListToRemove.remove();
  listsToshow.forEach((list, i) => {
    if (list.id === btnListToRemove.dataset.id) { listsToshow.splice(i, 1); }
  });
};

const defaultProjectCard = () => {
  const btnMyday = document.querySelector('.remove-btn');
  if (listsToshow[0].title === 'My day') {
    btnMyday.remove();
  }
};

const listsSection = () => {
  displayLists(listsToshow);
  defaultProjectCard();
  listsDiv.parentElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.newListBtn')) {
      addListToLists();
      resetInput();
      displayLists(listsToshow);
    } else if (e.target.matches('.remove-btn')) {
      btnListToRemove = e.target.parentNode;
      removeList();
    } else if (e.target.matches('.tittleProject')) {
      const projectToExpand = e.target.parentElement.dataset.id;
      console.log(projectToExpand);
      const projectToshow = listsToshow.find((element) => element.id === projectToExpand);
      listToshowDiv.firstElementChild.remove();
      mainSection(projectToshow);
    }
  });
};

export {
  listsSection, defaultProjectCard, listsToshow,
};
