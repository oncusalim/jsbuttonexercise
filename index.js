
        const todoList = [];
        const liste = document.querySelector("#list");
        const listEvent = document.querySelector("#btn");
        listEvent.addEventListener("click", eventGonder);

        function eventGonder() {
            const data = document.querySelector("#inp");
            const dizi =
            {
                id: todoList.length,
                todo: data.value,
                check: false
            }
                ;
            todoList.push(dizi);
            console.log(todoList);
            listele();
            data.value="";
           

        }

        function listele() {
            liste.innerHTML = "";
            todoList.forEach(value => {
                const x = document.createElement("li");
                x.innerHTML = value.todo;
                x.setAttribute("id", value.id);
                x.addEventListener("click", function(e){
                    e.target.setAttribute("class", "check");
                    const secili = todoList.findIndex(y => y.id ==e.target.id)
                    todoList[secili].check = true;
                });
                if (value.check == true) x.setAttribute("class", "check");
                liste.append(x);
            });

        }
     

        

   