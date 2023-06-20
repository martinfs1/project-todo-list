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
      <div class="task" data-id=${element.id}>${element.title}
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
    const date = document.getElementById('date');
    const priority = document.getElementById('piority');
    console.log(priority.value);
    console.log(date.value);
    const listToAddTasks = listId; // this is to compare selected project  to add tasks
    if (listToAddTasks === listId) {
      const task = CreateTask(titleInput.value, true, date.value);
      const listFound = listsToshow.find((list) => list.id === listId);
      listFound.tasks.push(task);

      const taskDiv = document.createElement('div');
      taskDiv.setAttribute('class', 'task');
      taskDiv.setAttribute('data-id', `${task.id}`);
      taskDiv.textContent = `${task.title}`;
      listToshowDiv.firstElementChild.appendChild(taskDiv);
    }
  };

  taskForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.newTaskBtn')) {
      addTasksToList(arrayLists.id);
    }
  });
};

const mainSection = (listToshow) => {
  displayListWithTasks(listToshow);
};

export default mainSection;
