import { format, addMinutes } from 'date-fns';
import { CreateList, CreateTask } from '../model/createListsAndTasks';
import { listsToshow } from './listsSection';

console.log(listsToshow);

const divToShowList = document.getElementById('default-selectedList');
let taskToShow;

const displayList = (listToshow) => {
  const cardList = `
  <div class="list" data-id=${listToshow.id}>
  <h2 id='h2Main'>Title:${listToshow.title}</h2>
  </div>
  `;
  divToShowList.innerHTML += cardList;
};

const displayListWithTasks = (arrayLists) => {
  console.log(arrayLists.tasks);
  const showTasksOnList = (arrayTasks) => {
    arrayTasks.tasks.forEach((element) => {
      taskToShow = `
      <div class="task" data-id=${element.id}>
      <h3>${element.title}</h3>
      <p>${element.priority}</p>
      <p>${element.date}</p>
      </div>
      `;
      const h2ToAddTasks = document.getElementById('h2Main');
      h2ToAddTasks.parentNode.innerHTML += taskToShow;
    });
  };
  showTasksOnList(arrayLists);
};

const addTasksToList = (listId) => {
  console.log(listId);
  let listFound;
  let listFiltered;

  const titleInput = document.getElementById('titleTask');
  const inputValue = document.getElementById('date').value;
  const date = addMinutes(new Date(inputValue), new Date().getTimezoneOffset());
  const formatedDate = format(date, 'dd-MM-yyyy');
  const priority = document.getElementById('priority');
  const note = document.getElementById('notes');
  const listToAddTasks = listId; // this is to compare selected project  to add tasks
  if (listToAddTasks === listId) {
    const newTask = CreateTask(
      titleInput.value,
      priority.checked,
      formatedDate,
      note.value,
    );
    listFound = listsToshow.find((list) => list.id === listId);
    listFound.tasks.push(newTask);
    listFiltered = CreateList('', listFound.tasks[listFound.tasks.length - 1]);
    console.log(listFiltered);
  }
};

const mainSection = (listToshow) => {
  displayList(listToshow);
  displayListWithTasks(listToshow);

  let idProjectToShow;
  let projectToshow;
  document.addEventListener('click', (e) => {
    if (e.target.matches('.tittleProject')) {
      idProjectToShow = e.target.parentNode.getAttribute('data-id');
      divToShowList.firstElementChild.remove();
      projectToshow = listsToshow.find((element) => element.id === idProjectToShow);
      console.log(idProjectToShow);
      console.log(projectToshow);
      displayList(projectToshow);
      // addTasksToList(idProjectToShow);
      displayListWithTasks(projectToshow);
    } else if (e.target.matches('.newTaskBtn')) {
      e.preventDefault();
      console.log(idProjectToShow);
      addTasksToList(idProjectToShow);
      displayListWithTasks(projectToshow);
    }
  });
};

// 1 I need to solve how to add new task to selected project in main section

export default mainSection;
