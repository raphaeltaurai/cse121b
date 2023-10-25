export async function getArticles() {
  try {
    const response = await fetch("articles.json");
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}