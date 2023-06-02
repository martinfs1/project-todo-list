import { CreateLists } from '../model/createListsAndTasks';

const titleDom = document.getElementById('titleList');
const listsDiv = document.getElementById('container-lists');
const listsToshow = [];
let card;

const resetInput = () => {
  titleDom.value = '';
};

const addList = () => {
  const title = titleDom.value;
  const list = CreateLists(title);
  listsToshow.push(list);
  console.log(listsToshow);
};

const displayLists = (array) => {
  array.forEach((element) => {
    card = `
    <div class="lists" data-id>
    <h2>Title:${element.title}</h2>    
    <button class="toggle-btn" type="button">Read? Yes/No </button>    
    <button class="remove-btn" type="button">Remove</button>
    </div>
    `;
    listsDiv.innerHTML += card;
  });
};
//  I need to continue to solve the problem to show new lists
const ListsSection = () => {
  const lists = document.querySelector('.container-lists');
  console.log(lists);
  document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.newListBtn')) {
      console.log('newListBtn');
      addList();
      resetInput();
      displayLists(listsToshow);
    }
  });
};
export default ListsSection;
