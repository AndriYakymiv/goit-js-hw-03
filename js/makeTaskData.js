function makeTask(data) {
  const completed = false;
  const category = "General";
    const priority = "Normal";

     const newTask = {
    category,
    priority,
    completed,
  }

    const finalTask = { ...newTask, ...data,  }
    
    console.log(finalTask)

  return finalTask
  


}
