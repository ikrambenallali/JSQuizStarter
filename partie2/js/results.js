import { getItem, setItem } from "./storage.js";

export function saveResult(username, category, score, answers) {
  const results = getItem("results") || [];
  results.push({
    username,
    category,
    score,
    answers,
    date: new Date().toISOString()
  });
  setItem("results", results);
}
