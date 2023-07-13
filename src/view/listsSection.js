import { CreateList, defaultProject } from '../model/createListsAndTasks';

const titleDom = document.getElementById('titleList');
const listsDiv = document.querySelector('.container-lists');
const listsToshow = [defaultProject];
let cardList;
let btnListToRemove;

const addListToLists = () => {
  const title = titleDom.value;
  if (title === '') {
    console.log('no puedes agregar un proyecto sin nombre');
  } else {
    const list = CreateList(title);
    console.log(typeof title, title);
    listsToshow.push(list);
  }
};

const displayLists = (array) => {
  array.forEach((element) => {
    cardList = `
    <div class="list" data-id=${element.id}>
    <h2 class="tittleProject" id="defaultProject">${element.title}</h2> 
    <button class="removeList-btn" type="button" data-id=${element.id}>Remove</button>
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
  const btnMyday = document.querySelector('.removeList-btn');
  if (listsToshow[0].title === 'My day') {
    btnMyday.remove();
  }
};
const resetInputs = () => {
  const listsForm = document.getElementById('listsForm');
  listsForm.reset();
};

const listsSection = () => {
  displayLists(listsToshow);
  defaultProjectCard();
  listsDiv.parentElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.newListBtn')) {
      addListToLists();
      if (titleDom.value) {
        displayLists(listsToshow);
        resetInputs();
      } else {
        console.log('there is not!');
      }
    } else if (e.target.matches('.removeList-btn')) {
      btnListToRemove = e.target.parentNode;
      removeList();
    }
  });
};
export {
  listsSection, listsToshow, listsDiv,
};

// I need to solve the problem of remove task from the list.
