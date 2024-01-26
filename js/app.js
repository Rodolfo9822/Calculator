const field = document.querySelector("#field");
const buttons = document.querySelector("#buttons");
const makeOperation = document.querySelector("#makeOperation");
const remove = document.querySelector("#remove");
const outcomeTable = document.querySelector(".outcome__table");

let operation = "";
field.value = operation;

buttons.addEventListener("click", evt => {
    if (evt.target.classList.contains("button__style")) {
        operation = operation + evt.target.getAttribute("name");
        field.value = operation;
    }
})

makeOperation.addEventListener("click", () => {
    if (operation !== undefined && operation !== "") {

        try {
            const li = document.createElement("li");
            li.textContent = `The Operation ${operation} = ${eval(operation)}`;
            li.classList.add("outcome__result");
            outcomeTable.appendChild(li);
            field.value = "";
            operation = "";
        } catch (error) {
            field.value = "Error!!!"
            field.classList.add("calculator__text_Error");
            setTimeout(() => {
                field.classList.remove("calculator__text_Error");
                field.value = "";
                operation = "";
            }, 700);
        }
    }
})

remove.addEventListener("click", () => {
    if (operation !== undefined && operation !== "") {
        operation = operation.slice(0, operation.length - 1)
        field.value = operation;
    }
})



