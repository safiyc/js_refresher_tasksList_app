var userInput = prompt("Please input 'new', 'delete', 'list', or 'quit'.")

var tasks = [];

while(userInput !== 'quit') {
  if(userInput === 'list') {
    tasks.forEach(function(task, index) {
      console.log(index + ": " + task);
    });
  } else if(userInput === "new") {
    var newTask = prompt("Enter a new task.");
    tasks.push(newTask);
    console.log(newTask + " added to list");
  } else if(userInput === "delete"){
    var index = prompt("Enter an index of tasks");
    tasks.splice(index, 1);
    console.log('The task has been removed.')
  }
  userInput = prompt("Please input 'new', 'delete', 'list', or 'quit'.")
}
