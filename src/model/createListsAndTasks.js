import { format } from 'date-fns';

const CreateTask = (title, priority, date = format(new Date(), 'dd-MM-yyyy'), note = 'empty', edit = false, done = false) => {
  const id = crypto.randomUUID();
  const info = () => {
    console.log(`
      Task:${title}
      Priority:${priority}
      Date:${date}
      Note:${note}
      Done?:${done}
      Do you want edit the task?:${edit}
      `);
  };
  return {
    title, priority, date, note, info, done, edit, id,
  };
};

const CreateList = (title, ...tasks) => {
  const id = crypto.randomUUID();
  const info = () => {
    console.log(`List: ${title}`);
  };
  return {
    title, info, id, tasks,
  };
};
const task1 = CreateTask('buy butter', true);
const task2 = CreateTask('buy usd', true);
const task3 = CreateTask('buy btc', true);

const defaultProject = CreateList('My day', task1, task2, task3);
console.log(defaultProject);

export {
  defaultProject,
  CreateTask,
  CreateList,
};
