const CreateTasks = (title, priority, date, edit = false, done = false, note = 'empty') => {
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

const task = CreateTasks('buy milk', true, 'today', true, true, 'No perder el tiempo');
task.info();

const CreateLists = (title) => {
  const info = () => {
    console.log(`List: ${title}`);
  };
  return { title, info };
};

const lista1 = CreateLists('Shopping List');
lista1.info();

export {
  CreateTasks,
  CreateLists,
};
