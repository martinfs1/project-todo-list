import { format, addMinutes } from 'date-fns';
import { CreateTask } from '../model/createListsAndTasks';
import { listsToshow } from './listsSection';

const displayListWithTasks = (arrayLists) => {
  console.log(arrayLists);
  const listToshowDiv = document.getElementById('default-selectedList');
  const taskForm = document.getElementById('taskForm');
  let taskToShow;

  const cardList = `
  <div class="list" data-id=${arrayLists.id}>
  <h2 id='h2Main'>Title:${arrayLists.title}</h2>       
  </div>
  `;
  listToshowDiv.innerHTML += cardList;

  const showTasksOnList = (arrayTasks) => {
    console.log(arrayTasks.tasks);
    arrayTasks.tasks.forEach((element) => {
      taskToShow = `
      <div class="task" data-id=${element.id}>
      <h3>${element.title}</h3>
      <p>${element.priority}</p>
      <p>${element.date}</p>
      </div>      
      `;
      const h2ToAddTasks = document.getElementById('h2Main');
      console.log(h2ToAddTasks);
      h2ToAddTasks.parentNode.innerHTML += taskToShow;
    });
  };
  showTasksOnList(arrayLists);

  const addTasksToList = (listId) => {
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

      const listFound = listsToshow.find((list) => list.id === listId);
      listFound.tasks.push(newTask);
      console.log(listFound);
      const listFiltered = listFound.tasks.filter((taskToFilter) => taskToFilter.id === newTask.id);
      console.log(listFiltered);
      showTasksOnList(listFiltered);
    }
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

export default mainSection;
