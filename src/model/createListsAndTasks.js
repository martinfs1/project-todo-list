const CreateTask = (title, priority, date, edit = false, done = false, note = 'empty') => {
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
    title, priority, date, note, info, done, edit,
  };
};

const CreateList = (title, ...task) => {
  const id = crypto.randomUUID();
  const info = () => {
    console.log(`List: ${title}`);
  };
  return {
    title, info, id, task,
  };
};
const task1 = CreateTask('buy butter', true, 'hoy');
const task2 = CreateTask('buy usd', true, 'hoy');
const task3 = CreateTask('buy btc', true, 'hoy');

// I need to connect form for create new task on list defaul or other project!

const defaultProject = CreateList('My day', task1, task2, task3);
console.log(defaultProject);

export {
  defaultProject,
  CreateTask,
  CreateList,
};
