console.log("Hello World");
let input = document.querySelector("#input");
let MainTodo = document.querySelector("#maintodo");

// this code is get a input value in javascript
input.addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        console.log(event)
        AddTodos(event.target.value)
        event.target.value = ""
    }
})
// and this code add a todos in our list
const AddTodos = (item)=>{
    let createLI = document.createElement("li");
    createLI.innerHTML = `
    ${item}
    `;
    localStorage.setItem("Todos", JSON.stringify(item))
    MainTodo.append(createLI)
}
// AND FINALLY WE DONE A GOOD TODOS APP