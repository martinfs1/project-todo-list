import { format, addMinutes } from 'date-fns';
import { CreateList, CreateTask } from '../model/createListsAndTasks';

const listToshowDiv = document.getElementById('default-selectedList');

const displayListWithTasks = (arrayLists) => {
  const taskForm = document.getElementById('taskForm');
  let taskToShow;

  const cardList = `
  <div class="list" data-id=${arrayLists.id}>
  <h2 id='h2Main'>Title:${arrayLists.title}</h2>
  </div>
  `;
  listToshowDiv.innerHTML += cardList;

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

  const addTasksToList = (listId) => {
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
      // listFound = listsToshow.find((list) => list.id === listId);
      listFound.tasks.push(newTask);
      listFiltered = CreateList('', listFound.tasks[listFound.tasks.length - 1]);
      console.log(listFiltered);
    }
    showTasksOnList(listFiltered);
  };

  taskForm.addEventListener('click', (e) => {
    if (e.target.matches('.newTaskBtn')) {
      e.preventDefault();
      addTasksToList(arrayLists.id);
    }
  });
};

const mainSection = (listToshow) => {
  displayListWithTasks(listToshow);
};

// I need to solve the task of add new task to selected project in main section

export default mainSection;
