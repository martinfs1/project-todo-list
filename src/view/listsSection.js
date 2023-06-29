import { CreateList, defaultProject } from '../model/createListsAndTasks';

const titleDom = document.getElementById('titleList');
const listToshowDiv = document.getElementById('default-selectedList');
const listsDiv = document.querySelector('.container-lists');
const listsToshow = [defaultProject];
let cardList;
let btnListToRemove;

const resetInput = () => {
  titleDom.value = null;
};

const addListToLists = () => {
  const title = titleDom.value;
  console.log(typeof title, title);
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
    <h2 class="tittleProject">${element.title}</h2> 
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
  console.log(listsToshow);
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
      debugger;
      if (titleDom.value) {
        console.log(titleDom.value);
        displayLists(listsToshow);
      } else {
        console.log('there is not!');
      }
    } else if (e.target.matches('.remove-btn')) {
      btnListToRemove = e.target.parentNode;
      removeList();
    } else if (e.target.matches('.tittleProject')) {
      listToshowDiv.firstElementChild.remove();
    }
  });
};
export {
  listsSection, listsToshow,
};
// if (div.getAttribute('class') === 'container-lists') {
//   listsDiv.innerHTML += cardList;
// } else {
//   listToshowDiv.innerHTML = +cardList;
// }

// const projectToExpand = e.target.parentElement.dataset.id;
// console.log(projectToExpand);
// const projectToshow = listsToshow.find((element) => element.id === projectToExpand);
// console.log(projectToshow);
