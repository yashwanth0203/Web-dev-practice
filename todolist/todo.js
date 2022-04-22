let input=prompt("What would you like to do?");
const todos=["Watch a movie"];

while(input!=="quit" && input!=="quit"){
    if(input==="list"){
        console.log("****************");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log("****************");
    }
    else if(input==="new"){
        const newToDo=prompt("Ok,what is the new todo?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list.`);
    }
    else if(input==="delete"){
        const index=prompt("Ok,Enter the index of todo you want to delete?");
        const deleted=todos.splice(index,1);
        console.log(`Deleted ${deleted[0]}`);
    }
    input=prompt("What would you like to do?");
}
console.log("YOU QUIT THE APP");
