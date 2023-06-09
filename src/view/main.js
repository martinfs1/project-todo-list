import { listsToshow } from './listsSection';

const defaultSelectedListDiv = document.getElementById('default-selectedList');
let cardList;

const formTask = () => {
  console.log('from formtask');
};

const Main = () => {
  console.log(defaultSelectedListDiv);

  const displayList = (array) => {
    cardList = `
      <div class="list" data-id=${array.id}>
      <h2 id='h2Main'>Title:${array.title}</h2>       
      </div>
      `;
    defaultSelectedListDiv.innerHTML += cardList;
    array.task.forEach((element) => {
      const divToShowTasks = document.getElementById('h2Main');
      const taskToShow = `
      <div class="task" data-id=${element.id}>${element.title}
      </div>      
      `;
      divToShowTasks.innerHTML += taskToShow;
      console.log(element);
    });
  };

  displayList(listsToshow[0]);
};
// I need to solve how to iterate to show tasks

export {
  Main, formTask,
};
