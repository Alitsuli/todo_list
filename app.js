//valitsimet eli selectors
const todoSyotto = document.querySelector(".todo-syotto");
const todoNappi = document.querySelector(".todo-nappi");
const todoLista = document.querySelector(".todo-lista");
const filteriVaihtoehto = document.querySelector(".suodata-todo");

// lisää nappi toiminta
todoNappi.addEventListener("click", function(event){
    //poista turhat eventit eli estää lomakkeen lähettämisen tässä tapauksessa
    event.preventDefault();

    // luo Todo div
    const todoDiv = document.createElement("div"); //luo dev elementti
    todoDiv.classList.add("todo"); //antaa nimen classille

    //luo Li
    const newTodoLi = document.createElement("li"); //luo li elementti
    newTodoLi.innerText = todoSyotto.value;
    newTodoLi.classList.add("todo-item"); //antaa nimen classille
    todoDiv.appendChild(newTodoLi); //lisää

    // tarkistus nappi
    const tehtyNappi = document.createElement("button");
    tehtyNappi.innerHTML = '<i class="fas fa-check"></li>';
    tehtyNappi.classList.add("tehty-nap");
    todoDiv.appendChild(tehtyNappi);

    // poista nappi
    const poistaNappi = document.createElement("button");
    poistaNappi.innerHTML = '<i class="fas fa-trash"></li>';
    poistaNappi.classList.add("poista-nap");
    todoDiv.appendChild(poistaNappi);

    // lisää kaikki listaan
    todoLista.appendChild(todoDiv);

    //tyhjentää teksti kenttä
    todoSyotto.value = "";
});

// poista nappi ja tehty nappi toiminta
todoLista.addEventListener("click", function(e){
    const kohde = e.target;
    // poista todo
    if(kohde.classList[0] === "poista-nap"){
        const todo = kohde.parentElement;
        //animatio tehty
        todo.classList.add("putoa");
        // kun transistion loppuu poista sen kokonaan
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //tehty nappi
    if(kohde.classList[0] === "tehty-nap"){
        const todo = kohde.parentElement;
        todo.classList.toggle("tehty");
    }
});

// suodatimen toiminta
filteriVaihtoehto.addEventListener("click", function(e){
    const todos = todoLista.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "kaikki":
                todo.style.display = "flex";
                break;
            case "tehty":
                if(todo.classList.contains("tehty")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "tekematta":
                if(!todo.classList.contains("tehty")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
});

