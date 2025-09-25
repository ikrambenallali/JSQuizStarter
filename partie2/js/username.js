// import { setUsername, getUsername } from "./storage.js";
import { setItem, getItem } from "./storage.js";

const input = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    const username = input.value;
    setItem("username", username);
    console.log("Nom d'utilisateur stocké :", getItem("username"));
});