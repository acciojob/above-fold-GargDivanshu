import React, { useState, useEffect } from "react";
import './../styles/App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const clientHeight = document.documentElement.clientHeight;
      // Trigger loading more items near the bottom of the page
      if (scrollTop + clientHeight >= offsetHeight - 100 && !isLoading) { // A threshold like 100px before the bottom
        setIsLoading(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        );
        const data = await response.json();
        setItems((prevItems) => [...prevItems, ...data]);
        setIsLoading(false); // Ensure this is set to false after data is fetched
        setPage((prevPage) => prevPage + 1);
      };

      fetchData();
    }
  }, [isLoading, page]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.thumbnailUrl} alt={item.title} />
        </div>
      ))}
      {isLoading && <p className="loadmore">Loading more items...</p>} {/* Use className instead of class */}
    </div>
  );
}

export default App;
