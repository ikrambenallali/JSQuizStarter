
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