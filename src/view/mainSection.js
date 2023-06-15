import { CreateTask } from '../model/createListsAndTasks';
import { listsToshow } from './listsSection';

const listToshowDiv = document.getElementById('default-selectedList');
const taskForm = document.getElementById('taskForm');
let cardList;
let taskToShow;

const addTasksToList = (listId) => {
  const listToAddTasks = listId;
  if (listToAddTasks === listId) {
    const task = CreateTask('buy eggs', true, 'hoy');
    const listFound = listsToshow.find((list) => list.id === listId);
    listFound.tasks.push(task);
  }
};

const displayListWithTasks = (arrayLists) => {
  cardList = `
    <div class="list" data-id=${arrayLists.id}>
    <h2 id='h2Main'>Title:${arrayLists.title}</h2>       
  </div>
  `;

  listToshowDiv.innerHTML += cardList;
  arrayLists.tasks.forEach((element) => {
    taskToShow = `
    <div class="task" data-id=${element.id}>${element.title}
      </div>      
      `;
    const h2ToShowTasks = document.getElementById('h2Main');
    console.log(h2ToShowTasks);
    h2ToShowTasks.parentNode.innerHTML += taskToShow;
  });
};

const mainSection = (listToshow) => {
  displayListWithTasks(listToshow);

  taskForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.newTaskBtn')) {
      addTasksToList(listToshow.id);
    }
  });
};

export default mainSection;
