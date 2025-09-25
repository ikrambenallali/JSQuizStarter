import { setUsername, getUsername } from "./storage.js";

const input = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    const username = input.value;
    setUsername(username);
    console.log("Nom d'utilisateur stocké :", getUsername());
});