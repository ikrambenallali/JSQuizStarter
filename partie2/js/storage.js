// export function setUsername(name) {
//     localStorage.setItem("username", name);
// }

// export function getUsername() {
//     return localStorage.getItem("username");
// }
// export function setCategory(category) {
//     localStorage.setItem("excludeCategory", category);
// }

// export function getCategory() {
//     return localStorage.getItem("excludeCategory");
// }
// export function setUserAnswers(answers) {
//     localStorage.setItem("UserAnswers", JSON.stringify(answers));
// }

// export function getUserAnswers() {
//     return JSON.parse(localStorage.getItem("UserAnswers")) || [];
// }
// export function setScore(score) {
//     localStorage.setItem("score", score);
// }
// export function getScore() {
//     return parseInt(localStorage.getItem("score")) || 0;
// }
export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
    try{
      const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
    }catch(error){
      console.error("Error getting item from localStorage", error);
      return null;
    }
 
}