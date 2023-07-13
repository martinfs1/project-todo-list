import { format, addMinutes } from 'date-fns';
import { CreateTask } from '../model/createListsAndTasks';
import { listsToshow } from './listsSection';

const divToShowList = document.getElementById('default-selectedList');
let titleInput;
let dateInputValue;
let priority;
let note;

let btnTaskToRemove;

const addTasksToList = (listId) => {
  let listFound;

  titleInput = document.getElementById('titleTask');
  dateInputValue = document.getElementById('date').value;
  const date = addMinutes(new Date(dateInputValue), new Date().getTimezoneOffset());
  const formatedDate = format(date, 'dd-MM-yyyy');
  priority = document.getElementById('priority');
  note = document.getElementById('notes');
  const listToAddTasks = listId;
  if ((titleInput) && listToAddTasks === listId) {
    const newTask = CreateTask(
      titleInput.value,
      priority.checked,
      formatedDate,
      note.value,
    );

    listFound = listsToshow.find((list) => list.id === listId);
    listFound.tasks.push(newTask);
  }
};

const resetInputs = () => {
  const taskForm = document.getElementById('taskForm');
  taskForm.reset();
};

const displayList = (listToshow) => {
  const cardList = `
  <div class="list" data-id=${listToshow.id}>
  <h2 id='h2Main'>Title:${listToshow.title}</h2>    
  </div>
  `;
  divToShowList.innerHTML += cardList;
};

const displayListWithTasks = (arrayTasks) => {
  const tasksContainer = document.createElement('div');

  arrayTasks.tasks.forEach((element) => {
    const taskToHTML = `
    <div class="task" data-id=${element.id}>
    <h3>${element.title}</h3>
    <p>${element.priority}</p>
    <p>${element.date}</p>
    <button class="removeTask-btn" type="button" data-id=${element.id}>Remove</button>
    </div>
    `;
    tasksContainer.insertAdjacentHTML('beforeend', taskToHTML);
  });

  const h2ToAddTasks = document.getElementById('h2Main');
  const existingTasks = h2ToAddTasks.nextElementSibling;

  if (existingTasks) {
    existingTasks.remove();
  }
  h2ToAddTasks.insertAdjacentElement('afterend', tasksContainer);
};

const removeTask = () => {
  // btnTaskToRemove.remove();
  console.log(listsToshow.tasks);
  // listsToshow.tasks.forEach((list, i) => {
  //   if (list.id === btnTaskToRemove.dataset.id) { listsToshow.splice(i, 1); }
  // });
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
      displayList(projectToshow);
      displayListWithTasks(projectToshow);
    } else if (e.target.matches('.newTaskBtn')) {
      e.preventDefault();
      idProjectToShow = divToShowList.firstElementChild.getAttribute('data-id');
      projectToshow = listsToshow.find((element) => element.id === idProjectToShow);
      addTasksToList(projectToshow.id);
      displayListWithTasks(projectToshow);
      resetInputs();
    } else if (e.target.matches('.remove-btn')) {
      divToShowList.firstElementChild.remove();
      displayList(listToshow);
      displayListWithTasks(listToshow);
    } else if (e.target.matches('.removeTask-btn')) {
      btnTaskToRemove = e.target.parentNode;
      console.log(btnTaskToRemove);
      removeTask();
    }
  });
};

export { mainSection, resetInputs };
