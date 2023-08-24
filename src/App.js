import React, { useState } from "react";
import "./App.css";

const articles = [
  {
    id: 1,
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "Getting Started with React",
    content: "To start using React, you need to create a new React app.",
  },
  {
    id: 3,
    title: "What is programming",
    content:
      "Programming refers to a technological process for telling a computer which tasks to perform in order to solve problems. ",
  },
  {
    id: 4,
    title: "What is Java",
    content:
      "Java is a widely-used programming language for coding web applications",
  },
  // Add more articles here
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Keyword Search App</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-results">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article">
              <h2>{highlightText(article.title, searchTerm)}</h2>
              <p>{highlightText(article.content, searchTerm)}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
