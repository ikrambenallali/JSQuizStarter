// username 
const input = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
    const username = input.value;
    localStorage.setItem("username", username);
    console.log("Nom d'utilisateur stocké :", localStorage.getItem("username"));
});