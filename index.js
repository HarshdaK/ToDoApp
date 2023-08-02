const addTaskBtnObj = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("txtBoxContainer");

addTaskBtnObj.addEventListener("click",function(){

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    let txtBox = document.createElement("input");
    txtBox.type = "text";
    txtBox.placeholder = "Add your task here"
    txtBox.id = "textdata"

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#10006";

    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(txtBox);
    taskContainer.appendChild(deleteBtn);

    let newLine = document.createElement("br");
    taskContainer.appendChild(newLine);


    checkBox.addEventListener("click",function(){

        if(txtBox.value.length==0){  
            checkBox.checked=false;
            
        } 



        if(txtBox.value.length>0 && checkBox.checked==true){
            txtBox.style.textDecoration = "line-through";
            txtBox.disabled=true;
        }

        else if(txtBox.value.length>0 && checkBox.checked==false){
            txtBox.style.textDecoration = "none";
            txtBox.disabled=false;

        }

               

    })

    deleteBtn.addEventListener("click",function(){
        taskContainer.removeChild(txtBox);
        taskContainer.removeChild(checkBox);
        taskContainer.removeChild(deleteBtn);
        taskContainer.removeChild(newLine);
    })

})