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
  

  // Change code above this line
}

makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
makeTask({ category: "Finance", text: "Take interest" })