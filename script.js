import { showBar } from "./essentials.js";

const addBtn = document.body.querySelector("#add-btn");

addBtn.addEventListener("click", ()=>{
    showBar("#add-task-bar", "block");
});
document.body.querySelector("#body").addEventListener("click", (e) => {

    if (!(e.target.closest("#add-task-bar"))){
        showBar("#add-task-bar", "none");
    }  
});
