import { showBar } from "./essentials.js";

const addBtn = document.body.querySelector("#add-btn");

addBtn.addEventListener("click", ()=>{
    showBar("#add-task-bar");
});
