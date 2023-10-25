import { getArticles } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const topicFilter = document.getElementById("topic-filter");
  const articlesContainer = document.getElementById("articles-container");
  
  topicFilter.addEventListener("change", () => {
    const selectedTopic = topicFilter.value;
    displayArticles(selectedTopic);
  });
  
  function displayArticles(topic) {
    articlesContainer.innerHTML = ""; // Clear previous articles
    
    getArticles().then(articles => {
      const filteredArticles = topic === "all" ? articles : articles.filter(article => article.topic === topic);
      
      filteredArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <hr>
        `;
        articlesContainer.appendChild(articleElement);
      });
    });
  }
  
  displayArticles("all"); // Show all articles by default
});