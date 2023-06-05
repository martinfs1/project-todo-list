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

const CreateLists = (title) => {
  const id = crypto.randomUUID();
  const info = () => {
    console.log(`List: ${title}`);
  };
  return { title, info, id };
};

export {
  CreateTasks,
  CreateLists,
};
